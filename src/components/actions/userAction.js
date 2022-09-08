import axios from "axios";
export function fetchUsers() {
    return (dispatch) => {
        dispatch({ type: "FETCH_USERS", payload: axios.get(`https://cleanlab.herokuapp.com/city`).then(res => res.data) })
    }
}