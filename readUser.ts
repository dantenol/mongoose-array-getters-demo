import createUser from "./createUser";
import User from "./db";

const run = async () => {
  const created = await createUser();

  const oneUser = await User.findById(created._id);
  console.log(oneUser?.profession); // "teacher"
  console.log(oneUser?.profession); // "teacher"

  console.log(oneUser?.hobbies); // ["swimming", "football"]
  console.log(oneUser?.hobbies); // ["sw", "fo"]
};

// run npx ts-node readUser.ts
run().then(() => {
  console.log("done");
  process.exit(0);
});
