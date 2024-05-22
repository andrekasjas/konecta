import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faSync } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../form/components";

export const ErrorFallback = ({ resetErrorBoundary }) => {

  const handleBack = () => {
    resetErrorBoundary();
    window.history.back();
  }

  const handleReload = () => {
    resetErrorBoundary();
    window.location.reload();
  }

  return (
    <div className='text-center flex flex-col min-h-screen items-center justify-center'>
      <div className="shadow-2xl rounded-sm border border-gray-200">
        <div className="p-10">
          <p className="text-secondary text-2xl font-bold mb-4">Ocurrio un error</p>
          <div className="flex gap-2">
            <Button type="button" onClick={handleBack} color='secondary'>
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={faLeftLong} />Volver
              </div>
            </Button>
            <Button type="button" onClick={handleReload} color='primary'>
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={faSync} />Recargar
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}