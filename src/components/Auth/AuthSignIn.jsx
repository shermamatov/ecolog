import React, { useState } from "react";
import Loader from "../Elements/Other/Loader";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const AuthSignIn = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");

    function authDataHandler() {
        dispatch(handleLogin(email, password, setError, navigate));
    }

    return (
        <div>
            <div className="content">
                <div className="flex flex-col items-center justify-center h-screen dark">
                    <div className="w-full max-w-md bg-green-950 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-200 mb-4">
                            Войти
                        </h2>
                        <div className="flex flex-col">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className=" text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="email"
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Пароль"
                                className=" text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="password"
                            />
                            <p className="text-white mt-4">
                                Нету аккаунта?
                                <a
                                    className="text-sm text-blue-500 -200 hover:underline mt-4 ml-1"
                                    href="/sign-up"
                                >
                                    зарегистрироваться
                                </a>
                            </p>
                            <p className="text-red-500 mt-4">{error}</p>
                            <button
                                onClick={authDataHandler}
                                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                            >
                                войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthSignIn;
