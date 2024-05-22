import React, { useState, useEffect } from 'react';
import { Paginator } from '../../../ui/components';
import { getAllUser } from '../../services/getAllUser';

export const ListUser = ({isSelect=false, onSelect}) => {

  const handleSelect = (item) => {
    if (selected?.id === item.id) {
      setSelected();
      onSelect({id: 0});
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

  useEffect(() => {
    serviceGetAll();
  }, [offset, limit]);

  const serviceGetAll = async () => {
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
  }

  const handlePageChange = (newOffset) => {
    setOffset(newOffset);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="space-y-4 flex flex-col">
        {items.map((item) => (
          <div key={item.id} className={`p-4 border ${isSelect ? 'cursor-pointer' : ''} ${selected?.id === item.id ? 'bg-gray-200' : ''}`}
          onClick={() => isSelect && handleSelect(item)}>
            {item.userName} - {item.email}
          </div>
        ))}
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
