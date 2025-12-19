import React from 'react'
import "./../styles/Contact.css"
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='contact'>
        <div className='header'>
            <h1>HireSphere</h1>
            <p> Centralized Placement Management System</p>
        </div>
        <div className='mainbodycontainer'>
          <h2>Contact us....</h2>
        <div className='mainbody'>
          
          <div className='contactinformation'>
            <h2><strong>Placement Head :</strong> Mr.ARUN JEGANATHAN </h2>
            <h2> Sri Eshwar College Engineering</h2>
            <h3>
              Address: Kondampatti (Post), Vadasithur (via), Coimbatore – 641202, Tamil Nadu, India
               📞 Phone: +91-7373617171, 04259-200300
               📧 Email: sece@sece.ac.in
              </h3>
          </div>
         
        </div>
         <button onClick={()=> navigate("/contactform")} >Contact</button>
        </div>
    </div>
  )
}

export default Contact