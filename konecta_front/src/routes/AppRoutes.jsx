import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../features/ui/components';
import { useAuth } from '../hook';

export const AppRoutes = () => {

  const Home = lazy(() => import('../pages/Home/Home'));
  const Login = lazy(() => import('../pages/Login/Login'));
  const CreateUser = lazy(() => import('../pages/CreateUser/CreateUser'));
  const Empleados = lazy(() => import('../pages/Empleados/Empleados'));
  const EmpleadosManager = lazy(() => import('../pages/EmpleadosManager/EmpleadosManager'));
  const Solicitudes = lazy(() => import('../pages/Solicitudes/Solicitudes'));
  const SolicitudesManager = lazy(() => import('../pages/SolicitudesManager/SolicitudesManager'));

  const { authInformation } = useAuth();

  return (
    <section className='px-40 py-10 shadow-lg'>
      <Suspense fallback={<Loader />}>
        {authInformation.isAuth ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empleados" element={<Empleados />} />
            <Route path="/empleados/form" element={<EmpleadosManager />} />
            <Route path="/solicitudes" element={<Solicitudes />} />
            <Route path="/solicitudes/form" element={<SolicitudesManager />} />
            <Route path="*" element={<Home />} />
          </Routes>
          :
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="*" element={<Login />} />
          </Routes>
        }
      </Suspense>
    </section>
  );

};
