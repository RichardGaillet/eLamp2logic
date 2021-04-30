import React from 'react'
import ListItem from './ListItem'

function MainCenterBlock(props) {

  const { items, onClick } = props

  const displayItems = () => {
    return items.map((item, key) => <ListItem key={key} item={item} onClick={e => onClick(e)} />)
  }

  return (
    <div style={{
      flexGrow: 2,
      borderWidth: '1px',
      borderColor: '#000',
      borderStyle: 'solid',
      height: 'calc(100vh - 48px)',
      padding: 8,
      margin: 8,
    }}>
      {displayItems()}
    </div>
  )
}

export default MainCenterBlock