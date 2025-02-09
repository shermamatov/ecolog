import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserDonates,
    getUserEvents,
} from "../../../store/reducers/userReducer";
import UserEventCard from "../../Elements/Cards/UserEventCard";
import UserDonateCard from "../../Elements/Cards/UserDonateCard";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    let user = useSelector((item) => item.users.oneUser);
    let userEvents = useSelector((item) => item.users.userEvents);
    let userDonates = useSelector((item) => item.users.userDonates);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(getUserEvents(user?.email));
        dispatch(getUserDonates(user?.email));
    }, [user]);
    return (
        <div className="mt-8">
            <div className="content flex md:justify-between md:flex-row flex-col">
                <div className="w-full md:w-[25%]">
                    <img
                        className="max-w-[260px] object-cover aspect-square rounded-full m-auto md:m-0"
                        src={user?.avatar}
                        alt=""
                    />
                    <h1 className="font-medium text-3xl mt-4">
                        {user?.userName}
                    </h1>
                    <div className="flex justify-between w-full md:w-[80%] mt-4">
                        <div className="flex flex-col items-center w-1/2">
                            <p className="font-bold text-lg">
                                {userEvents?.length}
                            </p>
                            <p className="font-semibold text-gray-500">
                                мероприятия
                            </p>
                        </div>
                        <div></div>
                        <div className="flex flex-col items-center w-1/2">
                            <p className="font-bold text-lg">
                                {userDonates?.length}
                            </p>
                            <p className="font-semibold text-gray-500">
                                сборов
                            </p>
                        </div>
                    </div>
                    <p className="font-medium mt-4">
                        <span className="opacity-60">номер: </span>
                        {user?.phone}
                    </p>
                    <p className="font-medium">
                        <span className="opacity-60">почта:</span> {user?.email}
                    </p>
                    <button
                        onClick={() => navigate("/addEvent")}
                        class="border mt-2 hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-full md:w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-bold"
                    >
                        <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                        <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
                        <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
                        <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
                        <p class="z-10">Добавить мероприятие</p>
                    </button>
                    <button
                        onClick={() => navigate("/addDonate")}
                        class="relative mt-2 group cursor-pointer text-sky-50  overflow-hidden h-12 w-full md:w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-bold"
                    >
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                        <p class="z-10">Обьявить сбор средств</p>
                    </button>
                </div>
                <div className="w-full md:w-[74%] md:mt-0 mt-16">
                    <h2 className="text-2xl md:text-4xl font-bold md:font-semibold mb-4">
                        Мои мероприятия
                    </h2>
                    <hr />
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {userEvents?.map((item) => (
                            <UserEventCard item={item} key={item.id} />
                        ))}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold md:font-semibold  mb-4 mt-8">
                        Мои сборы средств
                    </h2>
                    <hr />
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {userDonates?.map((item) => (
                            <UserDonateCard item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
