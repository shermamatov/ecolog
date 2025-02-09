import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRout from "./routes/MainRoutes";
import { useDispatch, useSelector } from "react-redux";
import { authListener } from "./store/reducers/authReducer";
import { getOneUser } from "./store/reducers/userReducer";

function App() {
    let dispatch = useDispatch();

    let userEmail = useSelector((item) => item.auth.user);
    useEffect(() => {
        dispatch(getOneUser(userEmail));
    }, [userEmail]);

    useEffect(() => {
        dispatch(authListener());
    }, []);

    return (
        <div className="App">
            <Header />
            <MainRout />
            <Footer />
        </div>
    );
}

export default App;
