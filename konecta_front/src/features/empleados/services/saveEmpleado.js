import { sendRequest } from "../../../utils";

export const saveEmpleado = async (data) => {
  const url = `empleados`;
  const dataSendRequest = {
    endpoint: url,
    method: 'POST',
    body: data
  }
  return sendRequest(dataSendRequest);
}