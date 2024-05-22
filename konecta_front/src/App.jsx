import './App.css'
import { ErrorBoundary } from './features/validators/components/ErrorBoundary/ErrorBoundary'
import { Interceptor } from './features/validators/components/Interceptor/Interceptor'
import { AppRoutes } from './routes/AppRoutes'
import { useAuth } from './hook'
import { Button } from './features/form/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function App() {

  const { authInformation, handlerLogout } = useAuth()

  return (
    <section className='min-h-[80vh] px-10 py-5'>
      <ErrorBoundary>
        <Interceptor>
        {authInformation.isAuth && (
            <div className="flex justify-around items-center shadow p-4 sticky top-0 bg-white z-10">
              <Link to="/" className="text-2xl font-bold text-center">Bienvenido {authInformation.claims.name}</Link>
              <Link to="/empleados" className="mx-4 text-blue-600 hover:underline">Empleados</Link>
              <Link to="/solicitudes" className="mx-4 text-blue-600 hover:underline">Solicitudes</Link>
              <Button fullWidth={false} onClick={handlerLogout} color="secondary">
                <FontAwesomeIcon icon={faSignOut} className="mr-2" />
                Cerrar sesión
              </Button>
            </div>
          )}
          <AppRoutes />
        </Interceptor>
      </ErrorBoundary>
    </section>
  )
}

export default App
