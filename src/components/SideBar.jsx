export function SideBar() {
  const handleClick = ()=>{console.log("first")}
  return (<div className="bg-black flex flex-col w-12 h-screen p-1 overflow-hidden mb-10 justify-center max-w-30 border-2 border-black ">
    <img src="src/images/Chats.png" className="image_setup" alt="Error" onClick={handleClick}/>
    <img src="src/images/Status.png" alt="Error" className="image_setup"/>
    <img src="src/images/Channels.png" alt="Error" className="image_setup"/>
    <img src="src/images/Communities.png" alt="Error" className="image_setup"/>
    <hr className="text-white my-5"/>
    <img src="src/images/MetaAI.png" alt="Error" className="image_setup"/>
    
      <img src="src/images/Media.png" alt="Error" className="image_setup mt-auto" />
      <img src="src/images/User.png" alt="Error" className="image_setup"/>
    

  </div>)
}