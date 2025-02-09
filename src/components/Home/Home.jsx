import React from "react";
import HeroBlock from "./Blocks/HeroBlock";
import EventsListBlock from "./Blocks/EventsListBlock";
import DonationBlock from "./Blocks/DonationBlock";
import BlogsBlock from "./Blocks/BlogsBlock";

const Home = () => {
    return (
        <div>
            <HeroBlock />
            <EventsListBlock />
            <DonationBlock />
            <BlogsBlock />
        </div>
    );
};

export default Home;
