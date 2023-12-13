import request from 'superagent'
import { Profile, User, UserData, UserForm } from '../Model/userType'

const domain = 'dev-xri5nhxcy03cgakm.au.auth0.com'

export async function addUser(newUser: UserForm): Promise<any> {
  console.log('newUser: ', newUser)

  const sentUser: UserData = {
    client_id: 'sjjdTzVriDqmkDx0e0tpIljuBTsxKeC4',
    email: newUser.email,
    password: newUser.password,
    connection: 'rolly-animal-shelter',
  }
  await request
    .post(`https://${domain}/dbconnections/signup`)
    .send(sentUser)
    .then((res) => {
      console.log('Auth Res', res)
      addLocalUser(res.body, newUser)
    })
}

export async function addLocalUser(
  authRes: any,
  newUser: UserForm 
): Promise<any> {
  const localUser = {
    auth0_id: `auth0|${authRes._id}`,
    username: newUser.username,
    full_name: newUser.fullname,
    location: newUser.location,
    email:newUser.email
  }
  console.log(localUser)
  const finalUser = await request.post('/api/v1/users').send(localUser)
  console.log('finalUser: ', finalUser.body)

  return finalUser.body
}

// export async function completeProfile(
//   authRes: string,
//   newUser: UserForm | Profile
// ): Promise<User> {
//   const localUser = {
//     auth0_id: authRes,
//     username: newUser.username,
//     full_name: newUser.fullname,
//     location: newUser.location,
//   }
//   console.log(localUser)
//   const finalUser = await request.post('/api/v1/users').send(localUser)

//   return finalUser.body
// }

const serverUrl = '/api/v1/users'

// GET '/api/v1/users'
export async function getAllUsers(): Promise<User[]> {
  const response = await request.get(serverUrl)
  console.log(response.body.users)
  return response.body.users
}
