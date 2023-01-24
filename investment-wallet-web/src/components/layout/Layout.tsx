import { useState } from "react";
import BottomBar from "../bars/BottomBar";
import Sidebar from "../bars/SideBar";
import TopBar from "../bars/TopBar";

export default function Layout(props: {children: JSX.Element}){

    const[open, setOpen] = useState(true);

    function onclickTopBar(){
        setOpen(!open);
        console.log("deu");
    }
    return(
        // <div className="w-screen h-screen grid grid-cols-4 grid-rows-3">
        //     <Sidebar open={!open}/>
        //     <div className={`${open ? "col-span-4" : "col-span-3"} row-span-3 grid content-between`}>
        //         <TopBar onclick={onclickTopBar}/>
        //         {children}
        //         <BottomBar/>
        //     </div>
        // </div>
        <div className="w-full flex">
            <Sidebar open={!open}/>
            <div 
              className="w-full flex flex-col 
              scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400"
            >                
              <TopBar onclick={onclickTopBar}/>
              {props.children}
              <BottomBar/>
            </div>
        </div>
    );
}