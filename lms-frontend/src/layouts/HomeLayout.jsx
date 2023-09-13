import Footer from "../components/footer";
import {FiMenu } from 'react-icons/fi';

import {AiFillCloseCircle} from 'react-icons/ai';

function HomeLayout({ children }){
    
    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';

    }

    function hideDrawer(){
        const element  = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    return(
        <>
            {/* {children}
            <Footer/> */}
        
        

        
             {/* <div className="min-h-[90vh]">
                 <div className="drawer absolute left-0 z-50 w-full ">
                     <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                         <label htmlFor="my-drawer" >
                             <FiMenu onClick={changeWidth} size={"32px"} className='font-bold text-white m-4' />
                         </label>
                     </div>

                     <div className="drawer-side w-0">
                             <label htmlFor="my-drawer" className="drawer-overlay"></label>
                             <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative" >
                                 <li>
                                     <Link to="/"> Home </Link>
                                 </li>
                                 <li>
                                     <Link to="/about"> About us  </Link>
                                 </li>
                                 <li>
                                     <Link to="/contact"> All courses </Link>
                                 </li>
                                 <li>
                                    <Link to="/contact"> All courses </Link>
                                 </li>
                             </ul>
                     </div>
                </div>
             </div> */}

{/* <FiMenu onClick={changeWidth} size={"32px"} className='font-bold text-white m-4' /> */}

<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" >
         <FiMenu  htmlFor="my-drawer"  size={"32px"} className='font-bold text-white m-4' />
    </label>
    
    {/* <FiMenu  htmlFor="my-drawer"  size={"32px"} className='font-bold text-white m-4' /> */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      
      {/* Sidebar content here */}
      <li className="w-fit absolute right-2 z-50">
        <button onClick={hideDrawer}>
            <AiFillCloseCircle size={24}/>
        </button>
      </li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>

      {/* <li>

      </li>

      <li>
        <Link to="/"> Home </Link>
      </li>
        
      <li>
        <Link to="/about"> About us  </Link>
      </li>
    
      <li>
        <Link to="/contact"> All courses </Link>
      </li>
        
      <li>
        <Link to="/contact"> All courses </Link>
      </li>  */}


      
    </ul>
  </div>
      {children}
      <Footer/>


</div>


        </>
    );

}

export default HomeLayout;