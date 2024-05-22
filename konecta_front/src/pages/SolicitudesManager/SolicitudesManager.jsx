import React from 'react'
import { BackButton } from '../../features/ui/components'
import { FormSolicitud } from '../../features/solicitud/components/FormSolicitud/FormSolicitud'
import { useNavigate } from 'react-router-dom'

const SolicitudesManager = () => {

  const navigate = useNavigate()

  return (
    <section>
      <div className="flex justify-between pb-10">
        <BackButton />
        <h1 className="text-2xl font-bold w-full text-center">Solicitud</h1>
      </div>
      <FormSolicitud onSuccess={
        () => navigate('/solicitudes')
      } />
    </section>
  )
}

export default SolicitudesManager
