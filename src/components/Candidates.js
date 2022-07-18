
import React, {useContext, useState, useEffect} from 'react';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import {  Row, Col,  Card} from 'antd';
import ContentHeader from './ContentHeader';
import UserCard from './UserCard';
import { AuthContext, AuthContextProvider } from '../context/AuthContext';
import { collection, documentId, getDocs, limit,orderBy, limitToLast, query } from 'firebase/firestore';
import {db, storage} from '../firebase'
import { async } from '@firebase/util';








const {  Paragraph, Text, Link } = Typography;



const { Title } = Typography;


const Candidates = () => {

  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [per, setPer] = useState(null);
  const [file, setFile] = useState();
  
  
  // console.log(data)

  // const nextUser = () => {

    useEffect(() => {
       
      const fetchData = async () => {
     
        let list = [];
        try{
          const querySnapshot = await getDocs(collection(db, "users" ), limit(1));
          
          querySnapshot.forEach((doc) => {
            
              list.push({ id: doc.id, ...doc.data()});
              
              
          });
          setData(list);
          console.log(list)
        }
        catch (err) {
          console.log(err);
        }
      };
      fetchData()
     }, [])
    
  // }
  
  const nextUser = async () =>{
    
    let list = [];
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data()});
          
      });
      setData(list);
      console.log(list)
    }
    catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className=" bg-white-600 ">
        
    
  {/* <div className="text-xl  sm:justify-center sm:items-center bg-white  hover:shadow-lg " > */}
  {/* <nav className="text-xl  sm:justify-center sm:items-center hover:shadow-lg w-screen pt-0  " > */}
        
  <ContentHeader/>
  {/* <span className="font-light text-xl text-light-200 rounded-full bg-gradient-to-br from-blue-200 to-blue-300">Candidates</span> */}
   
    {/* </nav> */}
  <div >
        
  {data?.map(user => (
    <Row  className="w-full grid grid-cols-1    md:grid-cols-4 text-xl gap-4 my-24" gutter={{
        xs: 1,
        sm: 4,
        md: 6,
        lg: 1,
      }} style={{
         marginTop:'50px',
         alignContent:'center',
         paddingLeft:'100px'
        
      }}>
        {/* <Col span={12} className="flex flex-col"> */}
      <Col span={1} className="md:w-20  lg:w-48"  > 
      
      <Avatar  className="inline object-cover w-16 h-16  md:mr-10 rounded-full" style={
        {
          border:' thick solid',
          borderColor: '#C0C0C0',
          borderWidth: '2px',
          overflow: 'hidden',
          borderRadius: '50%',
          margin:20
          
        }
      } size={120} src={user.img}  /> 
      </Col>
      <Col span={8} style   className="font-light text-xl ml-40 text-light-200 font-mono ml-30 flex-col text-sm text-base m-30 text-base  sm:text-sm"> 
       <h1 className="text-3xl">{user?.Name} </h1> 
        <h4>Last Active 12 days ago</h4> <br />
        <h1 className="text-3xl">{user?.city}, {user?.country}</h1>
        </Col>

         
      {/* <UserCard /> */}
      <div  style={{ 
        width: 240,
        border: '3 0 solid',
      }}  class="bg-dark-500 rounded-lg drop-shadow-2xl hover:bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl">
    <div  style={{ 
      width: 240,
      border: '3 0 solid',
          height:200 }} class="flex items-center justify-center pt-5 flex-col">
      <img alt="user" src={user.img}  class="rounded-full w-32 md:w-20 lg:w-48"/>
      
    </div>
    <div class="flex justify-between p-4 ">
      <div style={{ margin:'5px'}} className="flex justify-between flex-col ">
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Invite</button>
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Save</button>
      
      </div>
      <div style={{ margin:'5px'}} className="flex justify-between flex-col ">
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6 " onClick={nextUser}>Skip</button>
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Hide</button>
      
      </div>

      </div>
    <div class="flex items-center justify-center mt-3 mb-6 flex-col">
      <h1 class="text-xs text-white">(You have 5 invites left)</h1>
      <div class="flex mt-2">
    </div>
    
      </div>
      
    </div>
         


{/* </Col> */}

    </Row>
   ))}
    
    <br />
      
     
      </div>
      <div >

      <Typography className="m-10">
    <Title  className="font-light text-xl text-light-200">Introduction</Title>
    <Paragraph  className="font-light text-xl text-light-200 font-mono">
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    <Paragraph  className="font-light text-xl text-light-200 font-mono">
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    </Typography>
 
  </div>
      
           </div>
          
      
         






       
    
      )
}

