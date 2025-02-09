import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../fire";

const stater = {
    donates: [],
    oneDonate: {},
};

let reduxConsts = {
    GET_DONATES: "GET_DONATES",
    GET_ONE_DONATES: "GET_ONE_DONATES",
};

const donateRef = collection(db, "donates");

export const donateReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.GET_DONATES:
            return { ...state, donates: action.payload };
        case reduxConsts.GET_ONE_DONATES:
            return { ...state, oneDonate: action.payload };
        default:
            return state;
    }
};

export const getDonates = () => {
    return async (dispatch) => {
        try {
            let data = await getDocs(donateRef);
            dispatch({
                type: reduxConsts.GET_DONATES,
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

export const addDonate = (tour) => {
    return async () => {
        try {
            await addDoc(donateRef, tour);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("done");
        }
    };
};

export const getOneDonate = (id) => {
    return async (dispatch) => {
        try {
            const oneDonateRef = doc(db, "donates", id);
            const data = await getDoc(oneDonateRef);
            dispatch({
                type: reduxConsts.GET_ONE_DONATES,
                payload: {
                    ...data.data(),
                    id: data.id,
                },
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const editDonates = (id, data) => {
    return async (dispatch) => {
        try {
            const oneDonateRef = doc(db, "donates", id);
            await updateDoc(oneDonateRef, data);
            dispatch(getDonates());
            console.log("все готово все изменил");
        } catch (e) {
            console.log("все говно");
            console.log(e);
        }
    };
};

export const deleteDonate = (id) => {
    return async (dispatch) => {
        try {
            const donateDeleteRef = doc(db, "donates", id);
            await deleteDoc(donateDeleteRef);
            dispatch(getDonates());
        } catch (e) {
            console.log("ЖОПА" + e);
        }
    };
};
