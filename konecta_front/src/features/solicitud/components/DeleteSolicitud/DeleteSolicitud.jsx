import React, { useEffect } from 'react'
import { deleteSolicitud } from '../../services/deleteSolicitud'
import { Confirm } from '../../../form/components'
import { usePopup } from '../../../../hook'

export const DeleteSolicitud = ({id, onCancel, onSuccess}) => {

  const serviceDeleteSolicitud = async () => {
    await deleteSolicitud(id)
      .then(() => {
        handleCancel()
        onSuccess()
      })
  }

  const handleCancel = () => {
    closeModal()
    onCancel()
  }

  const { isOpen, openModal, closeModal } = usePopup()

  useEffect(() => {
    openModal()
  }, [])

  return (
    <Confirm
      message='¿Estás seguro de eliminar la solicitud?'
      isOpen={isOpen}
      onConfirm={serviceDeleteSolicitud}
      onCancel={handleCancel}
    />
  )
}