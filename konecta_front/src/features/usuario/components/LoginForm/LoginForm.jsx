import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Input, Button } from '../../../form/components'
import { useAuth, useForm } from '../../../../hook'
import { login } from '../../services/login'
import { useNavigate } from 'react-router-dom';


const initialState = {
  emailOrUsername: '',
  password: ''
}

export const LoginForm = () => {

  const navigate = useNavigate()

  const serviceLogin = async () => {
    setIsLoading(true)
    login(form)
      .then(response => {
        const { token } = response.data
        handlerToken(token)
        navigate('/')
      })
      .catch(error => {
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const { handlerToken } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const { form, handleChange, handleSubmit } = useForm({
    initialState,
    submitCallback: async (_) => await serviceLogin()
  })

  return (
    <section className="container mx-auto px-10 py-16 my-10 shadow-xl rounded-md border border-gray-300">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUserCircle} size="4x" className="text-emerald-600" />
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Iniciar sesión </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input id="emailOrUsername" name="emailOrUsername" label={"Usuario"} value={form.emailOrUsername} onChange={handleChange} placeholder={"Ingrese su usuario o email"} required />
          </div>
          <div className="mb-4">
            <Input id="password" name="password" label={"Contraseña"} type="password" value={form.password} onChange={handleChange} placeholder={"Ingrese su contraseña"} required />
          </div>
          <div className="mb-4">
            <Link to="/create-user" className="text-blue-500 hover:underline">Crear cuenta</Link>
          </div>
          <Button color='primary' type='submit' isLoading={isLoading}>Continuar</Button>
        </form>
      </div>
    </section>
  )
}