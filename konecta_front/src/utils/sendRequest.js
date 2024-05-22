import axios from "axios";

export const sendRequest = async ({ endpoint, method = 'GET', body, contentType = 'application/json' }) => {
  const apiRoute = import.meta.env.VITE_API_ROUTE;
  const url = `${apiRoute}/${endpoint}`;

  const headers = {
    'Content-Type': contentType.toString(),
    'Accept': 'application/json',
  };

  const axiosConfig = {
    method,
    url,
    headers,
    data: body,
  };

  console.log('axiosConfig', axiosConfig);
  const response = await axios(axiosConfig);
  console.log('response', response);

  return response;
};