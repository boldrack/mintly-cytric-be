import express from "express";
import { storeNFTData, getNFTData, getNFTGallery } from "../controllers/nftController";

const router = express.Router();

router.post("/storeNFTData", storeNFTData );
router.get("/getNFTData/:id", getNFTData );
router.get("/getNFTGallery/:owner", getNFTGallery );

export default router;
