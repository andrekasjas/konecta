import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FontAwesomeIcon icon={faSpinner} size='4x' className="text-blue-500 animate-spin" />
    </div>
  )
}