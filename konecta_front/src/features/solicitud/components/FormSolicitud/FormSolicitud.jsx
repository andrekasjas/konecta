import React from 'react'
import { useForm, usePopup } from '../../../../hook';
import { Button, Confirm, Input } from '../../../form/components';
import { ListEmpleado } from '../../../empleados/components';
import { saveSolicitud } from '../../services/saveSolicitud';
import { updateSolicitud } from '../../services/updateSolicitud';

export const FormSolicitud = ({ solicitud, onSuccess }) => {

  const initialState = {
    codigo: solicitud?.codigo || '',
    descripcion: solicitud?.descripcion || '',
    resumen: solicitud?.resumen || '',
    idEmpleado: solicitud?.idEmpleado || 0
  }

  const serviceSaveSolicitud = async () => {
    await saveSolicitud(form)
  }

  const serviceUpdateSolicitud = async () => {
    await updateSolicitud(solicitud.id, {
      ...form,
      idEmpleado: form.idEmpleado.toString()
    })
  }

  const handleConfirm = async () => {
    try {
      if (solicitud) {
        await serviceUpdateSolicitud();
      } else {
        await serviceSaveSolicitud();
      }
      onSuccess();
    } finally {
      closeModal();
    }
  }

  const { isOpen, openModal, closeModal } = usePopup();
  const { form, handleSubmit, handleChange, changeValueForm } = useForm({
    initialState,
    submitCallback: (form) => {
      if (form.idEmpleado === 0) {
        alert('Debe seleccionar un empleado');
        return;
      }
      openModal()
    }
  });

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input
          id="codigo"
          name="codigo"
          label={'Código'}
          value={form.codigo}
          onChange={handleChange}
          placeholder="Código"
        />
        <Input
          id="descripcion"
          name="descripcion"
          label={'Descripción'}
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <Input
          id="resumen"
          name="resumen"
          label={'Resumen'}
          value={form.resumen}
          onChange={handleChange}
          placeholder="Resumen"
        />
        <ListEmpleado isSelect onSelect={(item) => changeValueForm('idEmpleado', item.id.toString())} defaultSelected={solicitud?.idEmpleado} />
        <Button type="submit" className='mt-4'>Enviar</Button>
      </form>
      <Confirm
        message={'¿Está seguro de guardar la solicitud?'}
        isOpen={isOpen}
        onCancel={closeModal}
        onConfirm={handleConfirm} />
    </section>
  )
}