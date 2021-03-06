import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}
const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const fetchUsers = () => dispatch => {
    return APIUtil.fetchUsers()
    .then(users => {
        return dispatch(receiveUsers(users))
    })
}

export const updateUser = (user) => dispatch => {
    return APIUtil.updateUser(user)
    .then(user => {
        return dispatch(receiveUser(user))
    })
}