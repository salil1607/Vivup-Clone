import React from 'react'

const ButtonComponent = (props) => {
  const{style,text,onClick} = props
  return (
    <div className="button" style={style} >
    <button onClick={onClick}>{text}</button>
  </div>
  )
}

export default ButtonComponent