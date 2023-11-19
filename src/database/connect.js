import mongoose from "mongoose";

const connect = async () => {
  const url = "mongodb://localhost:27017/amazon";
  try {
    mongoose.connect(url);
    console.log('database connected successfully')
  } catch (error) {
    console.log(error.message);
  }
};

export default connect
