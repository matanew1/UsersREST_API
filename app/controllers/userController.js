exports.createUser = async ({ name, email, password }) => {
  try {
    const user = new User({ name, email, password });
    await user.save();
    return user.toObject();
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) throw new Error('User not found');
    return user.toObject();
  } catch (error) {
    throw new Error('Failed to get user');
  }
};

exports.updateUser = async (id, { name, email, password }) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    if (!user) throw new Error('User not found');
    return user.toObject();
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

exports.deleteUser = async (id) => {
  try {
    const result = await User.findByIdAndDelete(id);
    if (!result) throw new Error('User not found');
    return true;
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};