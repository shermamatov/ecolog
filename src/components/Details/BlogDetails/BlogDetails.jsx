import React from "react";
import { blogsArr } from "../../../consts";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    let { id } = useParams();
    let blog = blogsArr.find((item) => item.id == id);

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${blog?.mainImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative h-[50vh] md:h-[70vh] object-cover w-full "
            >
                <div className="w-full h-full backdrop-brightness-75 backdrop-blur-sm">
                    <div className="content flex text-start items-center h-full">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-4xl md:w-[80%] ">
                                {blog?.title}
                            </h1>
                            <p className="mt-4 font-normal">{blog?.mainDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                {blog?.content?.map((item, index) => (
                    <div className="mt-8" key={index}>
                        <h2 className="text-2xl md:text-4xl font-medium mb-6">
                            {item?.title}
                        </h2>
                        {item.description.split("!!").map((item2, index) => (
                            <p key={index} className="font-medium mt-2">
                                {item2}
                            </p>
                        ))}
                        <img
                            className="mt-6 object-cover w-full md:w-[80%] rounded-md aspect-video m-auto"
                            src={item?.img}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogDetails;
