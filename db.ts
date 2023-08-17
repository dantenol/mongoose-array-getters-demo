import mongoose from "mongoose";

// create simple setter to add a sufix
const addSufix = (name: string) => {
  return name + "-sufix";
};

// create simple gettrer to remove last 6 letters (should be "-sufix")
const removeSufix = (name: string) => {
  // console.log(typeof name); // test suggested by @Uzlopak

  return ("" + name).slice(0, -6);
};

// create sample mongoose schema
const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    profession: {
      type: String,
      get: removeSufix,
      set: addSufix,
    },
    hobbies: [{ type: String, get: removeSufix, set: addSufix }],
  },
  {
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

// create mongoose model
const User = mongoose.model("User", userSchema);
export default User;
