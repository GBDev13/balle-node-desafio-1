import { Router } from "express";
import { GeneratePassController } from "./modules/generatePass/GeneratePassController";

const router = Router();

const generatePassController = new GeneratePassController();

router.post("/generatePass", generatePassController.handle);

export { router };
