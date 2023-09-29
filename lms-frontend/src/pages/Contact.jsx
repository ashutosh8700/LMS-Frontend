import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";

function Contact() {

    const[userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    })

    function handleInputChange(e){
        const {name,value} = e.target;
        setUserInput({
            ...userInput,
            nm

        })
    }

    async function onFormSubmit(){
        e.preventDefault();
        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error("All fields are mandatory");
            return;
        }

        if(!isEmail(userInput.email)){
            toast.error("Invalid email provided");
            return;
        }

        try{
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting your Query",
                success: "Form Submitted successfully",
                error: "Failed to submitted the form"
            });
           const responseData = await response;
           if(responseData?.payload?.data) {
                setUserInput({
                    email: "",
                    name:  "",
                    message: ""
                })
           }
        } catch(error){
            toast.error("operation failed...")
        }

    }


    return(<>
         
         <HomeLayout>
            <div className=" flex items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-2 p-5 w-[22rem] rounded-md"  action="">
                    <h1 className="text-3xl font-semibold "> Contact Form   </h1>
                    <div className="flex flex-col w-full gap-1"> 
                        <label htmlFor="name" className="text-xl font-semibold" > 
                            Name 
                        </label>
                        <input 
                            id="name"
                            className="bg-transparent border px-2 py-1 rounded sm  text-black"
                            type="text"
                            placeholder="enter your name"
                            name="name"
                            onChange={handleInputChange}
                            value={userInput.name}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1"> 
                        <label htmlFor="email" className="text-xl font-semibold " > 
                            Email 
                        </label>
                        <input 
                            id="email"
                            className="bg-transparent border px-2 py-1 rounded sm"
                            type="text"
                            placeholder="enter your email"
                            name="name"
                            onChange={handleInputChange}
                            value={userInput.email}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1"> 
                        <label htmlFor="email" className="text-xl font-semibold" > 
                            Message
                        </label>
                        <textarea 
                            id="message"
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40 "
                            type="text"
                            placeholder="enter your message"
                            name="message"
                            onChange={handleInputChange}
                            value={userInput.message}
                        />
                    </div>

                    <button type="submit" className="w-full bg-yellow-400 hover::bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor">
                        Submit
                    </button>
                </form>
            </div>
         </HomeLayout>

    </>)



}
export default Contact;