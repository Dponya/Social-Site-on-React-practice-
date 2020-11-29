/* const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    people: [
        { id: 1, name: 'Vladislav', country: 'Putinstan', city: 'Irkutia', status: 'Yak she mash!', follow: false },
        { id: 2, name: 'Ariksey', country: 'Putinstan', city: 'Buryatsk', status: 'Смеюсссс', follow: false },
    ]
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userslists: state.people.map(us => {
                    if (us.id === action.userId) {
                        return { ...us, follow: true }
                    }
                    return us;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                userslists: state.people.map(us => {
                    if (us.id === action.userId) {
                        return { ...us, follow: false }
                    }
                    return us;
                })
            }
        case SET_USERS:
            return { ...state, people: [...state.people, action.people] }

        default:
            return state;
    }
}



export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (people) => ({ type: SET_USERS, people }); */



const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";


const initialState = {
    users: [
        { id: 1, name: 'Vladislav', country: 'Putinstan', city: 'Irkutia', status: 'Yak she mash!', followed: false },
        { id: 2, name: 'Ariksey', country: 'Putinstan', city: 'Buryatsk', status: 'Смеюсссс', followed: false },
    ]
};


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((e) => {
                    if (e.id === action.userID) {
                        return { ...e, followed: true }
                    }
                    return e
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((e) => {
                    if (e.id === action.userID) {
                        return { ...e, followed: false }
                    }
                    return e
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state
    };
};


export const followActionCreator = (userID) => {
    return { type: FOLLOW, userID: userID }
};

export const unfollowActionCreator = (userID) => {
    return { type: UNFOLLOW, userID: userID }
};

export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users }
}