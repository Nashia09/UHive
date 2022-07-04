
import React, {useState} from 'react';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import {  Row, Col,  Card} from 'antd';
import ContentHeader from './ContentHeader';
import UserCard from './UserCard';





const {  Paragraph, Text, Link } = Typography;



const { Title } = Typography;


const Candidates = () => {
    // const [isActive, setIsActive] = useState(false);
    const onSearch = (value) => console.log(value);
    // const [size, setSize] = useState('large');

   
    return (
        <div className=" bg-white-600 ">
        
    
  {/* <div className="text-xl  sm:justify-center sm:items-center bg-white  hover:shadow-lg " > */}
  {/* <nav className="text-xl  sm:justify-center sm:items-center hover:shadow-lg w-screen pt-0  " > */}
        
  <ContentHeader/>
  <span className="font-light text-xl text-light-200 rounded-full bg-gradient-to-br from-blue-200 to-blue-300">Candidates</span>
   
    {/* </nav> */}
  <div >
        
    
  
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
      } size={120} src="https://joeschmoe.io/api/v1/random"  /> 
      </Col>
      <Col span={8} style   className="font-light text-xl ml-40 text-light-200 font-mono ml-30 flex-col text-sm text-base m-30 text-base  sm:text-sm"> 
       <h1 className="text-3xl">Aya Mande </h1> 
        <h4>Last Active 12 days ago</h4> <br />
        <h1 className="text-3xl">Lagos, Nigeria</h1>
        </Col>

         
      <UserCard />
         


{/* </Col> */}

    </Row>
  
    
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