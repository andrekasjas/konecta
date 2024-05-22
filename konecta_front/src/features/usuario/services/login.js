import { sendRequest } from "../../../utils";

export const login = async (data) => {
  const url = `auth/login`;
  const dataSendRequest = {
    endpoint: url,
    method: 'POST',
    body: data
  }
  return sendRequest(dataSendRequest);
}