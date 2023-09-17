import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import HomeLayout from "../layouts/HomeLayout";
import {BsPersonCircle} from 'react-icons/bs';
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup(){
    const navigate = useNavigate();

    const [signupDetails, setSignupDetails] =   useState({
        email: '',
        fullname: '',

    });

    // on upload we are going to show the default image
    const [previewImage, setPreviewImage] = useState("");

    function onFormSubmit(e){
        // avoid page refresh
        e.preventDefault();
        if(!signupDetails.email || !signupDetails.password || !signupDetails.fullname || !signupDetails.avatar ){
            toast.error("Please fill all the details") 
            return;
        }

        
    }

    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form  onSubmit={onFormSubmit}  noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-3/5" >
                    <h1 className="text-2xl text-center font-bold" > Registration Page </h1>
                    <label htmlFor="image_uploads" className="cursor-pointer"> 
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        ) }
                    </label>

                    <input 
                            type="file"
                            className="hidden"
                            name="image_uploads"
                            id="image_uploads"
                            accept=".jpg .jpeg .png .svg"
                    />

                <div className="flex flex-col gap-1">
                    <label htmlFor="fullname" className="font-semibold" > Name </label>
                    <input 
                           required 
                           type="text" 
                           name="fullName"
                           className="bg-transparent px-2 py-1 border"
                           placeholder="enter your username.."
                           id="Name"  />
                </div>
                
                <div className="flex flex-col gap-1">
                    <label htmlFor="Email" className="font-semibold" > Email </label>
                    <input 
                           required 
                           type="text" 
                           name="email"
                           className="bg-transparent px-2 py-1 border"
                           placeholder="enter your username.."
                           id="Email"  />
                </div>
                
                <div className="flex flex-col gap-1">
                    <label htmlFor="Password" className="font-semibold" > Password </label>
                    <input 
                           required 
                           type="password" 
                           name="password"
                           className="bg-transparent px-2 py-1 border"
                           placeholder="enter your username.."
                           id="Password"  />
                </div>
                <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out cursor-pointer py-2 font-semibold">
                   Create Account
                </button>
                <p className="text-center">
                    Already have an account ? <Link to="/login" className="cursor-pointer text-yellow-500" > Login </Link>
                </p>
                </form >
            </div>
        </HomeLayout>
    );
}

export default  Signup;