import React from "react";


const menuStyle = "mr-2 px-1 cursor-pointer hover:bg-slate-200 rounded-md"
const MenuLayout = () =>{
    return (<div>

        <div className="text-[14px] flex justify-start font-[400] px-2">
            <p className={menuStyle}>File</p>
            <p className={menuStyle}>Edit</p>
            <p className={menuStyle}>View</p>
            <p className={menuStyle}>Insert</p>
            <p className={menuStyle}>Format</p>
            <p className={menuStyle}>Tools</p>
            <p className={menuStyle}>Extension</p>
            <p className={menuStyle}>Help</p>

        </div>
    </div>)
}

export default MenuLayout;