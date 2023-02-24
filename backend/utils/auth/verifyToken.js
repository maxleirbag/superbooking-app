import jwt from "jsonwebtoken";
import { createError } from "../error/errorHandler.js";

export const verifyToken = (req, res, next) => {
  const token = process.env.ACCESS_TOKEN_SECRET;
  if (!token) return next(createError(401, "You are not authenticated."));
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error(err);
      return next(createError(403, "You don't have enough permission to continue."));
    }
    req.loggedUser = user;
    if (req.originalUrl.toLowerCase().includes("/auth/authenticate/")) {
      return res.send("Authenticated");
    }
    next();
    return;
  });
};

export const verifyUser = (req, res, next) => {
  //verifyToken(req, res, next);
  if (req.originalUrl.toLowerCase().includes("/auth/authorize/")) {
    return;
  } else if (req?.loggedUser?.id === req?.params?.id || req?.loggedUser?.isAdmin) {
    next();
    return;
  } else {
    return next(createError(403, "You are not authorized."));
  }
};

export const verifyAdmin = (req, res, next) => {
  //verifyToken(req, res, next);
  if (req.originalUrl.toLowerCase().includes("/auth/isadmin/") && req.loggedUser.isAdmin) {
    next();
    return;
  } else {
    return next(createError(403, "You are not admin."));
  }
};
