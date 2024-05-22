import React, { useState, useEffect } from 'react';
import { Paginator, Skeleton } from '../../../ui/components';
import { getAllUser } from '../../services/getAllUser';

export const ListUser = ({ isSelect = false, onSelect }) => {

  const handleSelect = (item) => {
    if (selected?.id === item.id) {
      setSelected();
      onSelect({ id: 0 });
      return;
    }
    setSelected(item);
    onSelect(item);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState();
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    serviceGetAll();
  }, [offset, limit]);

  const serviceGetAll = async () => {
    setIsLoading(true);
    const data = {
      limit: limit,
      offset: offset
    }
    getAllUser(data)
      .then(response => {
        const { usuarios, totalItems } = response.data;
        setTotalItems(totalItems);
        setItems(usuarios);
      })
      .finally(() => setIsLoading(false));
  }

  const handlePageChange = (newOffset) => {
    setOffset(newOffset);
  };

  return (
    <div className="container mx-auto mt-">
      {isLoading ? <Skeleton /> :
        <div className="space-y-4 flex flex-col">
          {items.length > 0 ? items.map((item) => (
            <div key={item.id} className={`p-4 border ${isSelect ? 'cursor-pointer' : ''} ${selected?.id === item.id ? 'bg-gray-200' : ''}`}
              onClick={() => isSelect && handleSelect(item)}>
              {item.userName} - {item.email}
            </div>
          )) :
            <div className="p-4 border">
              No hay usuarios
            </div>
          }
        </div>
      }
      {totalItems > 0 &&
        <Paginator
          limit={limit}
          offset={offset}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />}
    </div>
  );
};
