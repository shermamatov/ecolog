import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    getSomeUser,
    getUserDonates,
    getUserEvents,
} from "../../../store/reducers/userReducer";
import UserEventCard from "../../Elements/Cards/UserEventCard";
import UserDonateCard from "../../Elements/Cards/UserDonateCard";

const Profile = () => {
    let someUser = useSelector((item) => item.users.someUser);
    let userEvents = useSelector((item) => item.users.userEvents);
    let userDonates = useSelector((item) => item.users.userDonates);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { id } = useParams();
    useEffect(() => {
        dispatch(getUserEvents(someUser?.email));
        dispatch(getUserDonates(someUser?.email));
    }, [someUser]);
    useEffect(() => {
        dispatch(getSomeUser(id));
    }, []);
    return (
        <div className="mt-8">
            <div className="content flex md:justify-between md:flex-row flex-col">
                <div className="w-full md:w-[25%]">
                    <img
                        className="max-w-[260px] object-cover aspect-square rounded-full m-auto md:m-0"
                        src={someUser?.avatar}
                        alt=""
                    />
                    <h1 className="font-medium text-3xl mt-4">
                        {someUser?.userName}
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
                        {someUser?.phone}
                    </p>
                    <p className="font-medium">
                        <span className="opacity-60">почта:</span>{" "}
                        {someUser?.email}
                    </p>
                </div>
                <div className="w-full md:w-[74%] md:mt-0 mt-16">
                    <h2 className="text-2xl md:text-4xl font-bold md:font-semibold mb-4">
                        Мои мероприятия
                    </h2>
                    <hr />
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {userEvents?.map((item) => (
                            <UserEventCard
                                user={someUser?.email}
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold md:font-semibold  mb-4 mt-8">
                        Мои сборы средств
                    </h2>
                    <hr />
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {userDonates?.map((item) => (
                            <UserDonateCard
                                user={someUser?.email}
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
