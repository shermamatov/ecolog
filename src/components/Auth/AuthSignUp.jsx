import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../Elements/Other/Loader";
import { uploadFile } from "../../store/reducers/eventReducer";
import { handleLogout, handleSignup } from "../../store/reducers/authReducer";
import { addUser } from "../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const AuthSignUp = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [userName, setUserName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [avatar, setAvatar] = useState("");
    let [error, setError] = useState("");
    const [uploadProgress, setUploadProgress] = useState(null);

    function userDataHandler() {
        let obj = {
            userName,
            phone,
            email,
            avatar,
        };
        dispatch(addUser(obj));
        navigate("/myProfile");
    }

    function authDataHandler() {
        dispatch(handleSignup(email, password, setError, userDataHandler));
    }

    return (
        <div>
            {uploadProgress && <Loader />}
            <div className="content">
                <div className="flex flex-col items-center justify-center h-screen dark">
                    <div className="w-full max-w-md bg-green-950 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-200 mb-4">
                            Регистрация
                        </h2>
                        <div className="flex flex-col">
                            <label
                                style={{
                                    backgroundImage: `url(${avatar})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-1/3 mb-4 m-auto aspect-square rounded-full border-0 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-xs text-center text-gray-500 dark:text-gray-400">
                                        фото профиля
                                    </p>
                                </div>
                                <input
                                    onChange={(e) =>
                                        uploadFile(
                                            e.target.files[0],
                                            setAvatar,
                                            setUploadProgress
                                        )
                                    }
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Ваше имя или вашей организации"
                                className=" text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="ваш номер телефона"
                                className=" text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
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
                                Уже есть аккаунт?
                                <a
                                    className="text-sm text-blue-500 -200 hover:underline mt-4 ml-1"
                                    href="/sign-in"
                                >
                                    войти
                                </a>
                            </p>
                            <p className="text-red-500 mt-4">{error}</p>
                            <button
                                onClick={authDataHandler}
                                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                            >
                                Регистрация
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthSignUp;
