import React from 'react'
import './Colors.css'


const Colors = (WrappedComponent) => {
  const colorArray = ['red', 'blue', 'green'];
  const colorName = colorArray[Math.floor(Math.random() * 3)]
  console.log(colorName)

  return (props) => {
    return (
      <div className={colorName + '-text'}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
   
}

export default Colors;