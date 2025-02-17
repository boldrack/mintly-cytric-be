import {Request, Response} from "express";
import NFT from "../models/NFT";

export async function storeNFTData (req: Request, res: Response) {
  try {
    const { id, name, description, logo, owner } = req.body;
    const newNFTData = new NFT({
      id, name, description, logo, owner
    });
    await newNFTData.save();
    res.status(201).json(newNFTData);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: "There was an error creating your NFT data" });
  }
}

export async function getNFTData (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const nftData = await NFT.findOne({ id }).exec();
    console.log('nftdata; ', nftData);
    res.status(200).json(nftData);
  } catch (error) {
    console.error('Error occured retrieving nft data');
    res.status(400).json({ message: "Error retrieving NFT with that Id" });
  }
}

export async function getNFTGallery (req: Request, res: Response) {
  try {
    const { owner } = req.params;
    const nftsData = await NFT.find({ owner }).sort({_id: -1}).exec();
    console.log('nftdata; ', nftsData);
    res.status(200).json(nftsData);
  } catch (error) {
    console.error('Error occured retrieving nft data');
    res.status(400).json({ message: "Error retrieving NFT with that Id" });
  }
}
