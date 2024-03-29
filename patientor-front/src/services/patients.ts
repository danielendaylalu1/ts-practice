import axios from "axios";
import { EssentialPatient, PatientFormValues, Patient } from "../types";

import { apiBaseUrl } from "../constants";

const ping = async () => {
  const result = await axios.get(`${apiBaseUrl}/ping`);
  console.log(result);
  return result.data;
};

const getAll = async () => {
  const { data } = await axios.get<EssentialPatient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
};

export default {
  getAll,
  create,
  ping,
};
