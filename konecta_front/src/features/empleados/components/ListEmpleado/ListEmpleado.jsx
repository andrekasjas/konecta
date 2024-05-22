import React, { useState, useEffect } from 'react';
import { Paginator } from '../../../ui/components';
import { getAllEmpleado } from '../../services/getAllEmpleado';
import { formatDate } from '../../../../utils';
import { Button, Input } from '../../../form/components';

export const ListEmpleado = ({ isSelect = false, onSelect, defaultSelected }) => {

  const handleSelect = (item) => {
    if (selected?.id === item.id) {
      setSelected();
      onSelect({ id: 0 });
      return;
    }
    setSelected(item);
    onSelect(item);
  };

  const [selected, setSelected] = useState();
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    serviceGetAll();
  }, [offset, limit]);

  const serviceGetAll = async () => {
    const data = {
      limit: limit,
      offset: offset,
    }
    search && (data.filter = search);
    getAllEmpleado(data)
      .then(response => {
        const { items, totalItems } = response.data;
        setTotalItems(totalItems);
        setItems(items);
      })
  }

  const handlePageChange = (newOffset) => {
    setOffset(newOffset);
  };

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
          <div className="flex gap-4 font-bold">
            <div className='flex-1'>Nombre</div>
            <div className='flex-1'>Salario</div>
            <div className='flex-1'>Fecha Ingreso</div>
          </div>
          {items.map((item) => (
            <div key={item.id} className={`p-4 ${isSelect ? 'cursor-pointer' : ''} ${(selected?.id === item.id) || (defaultSelected === item.id) ? 'bg-gray-200' : ''}`}
              onClick={() => isSelect && handleSelect(item)}>
              <div className="flex gap-4">
                <div className='flex-1'>{item.nombre}</div>
                <div className='flex-1'>{item.salario}</div>
                <div className='flex-1'>{formatDate(item.fechaIngreso)}</div>
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
    </div>
  );
};
