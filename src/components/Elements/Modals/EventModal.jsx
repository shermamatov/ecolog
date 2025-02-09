import React, { useState } from "react";

const EventModal = ({ setModalState }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = () => {
        let obj = {
            name,
            number,
        };
        setName("");
        setNumber("");
    };

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-10">
            <div className="relative w-full max-w-screen-mob bg-white rounded-md p-4 flex flex-col">
                <h2 className="text-2xl font-semibold">Заявка</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute right-4 top-4"
                    onClick={() => setModalState(false)}
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <input
                    className="input mt-4"
                    placeholder="Ваше имя"
                    type="text"
                />
                <input
                    className="input mt-2"
                    placeholder="Ваш номер"
                    type="text"
                />
                <button className="w-full mt-4 h-10 bg-green-500 text-white rounded">
                    я приду
                </button>
            </div>
        </div>
    );
};

export default EventModal;
