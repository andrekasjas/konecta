import React from 'react'
import { FormEmpleado } from '../../features/empleados/components'
import { BackButton } from '../../features/ui/components'
import { useNavigate } from 'react-router-dom'

const EmpleadosManager = () => {

  const navigate = useNavigate()
  return (
    <section>
      <div className="flex justify-between pb-10">
        <BackButton />
        <h1 className="text-2xl font-bold w-full text-center">Empleado</h1>
      </div>
      <FormEmpleado onSucces={
        () => navigate('/empleados')
      } />
    </section>
  )
}

export default EmpleadosManager
