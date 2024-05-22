import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../features/form/components'
import { ListSolicitud } from '../../features/solicitud/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../hook'

const Solicitudes = () => {

  const { validateAdmin } = useAuth()
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold w-full text-center">Solicitudes </h1>
        {validateAdmin() &&
          <Link to="/solicitudes/form">
            <Button fullWidth={false} >
              <div className="flex items-center">
                Crear <FontAwesomeIcon icon={faPlus} className="ml-2" />
              </div>
            </Button>
          </Link>
        }
      </div>
      <ListSolicitud />
    </section>
  )
}

export default Solicitudes