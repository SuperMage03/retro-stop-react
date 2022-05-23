import LoginModal from "./LoginModal";

const Navbar = () => {
    return (
        <nav className={"h-20 bg-purple-50"}>
            <div className={"container flex items-center justify-between h-full mx-auto lg:px-28"}>
                <a href={"https://www.google.ca"}><h1 className={"text-2xl"}>RetroStop</h1></a>

                <div className={"flex"}>
                    <a href={"https://www.google.ca"}><h2 className={"text-xl mr-4"}>Shop</h2></a>
                    <LoginModal />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
