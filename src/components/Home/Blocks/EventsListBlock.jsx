import React, { useEffect } from "react";
import { eventsArr } from "../../../consts";
import EventCard from "../../Elements/Cards/EventCard";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../store/reducers/eventReducer";

const EventsListBlock = () => {
    let events = useSelector((item) => item.events.events);
    let dipatch = useDispatch();
    useEffect(() => {
        dipatch(getEvents());
    }, []);
    return (
        <div className="content">
            <h1 className="text-4xl md:text-5xl font-semibold mt-16">
                Мероприятия
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {events?.map((item) => (
                    <EventCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default EventsListBlock;