export default Candidates
// import React, {useContext, useState, useEffect} from 'react';
// import { Typography } from 'antd';
// import { Avatar } from 'antd';
// import {  Row, Col,  Card} from 'antd';
// import ContentHeader from './ContentHeader';
// import UserCard from './UserCard';
// import People from './People';
// import { AuthContext, AuthContextProvider } from '../context/AuthContext';
// import MyCard from './MyCard';
// import  './Advanced.css';





// const {  Paragraph, Text, Link } = Typography;



// const { Title } = Typography;


// const Candidates = () => {

//   const [users, setUsers] = useState([]);
//   const [data, setData] = useState([]);
//   const [per, setPer] = useState(null);
//   const [file, setFile] = useState();
  

 


//   const {currentUser} = useContext(AuthContext)
   
//   // console.log(currentUser.img)
//     return (
//         <div className="bg-gray-200 ">
        
//   <ContentHeader/>

//   <div >
        
    
  
//     <Row  className="w-full grid grid-cols-1  md:grid-cols-4 text-xl gap-4 my-24" gutter={{
//         xs: 1,
//         sm: 4,
//         md: 6,
//         lg: 1,
//       }} style={{
//          marginTop:'50px',
//          alignContent:'center',
//          paddingLeft:'100px'
        
//       }}>
       

//          <div className="mr-20 relative">

//      <UserCard />
//          </div>
         
//       <Col span={8} style   className="font-light text-xl ml-40 text-light-200 font-mono ml-30 flex-col text-sm text-base m-30 text-base  sm:text-sm"> 
//        <h1 className="text-3xl">{currentUser.Name}</h1> 
//         <h4>Last Active 12 days ago</h4> <br />
//         <h1 className="text-3xl">Lagos, Nigeria</h1>
//         </Col> 

// {/* </Col> */}

//     </Row>
  

//     {/* <div className="relative ">
//         <Row  className="w-full grid grid-cols-1  md:grid-cols-4 text-xl gap-4 my-24" gutter={{
//           xs: 1,
//           sm: 4,
//           md: 6,
//           lg: 1,
//         }} 
//         style={{
//           marginTop:'50px', */}
//            {/* alignContent:'center',
//           paddingLeft:'100px'
          
//         }}> */}
//         {/* <People /> */}
//          {/* <Col span={12} className="flex flex-col">  */}
//        {/* <Col span={2} className="md:w-20  lg:w-48"  >  */}
     
      
//        {/* <h1 className="text-3xl">{currentUser.email}</h1> 
//         <h4>Last Active 12 days ago</h4> <br />
//         <h1 className="text-3xl">Lagos, Nigeria</h1> */}
//              {/* </Col>
//         </Row> 
//     </div> */}
  
    
//     <br />
      
     
//       </div>
//       <div >

//       <Typography className="m-10">
//     <Title  className="font-light text-xl text-light-200">Introduction</Title>
//     <Paragraph  className="font-light text-xl text-light-200 font-mono">
//       In the process of internal desktop applications development, many different design specs and
//       implementations would be involved, which might cause designers and developers difficulties and
//       duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and
//       implementations would be involved, which might cause designers and developers difficulties and
//       duplication and reduce the efficiency of development.
//     </Paragraph>
//     <Paragraph  className="font-light text-xl text-light-200 font-mono">
//       In the process of internal desktop applications development, many different design specs and
//       implementations would be involved, which might cause designers and developers difficulties and
//       duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and
//       implementations would be involved, which might cause designers and developers difficulties and
//       duplication and reduce the efficiency of development.
//     </Paragraph>
//     </Typography>
 
//   </div>
      
//            </div>
          
      
         






       
    
//       )
// }

// export default Candidates