import express from "express";
import patients from "../../data/patients";
import { EssentialPatient } from "../types";

const router = express.Router();

const patientsToSend: EssentialPatient[] = patients.map(
  ({ id, dateOfBirth, name, gender, occupation }) => ({
    id,
    dateOfBirth,
    name,
    gender,
    occupation,
  })
);

router.get("/", (_req, res) => {
  res.send(patientsToSend);
});

export default router;
