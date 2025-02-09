import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../fire";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const stater = {
    events: [],
    oneEvent: {},
};

let reduxConsts = {
    GET_EVENTS: "GET_EVENTS",
    GET_ONE_EVENT: "GET_ONE_EVENT",
};

const eventRef = collection(db, "events");

export const eventReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.GET_EVENTS:
            return { ...state, events: action.payload };
        case reduxConsts.GET_ONE_EVENT:
            return { ...state, oneEvent: action.payload };
        default:
            return state;
    }
};
export const addEvent = (tour) => {
    return async () => {
        try {
            await addDoc(eventRef, tour);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("done");
        }
    };
};
export const getEvents = () => {
    return async (dispatch) => {
        try {
            let data = await getDocs(eventRef);
            dispatch({
                type: reduxConsts.GET_EVENTS,
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

export const getOneEvent = (id) => {
    return async (dispatch) => {
        try {
            const oneEventRef = doc(db, "events", id);
            const data = await getDoc(oneEventRef);
            dispatch({
                type: reduxConsts.GET_ONE_EVENT,
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

export const editEvent = (id, data) => {
    return async (dispatch) => {
        try {
            const oneEventRef = doc(db, "events", id);
            await updateDoc(oneEventRef, data);
            dispatch(getEvents());
            console.log("все готово все изменил");
        } catch (e) {
            console.log("все говно");
            console.log(e);
        }
    };
};

export const deleteEvent = (id) => {
    return async (dispatch) => {
        try {
            const eventDeleteRef = doc(db, "events", id);
            await deleteDoc(eventDeleteRef);
            dispatch(getEvents());
        } catch (e) {
            console.log("ЖОПА" + e);
        }
    };
};

export const uploadFile = (stateName, setStateName, setUploadProgress) => {
    if (stateName) {
        const storageRef = ref(storage, "images/" + stateName.name);
        const uploadTask = uploadBytesResumable(storageRef, stateName);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress !== 100 ? true : false);
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case "storage/unauthorized":
                        break;
                    case "storage/canceled":
                        break;
                    case "storage/unknown":
                        break;
                    default:
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setStateName(downloadURL);
                    console.log("File available at", downloadURL);
                });
            }
        );
    }
};
