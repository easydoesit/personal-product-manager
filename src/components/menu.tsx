import { menuList } from "../data/data";
import { handleScrollClick } from "../utils/helpers";

export default function Menu() {
  
  return (
    <div className="fixed top-0 w-full flex flex-col menuHeight bg-midnightblue text-springlawn z-10" id='MainMenu'>

      <ol className="flex justify-center flex-row w-full md:w-1/2 mr-auto ml-auto mt-4">
        
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
