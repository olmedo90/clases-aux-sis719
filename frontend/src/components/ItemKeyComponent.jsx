import React from 'react'

export const ItemKeyComponent = ({key, myKey, state, handlerClick}) => {
  return (
    <div 
    key={key}
    className={state ? "disablediv" : ""}
    onClick={()=>handlerClick(myKey)}
    >
        {myKey}
    </div>
  )
}
