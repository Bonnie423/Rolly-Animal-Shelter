import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
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
  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
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
        <DisplayVolunteerInfo
          name={form.name}
          phoneNumber={form.phoneNumber}
          email={form.email}
          message={form.message}
        />
      ) : (
        <div className="contact-main volunteer-main-content">
          <div className="contact-main-box">
            <h2>
              <span className="red-text heading">✧ ✦Volunteer</span>
            </h2>
            <div className="volunteer-main">
              <p className="volunteer-intro">
                At our animal shelter, volunteers play an integral role in the
                well-being and happiness of our furry friends. Our dedicated
                volunteers engage in a variety of essential activities,
                including hands-on care, socialization, event organization, and
                administrative support. Whether it's spending quality time with
                our animals, assisting in the daily operations, or helping with
                special events, each volunteer contributes uniquely to the
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
