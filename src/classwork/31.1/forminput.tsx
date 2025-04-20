const initialState = {
    name: "",
    password: "",
    error: ""
};

function FormReducer(state, action) {
    switch (action.type) {
        case "name":
            return {
                ...state,
                name: action.payload
            };
        case "password":
            return {
                ...state,
                password: action.payload
            };
        case "error":
            return {
                ...state,
                error: action.payload
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export default function FormInput() {
    const [state, dispatch] = useReducer(FormReducer, initialState);
    const validation = /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`])(?=.*[A-ZА-ЯЁҰҮҚҒӨҺІӘ])[\wА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә!@#$%^&*()_+{}\[\]:;"'<>,.?/~`-]+$/;

    const handleClick = (e) => {
        e.preventDefault();

        if (state.name.length < 1) {
            dispatch({ type: "error", payload: "Name is required" });
            return;
        }

        if (state.password.length < 1) {
            dispatch({ type: "error", payload: "Password is required" });
            return;
        }

        if (state.password.length < 6) {
            dispatch({ type: "error", payload: "Password is less than 6 letters" });
            return;
        }

        if (!validation.test(state.password)) {
            dispatch({
                type: "error",
                payload: "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
            });
            return;
        }

        console.log("form submitted", state.name, state.password);
        dispatch({ type: "reset" });
    };

    return (
        <form onSubmit={handleClick} action="">
            <label htmlFor="">Name:</label>
            <input
                onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
                type="text"
                placeholder="Enter name"
            />
            <label htmlFor="">Password:</label>
            <input
                onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
                type="password"
                placeholder="Enter password"
            />
            <p>Password must contain at least 6 characters</p>
            <p style={{ color: "red" }}>{state.error}</p>
            <button type="submit">Submit</button>
        </form>
    );
}
