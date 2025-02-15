import mongoose, {Document, Schema} from "mongoose";

interface NFT extends Document {
  id: string;
  name: string;
  description: string;
  logo: string;
  owner: string;
}

const nftSchema = new Schema<NFT>({
  id: {type: String, required: true, unique: true},
  name: { type: String, required: true},
  description: { type: String, required: true},
  logo: { type: String },
  owner: {type: String, required: true},
});

export default mongoose.model<NFT>("NFT", nftSchema);


