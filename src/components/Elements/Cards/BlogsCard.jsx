import React from "react";
import { useNavigate } from "react-router-dom";

const BlogsCard = ({ item }) => {
    let navigate = useNavigate();
    return (
        <div
            className="cursor-pointer"
            onClick={() => navigate(`/blog/${item?.id}`)}
        >
            <img
                className="aspect-video object-cover rounded-md"
                src={item.mainImg}
                alt=""
            />
            <h2 className="font-semibold text-xl mt-2">{item.title}</h2>
            <p className="font-medium opacity-60">{item.author}</p>
        </div>
    );
};

export default BlogsCard;
