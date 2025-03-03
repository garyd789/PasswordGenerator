'use client'
import GeneratePasswordButton from "../components/button";

export default function PasswordPage(){

    return (
        <div className="border border-red-500 bg-gradient-to-b from-[#020024] to-[#090979] text-center flex flex-col h-screen items-center justify-center"> 
            <h1 className="text-4xl pb-20 text-white">
            Password Page 
            </h1>
                <div>
                    <GeneratePasswordButton/>
                </div>
        </div>

    );
}