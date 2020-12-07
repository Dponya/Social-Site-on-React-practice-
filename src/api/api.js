import * as axios from 'axios';



class APIservice {

    constructor() {
        this.istanse = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: { 'API-KEY': '3ba05ded-a718-412a-bde0-9e786dbc76c5' }
        })
    }

    getUsers = () => {
        return this.istanse.get(`users?page=1&count=5`);
    }

    getUsersWithEl = (el) => {
        return this.istanse.get(`users?page=${el}&count=5`);
    }

    unfollow = (us) => {
        return this.istanse.delete(`follow/${us.id}`)
    }

    follow = (us) => {
        return this.istanse.post(`follow/${us.id}`)
    }

    auth = () => {
        return this.istanse.get(`auth/me`)
    }

    getProfileId = (userId) => {
        return this.istanse.get(`profile/${userId}`)
    }

    getStatus = (userId) => {
        return this.istanse.get('profile/status/' + userId)
    }

    updateStatus(status) {
        return this.istanse.put(`profile/status`, { status: status })
    }

    login = (email, password, rememberMe) => {
        return this.istanse.post('auth/login', { email, password, rememberMe })
    }
}

export const reqService = new APIservice();