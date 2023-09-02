import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  // "strictQuery"选项用于控制Mongoose在执行查询时的严格模式。
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    // 如果运行了就阻止运行
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
