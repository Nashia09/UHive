import ContentHeader from "./ContentHeader";
import Main from "./Main";
import Sidebar from "./Sidebar";


export default function MainLayout() {
  return (
    <div className="w-14/12 h-screen flex h-[100vh] bg-blue-200 ">
   <div className="">

{/* <Sidebar /> */}
   </div>
   {/* <ContentHeader />s */}

      <Main />
    </div>
  );
}