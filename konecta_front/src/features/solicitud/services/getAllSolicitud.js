import { sendRequest } from "../../../utils";

export const getAllSolicitud = async ({limit, offset, filter}) => {

  let url = `solicitudes?limit=${limit}&offset=${offset}`;

  if(filter){
    url += `&filter=${filter}`;
  }

  const dataSendRequest = {
    endpoint: url
  }
  return sendRequest(dataSendRequest);
}