import { useState } from "react";

const Modal = (props) => {
    const [visibility, setVisibility] = useState(false);

    return (
        <>
            <button type={"button"} className={props.className} onClick={() => setVisibility(!visibility)}>{props.label}</button>

            <div className={"w-screen min-h-full fixed top-0 left-0 bg-[#1f1f1f3f]"}>
                {props.children}
            </div>
        </>

    );
};

export default Modal;
