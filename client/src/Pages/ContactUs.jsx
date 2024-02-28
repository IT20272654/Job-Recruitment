import React, { useState } from 'react'
import '../assets/css/contact.css'


const Contact = () => {
    const [userData, setUserData] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }

    )
    let name, value
    console.log(userData)
    const data = (e) =>
    {
        name = e.target.name
        value = e.target.value
        setUserData({...userData, [name]:value})

    }
    const send = async(e) =>
    {
        const {Name, Email, Subject, Message} = userData;
        e.preventDefault();
        const option = {
            method: 'POST',
            headers: {
                'Content-type':'aplication/json'
            }, 
            body : JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://contact-us-react-ab779-default-rtdb.firebaseio.com/Messages.json', option )
        console.log(res)
        if(res)
        {
            alert("Message Sent")
        }
    }
  return (
    <>
    
    <table align='center'>
     <div className='ContactUs_container'>
        <div className='ContactUs_contact_box'>
            
            <form method='POST'>
                <h1 align='center' className='contactUs'><b>Contact US</b></h1>
                
                <input type='text' name='Name' value={userData.Name} placeholder='Enter Your Full Name' autoComplete='off' onChange={data}></input>
                <input type='email' name='Email' value={userData.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}></input>
                <input type='text' name='Subject' value={userData.Subject} placeholder='Subject of Message' autoComplete='off' onChange={data}></input>
                <textarea value={userData.Message} name='Message' placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
                <button onClick={send} >Send</button>

            </form>
            
        </div>
     </div>
    </table>
    
    </>
  )
}

export default Contact