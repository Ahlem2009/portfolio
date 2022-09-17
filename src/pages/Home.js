import React from 'react'
import webImages from "../images/web.png";

function home() {
  return (
    <div>
     
     <img src="/images/my-photo.jpg" alt="my photo" className='avatar' />
     <h1>Hello My name is Ahlem. I am a Fullstack Developper.</h1>
     <img src={webImages} alt="web Development" />
    </div>
  )
}

export default home