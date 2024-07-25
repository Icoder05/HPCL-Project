import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "19ef2fb3-47cd-40ec-9386-0bc61604bc37");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact-1">
      <h1>CONTACT US</h1>
      <h3>Ask Query Anytime</h3>
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out us from the contact form or find our contact from below details. Your Feedback, 
               queries and suggestions are very important to us for providing exceptional services to our clients and employees</p>
               <ul>
                <li><img src={mail_icon} alt="" />fireandsafety@hpcl.in</li>
                <li><img src={phone_icon} alt="" />022 2507 6000</li>
                <li><img src={location_icon} alt="" />2W82+M5W, Kalachauki, Mahul, Chembur, Mumbai, Maharashtra 400071</li>
               </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Your Phone_NO</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'> Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    </div>
  )
}

export default Contact