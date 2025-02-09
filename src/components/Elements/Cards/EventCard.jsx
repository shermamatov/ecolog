import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ item }) => {
    let navigate = useNavigate();
    return (
        <div
            style={{
                backgroundImage: `url(${item.mainImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={() => navigate(`/event/${item.id}`)}
            className="relative aspect-square md:aspect-video rounded-xl backdrop-blur-md cursor-pointer"
        >
            <div className="w-full h-full flex items-end p-4 backdrop-brightness-50 text-white">
                <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl mb-1 md:mb-2">
                        {item.title}
                    </h3>
                    <p className="text-sm md:text-base">
                        Что делать: {item.todo}
                    </p>
                    <p className="text-sm md:text-base">
                        Место: {item.location}
                    </p>
                    <p className="text-sm md:text-base">Дата: {item.date}</p>
                    <p className="text-sm md:text-base">
                        Организатор: {item.organization}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
