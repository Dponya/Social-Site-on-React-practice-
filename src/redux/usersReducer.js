const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_LOADER = "SET-LOADER";
const SET_FOLLOWING = "SET-FOLLOWING";
const initialState = {
    users: [
        /* { id: 1, name: 'Vladislav', country: 'Putinstan', city: 'Irkutia', status: 'Yak she mash!', followed: false },
        { id: 2, name: 'Ariksey', country: 'Putinstan', city: 'Buryatsk', status: 'Смеюсссс', followed: false }, */
    ],
    totalCount: 10,
    pageCount: 2,
    currentPage: 1,
    isFetching: false,
    isFollowing: false,
    followingProgress: [],
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
        case SET_FOLLOWING:
            return {
                ...state,
                followingProgress: action.isFollowing ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId),
            };
        default:
            return state
    };
};


export const follow = (userID) => {
    return { type: FOLLOW, userID: userID }
};

export const unfollow = (userID) => {
    return { type: UNFOLLOW, userID: userID }
};

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setTotal = (count) => {
    return { type: SET_TOTAL_COUNT, count: count }
}

export const setCurrent = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}
export const setLoader = (boolean) => {
    return { type: SET_LOADER, boolean }
}

export const setFollowing = (isFollowing, followingProgress, userId) => {
    return { type: SET_FOLLOWING, isFollowing, followingProgress, userId }
}