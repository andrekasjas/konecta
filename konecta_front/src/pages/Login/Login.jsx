import React from 'react'
import { LoginForm } from '../../features/usuario/components'
import { ErrorBoundary, PruebaError } from '../../features/validators/components'

const Login = () => {

  return (
    <section>
      <LoginForm />
      <ErrorBoundary>
        <PruebaError />
      </ErrorBoundary>
    </section>
  )
}

export default Login