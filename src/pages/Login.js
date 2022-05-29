import React from "react";
import Input from "../components/Input"

const Login = (props) => {
    return <React.Fragment>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
    </React.Fragment>
}

export default Login;