import GoogleMap from '../GoogleMap'
import { contactDataType } from '../../Model/contactData'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addContact } from '../../apiClient/addContactAPI'
import DisplayContactSubmit from './DisplayContactSubmit'
import { useAuth0 } from '@auth0/auth0-react'

const initialForm = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState<contactDataType>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const queryClient = useQueryClient()
  const { isAuthenticated } = useAuth0()

  const addVolunteerMutation = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
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
        <DisplayContactSubmit
          name={form.name}
          phoneNumber={form.phoneNumber}
          email={form.email}
          message={form.message}
        />
      ) : (
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
                <form onSubmit={(event)=>{isAuthenticated? handleSubmit(event) : alert('Please log in first')}}>
                  <div className="input">
                    <p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </p>
                    <p>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </p>
                    <p>
                      {' '}
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone"
                        value={form.phoneNumber}
                        onChange={handleChange}
                      />
                    </p>
                    <div>
                      <p>
                        <textarea
                          placeholder="Type your message here"
                          cols={30}
                          rows={8}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        ></textarea>
                      </p>
                    </div>
                  </div>
                  <button className="submit-btn">Submit</button>
                </form>
              </div>
              <div className="google-map">
                <GoogleMap />
              </div>
            </div>
          </div>
          <img src="/images/contact/dog.webp" alt="a dog"></img>
        </div>
      )}
    </div>
  )
}

export default Contact
