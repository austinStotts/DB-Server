import React from "react"
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

export default function Login() {
    return (
        <div>
            <GoogleLogin
                clientId="189356955482-r5t2hgsfgo7lqcmjo4m2at2k2477m3f7.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
    )
}