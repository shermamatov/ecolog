import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDonate } from "../../../store/reducers/donateReducer";
import { uploadFile } from "../../../store/reducers/eventReducer";
import Loader from "../../Elements/Other/Loader";
import { useNavigate } from "react-router-dom";

const UserDonateAdd = () => {
    let dipsatch = useDispatch();
    let userEmail = useSelector((item) => item.auth.user);
    let user = useSelector((item) => item.users.oneUser);
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [money, setMoney] = useState("");
    let [organization, setOrganization] = useState("");
    let [number, setNumber] = useState("");
    let [email, setEmail] = useState("");
    let [optionaly, setOptionaly] = useState("");
    let [mainImg, setMainImg] = useState("");
    let [bankAccount, setBankAccount] = useState("");
    const [uploadProgress, setUploadProgress] = useState(null);
    let navigate = useNavigate();

    function dataHandler() {
        let obj = {
            title,
            description,
            money,
            organization,
            number,
            email,
            optionaly,
            mainImg,
            bankAccount,
            author: user?.userName,
            authorId: userEmail,
            userId: user?.id,
        };
        dipsatch(addDonate(obj));
        navigate("/myProfile");
    }
    return (
        <div>
            {uploadProgress && <Loader />}

            <div className="content">
                <h1 className="text-2xl md:text-3xl font-medium mt-8">
                    Обьявить сбор средств
                </h1>
                <div className="mt-4">
                    <div>
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Заголовок
                        </label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="Заголовок"
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Описание
                        </label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            className="input h-32 shadow-none mt-1"
                            placeholder="Описание"
                        ></textarea>
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Реквизиты
                        </label>
                        <input
                            onChange={(e) => setBankAccount(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="Реквизиты"
                        />
                    </div>{" "}
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Необходимая сумма
                        </label>
                        <input
                            onChange={(e) => setMoney(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="Необходимая сумма"
                        />
                    </div>{" "}
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Организатор
                        </label>
                        <input
                            onChange={(e) => setOrganization(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="ваше имя или название организации"
                        />
                    </div>{" "}
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Картинка
                        </label>
                        <input
                            onChange={(e) =>
                                uploadFile(
                                    e.target.files[0],
                                    setMainImg,
                                    setUploadProgress
                                )
                            }
                            type="file"
                            className="input mt-1"
                        />
                    </div>{" "}
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Ваш номер телефона
                        </label>
                        <input
                            onChange={(e) => setNumber(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="+996707320433"
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Ваша почта
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="samurai@gmail.com"
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Дополнительно
                        </label>
                        <input
                            onChange={(e) => setOptionaly(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="Дополнительно"
                        />
                    </div>
                    <button
                        onClick={() => dataHandler()}
                        className="button mt-4 bg-green-500 text-white"
                    >
                        Опубликовать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDonateAdd;
