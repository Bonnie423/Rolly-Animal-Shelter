import  { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import { VolunteerDataType, VolunteerData } from '../Model/volunteer'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { addVolunteers } from '../apiClient/addVolunteerAPI'
import DisplayVolunteerInfo from './DisplayVolunteerInfo'

const initialForm = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const VolunteerPage = () => {
  const [form, setForm] = useState<VolunteerDataType>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const queryClient = useQueryClient()

  const addVolunteerMutation = useMutation({
    mutationFn: addVolunteers,
    onSuccess: (newVolunteer) => {
      queryClient.invalidateQueries({ queryKey: ['volunteers'] })
    },
  })
  function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addVolunteerMutation.mutate(form)
    setSubmitted(true)
    //setForm(initialForm)
  }

  return (
    <div>
      {submitted ? (
        <DisplayVolunteerInfo name={form.name} phoneNumber = {form.phoneNumber} email={form.email} message={form.message} />
      ) : (
        <div className="contact-main volunteer-main-content">
          <div className="contact-main-box">
            <h2>
              <span className="red-text heading">✧ ✦Volunteer</span>
            </h2>
            <div className="volunteer-main">
              <p className="volunteer-intro">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to tell a story and let your users know a
                little more about you. ​ This is a great space to write long
                text about your company and your services. You can use this
                space to go into a little more detail about your company. Talk
                about your team and what services you provide. Tell your
                visitors the story of how you came up with the idea for your
                business and what makes you different from your competitors.
                Make your company stand out and show your visitors who you are.
              </p>
              <img
                src="/images/dogs/dog12.jpg"
                alt="a person is holding a dog on his shoulder"
                className="volunteer-img"
              ></img>
            </div>

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
              <div className="sign-up-form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="v-input"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="v-input"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone"
                    className="v-input"
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                  <div>
                    <textarea
                      placeholder="Type your message here"
                      rows={8}
                      className="v-input"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button className="submit-btn">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VolunteerPage
