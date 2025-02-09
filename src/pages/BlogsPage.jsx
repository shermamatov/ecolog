import React from "react";
import { blogsArr } from "../consts";
import BlogsCard from "../components/Elements/Cards/BlogsCard";

const BlogsPage = () => {
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
                                интересные статьи
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {blogsArr?.map((item) => (
                        <BlogsCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
