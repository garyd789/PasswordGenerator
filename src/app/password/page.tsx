'use client'
import GeneratePasswordButton from "../components/button";

export default function PasswordPage(){

    return (
        <div className="bg-gradient-to-b from-[#020024] to-[#090979] text-center flex flex-col h-screen items-center justify-center"> 
            <h1 className="text-4xl pb-10 text-white">
            Generate a Password
            </h1>
            <h2 className="text-md pb-10 text-white italic">
                Never use an insecure password again.
                <br />
                Click the button below to generate a new password.
            </h2>
                <div>
                    <GeneratePasswordButton/>
                </div>
        </div>

    );
}