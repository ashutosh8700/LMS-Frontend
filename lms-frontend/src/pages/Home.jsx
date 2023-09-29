import HomeLayout from "../layouts/HomeLayout";
import {Link} from "react-router-dom";
import homePageMainImage from "../assets/homePageMainImage.png"
function Home(){
    return(
        <HomeLayout>
            {/* HomeLayout recieving this div as a child */}
            <div className=" overflow-hidden pt-10 text-white flex items-center justify-center gap-10 mx-16  h-[90vh]  min-h-screen w-screen">
                    <div className="w-1/2 space-y-6 ">
                        <h1 className="text-5xl font-semibold" >  Find out best <span className="text-yellow font-bold"> Online courses  </span>   </h1>
                        <p className="text-xl text-gray-200">
                            We have a large faculty library of courses taught by highly skilled and qualified  faculties at a very affordable cost
                        </p>

                        <div className="space-x-6" >
                            <Link to="/courses">
                                <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                    Explore courses
                                </button>
                            </Link>

                            <Link to="/contacts">
                            <button className=" border  border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                    Contact Us
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
                        <img src={homePageMainImage} alt="home page" />
                    </div>
            </div>
        </HomeLayout>
    )
}

export default Home;