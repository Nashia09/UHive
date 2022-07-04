import React from 'react';


const UserCard = () => {
    // const [size, setSize] = useState('large');
  return (
        <div  class="">
  <div  style={{ 
          width: 240,
          border: '3 0 solid',
           }}  class="bg-dark-500 rounded-lg drop-shadow-2xl hover:bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl">
    <div  style={{ 
          width: 240,
          border: '3 0 solid',
          height:200 }} class="flex items-center justify-center pt-5 flex-col">
      <img alt="user" src="https://joeschmoe.io/api/v1/random" class="rounded-full w-32 md:w-20 lg:w-48"/>
      
    </div>
    <div class="flex justify-between p-4 ">
      <div style={{ margin:'5px'}} className="flex justify-between flex-col ">
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Invite</button>
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Save</button>
      
      </div>
      <div style={{ margin:'5px'}} className="flex justify-between flex-col ">
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6 ">Skip</button>
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Hide</button>
      
      </div>

      </div>
    <div class="flex items-center justify-center mt-3 mb-6 flex-col">
      <h1 class="text-xs text-white">(You have 5 invites left)</h1>
      <div class="flex mt-2">
    </div>
    
      </div>
      
    </div>
  </div>



   
  )
}

export default UserCard