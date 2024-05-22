import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Paginator } from '../../../ui/components';
import { getAllSolicitud } from '../../services/getAllSolicitud';
import { Button, Input } from '../../../form/components';
import { DeleteSolicitud } from '../DeleteSolicitud/DeleteSolicitud';
import { FormSolicitud } from '../FormSolicitud/FormSolicitud';
import { useAuth } from '../../../../hook';

export const ListSolicitud = ({ isSelect = false, onSelect }) => {

  const handleSelect = (item) => {
    if (selected?.id === item.id) {
      setSelected();
      onSelect({ id: 0 });
      return;
    }
    setSelected(item);
    onSelect(item);
  };

  const serviceGetAll = async () => {
    const data = {
      limit: limit,
      offset: offset,
    }
    search && (data.filter = search);
    getAllSolicitud(data)
      .then(response => {
        const { items, totalItems } = response.data;
        setTotalItems(totalItems);
        setItems(items);
      })
  }

  const handlePageChange = (newOffset) => {
    setOffset(newOffset);
  };

  const [solicitudDelete, setSolicitudDelete] = useState();
  const [solicitudUpdate, setSolicitudUpdate] = useState();
  const [selected, setSelected] = useState();
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  const { validateAdmin } = useAuth();

  useEffect(() => {
    serviceGetAll();
  }, [offset, limit]);

  useEffect(() => {
    if (search.length > 3) {
      serviceGetAll();
    }
  }, [search]);

  return (
    <div className="container mx-auto mt-8">
      <div className="space-y-4 flex flex-col">
        <div className="flex gap-4">
          <Input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar por nombre' className={'flex-1'}
            onEnterPress={serviceGetAll} />
          <Button fullWidth={false} onClick={() => serviceGetAll()} color='primary'>Buscar</Button>
        </div>
        <div className="p-4 border">
          <div className="flex gap-4 font-bold items-center">
            <div className='flex-1'>Codigo</div>
            <div className='flex-1'>Descripción</div>
            <div className='flex-1'>Resumen</div>
            {validateAdmin() && <div className='flex-1 text-center'>Acciones</div>}
          </div>
          {items.map((item) => (
            <div key={item.id} className={`p-4 ${isSelect ? 'cursor-pointer' : ''} ${selected?.id === item.id ? 'bg-gray-200' : ''}`}
              onClick={() => isSelect && handleSelect(item)}>
              <div className="flex gap-4">
                <div className='flex-1'>{item.codigo}</div>
                <div className='flex-1'>{item.descripcion}</div>
                <div className='flex-1'>{item.resumen}</div>
                {validateAdmin() && <div className="flex flex-1 gap-4 justify-center h-11">
                  <Button fullWidth={false} onClick={() => setSolicitudUpdate(item)} color='warning' >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button fullWidth={false} onClick={() => {setSolicitudDelete(item.id)}} color='danger' >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Paginator
        limit={limit}
        offset={offset}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />
      {solicitudDelete && (
        <DeleteSolicitud 
        id={solicitudDelete} 
        onSuccess={() => { serviceGetAll(); setSolicitudDelete() }}
        onCancel={() => setSolicitudDelete()} />
      )}
      {solicitudUpdate && (
        <Modal isOpen onClose={() => { setSolicitudUpdate() }}>
          <FormSolicitud solicitud={solicitudUpdate} onSuccess={() => { serviceGetAll(); setSolicitudUpdate() }} />
        </Modal>
      )}
    </div>
  );
};
