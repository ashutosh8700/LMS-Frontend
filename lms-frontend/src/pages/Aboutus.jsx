import HomeLayout from "../layouts/HomeLayout";
import aboutMainPage from '../assets/aboutMainImage.png'
import steveJobs from '../assets/steveJobs.png';
import apj from '../assets/apj.png';
import billGates from '../assets/billGates.png';
import nelsonMandala from '../assets/nelsonMandela.png';




function Aboutus(){
    return(
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                        <section className="w-1/2 space-y-10" >
                            <h1 className="text-5xl text-yellow-500"> 
                                Affordable and quality education
                            </h1>

                            <p className="text-xl text-gray-200" >
                                Our goal is to provide the affordable and quality education to the world. We are providing for the aspiring teachers and students to share their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mainkind.  
                            </p>
                        </section>
                </div>
                
                <div className="w-1/2">
                            <img
                                src={aboutMainPage}
                                className='drop-shadow-2xl'
                                alt="about main page"
                                id="test1"
                                style={{

                                }}
                            />


                 {/* Daisy ui carousal */}
                
<div className="carousel w-1/2 my-10 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center px-[15%] " >
      <img src={apj}  className="w-40 rounded-full border-2 border-gray-400"/>
        <p className="text-xl text-gray-200"> LIFE and TIME are the world’s best Teachers. Life teaches us to make good use of TIME and TIME teaches us the value of LIFE. </p>
        <h3 className="text-2xl font-semibold"> APJ Abdul Kalam </h3>  
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
     </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-[15%] " >
      <img src={steveJobs}  className="w-40 rounded-full border-2 border-gray-400"/>
        <p className="text-xl text-gray-200"> LIFE and TIME are the world’s best Teachers. Life teaches us to make good use of TIME and TIME teaches us the value of LIFE. </p>
        <h3 className="text-2xl font-semibold"> Steve Jobs </h3>  
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
     </div>
  </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-[15%] " >
      <img src={billGates}  className="w-40 rounded-full border-2 border-gray-400"/>
        <p className="text-xl text-gray-200"> LIFE and TIME are the world’s best Teachers. Life teaches us to make good use of TIME and TIME teaches us the value of LIFE. </p>
        <h3 className="text-2xl font-semibold"> Bill Gates </h3>  
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
     </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-[15%] " >
      <img src={nelsonMandala}  className="w-40 rounded-full border-2 border-gray-400"/>
        <p className="text-xl text-gray-200"> LIFE and TIME are the world’s best Teachers. Life teaches us to make good use of TIME and TIME teaches us the value of LIFE. </p>
        <h3 className="text-2xl font-semibold"> Nelson Mandala </h3>  
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
     </div>
    </div>
  </div>
</div>


               {/* Daisy ui carousal */}

                </div>
            </div>
        </HomeLayout>
    );
}

export default Aboutus;