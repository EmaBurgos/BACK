import { v4 as uuidv4 } from "uuid";

const generarId = () => {
  const id = uuidv4();
  return id;
};

export default generarId;
