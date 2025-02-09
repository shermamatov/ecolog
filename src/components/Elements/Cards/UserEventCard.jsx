import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteEvent } from "../../../store/reducers/eventReducer";

const UserEventCard = ({ item, user }) => {
    let email = useSelector((item) => item.auth.user);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    return (
        <div
            style={{
                backgroundImage: `url(${item?.mainImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={() => navigate(`/event/${item?.id}`)}
            className="relative aspect-video md:aspect-[6/1] rounded-xl backdrop-blur-md cursor-pointer"
        >
            <div className="w-full h-full flex items-end p-4 backdrop-brightness-50 text-white">
                <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl mb-1 md:mb-2">
                        {item?.title}
                    </h3>
                    <p className="text-sm md:text-base">
                        Когда: {item?.date}, начало в {item?.time}
                    </p>
                    {email == user && (
                        <div className="flex mt-4">
                            <button
                                onClick={(e) => {
                                    navigate(`/editEvent/${item?.id}`);
                                    e.stopPropagation();
                                }}
                                className="bg-purple-500 rounded-md px-4 py-1"
                            >
                                редактировать
                            </button>
                            <a href="/myProfile">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(deleteEvent(item?.id));
                                    }}
                                    class="flex justify-center items-center gap-2 w-28 h-8 ml-2 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                                >
                                    <svg
                                        viewBox="0 0 15 15"
                                        class="w-5 fill-white"
                                    >
                                        <svg
                                            class="w-6 h-6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                            ></path>
                                        </svg>
                                        Button
                                    </svg>
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserEventCard;
