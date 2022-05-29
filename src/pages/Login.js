import React, {useRef} from "react";
import Input from "../components/UI/Input"
import Button from "../components/UI/Button"

const Login = (props) => {
    const emailInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        //TODO validate and send
    }
    return     <form  onSubmit={submitHandler}>
    <Input
      ref={emailInputRef}
      label='Email'
      input={{
        id: 'email',
        type: 'text',
      }}
    />
    <Button>Login</Button>

  </form>
}

export default Login;