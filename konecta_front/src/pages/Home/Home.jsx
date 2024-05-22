import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../features/form/components'

const Home = () => {

  return (
    <section className='flex flex-col justify-around items-center p-4'>
      <div className='flex flex-col items-start'>
        <h1 className='text-4xl font-bold text-center'>Permisos</h1>
        <p className='text-center'>El rol empleado solo tiene permisos de lectura</p>
        <p className='text-center'>El rol administrador tiene permisos de lectura y escritura</p>
        <p className='text-center'>
          El agregar de empleado no se restringe de vista por el rol, pero si se restringe por el backend
        </p>
      </div>
      <div className='flex justify-around items-center w-full p-4'>
      <Link to={'/empleados'}><Button>Empleados</Button></Link>
      <Link to={'/solicitudes'}><Button>Solicitudes</Button></Link>
      </div>
    </section>
  )
}

export default Home
