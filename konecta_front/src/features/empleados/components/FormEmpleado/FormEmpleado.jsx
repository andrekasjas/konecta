import React, { lazy } from 'react'
import { useForm, usePopup } from '../../../../hook';
import { Button, Confirm, Input } from '../../../form/components';
import { ListUser } from '../../../usuario/components';
import { saveEmpleado } from '../../services/saveEmpleado';

const initialState = {
  fechaIngreso: '',
  nombre: '',
  salario: '',
  idUsuario: 0,
};

export const FormEmpleado = ({onSucces}) => {

  const serviceSaveEmpleado = async () => {
    await saveEmpleado(form)
      .then(() => {
        onSucces();
      })
  }

  const { isOpen, openModal, closeModal } = usePopup();
  const { form, handleSubmit, handleChange, changeValueForm } = useForm({
    initialState,
    submitCallback: (form) => {
      if (form.idUsuario === 0) {
        alert('Debe seleccionar un usuario');
        return;
      }
      openModal()
    }
  });

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input
          type="date"
          label={'Fecha de ingreso'}
          required
          className={'mb-2'}
          name="fechaIngreso"
          value={form.fechaIngreso}
          onChange={handleChange}
          placeholder="Fecha de ingreso"
        />
        <Input
          type="text"
          label={'Nombre'}
          required
          className={'mb-2'}
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <Input
          type="text"
          label={'Salario'}
          required
          className={'mb-2'}
          name="salario"
          value={form.salario}
          onChange={handleChange}
          placeholder="Salario"
        />
        <div className='flex flex-col'>
          <p>Usuario<span className='text-red-500'>*</span></p>
          <p className='text-xs text-gray-500'>{
            form.idUsuario == 0 ? 'Seleccione un usuario' : 'Usuario seleccionado'
          }</p>
        </div>
        <ListUser isSelect onSelect={(item) => changeValueForm('idUsuario',item.id.toString()) } />
        <Button type="submit" className='mt-4'>Enviar</Button>
      </form>
      <Confirm 
      message={'¿Está seguro de guardar el empleado?'}
      isOpen={isOpen}
      onCancel={closeModal}
      onConfirm={serviceSaveEmpleado} />
    </section>
  )
}