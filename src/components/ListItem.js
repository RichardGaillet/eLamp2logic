import React from 'react'
import PropTypes from 'prop-types'

function ListItem(props) {

    const { item, onClick } = props

    const { id, name } = item

    return (
        <>
            <p onClick={() => onClick(id)}>
                <span style={{ cursor: 'pointer', }}>{name}</span>
            </p>
        </>
    )
}

ListItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func
}

export default ListItem