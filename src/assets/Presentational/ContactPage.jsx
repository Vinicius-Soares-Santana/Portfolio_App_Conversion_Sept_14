import React from 'react';
import './Contact.css';

function ContactPage(props){
  return(<section id="information" className="body">
  <h2 id="Reference">./Contact Me</h2>
  <h2 id="Title">Contact Me</h2>

  <img src="./Resourses/Images/Email_logo.png" id="emailLogo"/>
  <div className="info-card" id="emailId">
      <h2>Email</h2>
      <p>vinicius.soaresds@outlook.com</p>
  </div>

  <img src="./Resourses/Images/LinkedIn_logo.png" id="linkedinLogo"/>
  <div className="info-card" id="linkedinId">
      
      <h2>LinkedIn</h2>
      <p>linkedin.com/in/vinisoaressantana</p>
  </div>

  <img src="./Resourses/Images/Instagram icon.png" id="instagramLogo"/>
  <div className="info-card" id="instagramId">
      <h2>Instagram</h2>
      <p>@vinisoaressantana</p>
  </div>
  
</section>)
}

export default ContactPage;