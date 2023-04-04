import React from 'react'
import './Test.css'
import { Button } from 'antd'
const Test = () => {
     return (
          <>
               <h1 style={{ marginLeft: '30px' }} className='hello-world'>Hello World !!</h1>
               <Button style={{ marginLeft: '30px' }} type="primary">Test Button</Button>
          </>
     )
}

export default Test