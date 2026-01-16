import React, { act, useReducer } from 'react'

const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIELD":
            return { ...state, [action.field]: action.value }
        case "RESET":
            return { username: "", email: "", password: "", confirmPassword: "" };
        default:
            return state
    }
};


const initState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}
function Hook05useReducer() {
    const [formState, dispatch] = useReducer(formReducer, initState);

    const handleChange = (e) => {
        dispatch({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Registered:", formState);
        dispatch({ type: "RESET" });
    };



    return (
        <>
            <div>Hook05useReducer</div>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Username : </td>
                            <td>
                                <input type="text" name='username' value={formState.username} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td>
                                <input type="email" name="email" value={formState.email} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password : </td>
                            <td><input type="password" name="password" value={formState.password} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Confirm Password : </td>
                            <td><input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type='submit'>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Hook05useReducer