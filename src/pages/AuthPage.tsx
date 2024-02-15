import SignUp from "@/components/AuthForm/SignUp.tsx";
import {useState} from "react";
import SignIn from "@/components/AuthForm/SignIn.tsx";


const AuthPage = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const onClickCreateNewAccount = () => {
        setIsSignIn(false)
    }

    const onClickSignIn = () => {
        setIsSignIn(true)
    }

    return (
        <div className='flex items-center justify-center min-h-[100vh]'>
            {isSignIn ? <SignIn onClickCreateNewAccount={onClickCreateNewAccount}/> : <SignUp onClickSignIn={onClickSignIn}/>}
        </div>
    );
};

export default AuthPage;