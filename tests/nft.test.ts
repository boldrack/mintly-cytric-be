import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";

// setUp
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION_URI as string);
})

// Teardown
afterAll(async () => {
  await mongoose.connection.close();
});

describe("Test GetNFTData endpoint", () => {
  it("missing Id param should fail with 400", async () => {
  });
});
describe("Test storeNFTData endpoint", () => {});
describe("Test GetNFTGallery endpoint", () => {});
