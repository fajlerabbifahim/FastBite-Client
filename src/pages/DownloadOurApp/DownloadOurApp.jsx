import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import mockUp from "../../assets/ourAppImages/appMockup.png";
import delivery from "../../assets/ourAppImages/deliveryBoy.png";
import food1 from "../../assets/ourAppImages/food1.png";
import food2 from "../../assets/ourAppImages/food2.png";
import leaf from "../../assets/ourAppImages/leaf.png";

const DownloadOurApp = () => {
    return (
        // Download Our app Section

        // Note: primary-color class added from index.css
        // Note: bg-primary-color class added from index.css

        <section className="w-11/12 mx-auto my-4">
            <div className="flex gap-4 justify-between flex-col-reverse lg:flex-row">
                <div>
                    <h3 className="uppercase primary-color text-3xl font-medium">Best app for food ordering</h3>
                    <h2 className="text-4xl font-bold mt-2 mb-10">Manage Your Restaurant Anytime! <br /> Anywhere!</h2>
                    <ul className="text-slate-500 space-y-2 mb-10">
                        <li className="flex items-center gap-2"> <span className="text-yellow-400 transform scale-85"><FaCircleDot /></span> Higher Reach - Minimal Effort</li>
                        <li className="flex items-center gap-2"><span className="text-yellow-400 transform scale-85"><FaCircleDot /></span> Showcase Your Brand</li>
                        <li className="flex items-center gap-2"><span className="text-yellow-400 transform scale-85"><FaCircleDot /></span> Exclusive Offers and Disconuts </li>
                    </ul>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className=" py-3 px-6 rounded-xl flex justify-center items-center bg-black text-white gap-2">
                            <div className="text-5xl">
                            <FaApple />
                            </div>
                            <div>
                                <p className="uppercase text-xs font-bold">
                                    Download From
                                </p>
                                <p className="text-2xl font-bold">
                                    App Store
                                </p>
                            </div>
                        </button>
                        <button className=" py-3 px-6 rounded-xl flex justify-center items-center bg-primary-color text-white gap-2">
                            <div className="text-4xl">
                            <FaGooglePlay />
                            </div>
                            <div>
                                <p className="uppercase text-xs font-bold">
                                    Download From
                                </p>
                                <p className="text-2xl font-bold">
                                    Google Play
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="relative lg:w-3/6 w-full h-[400px] md:scale-100 hidden md:block">
                    <div className="bg-primary-color w-full h-3/4 absolute bottom-0 right-0 rounded-tl-full rounded-bl-full"></div>
                    <img className="w-[96px] relative top-[15%] left-[80%] drop-shadow-2xl" src={food1} alt="" />
                    <img className="w-[96px] absolute top-[60%] left-[75%] drop-shadow-2xl" src={food2} alt="" />
                    <img className="w-[300px] transform  bottom-0 left-[30%] absolute drop-shadow-2xl " src={mockUp} alt="" />
                    <img className="w-[200px] absolute transform bottom-0 drop-shadow-2xl" src={delivery} alt="" />
                    <img className="w-[30px] absolute top-[40%] left-[75%] drop-shadow-xl " src={leaf} alt="" />
                    <img className="w-[80px] absolute top-[15%] left-[23%] drop-shadow-xl rotate-90 " src={leaf} alt="" />
                    <img className="w-[60px] absolute top-[5%] left-[70%] drop-shadow-xl  " src={leaf} alt="" />
                    <img className="w-[30px] absolute top-[50%] left-[90%] rotate-120 " src={leaf} alt="" />
                </div>
            </div>
        </section>
    );
};

export default DownloadOurApp;