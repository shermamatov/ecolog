import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, uploadFile } from "../../../store/reducers/eventReducer";
import Loader from "../../Elements/Other/Loader";
import { useNavigate } from "react-router-dom";

const UserEventAdd = () => {
    let userEmail = useSelector((item) => item.auth.user);
    let user = useSelector((item) => item.users.oneUser);
    let dispatch = useDispatch();
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [date, setDate] = useState("");
    let [mainImg, setMainImg] = useState("");
    let [tools, setTools] = useState("");
    let [organization, setOrganization] = useState("");
    let [time, setTime] = useState("");
    let [location, setLocation] = useState("");
    let [number, setNumber] = useState("");
    let [email, setEmail] = useState("");
    let [todo, setTodo] = useState("");
    let [numberPeople, setNumberPeople] = useState("");
    let [optionaly, setOptionaly] = useState("");
    const [uploadProgress, setUploadProgress] = useState(null);
    let navigate = useNavigate();
    function dataHandler() {
        let obj = {
            title,
            description,
            date,
            mainImg,
            tools,
            organization,
            time,
            location,
            number,
            email,
            todo,
            numberPeople,
            optionaly,
            author: user?.userName,
            authorId: userEmail,
            members: [],
            userId: user?.id,
        };
        dispatch(addEvent(obj));
        navigate("/myProfile");
    }

    return (
        <div>
            {uploadProgress && <Loader />}
            <div className="content">
                <h1 className="text-2xl md:text-3xl font-medium mt-8">
                    Добавить мероприятие
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
                            className="input"
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
                            Что нужно делать
                        </label>
                        <input
                            onChange={(e) => setTodo(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="собрать мусор"
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Что взять с собой{" "}
                            <span className="opacity-50 font-bold">
                                (перечисляйте предметы через запятую чтобы их
                                отделить)
                            </span>
                        </label>
                        <input
                            onChange={(e) => setTools(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="Лопату, перчатки, мешки"
                        />
                    </div>{" "}
                    <div className="flex">
                        <div className="mt-3">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Дата мероприятия
                            </label>
                            <input
                                onChange={(e) => setDate(e.target.value)}
                                type="text"
                                className="input mt-1"
                                placeholder="5 мая, 2024"
                            />
                        </div>
                        <div className="mt-3 ml-1">
                            <label
                                htmlFor="inputname"
                                className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                время начала
                            </label>
                            <input
                                onChange={(e) => setTime(e.target.value)}
                                type="time"
                                className="input mt-1"
                                placeholder="Заголовок"
                            />
                        </div>{" "}
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Место проведения
                        </label>
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            type="text"
                            className="input mt-1"
                            placeholder="село Бостери, пансионат «Золотые пески»"
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
                            Необходимое количество людей
                        </label>
                        <input
                            onChange={(e) => setNumberPeople(e.target.value)}
                            type="number"
                            className="input mt-1"
                            placeholder="количество людей"
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

export default UserEventAdd;
