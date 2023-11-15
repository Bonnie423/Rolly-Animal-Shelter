import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { addVolunteers } from '../apiClient/addVolunteerAPI'
import { VolunteerDataType, VolunteerData } from '../Model/volunteer'

interface Props {
  name: string
}

const DisplayVolunteerInfo = ({ name }: Props) => {
  return (
    <div>
      <div className="contact-main volunteer-main-content">
        <div className="contact-main-box">
          <h2>
            <span className="red-text vlunteer-heading">✧ ✦Volunteer</span>
          </h2>
          <div className="volunteer-main">
            <p className="volunteer-intro">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me and you can start
              adding your own content and make changes to the font. Feel free to
              drag and drop me anywhere you like on your page. I’m a great place
              for you to tell a story and let your users know a little more
              about you. ​ This is a great space to write long text about your
              company and your services. You can use this space to go into a
              little more detail about your company. Talk about your team and
              what services you provide. Tell your visitors the story of how you
              came up with the idea for your business and what makes you
              different from your competitors. Make your company stand out and
              show your visitors who you are.
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
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font.
                </p>
              </div>
              <div>
                <h3>Hi, {name}!</h3>
                <br></br>
                <p>Thank you so much for your kind offer.  We will get in touch with you soon!</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayVolunteerInfo
