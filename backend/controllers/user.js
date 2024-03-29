import User from "../models/User.js";
import { createError } from "../utils/error/errorHandler.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    next(createError(401, "Error updating user info."));
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
};

export const retrieveUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(createError(401, "Failed to find especific user"));
  }
};

export const retrieveUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(createError(401, "Failed to find users"));
  }
};
