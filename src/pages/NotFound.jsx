import React from 'react'
import { HiHome } from 'react-icons/hi'

function NotFound() {
  return (
    <>
    <div className='d-flex justify-content-center align-item-center mt-5'>
      <img src="assets/notfound.png" alt="Not found" width={500}/>
    </div>
     <div className='d-flex justify-content-center align-items-center'><a href='/'><button className='btn mt-4'><HiHome/> Back to Homepage</button></a></div>
    </>
  )
}

export default NotFound