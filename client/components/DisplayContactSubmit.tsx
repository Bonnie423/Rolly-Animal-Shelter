import React from 'react'
import GoogleMap from './GoogleMap'
import { contactData, contactDataType } from '../Model/contactData'

const DisplayContactSubmit = ({
  name,
  phoneNumber,
  email,
  message,
}: contactDataType) => {
  return (
    <div>
      <div className="contact-main">
        <div className="contact-main-box">
          <div className="contact-heading">
            <h2 className="contact-us">
              <span className="red-text">✧ ✦ Contact Us ✧ ✦</span>
            </h2>
            <img src="/images/contact/cat.webp" alt="a cat"></img>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h5>Rolly Animal Shelter</h5>
              <br></br>
              <p>No. 123, happy drive, rolly, Christchurch, New Zealand</p>
              <br></br>
              <p>Email: rollyAnimalShelter@gmail.com</p>
              <p>Phone: 021-123-456</p>
            </div>
            <div>
              <h3>Hi, {name}!</h3>
              <br></br>
              <p>We have received your message as follow:</p>
              <br></br>
              <p>Name: {name}</p>
              <p>Phone-Number: {phoneNumber}</p>
              <p>Email: {email}</p>
              <p>Message: {message}</p>
              <br></br>
              <p>We will get in toutch with you soon!</p>
            </div>
            <div className="google-map">
              <GoogleMap />
            </div>
          </div>
        </div>
        <img src="/images/contact/dog.webp" alt="a dog"></img>
      </div>
    </div>
  )
}

export default DisplayContactSubmit
