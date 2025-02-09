import React, { useEffect } from "react";
import { donateArr } from "../../../consts";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneDonate } from "../../../store/reducers/donateReducer";
import { getSomeUser } from "../../../store/reducers/userReducer";

const DonateDetails = () => {
    let { id } = useParams();
    let donate = useSelector((item) => item.donates.oneDonate);
    let someUser = useSelector((item) => item.users.someUser);

    let dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(getOneDonate(id));
    }, []);
    useEffect(() => {
        dispatch(getSomeUser(donate?.userId));
    }, [donate]);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${donate?.mainImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative h-[60vh] object-cover w-full "
            >
                <div className="w-full h-full backdrop-brightness-75 backdrop-blur-sm">
                    <div className="content flex text-start items-center h-full">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-5xl ">
                                {donate?.title}
                            </h1>

                            {/* <p className="md:w-[50%] text-sm md:text-base mt-8">
                                {donate?.description}
                            </p> */}
                        </div>
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
                    <h2 className="text-3xl font-bold">
                        описание сбора средств
                    </h2>
                    <p className="md:w-[80%] text-sm md:text-lg font-medium mt-4 md:mt-8">
                        {donate?.description}
                    </p>
                    <div className="mt-8">
                        <p className="text-lg md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">Кто:</span>{" "}
                            {donate?.organization}
                        </p>
                        <p className="text-lg md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Необходимая сумма:
                            </span>{" "}
                            {donate?.money}
                        </p>
                        <p className="text-lg md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Реквизиты:
                            </span>{" "}
                            {donate?.bankAccount}
                        </p>
                        <p className="text-lg md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">
                                Контакты:
                            </span>{" "}
                            {donate?.number}
                        </p>
                        <p className="text-lg md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold">Почта:</span>{" "}
                            {donate?.email}
                        </p>
                        <p className="text-lg md:text-xl font-medium mt-2">
                            <span className="opacity-50 font-bold"></span>{" "}
                            {donate?.optionaly}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateDetails;
