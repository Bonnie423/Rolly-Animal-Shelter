import React, { ChangeEvent, FormEvent, useState } from 'react'
import { contactDataType } from '../Model/contactData'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addAdoption } from '../apiClient/adoptionsAPI'
import DisplayAdoptionSubmission from './DisplayAdoptionSubmission'

const initialForm = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const AdoptionForm = () => {
  const [form, setForm] = useState<contactDataType>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const queryClient = useQueryClient()

  const addVolunteerMutation = useMutation({
    mutationFn: addAdoption,
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
  }

  return (
    <>
      {submitted ? (
        <div>
          <h3>Hi,{form.name}</h3>
          <br></br>
          <br></br>
          <p>We have received your application as follow:</p>
          <br></br>
          <p>Name: {form.name}</p>
          <p>Phone-Number: {form.phoneNumber}</p>
          <p>Email: {form.email}</p>
          <p>Message: {form.message}</p>
          <br></br>
          <p>We will get in toutch with you soon!</p>
        </div>
      ) : (
        <div className="adoption-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="v-input"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="v-input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone"
              className="v-input"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
            <div>
              <textarea
                placeholder="Please tell us about yourself and why do you want to adopt this buddy"
                rows={8}
                className="v-input"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="submit-btn">Send</button>
          </form>
        </div>
      )}
    </>
  )
}

export default AdoptionForm
