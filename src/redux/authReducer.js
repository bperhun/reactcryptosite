
const UPDATE_REGISTR_FORM = 'UPDATE-REGISTR-FORM';
const SET_USER = 'SET-USER';
const LOG_OUT = 'LOG-OUT';

let initialState = {
    templatesData:
    {
        name: '',
        password: '',
        email: ''
    },
    currentUser: {

    },
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REGISTR_FORM: {
            let copyState = { ...state };
            copyState.templatesData = {
                name: action.userName,
                password: action.password,
                email: action.email
            }

            return copyState;
        }
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                currentUser: {},
                isAuth: false,
            }
        default:
            return state;
    }
}

export const updateRegPostAction = (userName, password, email) => {
    return {
        type: UPDATE_REGISTR_FORM,
        userName: userName,
        password: password,
        email: email,
    }
};

export const setUserAction = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
};

export const logOutAction = () => {
    return {
        type: LOG_OUT,
    }
};

export default authReducer;