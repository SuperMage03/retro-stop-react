import { useEffect, useState } from "react";

const Modal = (props) => {
    const [visibility, setVisibility] = useState(false);
    
    useEffect(() => {
        props.closeModalRef.current = () => {
            setVisibility(false);
        };
    }, [props.closeModalRef]);
    
    
    return (
        <>
            <button type={"button"} className={props.className}
                    onClick={() => setVisibility(true)}>{props.label}</button>

            {visibility &&
                <div className={"overflow-y-auto fixed top-0 right-0 bottom-0 left-0 bg-[#1f1f1f3f]"}>
                    {props.children}
                </div>
            }
        </>

    );
};

export default Modal;
