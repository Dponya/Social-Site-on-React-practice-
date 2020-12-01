const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_LOADER = "SET-LOADER"

const initialState = {
    users: [
        /* { id: 1, name: 'Vladislav', country: 'Putinstan', city: 'Irkutia', status: 'Yak she mash!', followed: false },
        { id: 2, name: 'Ariksey', country: 'Putinstan', city: 'Buryatsk', status: 'Смеюсссс', followed: false }, */
    ],
    totalCount: 10,
    pageCount: 2,
    currentPage: 1,
    isFetching: false,
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
                users: [...action.users]
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.count
            };
        case SET_LOADER:
            return {
                ...state,
                isFetching: action.boolean
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

export const setTotalCountActionCreator = (count) => {
    return { type: SET_TOTAL_COUNT, count: count }
}

export const setCurrentPageActionCreator = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}
export const setLoaderActionCreator = (boolean) => {
    return { type: SET_LOADER, boolean }
}