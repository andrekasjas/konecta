import React from 'react'
import { ListEmpleado } from '../../features/empleados/components'
import { Button } from '../../features/form/components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../hook'

const Empleados = () => {

  const { validateAdmin } = useAuth()
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold w-full text-center">Empleados</h1>
        <p className="text-sm text-gray-500">
          El agregar no se restringe de vista por el rol, pero si se restringe por el backend
        </p>
        <Link to="/empleados/form">
          <Button fullWidth={false} >
            <div className="flex items-center">
              Crear <FontAwesomeIcon icon={faPlus} className="ml-2" />
            </div>
          </Button>
        </Link>
      </div>
      <ListEmpleado />
    </section>
  )
}

export default Empleados