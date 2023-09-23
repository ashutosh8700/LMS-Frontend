import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidPassword } from "../helper/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";
import { createAccount, login } from "../redux/slices/authSlice";
// import { login } from "../redux/slices/authSlice";

function Signin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: '',
    });

    const [previewImage, setPreviewImage] = useState("");

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })

    }

    // function handleImage(e) {
    //     e.preventDefault();
    //     const uploadedImage = e.target.files[0];
    //     if(!uploadedImage) return;
    //     setSignupDetails({
    //         ...signinDetails,
    //         avatar: uploadedImage
    //     });
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(uploadedImage);
    //     fileReader.addEventListener("load", function () {
    //         setPreviewImage(this.result);
    //     })
    // }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(signinDetails);
        if(!signinDetails.email || !signinDetails.password || !signinDetails.fullName ) {
            toast.error("Please fill all the details");
            return;
        }
        if(signinDetails.fullName.length < 5) {
            toast.error("Name should be atleast of 5 characters");
            return;
        }
        if(!isEmail(signinDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        // if(!isValidPassword(signinDetails.password)) {
        //     toast.error("Invalid password provided, password should 6-16 character long with atleast a number and a special character");
        //     return;
        // }

        // const formData = new FormData();
        // // formData.append("fullName", signinDetails.fullName);
        // formData.append("email", signinDetails.email);
        // formData.append("password", signinDetails.password);
        // console.log(formData);
        // formData.append("avatar", signinDetails.avatar);


        const response = await dispatch(login(signinDetails));
        console.log(response);
        if(response?.payload?.data) {
            navigate("/");
        }
        setSigninDetails({
            email: '',
            password: '',
            
        });
        // setPreviewImage("");
    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-35">
                    <h1 className="text-2xl text-center font-bold"> Login Page  </h1>
                    
                    
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input 
                            onChange={handleUserInput}
                            value={signinDetails.email}
                            required
                            type="text" 
                            name="email"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your Email..."
                            id="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input 
                            required
                            onChange={handleUserInput}
                            value={signinDetails.password}
                            type="password" 
                            name="password"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your Password..."
                            id="password" />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
                        Sign In
                    </button>
                    <p className="text-center">
                            Do not  have an account ? <Link to="/signup"  className="cusror-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signin;