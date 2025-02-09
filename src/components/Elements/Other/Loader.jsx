import React from "react";
import "../Elements.css";
const Loader = () => {
    return (
        <div className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
            <div className="loaderAdmin"></div>
        </div>
    );
};

export default Loader;
