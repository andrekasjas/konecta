import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../form/components';

export const BackButton = () => {
  return (
    <section>
      <Button fullWidth={false} onClick={() => window.history.back()} color='danger'>
        <div className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faLeftLong} />Volver
        </div>
      </Button>
    </section>
  );
};
