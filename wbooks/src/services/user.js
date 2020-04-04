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