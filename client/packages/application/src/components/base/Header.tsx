import React from "react";


const Header = (): JSX.Element => {
    return (
           <div className="header">
               <div>
                   {/* <Toolbar>
                       <Item location='after' locateInMenu="auto" widget="dxSelectBox" 
                       options={selectBoxOptions}/>
                   </Toolbar> */}
                   <select className='select-box-header'>
                       <option>AMA</option>
                       <option>SA5</option>
                       <option>AMA</option>
                   </select>
               </div>
           </div>
    )

}
export default Header
