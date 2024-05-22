import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { Loader } from './features/ui/components/index.js'

const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
        <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
