const User = require("../models/userModel");
const { search } = require("../routes/userRoute");

//Create a new user.

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, gender, avatar, domain, available } =
      req.body;

    // Users count
    const usersCount = await User.find().countDocuments();

    // Find email if exist
    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res
        .status(409)
        .json({ status: "failed", message: "Email Already Exist" });
    }

    const userData = new User({
      id: usersCount + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      avatar: avatar,
      domain: domain,
      available: available,
    });

    const userDataSaved = await userData.save();

    if (userDataSaved) {
      return res.status(201).json({ status: "success", data: userDataSaved });
    } else {
      return res
        .status(404)
        .json({ status: "failed", message: "Data not saved" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

//Retrieve a specific user by ID.

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by email
    const userData = await User.findOne({ id: id });

    if (userData) {
      return res.status(200).json({ status: "success", data: userData });
    } else {
      return res
        .status(404)
        .json({ status: "failed", message: "User not exist" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Retrieve all users with pagination support & filter.

const getAllUser = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = 20;
    const { domain, gender, available, search } = req.query; // Assuming you have parameters parameter1 and parameter2

    const filter = {};

    if (domain) {
      filter.domain = { $regex: domain, $options: "i" }; // Case-insensitive regex match for domain
    }

    if (gender) {
      filter.gender = { $regex: gender, $options: "i" }; // Case-insensitive regex match for gender
    }

    if (available) {
      filter.available = available;
    }

    if (search) {
      const searchRegex = new RegExp(search, "i");
      filter.$or = [
        { first_name: { $regex: searchRegex } },
        { last_name: { $regex: searchRegex } },
      ];
    }

    const userData = await User.find(filter)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
    const userDataCount = await User.find(filter).countDocuments();

    return res
      .status(200)
      .json({ status: "success", data: userData, count: userDataCount });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Retrieve all users without pagination support & filter.

const getAllUserDetails = async (req, res) => {
  try {
    const userData = await User.find();

    return res.status(200).json({ status: "success", data: userData });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Update an existing user.

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, gender, avatar, domain, available } =
      req.body;

    // Find the user by email
    const userUpdatedData = await User.findOneAndUpdate(
      { id: id },
      {
        $set: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          gender: gender,
          avatar: avatar,
          domain: domain,
          available: available,
        },
      },
      { new: true }
    );

    if (userUpdatedData) {
      return res.status(201).json({ status: "success", data: userUpdatedData });
    } else {
      return res
        .status(404)
        .json({ status: "failed", message: "User updation failed" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Delete a use

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await User.findOneAndDelete({ id: id });

    if (userData) {
      return res.status(201).json({ status: "success", data: userData });
    } else {
      return res
        .status(404)
        .json({ status: "failed", message: "User deletion failed" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUser,
  getAllUserDetails,
  updateUser,
  deleteUser,
};
