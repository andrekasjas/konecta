import { useState } from "react";
import { Modal } from "../../../ui/components";
import { Button } from "../Button/Button";

export const Confirm = ({ isOpen, message, onConfirm, onCancel }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
    } finally {
      onCancel();
      setIsLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <Modal isOpen onClose={onCancel} isDismissable={!isLoading}>
      <div className="text-center flex flex-col gap-y-4">
        <p>{message}</p>
        <div className="flex gap-x-4">
        <Button onClick={handleConfirm} type="button" id='acept' color='primary' isLoading={isLoading}>
          Aceptar
        </Button>
        <Button onClick={onCancel} type="button" id='cancel' variant='flat' disabled={isLoading}>
          Cancelar
        </Button>
        </div>
      </div>
    </Modal>
  );
}