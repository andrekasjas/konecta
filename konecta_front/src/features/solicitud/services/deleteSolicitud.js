import { sendRequest } from "../../../utils";

export const deleteSolicitud = async (id) => {
  const url = `solicitudes/${id}`;
  const dataSendRequest = {
    endpoint: url,
    method: 'DELETE'
  }
  return sendRequest(dataSendRequest);
}