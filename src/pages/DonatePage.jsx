import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonates } from "../store/reducers/donateReducer";
import DonateCard from "../components/Elements/Cards/DonateCard";

const DonatePage = () => {
    let donate = useSelector((item) => item.donates.donates);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDonates());
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
                                Сборы средств
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="grid grid-cols-1 gap-8 mt-8">
                    {donate.map((item) => (
                        <DonateCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
