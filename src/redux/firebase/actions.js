const FIREBASE_SET_NAME = "FIREBASE_GET_NAME";
const FIREBASE_SET_POINT_REALTIME = "FIREBASE_GET_POINT_REALTIME";

export const setName = (item)=> ({
    type: FIREBASE_SET_NAME,
    payload: item 
});

export const setRealTimePoint = (item)=> ({
    type: FIREBASE_SET_POINT_REALTIME,
    payload: item 
});