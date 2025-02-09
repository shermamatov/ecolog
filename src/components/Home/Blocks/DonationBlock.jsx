import React, { useEffect } from "react";
import { donateArr } from "../../../consts";
import DonateCard from "../../Elements/Cards/DonateCard";
import { useDispatch, useSelector } from "react-redux";
import { getDonates } from "../../../store/reducers/donateReducer";

const DonationBlock = () => {
    let donate = useSelector((item) => item.donates.donates);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDonates());
    }, []);
    return (
        <div className="content">
            <h1 className="text-4xl md:text-5xl font-semibold mt-16">Сборы</h1>
            <div className="grid grid-cols-1 gap-8 mt-8">
                {donate.map((item) => (
                    <DonateCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default DonationBlock;
