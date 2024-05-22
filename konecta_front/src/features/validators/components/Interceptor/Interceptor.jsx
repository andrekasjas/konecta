import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../form/components";
import { Loader, Modal, SelfDestructComponent } from "../../../ui/components";
import { usePopup, useAuth } from "../../../../hook";

export function Interceptor({ children }) {

  const { authInformation, handlerLogout } = useAuth();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isRequest, setIsRequest] = useState(false);
  const { show, open, close } = usePopup();

  const handleResponseError = async (error) => {
    if (!error.response) {
      setMessage(error.message);
      throw error.message;
    }
    const { message } = error.response.data;
    if (error.response.status === 401 && authInformation.isAuth) {
      open();
    }
    setMessage(message || error.message);
    throw message || error.message;
  };

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((request) => {
      setLoading(true);
      setIsRequest(true);
      setMessage(null);
      if (authInformation.isAuth) {
        request.headers['Authorization'] = `Bearer ${authInformation.token}`;
      }
      return request;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      async (error) => {
        setLoading(false);
        return await handleResponseError(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [authInformation.token]);


  const closeModal = async () => {
    close();
    handlerLogout();
  };

  return (
    <>
      {isRequest && message &&
        <SelfDestructComponent seconds={2}>
          <div className='fixed flex justify-center items-center gap-2 z-50 bg-white p-2 rounded-lg shadow-lg'>
            <FontAwesomeIcon icon={faInfoCircle} size='2x' color='red' /> {message}
          </div>
        </SelfDestructComponent>
      }
      {isRequest && !loading && !message &&
        <SelfDestructComponent seconds={1}>
          <div className='fixed flex justify-center items-center gap-2 z-50 bg-white p-2 rounded-lg shadow-lg'>
            <FontAwesomeIcon icon={faCheckCircle} size='2x' color='green' /> Petición exitosa
          </div>
        </SelfDestructComponent>
      }
      {children}
      <Modal isOpen={show} onClose={closeModal}>
        Su sesión ha expirado
        <Button color='primary' variant='shadow' onClick={closeModal}>Aceptar</Button>
      </Modal>
    </>
  );
}