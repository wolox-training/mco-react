import { create } from 'apisauce'

const wbooksApi = create(
    {
        baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
    }
)

export function userById(id) {
    wbooksApi.get(`/user/${id}`)
}

export function createUser(body) {
    return wbooksApi.post('/users', body)
}

export function newSession(email, password) {
    const body = {
        session: {
            email: email,
            password: password
        }
    }
    return wbooksApi.post('/users/sessions', body)
}