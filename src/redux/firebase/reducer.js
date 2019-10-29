const FIREBASE_SET_NAME = "FIREBASE_GET_NAME";
const FIREBASE_SET_POINT_REALTIME = "FIREBASE_GET_POINT_REALTIME";

const INIT_STATE = {
    name: "",
    point: "",
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FIREBASE_SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case FIREBASE_SET_POINT_REALTIME:
            return {
                ...state,
                point: action.payload
            };
        default: return { ...state };
    }
}