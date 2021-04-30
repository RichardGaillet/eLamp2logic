import React, { useEffect, useState } from 'react'
import { getItem } from '../models/api';

function RightDetailPane(props) {

  const { item } = props

  const [rightItem, setRightItem] = useState({})

  const { name, details } = rightItem

  const field2 = details?.field2 ? "true" : "false"
  const field3 = details?.field3.map((value, key) => <p key={key}>{value}</p>)

  useEffect(() => {
    const localStorageItemid = localStorage.getItem('itemId')
    const doGetItem = async () => {
      const result = await getItem(item.id || localStorageItemid || 'ITEM1');
      setRightItem(result)
    };

    doGetItem()
  }, [item])

  return (
    <div style={styles.rightDetailPane}>
      <p style={styles.fieldTitle}>
        Name
        </p>
      <p>{name}</p>

      <p style={styles.fieldTitle}>Field 1</p>
      <p>{details?.field1}</p>

      <p style={styles.fieldTitle}>Field 2</p>
      <p>{field2}</p>

      <p style={styles.fieldTitle}>{details?.field3.length !== 0 ? "Field 3" : null} </p>
      {field3}

    </div>
  )

}

const styles = {
  rightDetailPane: {
    flexGrow: 1,
    borderWidth: '1px',
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 8,
    margin: 8,
  },
  fieldTitle: {
    color: '#888'
  }
}

export default RightDetailPane