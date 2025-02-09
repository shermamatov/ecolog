import React from "react";
import logo from "../../assets/ecologLogo.png";
const Footer = () => {
    return (
        <div className="h-[180px] bg-green-900 border-t mt-16 text-center flex items-center justify-center flex-col">
            <img className="w-32 md:w-36" src={logo} alt="" />
            <p className="text-white mt-2">@ The Path of Samurai</p>
        </div>
    );
};

export default Footer;
