import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EventDetailsPage from "../pages/EventDetailsPage";
import DonateDetailsPage from "../pages/DonateDetailsPage";
import UserEventAddPage from "../pages/UserEventAddPage";
import UserDonateAddPage from "../pages/UserDonateAddPage";
import UserEventEditPage from "../pages/UserEventEditPage";
import UserDonateEditPage from "../pages/UserDonateEditPage";
import AuthSignUpPage from "../pages/AuthSignUpPage";
import AuthSignInPage from "../pages/AuthSignInPage";
import MyProgfilePage from "../pages/MyProgfilePage";
import EventPage from "../pages/EventPage";
import DonatePage from "../pages/DonatePage";
import BlogsPage from "../pages/BlogsPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import ProfilePage from "../pages/ProfilePage";

const MainRout = () => {
    const userRoutes = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/event/:id", element: <EventDetailsPage />, id: 2 },
        { link: "/donate/:id", element: <DonateDetailsPage />, id: 3 },
        { link: "/blog/:id", element: <BlogDetailsPage />, id: 14 },
        { link: "/addEvent", element: <UserEventAddPage />, id: 4 },
        { link: "/addDonate", element: <UserDonateAddPage />, id: 5 },
        { link: "/editEvent/:id", element: <UserEventEditPage />, id: 6 },
        { link: "/editDonate/:id", element: <UserDonateEditPage />, id: 7 },
        { link: "/sign-up", element: <AuthSignUpPage />, id: 8 },
        { link: "/sign-in", element: <AuthSignInPage />, id: 9 },
        { link: "/myProfile", element: <MyProgfilePage />, id: 10 },
        { link: "/events", element: <EventPage />, id: 11 },
        { link: "/donates", element: <DonatePage />, id: 12 },
        { link: "/blogs", element: <BlogsPage />, id: 13 },
        { link: "/profile/:id", element: <ProfilePage />, id: 15 },
    ];

    return (
        <div>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default MainRout;
