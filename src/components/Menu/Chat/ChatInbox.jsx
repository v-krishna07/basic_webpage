import { useState } from "react"
import { mockChats } from "../../../images/images"

export function ChatInbox({avatar,name,id}){

  const [dropdown,setDropdown] = useState(false)

  const handleDropdown = ()=>{return null}
  
  return(
    <div>
      <nav className="flex gap-3 items-center bg-zinc-900">
        <img src={avatar} alt={name} className="w-12 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]" title="Profile Details"/>
        <div className="w-[65%] border-2" title="Group">
          <p>{name}</p>
          <p>Click here to get group info</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-[50%] hover:bg-zinc-600 my-1 [transition:0.5s] p-2"><img src={mockChats[0].avatar} className="w-10 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]"/></button>
          <div className="w-[1px] h-auto bg-black"></div>
          <button className="rounded-[50%] hover:bg-zinc-600 my-1 [transition:0.5s] p-2"><img title="search" src={mockChats[1].avatar} className="w-10 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]"/></button><button onClick={handleDropdown} className="rounded-[50%] hover:bg-zinc-600 my-1 [transition:0.5s] p-2"><img src={mockChats[2].avatar} title="Menu" className="w-10 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]"/></button>
        </div>
      </nav>
      <div className="">

      </div>
    </div>
  )
}