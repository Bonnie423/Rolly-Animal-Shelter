import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { addVolunteers } from '../../apiClient/addVolunteerAPI'
import { VolunteerDataType, VolunteerData } from '../../Model/volunteer'
import { Link } from 'react-router-dom'

interface Props {
  name: string
}

const DisplayVolunteerInfo = ({
  name,
  phoneNumber,
  email,
  message,
}: VolunteerDataType) => {
  return (
    <div>
      <div className="contact-main volunteer-main-content">
        <div className="contact-main-box">
          <h2>
            <span className="red-text vlunteer-heading">✧ ✦Volunteer</span>
          </h2>

          <div className="volunteer-main">
            <p className="volunteer-intro">
              At our animal shelter, volunteers play an integral role in the
              well-being and happiness of our furry friends. Our dedicated
              volunteers engage in a variety of essential activities, including
              hands-on care, socialization, event organization, and
              administrative support. Whether it&apos;s spending quality time
              with our animals, assisting in the daily operations, or helping
              with special events, each volunteer contributes uniquely to the
              positive atmosphere we strive to maintain. We believe that every
              act of kindness, no matter how big or small, makes a lasting
              impact. If you share our passion for creating a loving and
              supportive environment for animals in need, we warmly invite you
              to join our volunteer community.
            </p>
            <img
              src="/images/dogs/dog12.jpg"
              alt="a person is holding a dog on his shoulder"
              className="volunteer-img"
            ></img>
          </div>
          <div>
            <div className="sign-up-box">
              <div className="sign-up-p">
                <h3 className="red-text v-h3">
                  ​​Help make a difference and sign up to volunteer today!
                </h3>
                <p>
                  Your time and commitment can make a significant difference in
                  the lives of our shelter animals. Sign up today to be a part
                  of our mission and contribute to the well-being of our beloved
                  companions.
                </p>
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
                <p>
                  Thank you so much for your kind offer. We will get in touch
                  with you soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayVolunteerInfo
