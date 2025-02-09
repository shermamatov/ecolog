import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const stater = {
    user: "",
};

let reduxConsts = {
    SET_USER_NAME: "SET_USER_NAME",
};

export const authReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.SET_USER_NAME:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
};

export const handleSignup = (
    email,
    password,
    setError = null,
    createUserFunction
) => {
    return (dispatch) => {
        let auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((item) => {
                dispatch({
                    type: reduxConsts.SET_USER_NAME,
                    payload: item.user.email,
                });
                createUserFunction();
                setError("");
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        setError("Эта почта уже зарегистрирована");
                        break;
                    case "auth/invalid-email":
                        setError("не правильная почта");
                        break;
                    case "auth/weak-password":
                        setError("пороль короткий");
                        break;
                    default:
                        return;
                }
            });
    };
};

export const authListener = () => {
    return (dispatch) => {
        let auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({
                    type: reduxConsts.SET_USER_NAME,
                    payload: user.email,
                });
            } else {
                dispatch({ type: reduxConsts.SET_USER_NAME, payload: "" });
            }
        });
    };
};

export const handleLogin = (email, password, setErrorMess, navigate) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((item) => {
                dispatch({
                    type: reduxConsts.SET_USER_NAME,
                    payload: item.user.email,
                });
                setErrorMess("");
                navigate("/myProfile");
            })
            .catch((err) => {
                console.log(err);
                switch (err.code) {
                    case "auth/user-disabled":
                        setErrorMess(err.message);
                        break;
                    case "auth/invalid-email":
                        setErrorMess("неверная почта");
                        break;
                    case "auth/user-not-found":
                        setErrorMess("такая почта не была зарегана");
                        break;
                    case "auth/wrong-password":
                        setErrorMess("неверный пароль");
                        break;
                    case "auth/invalid-credential":
                        setErrorMess(err.message);
                        break;
                    default:
                        break;
                }
            });
    };
};
