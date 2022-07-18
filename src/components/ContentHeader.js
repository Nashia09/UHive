import {
    faBell,
    faEnvelope,
    faFolder,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Avatar, Space } from 'antd';
  
  export default function ContentHeader() {
    return (
      <div className=" bg-white flex items-center py-3 px-5 mb-1">
        <h1>DashBoard</h1>
        <input
          className="rounded  bg-yellow-200 ml-20 active: border-sky-500"
          placeholder="Search..."
        />
      
      </div>
    );
  }



  
 