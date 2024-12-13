import { menuList } from "../data/data";
import { handleScrollClick } from "../utils/helpers";

export default function Menu() {
  
  return (
    <div className="fixed top-0 w-full flex flex-col menuHeight" id='MainMenu'>
      <div className="flex justify-center text-center font-jost text-2xl py-2 pb-2"><h1>Michael Grills</h1></div>
      <ol className="flex justify-center flex-row w-1/2 mr-auto ml-auto">
        
        { menuList.map((menuItem, index) => (
          <li key={index} className="flex-grow text-center">
            <button onClick={() => handleScrollClick(menuItem)}>
              {menuItem.title}
            </button>
          </li>   
        ))}

      </ol>
    </div>
  )
}
