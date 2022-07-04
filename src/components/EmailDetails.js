import {
    faEllipsisH,
    faReply,
    faTrashCan,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  export default function EmailDetails() {
    const body = `
  Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis
  sollicitudin pharetra.Ut id dignissim purus. Donec suscipit tortor orci,
  eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum
  primis in faucibus. 
        
  Sed vulputate ac urna ut elementum. Nunc eget metus
  vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed
  dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget
  nisi ultricies scelerisque ut pellentesque erat. 
  ukuigsiukb khbkhA SSKB kuS
  Sed vulputate ac urna ut elementum. Nunc eget metus
  vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed
  dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget
  nisi ultricies scelerisque ut pellentesque erat. 
  ukuigsiukb khbkhA SSKB kuS
        
  Greetings, 
  Charlie.
      `;
    return (
      <div className="flex flex-col bg-white w-2/3">
        <span className="text-2xs text-center text-light-600 my-6">13 / 13</span>
        <div className="flex items-center px-10">
          <div className="w-10 h-10 rounded-xl bg-red-200 mr-4">
            
          </div>
          <span className="text-sm text-light-900 font-medium">
            Urban Hive Team
          </span>
          <div className="flex relative ml-6">
            
          </div>
          <div className=" ml-auto">
        
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6 ">Good Fit</button>
      <button type="button" class="text-white bg-gradient-to-br from-blue-200 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">View Profile</button>
      
      

          </div>
        </div>
        <span className="px-10 text-2xs text-light-900 font-bold mt-6">
          3:30PM
        </span>
        <span className="px-10 text-lg text-light-700 font-light mb-6">
          How are you getting on?
        </span>
        <div className="px-10 text-xs text-light-900 whitespace-pre">{body}</div>
      </div>
    );
  }