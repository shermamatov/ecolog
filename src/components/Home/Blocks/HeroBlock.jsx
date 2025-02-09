import React from "react";

const HeroBlock = () => {
    return (
        <div
            style={{
                backgroundImage: `url(https://images.inc.com/uploaded_files/image/1920x1080/getty_132441778_64445.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative h-[100vh] object-cover w-full backdrop-blur"
        >
            <div className="content flex text-start items-center h-full">
                <div className="text-white ">
                    <h1 className="text-3xl md:text-5xl ">
                        За природу и двор <br /> стреляю в упор
                    </h1>
                    <p className="md:w-[40%] text-sm md:text-base mt-4">
                        Присоединяйтесь к Eco-Team и вместе с нами делайте мир
                        зеленым, чистым и устойчивым! Участвуйте в акциях по
                        охране окружающей среды, обменивайтесь идеями и
                        вдохновляйтесь для создания лучшего будущего для нас
                        всех. 🌿✨
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroBlock;
