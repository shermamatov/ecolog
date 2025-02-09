import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { handleLogout } from "../../store/reducers/authReducer";
import logo from "../../assets/ecologLogo.png";
import burgerMenuIcon from "../../assets/burgerMenuIcon.svg";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    let [burgerState, setBurgerState] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let dispatch = useDispatch();
    let { pathname } = useLocation();
    let user = useSelector((item) => item.auth.user);
    let currentUser = useSelector((item) => item.users.oneUser);
    let navigate = useNavigate();
    return (
        <div>
            <BurgerMenu
                burgerState={burgerState}
                setBurgerState={setBurgerState}
            />
            <div
                className={`h-20 ${
                    pathname === "/"
                        ? "absolute backdrop-blur-sm backdrop-brightness-75 rounded-md"
                        : "bg-[#12291B]"
                } left-0 right-0 top-0 z-20 text-white`}
            >
                <div className="flex justify-between content items-center h-full">
                    <div className="flex items-center">
                        <img
                            className="w-32 md:w-36 cursor-pointer"
                            onClick={() => navigate("/")}
                            src={logo}
                            alt=""
                        />
                        {/* <h3
                        onClick={() => navigate("/")}
                        className="text-3xl font-bold"
                    >
                        ecolog
                    </h3> */}
                        <div className="hidden md:flex ml-24">
                            {user ? (
                                <div
                                    onClick={() => navigate("/myProfile")}
                                    className="cursor-pointer"
                                >
                                    Мой профиль
                                </div>
                            ) : (
                                <div
                                    onClick={() => navigate("/sign-in")}
                                    className="cursor-pointer"
                                >
                                    Мой профиль
                                </div>
                            )}
                            <div
                                onClick={() => navigate("/events")}
                                className="ml-6 cursor-pointer"
                            >
                                Мероприятия
                            </div>
                            <div
                                onClick={() => navigate("/donates")}
                                className="ml-6 cursor-pointer"
                            >
                                Сборы
                            </div>
                            <div
                                onClick={() => navigate("/blogs")}
                                className="ml-6 cursor-pointer"
                            >
                                Статьи
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                            <>
                                <img
                                    src={currentUser?.avatar}
                                    className="w-10 cursor-pointer object-cover rounded-full aspect-square"
                                    alt=""
                                    onClick={handleClick}
                                />
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                            navigate("/myProfile");
                                        }}
                                    >
                                        Профиль
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                            handleLogout();
                                            navigate("/");
                                        }}
                                    >
                                        Выйти
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <button
                                onClick={() => navigate("/sign-in")}
                                className="bg-green-700 py-1 px-8 rounded text-white"
                            >
                                войти
                            </button>
                        )}
                        <div className="md:hidden block">
                            <img
                                onClick={() => setBurgerState(true)}
                                className="w-8 ml-4"
                                src={burgerMenuIcon}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
