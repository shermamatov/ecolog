import React from "react";
import { blogsArr } from "../../../consts";
import BlogsCard from "../../Elements/Cards/BlogsCard";

const BlogsBlock = () => {
    return (
        <div className="content">
            <h1 className="text-4xl md:text-5xl font-semibold mt-16">Статьи</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {blogsArr?.map((item) => (
                    <BlogsCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default BlogsBlock;
