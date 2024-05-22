import { sendRequest } from "../../../utils";

export const createUser = async (data) => {
  const url = `usuarios`;
  const dataSendRequest = {
    endpoint: url,
    method: 'POST',
    body: data
  }
  return sendRequest(dataSendRequest);
}