import React from "react";
import { connect } from "react-redux";
import { updateRegPostAction } from '../../redux/authReducer'
import Auth from "./Auth";


let mapStateToProps = (state) => {

    return {
        data: state.auth,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        updateRegForm: (name, password, email) => {
            dispatch(updateRegPostAction(name, password, email));
        },
    }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
export default AuthContainer; 