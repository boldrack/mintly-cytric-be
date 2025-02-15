import mongoose from "mongoose";

async function connectDatabase (): Promise<void> {
  try {
    const connectionString = process.env.MONGO_CONNECTION_URI as string;
    console.log('Connecting database -> ', connectionString);
    const connection = await mongoose.connect(connectionString);
  } catch (error) {
    const errorMessage = (error as Error).message
    console.error(`Error occured during DB connection: -> ${errorMessage}`);
    process.exit(1);
  }
}

export default connectDatabase;
