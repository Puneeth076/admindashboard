import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("success", () => {
      console.log("Mongodb connection successfuly");
    });
    connection.on("error", (err) => {
      console.log("Mongodb connection Failed" + err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
