import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://ema735959:T5DimzYz85hNXGH3@cluster0.nswf7lu.mongodb.net/apv?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`Mongo DB conectado en : ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
