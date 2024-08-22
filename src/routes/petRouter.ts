import express from 'express';
import PetController from '../controller/PetController';

const router = express.Router();

const petController = new PetController();

router.get("/", petController.listaPets);
router.post("/", petController.criaPet);
router.put("/:id", petController.atualizaPets);
router.delete("/:id", petController.deletaPet);

export default router;