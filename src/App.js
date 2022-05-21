import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className={"flex flex-col w-full min-h-screen bg-purple-50 px-4"}>
                <Navbar/>

                <div className={"container flex-grow w-full mx-auto lg:px-28 flex items-center"}>
                    <div className={"flex items-center justify-between h-full mx-auto"}>
                        <div className={"w-1/2 mr-3"}>
                            <h1 className={"text-4xl mb-4"}>
                                RetroStop
                                <br/>
                                Fresh Old Games!
                            </h1>

                            <p className={"mb-5 max-w-md"}>
                                RetroStop is here for all the Retro Game Developers, a place to share or sell your creation
                                of Retro Games ROM.
                            </p>

                            <a href="https://www.google.ca"
                               className={"bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"}>
                                Find Games!
                            </a>
                        </div>

                        <img className={"block w-1/2 rounded-xl"} src={"/images/retro banner.jpg"}
                             alt={"Retro Game Image"} />
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default App;
