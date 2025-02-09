import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../fire";

const stater = {
    users: [],
    userEvents: [],
    userDonates: [],
    oneUser: {},
    someUser: {},
};

let reduxConsts = {
    GET_USERS: "GET_USERS",
    GET_ONE_USER: "GET_ONE_USER",
    GET_SOME_USER: "GET_SOME_USER",
    GET_USER_EVENTS: "GET_USER_EVENTS",
    GET_USER_DONATES: "GET_USER_DONATES",
};

const usersRef = collection(db, "users");
const eventRef = collection(db, "events");
const donateRef = collection(db, "donates");

export const userReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.GET_USERS:
            return { ...state, users: action.payload };
        case reduxConsts.GET_ONE_USER:
            return { ...state, oneUser: action.payload };
        case reduxConsts.GET_SOME_USER:
            return { ...state, someUser: action.payload };
        case reduxConsts.GET_USER_EVENTS:
            return { ...state, userEvents: action.payload };
        case reduxConsts.GET_USER_DONATES:
            return { ...state, userDonates: action.payload };
        default:
            return state;
    }
};

export const addUser = (user) => {
    return async () => {
        try {
            await addDoc(usersRef, user);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("done");
        }
    };
};

export const getOneUser = (email) => {
    return async (dispatch) => {
        try {
            const q = query(usersRef, where("email", "==", email));
            const data = await getDocs(q);

            dispatch({
                type: reduxConsts.GET_ONE_USER,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))[0],
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getUserEvents = (email) => {
    return async (dispatch) => {
        try {
            const q = query(eventRef, where("authorId", "==", email));
            const data = await getDocs(q);
            dispatch({
                type: reduxConsts.GET_USER_EVENTS,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getUserDonates = (email) => {
    return async (dispatch) => {
        try {
            const q = query(donateRef, where("authorId", "==", email));
            const data = await getDocs(q);
            dispatch({
                type: reduxConsts.GET_USER_DONATES,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getSomeUser = (id) => {
    return async (dispatch) => {
        try {
            const oneUserRef = doc(db, "users", id);
            const data = await getDoc(oneUserRef);
            dispatch({
                type: reduxConsts.GET_SOME_USER,
                payload: {
                    ...data.data(),
                    id: data.id,
                },
            });
            // const q = query(usersRef, where("email", "==", email));
            // const data = await getDocs(q);

            // dispatch({
            //     type: reduxConsts.GET_SOME_USER,
            //     payload: data.docs.map((doc) => ({
            //         ...doc.data(),
            //         id: doc.id,
            //     }))[0],
            // });
        } catch (e) {
            console.log(e);
        }
    };
};
