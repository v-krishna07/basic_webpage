import { Link } from "react-router-dom"

export function SideBar() {
  const handleClick = ()=>{console.log("first")}
  return (<nav className="bg-black flex flex-col w-12 h-screen p-1 overflow-hidden mb-10 justify-center max-w-30 border-2 border-black ">
    <Link to="/"><img src="src/images/Chats.png" className="image_setup" alt="Error"/></Link>
    <Link to="/Status"><img src="src/images/Status.png" alt="Error" className="image_setup"/>
    </Link>
    <Link to="/Channels"><img src="src/images/Channels.png" alt="Error" className="image_setup"/>
    </Link>
    <Link to="/Communities">
    <img src="src/images/Communities.png" alt="Error" className="image_setup"/>
    </Link>
    <hr className="text-white my-5"/>
    <Link to="/">
    <img src="src/images/MetaAI.png" alt="Error" className="image_setup"/>
    </Link>
    <Link to="Media" className="mt-auto">
      <img src="src/images/Media.png" alt="Error" className="image_setup mt-auto" />
      </Link>
    <Link to="/User"><img src="src/images/User.png" alt="Error" className="image_setup"/>
</Link>

    

  </nav>)
}