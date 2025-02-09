import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/reducers/eventReducer";
import EventCard from "../components/Elements/Cards/EventCard";

const EventPage = () => {
    let events = useSelector((item) => item.events.events);
    let dipatch = useDispatch();
    useEffect(() => {
        dipatch(getEvents());
    }, []);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(https://cdnstatic.rg.ru/uploads/images/photogallery/2020/08/28/b442abf1fe6d302/b442abf1fe6d3021598625568.JPG)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative h-[40vh] md:h-[60vh] object-cover w-full "
            >
                <div className="w-full h-full backdrop-brightness-75 backdrop-blur-sm">
                    <div className="content flex text-start items-center h-full">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-5xl ">
                                Мероприятия
                            </h1>

                            {/* <p className="md:w-[50%] text-sm md:text-base mt-8">
                                {event?.description}
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                {/* <h1 className="text-4xl md:text-5xl font-semibold mt-16">
                Мероприятия
            </h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {events?.map((item) => (
                        <EventCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
