import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus'

import { useForm, usePopup } from '../../../../hook'
import { Button, Confirm, Input, Select } from '../../../form/components'
import { ROLES } from '../../constants/rol'
import { Link } from 'react-router-dom'
import { createUser } from '../../services/createUser'

import { useNavigate } from 'react-router-dom';


const initialState = {
  userName: '',
  email: '',
  password: '',
  rol: ''
}

export const CreateUser = () => {

  const navigate = useNavigate();

  const serviceCreateUser = async () => {
    await createUser(form)
      .then(() => {
        navigate('/login')
        closeModal()
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const { isOpen, openModal, closeModal } = usePopup()

  const { form, handleChange, handleSubmit } = useForm({
    initialState,
    submitCallback: (_) => openModal()
  })

  return (
    <section>
      <section className="container mx-auto px-10 py-16 my-10 shadow-xl rounded-md border border-gray-300">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUserPlus} size="4x" className="text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Crear usuario</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input id="userName" name="userName" label={"Nombre de usuario"} value={form.userName} onChange={handleChange} placeholder={"Ingrese su nombre de usuario"} required />
            </div>
            <div className="mb-4">
              <Input id="email" name="email" label={"Correo electrónico"} type="email" value={form.email} onChange={handleChange} placeholder={"Ingrese su correo electrónico"} required />
            </div>
            <div className="mb-4">
              <Input id="password" name="password" label={"Contraseña"} type="password" value={form.password} onChange={handleChange} placeholder={"Ingrese su contraseña"} required />
            </div>
            <div className="mb-4">
              <Select id="rol" name="rol" label={"Rol"} value={form.rol} onChange={handleChange} options={ROLES} required />
            </div>
            <div className="mb-4">
              <Link to="/login" className="text-blue-500 hover:underline">Iniciar sesión</Link>
            </div>
            <Button color='primary' type='submit'>Continuar</Button>
          </form>
        </div>
      </section>
      <Confirm isOpen={isOpen} message="¿Está seguro de crear el usuario?"
      onConfirm={serviceCreateUser} 
      onCancel={closeModal} />
    </section>
  )
}