import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { UserForm } from '../Model/userType'
import { addUser, getAllUsers } from '../apiClient/userAPI'

const initialForm = {
  email: '',
  password: '',
  username: '',
  picture: '',
  fullname: '',
  location: '',
}

let currentForm: UserForm
const SignUp = () => {
  const [form, setForm] = useState<UserForm>(initialForm)
  const [picture, setPicture] = useState<string>('')
  const [submit, setSubmit] = useState(false)

  const queryClient = useQueryClient()

  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (newUser) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const { loginWithRedirect } = useAuth0()
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
  const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/

  const {
    data: allProfiles,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['users'], queryFn: () => getAllUsers() })
  if (isError) {
    return <div>There was an error getting all profiles...</div>
  }

  if (!allProfiles || isLoading) {
    return <div>Loading all profiles...</div>
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
    setPicture(newForm.picture)
    console.log(form.password)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    currentForm = { ...form }
    addUserMutation.mutate(form)
    setSubmit(true)
  }
  return (
    <div>
      <h1 className="mx-auto mt-12">Sign Up</h1>

      <form
        onSubmit={handleSubmit}
        className="row mb-3"
      >
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="m-4 form-control p-2 px-5 w-1/3"
        />
        {emailRegex.test(form.email) || form.email === '' ? null : (
          <p className="bg-red-100 border-rose-600 border-4 rounded-lg py-2 px-4 mb-4">
            Invalid Email address
          </p>
        )}
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="m-4 form-control p-2 px-5 w-1/3"
        />
        {passwordRegex.test(form.password) || form.password === '' ? null : (
          <p className="bg-red-100 border-rose-600 border-4 rounded-lg py-2 px-4 mb-4">
            Password must be at least 8 characters long and contain at least one
            letter, one number, and one special character
          </p>
        )}
        <label htmlFor="username" className="form-label">Username</label>
        <input
          id="username"
          type="text"
          required
          placeholder="Username"
          name="username"
          onChange={handleChange}
          className="mb-3 form-control p-2 px-5 w-1/3"
        />
        {allProfiles.some((user) => user.username === form.username) ? (
          <p className="bg-red-100 border-rose-600 border-4 rounded-lg py-2 px-4 mb-4">
            Username already exists
          </p>
        ) : null}
        <label htmlFor="fullname" className="form-label">Full Name</label>
        <input
          id="fullname"
          required
          type="text"
          placeholder="Full Name"
          name="fullname"
          onChange={handleChange}
          className="m-4 form-control p-2 px-5 w-1/3"
        />
        <label htmlFor="location" className="form-label">Location</label>
        <input
          id="location"
          type="text"
          required
          placeholder="Location"
          name="location"
          onChange={handleChange}
          className="m-4 form-control   p-2 px-5 w-1/3"
        />
        <button className="btn btn-primary red-bg">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
