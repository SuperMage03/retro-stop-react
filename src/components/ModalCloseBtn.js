const ModalCloseBtn = (props) => {
    const clickBehaviour = () => {
        props.onClick();
        props.closeModalRef.current();
    };

    return (
        <button onClick={clickBehaviour} className={props.className}>
            {props.children}
        </button>
    );
};

export default ModalCloseBtn;
