import { sendRequest } from "../../../utils";

export const getAllEmpleado = async ({limit, offset,salarioMin, salarioMax, filter}) => {

  let url = `empleados?limit=${limit}&offset=${offset}`;
  if(salarioMin && salarioMax){
    url += `&salarioMin=${salarioMin}&salarioMax=${salarioMax}`;
  }

  if(filter){
    url += `&filter=${filter}`;
  }

  const dataSendRequest = {
    endpoint: url
  }
  return sendRequest(dataSendRequest);
}