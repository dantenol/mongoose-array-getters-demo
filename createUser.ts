import mongoose from "mongoose";
import User from "./db";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
async function createUser() {
  // connect to local mongodb
  mongoose.set("returnOriginal", false);
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/test");

  // wait for db to be ready
  await delay(1000);


  // create user
  const usr = await User.create({
    name: "John",
    age: 18,
    profession: "teacher",
    hobbies: ["swimming", "football"],
  });
  return usr;
}

export default createUser;
