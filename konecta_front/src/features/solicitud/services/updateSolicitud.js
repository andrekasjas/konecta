import { sendRequest } from "../../../utils";

export const updateSolicitud = async (id, data) => {
  const url = `solicitudes/${id}`;
  const dataSendRequest = {
    endpoint: url,
    method: 'PUT',
    body: data
  }
  return sendRequest(dataSendRequest);
}