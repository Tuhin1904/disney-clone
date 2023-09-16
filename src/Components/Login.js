import React from 'react'
import "./Login.css"
import cta from "F:/disnep-clone/src/media/Disney+_Hotstar_logo.png"
import cta2 from "F:/disnep-clone/src/media/cta-logo-two.png"

function Login() {
  return (
    <div className='container'>
      <div className="content">
      <div className="CTA">
        <img src={cta} alt="ff" />
      
      <div className="SignUp">
          GET ALL HERE
      </div>
      <h4 className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga eos iusto culpa perferendis incidunt qui, placeat dolorem, iure possimus ut ad cupiditate veritatis! Voluptatum ut repudiandae animi enim, libero assumenda sint itaque, id fuga eos quae dolor quod. 
      </h4>
      <img className="img2" src={cta2} alt="ff" />
      </div>
      <div className="bgImg">
      </div>
      </div>
    </div>
  )
}

export default Login