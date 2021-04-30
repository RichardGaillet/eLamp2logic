import React, { useState, useEffect } from 'react'
import MainCenterBlock from './MainCenterBlock'
import RightDetailPane from './RightDetailPane'

import { listItems, getItem } from '../models/api';

function MainPage() {

  const [items, setItems] = useState([])
  const [item, setItem] = useState({})

  useEffect(() => {
    const doListItems = async () => {
      const result = await listItems();
      setItems(result.data);
    };

    doListItems();
  }, []);

  const onClick = async (itemId) => {
    const result = await getItem(itemId);
    setItem(result);
    localStorage.setItem('itemId', result.id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MainCenterBlock items={items} onClick={onClick} />
      <RightDetailPane item={item} />
    </div>
  )
}

export default MainPage