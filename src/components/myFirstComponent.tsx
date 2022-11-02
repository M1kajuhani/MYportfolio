import React from 'react'

type myFirstComponentProps = {

}

const myFirstComponent: React.FC<myFirstComponentProps> = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first component 😎</p>
    </div>
  )
}

export default myFirstComponent