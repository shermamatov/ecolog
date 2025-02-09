import React from "react";
import { useNavigate } from "react-router-dom";

const DonateCard = ({ item }) => {
    let navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/donate/${item.id}`)}
            style={{
                backgroundImage: `url(${item.mainImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative aspect-video md:aspect-[4/1] rounded-xl backdrop-blur-md cursor-pointer"
        >
            <div className="w-full h-full flex items-end p-4 backdrop-brightness-50 text-white">
                <div className="flex flex-col">
                    <h3 className="text-xl md:text-3xl mb-2">{item.title}</h3>
                    <p>Организация: {item.organization}</p>
                    <p>Необходимая сумма: {item.money}</p>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;
