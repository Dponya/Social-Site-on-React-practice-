import * as axios from 'axios';



class APIservice {

    constructor() {
        this.istanse = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: { 'API-KEY': 'e466e855-07af-43c0-8344-c4c11ad80425' }
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
}

export const reqService = new APIservice();