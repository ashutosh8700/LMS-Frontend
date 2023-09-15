import Footer from "../components/footer";
import {FiMenu } from 'react-icons/fi';
import {Link } from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useSelector } from "react-redux";

function HomeLayout({ children }){
    
  // const dispatch  = useDispatch();
  // const navigate  = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  // const role = useSelector((state) => state?.auth?.role);

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

    function onLogout(e){
      // todo

      e.preventDefault();

      //todo

      navigate("/")
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
    <ul className="menu p-4 h-[100%]  w-80 min-h-full bg-base-200 text-base-content">
      
      {/* Sidebar content here */}
      <li className="w-fit absolute right-2 z-50">
        <button onClick={hideDrawer}>
            <AiFillCloseCircle size={24}/>
        </button>
      </li>
      <li><a> Home </a></li>
      {/* Condition Rendering  */}

        {/* {
          isLoggedIn && role == "ADMIN" && (
            <li>
              <Link to="/admin/dashboard"> Admin Dashboard </Link>
            </li>
          )
        } */}

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

      <li>
          <Link to="/courses"> All courses  </Link>
      </li> 

      {
        !isLoggedIn ? (
          <li className="absolute bottom-4 w-[90%]" >
              <div className="w-full flex items-center justify-center" >
                <button className="btn-primary px-4 py-1 font-semibold rounded">
                  <Link to="/login"> Login </Link>
                </button>

                <button className="btn-secondary px-4 py-1 font-semibold rounded">
                  <Link to="/login"> Sign Up </Link>
                </button>
              </div>
          </li>
        ): (

          <li className="absolute bottom-4 w-[90%]" >
              <div className="w-full flex items-center justify-center" >
                <button className="btn-primary px-4 py-1 font-semibold rounded">
                  <Link to="/user/profile"> Profile </Link>
                </button>

                <button className="btn-secondary px-4 py-1 font-semibold rounded">
                  <Link onClick={onLogout}> Log Out </Link>
                </button>
              </div>
          </li>




        )
      }
  
      
    </ul>
  </div>
      {children}
      <Footer/>


</div>


        </>
    );

}

export default HomeLayout;