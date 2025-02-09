import React, { useEffect, useState } from "react";
import { eventsArr } from "../../../consts";
import { useNavigate, useParams } from "react-router-dom";
import "../../../App.css";
import EventModal from "../../Elements/Modals/EventModal";
import { useDispatch, useSelector } from "react-redux";
import { editEvent, getOneEvent } from "../../../store/reducers/eventReducer";
import { getSomeUser } from "../../../store/reducers/userReducer";

const EventDetails = () => {
    let navigate = useNavigate();
    let [modalState, setModalState] = useState(false);
    let email = useSelector((item) => item.auth.user);
    let user = useSelector((item) => item.users.oneUser);
    let someUser = useSelector((item) => item.users.someUser);
    let { id } = useParams();
    let event = useSelector((item) => item.events.oneEvent);
    let dispatch = useDispatch();

    function addMembers() {
        let eventObj = { ...event };
        eventObj?.members?.push({
            name: user?.userName,
            number: user?.phone,
            userId: user?.id,
        });
        dispatch(editEvent(id, eventObj));
        dispatch(getOneEvent(id));
    }

    function deleteMembers() {
        let eventObj = { ...event };
        let filteredEvent = eventObj?.members?.filter(
            (item) => item?.userId !== user?.id
        );
        eventObj.members = filteredEvent;
        dispatch(editEvent(id, eventObj));
        dispatch(getOneEvent(id));
    }

    function memberChecker() {
        let eventObj = { ...event };
        return eventObj?.members?.some((item) => item?.userId === user?.id);
    }

    useEffect(() => {
        dispatch(getOneEvent(id));
    }, []);

    useEffect(() => {
        dispatch(getSomeUser(event?.userId));
    }, [event]);

    return (
        <div>
            {modalState && <EventModal setModalState={setModalState} />}
            <div
                style={{
                    backgroundImage: `url(${event?.mainImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative h-[40vh] md:h-[60vh] object-cover w-full "
            >
                <div className="w-full h-full backdrop-brightness-75 backdrop-blur-sm">
                    <div className="relative content flex text-start items-center justify-between h-full">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-5xl ">
                                {event?.title}
                            </h1>
                        </div>
                        <img
                            className="w-[35%] aspect-video rounded object-cover"
                            src={event?.mainImg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="content">
                    <div
                        onClick={() => navigate(`/profile/${someUser?.id}`)}
                        className="flex items-center bg-white px-2 py-1 rounded-lg mb-8 shadow-xl w-auto cursor-pointer"
                    >
                        <img
                            className="w-12 rounded-full aspect-square object-cover "
                            src={someUser?.avatar}
                            alt=""
                        />
                        <p className="font-semibold ml-2">
                            {someUser?.userName}
                        </p>
                    </div>
                    <h2 className="text-3xl font-bold">описание мероприятия</h2>
                    <p className="md:w-[80%] text-sm md:text-lg font-medium mt-8">
                        {event?.description}
                    </p>
                    <div className="mt-8">
                        <p className="text-base md:text-xl font-medium">
                            <span className="opacity-50 font-bold">Когда:</span>{" "}
                            {event?.date}, начало в {event?.time}
                        </p>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">Кто:</span>{" "}
                            {event?.organization}
                        </p>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Что делать:
                            </span>{" "}
                            {event?.todo}
                        </p>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">Где:</span>{" "}
                            {event?.location}
                        </p>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Сколько:
                            </span>{" "}
                            {event?.numberPeople} человек
                        </p>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Контакты:
                            </span>{" "}
                            {event?.number}
                        </p>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">Почта:</span>{" "}
                            {event?.email}
                        </p>
                        <div className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Что взять с собой:
                            </span>{" "}
                            <ul className="list-decimal ml-8 text-sm md:text-lg mt-1">
                                {event?.tools
                                    ?.split(",")
                                    ?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                            </ul>
                        </div>
                        <p className="text-base md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Что еще:
                            </span>{" "}
                            {event?.optionaly}
                        </p>
                        {memberChecker() ? (
                            <button
                                onClick={() =>
                                    email
                                        ? deleteMembers()
                                        : navigate("/sign-in")
                                }
                                className="w-full md:max-w-52 py-2 bg-red-500 text-white font-semibold rounded mt-6"
                            >
                                Я не приду
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    email ? addMembers() : navigate("/sign-in")
                                }
                                className="w-full md:max-w-52 py-2 bg-green-500 text-white font-semibold rounded mt-6"
                            >
                                Я приду
                            </button>
                        )}

                        <br />
                        <h2 className="text-3xl font-bold mt-16">Заявки</h2>
                        <div className="table-container mt-4">
                            <table>
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Name</th>
                                        <th>Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {event?.members?.map((member, index) => (
                                        <tr
                                            onClick={() =>
                                                navigate(
                                                    `/profile/${member.userId}`
                                                )
                                            }
                                            className="cursor-pointer"
                                            key={index}
                                        >
                                            <td>{index + 1}</td>
                                            <td>{member.name}</td>
                                            <td>{member.number}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
