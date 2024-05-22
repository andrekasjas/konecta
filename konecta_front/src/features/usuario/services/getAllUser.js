import { sendRequest } from "../../../utils";

export const getAllUser = async ({ limit, offset }) => {

  const url = `usuarios?limit=${limit}&offset=${offset}`;

  const dataSendRequest = {
    endpoint: url
  }
  return sendRequest(dataSendRequest);
}