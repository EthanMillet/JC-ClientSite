import React from "react";
import { useState } from "react";
import './styles/contact.css'
import { Link } from 'react-router-dom'


function Contact() {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
      });

    function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }

    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      };


    return (
        <div className="contact-container">
            <div className="contact-left"> 
                    <form className="email-form" onSubmit={submitEmail}>
                        <fieldset className="email-container">

                            <div className="email-header">
                            <legend className="email-title">Contact Us</legend>
                            <p className="email-subtitle">Feel free to contact us at any time. We will get back to you as soon as we can</p>
                            </div>

                            <div className="email-subcontainer">
                            <input
                            placeholder="Name"
                            className="email-input"
                            onChange={handleStateChange}
                            name="name"
                            value={mailerState.name}
                            />
                            <input
                            placeholder="Email"
                            className="email-input"
                            onChange={handleStateChange}
                            name="email"
                            value={mailerState.email}
                            />
                            </div>
                            <textarea
                            placeholder="Message"
                            className="email-message-input"
                            style={{ minHeight: "200px" }}
                            onChange={handleStateChange}
                            name="message"
                            value={mailerState.message}
                            />
                            <button className="email-button">Send Message</button>
                        </fieldset>
                 </form>
            </div>


            <div className="contact-right">
                <div className="contact-info">
                    <h2 className="contact-title">Info</h2>
                    <a href='mailto:millet.ethan@gmail.com' className="contact-sub-title">contact@myjoyinchrist.com</a>
                
                
                </div>

            </div>

        </div>
    )
  }
  
  export default Contact;