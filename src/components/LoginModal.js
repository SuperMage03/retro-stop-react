import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import {useRef, useState} from "react";
import ModalCloseBtn from "./ModalCloseBtn";
import { useForm } from "react-hook-form";


const LoginModal = () => {
    const closeModalRef = useRef(null);
    const [loginMode, setLoginMode ] = useState("login");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onLoginSubmit = (data) => {
        const requestUrl = `${process.env.REACT_APP_API_DOMAIN}/auth/login`;
        console.log(data.email)
    };

    const onRegisterSubmit = (data) => {
        const requestUrl = `${process.env.REACT_APP_API_DOMAIN}/auth/register`;

    };


    const LoginForm = () => {
        return (
            <form className={"pb-6"} onSubmit={handleSubmit(onLoginSubmit)}>
                <div className={"flex flex-col mb-5"}>
                    <label htmlFor="emailIpt">E-Mail</label>
                    <input id={"emailIpt"} className={"px-2 py-1 my-1 rounded border-2"} type="email" placeholder={"Your Email"} {...register("email", { required: true })} />
                    {errors.email && <span className={"text-red-400"}>This field is required</span>}
                </div>

                <div className={"flex flex-col mb-4"}>
                    <label htmlFor="passwordIpt">Password</label>
                    <input id={"passwordIpt"} className={"px-2 py-1 my-1 rounded border-2"} type="password" placeholder={"Your Password"} {...register("password", { required: true })} />
                    {errors.password && <span className={"text-red-400"}>This field is required</span>}
                </div>

                <div className={"flex flex-col mb-4"}>
                    <div className={"flex items-center"}>
                        <input id={"rememberMeIpt"} className={"mr-2"} type="checkbox" {...register("rememberMe")} />
                        <label htmlFor="rememberMeIpt">Remember Me</label>
                    </div>
                </div>

                <button type={"submit"} className={"w-full px-2 py-1 mb-4 bg-purple-400 hover:bg-purple-200 rounded text-amber-50"}>Login</button>

                <div className={"flex text-md"}>
                    <h1 className={"mr-3 text-gray-500"}>Not Registered?</h1>
                    <button className={"text-purple-500 hover:underline"} onClick={() => setLoginMode("signup")}>Create Account</button>
                </div>
            </form>
        );
    };

    const SignupForm = () => {
        return (
            <form className={"pb-6"} onSubmit={handleSubmit(onRegisterSubmit)}>
                <div className={"flex flex-col mb-5"}>
                    <label htmlFor="usernameIpt">Username</label>
                    <input id={"usernameIpt"} className={"px-2 py-1 my-1 rounded border-2"} type="text" placeholder={"Username"} {...register("username")} />
                </div>

                <div className={"flex flex-col mb-5"}>
                    <label htmlFor="emailIpt">E-Mail</label>
                    <input id={"emailIpt"} className={"px-2 py-1 my-1 rounded border-2"} type="email" placeholder={"Your Email"} {...register("email")} />
                </div>

                <div className={"flex flex-col mb-5"}>
                    <label htmlFor="passwordIpt">Password</label>
                    <input id={"passwordIpt"} className={"px-2 py-1 my-1 rounded border-2"} type="password" placeholder={"Your Password"} {...register("password")} />
                </div>

                <div className={"flex flex-col mb-4"}>
                    <label htmlFor="repeatPasswordIpt">Repeat Password</label>
                    <input id={"repeatPasswordIpt"} className={"px-2 py-1 my-1 rounded border-2"} type="password" placeholder={"Repeat Password"} {...register("passwordCopy")} />
                </div>

                <div className={"flex flex-col mb-4"}>
                    <div className={"flex items-center"}>
                        <input id={"termIpt"} className={"mr-2"} type="checkbox" />
                        <label htmlFor="termIpt">I agree to the term</label>
                    </div>
                </div>

                <button type={"submit"} className={"w-full px-2 py-1 mb-4 bg-purple-400 hover:bg-purple-200 rounded text-amber-50"}>Sign Up</button>

                <div className={"flex text-md"}>
                    <h1 className={"mr-3 text-gray-500"}>Have Account?</h1>
                    <button className={"text-purple-500 hover:underline"} onClick={() => setLoginMode("login")}>Login Here</button>
                </div>
            </form>
        );
    };


    return (
        <Modal label={"Login"} className={""} closeModalRef={closeModalRef}>
            <div className={"w-10/12 max-w-md bg-purple-50 my-6 mx-auto px-8 rounded"}>
                <div className={"flex justify-between items-center"}>
                    <h1 className={"text-xl my-6"}>Sign in to our platform</h1>
                    <ModalCloseBtn onClick={() => setLoginMode("login")} closeModalRef={closeModalRef} className={"text-lg hover:bg-purple-200 w-6 h-6 flex items-center justify-center rounded"}><FontAwesomeIcon icon={faXmark} /></ModalCloseBtn>
                </div>

                { loginMode === "login" && <LoginForm /> }
                { loginMode === "signup" && <SignupForm /> }

            </div>


        </Modal>
    );
};

export default LoginModal;
