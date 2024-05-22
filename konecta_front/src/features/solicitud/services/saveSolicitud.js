import { sendRequest } from "../../../utils";

export const saveSolicitud = async (data) => {
  const url = `solicitudes`;
  const dataSendRequest = {
    endpoint: url,
    method: 'POST',
    body: data
  }
  return sendRequest(dataSendRequest);
}