import { createSelector } from "reselect"

export const stateUsers = (state) => {
    return state.usersDetails.users
}

export const stateUsersReselector = createSelector(
    stateUsers, (users) => {
        return users.filter(us => true)

    })

export const stateTotalCount = (state) => {
    return state.usersDetails.totalCount
}

export const statePageCount = (state) => {
    return state.usersDetails.pageCount
}

export const sateCurrentPage = (state) => {
    return state.usersDetails.currentPage
}

export const stateIsFetching = (state) => {
    return state.usersDetails.isFetching
}

export const stateFollowingProgress = (state) => {
    return state.usersDetails.followingProgress
}