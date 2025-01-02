import { menuList } from "../data/data";
import { handleScrollClick } from "../utils/helpers";
import { useEffect, useState } from "react";
import { MenuListI } from "../types/types";
import { useLocation,Link } from "react-router";

export default function Menu() {
  const [indexLocation, setIndexLocation] = useState <MenuListI | null>(null);

  const location = useLocation();

  useEffect(() => {
    
    if(indexLocation !==  null && location.pathname === '/') {
        handleScrollClick(indexLocation as MenuListI);
      
    } else if(location.pathname.includes('case-studies')) {
      handleScrollClick(menuList[0]);
    } else if(indexLocation === null) {
      window.history.pushState('clear Url', '', '/');
    }
  

  },[indexLocation,location]);

  document.body.addEventListener("wheel", () => {
    //event.preventDefault();
    if (indexLocation) {
      setIndexLocation(null);
    }
    //window.history.pushState('clear Url', '', '/');

  },{passive:false});


 

  // onwheel = (event) => {};

  return (

    <div className="fixed top-0 w-full flex flex-col menuHeight bg-midnightblue text-springlawn z-10" id='MainMenu'>

      <ol className="flex justify-center flex-row w-full md:w-1/2 mr-auto ml-auto mt-4">

        {location.pathname === '/' && (
          <>
        { menuList.map((menuItem, index) => (
          <li key={index} className="flex-grow text-center">
            
            <button onClick={() => {setIndexLocation(menuItem);
              }}>
              {menuItem.title}
            </button>
          </li>   
        ))}
        </>
      )}

      {location.pathname.includes('case-studies') && (
        <li className="flex-grow text-center">
          <Link to="/#projects" onClick={()=>setIndexLocation(menuList[2])}>Back</Link>
        </li>
      )}

      </ol>
    </div>
  )
}
