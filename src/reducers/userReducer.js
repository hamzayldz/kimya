const initialState = {
    users: [],
    fetching: false,
    fetched: false,
    error: {},
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_USERS_PENDING":
            return {...state, fetching: true };
        case "FETCH_USERS_FULFILLED":
            return {...state, users: payload, fetching: false, fetched: true };
        case "FETCH_USERS_REJECTED":
            return {...state, error: payload, fetching: false };
        default:
            return state;
    }
};