import { useState } from "react"
import { mockChats } from "../../../images/images"

export function ChatInbox({avatar,name,id}){

  const [dropdown,setDropdown] = useState(false)
  const [chatInput,setChatInput]=useState('')
  const [messages,setMessages]=useState([])
  const handleDropdown = ()=>{return null}
  
  const handleKey = (e)=>{
    if(e.key==="Enter"&&chatInput.trim()!==""){
      setMessages([...messages,chatInput])
      setChatInput("")
    }
    console.log(messages,chatInput)
  }

  return(
    <div className="h-full flex flex-col">
      <nav className="flex gap-3 items-center bg-zinc-900">
        <img src={avatar} alt={name} className="w-12 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]" title="Profile Details"/>
        <div className="w-[65%] flex-1 min-w-0 " title="Group">
          <p>{name}</p>
          <p>Click here to get group info</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-[50%] hover:bg-zinc-600 my-1 [transition:0.5s] p-2"><img src={mockChats[0].avatar} className="w-10 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]"/></button>
          <div className="w-[1px] self-stretch bg-black"></div>
          <button className="rounded-[50%] hover:bg-zinc-600 my-1 [transition:0.5s] p-2"><img title="search" src={mockChats[1].avatar} className="w-10 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]"/></button><button onClick={handleDropdown} className="rounded-[50%] hover:bg-zinc-600 my-1 [transition:0.5s] p-2"><img src={mockChats[2].avatar} title="Menu" className="w-10 [aspect-ratio:1/1] rounded-[50%] [object-fit:cover] hover:[cursor:pointer]"/></button>
        </div>
      </nav>
      <div className="flex-1 flex flex-col justify-between min-h-0 opacity-[0.5]" style={{backgroundImage:`url('src/images/wtsp_chat_bg.png')`, backgroundBlendMode: 'multiply',
    backgroundSize: '144px',
    }}>

<div className="flex-1 overflow-y-auto p-4 flex flex-col justify-end items-end mr-7">
    {messages.map((value,index)=>{
      return(<p className="border-2 border-zinc-200 w-fit px-3 py-1 rounded-2xl mb-2 [background-color:grey]" key={index}>{value}</p>)
    })}

</div>
        <div className="flex border-2 rounded-[60px] [background-color:grey] p-3 mx-4 my-2 mb-7 gap-4   items-center">
          <img className="w-6 h-6 flex-shrink-0"alt="error" src="https://unpkg.com/lucide-static/icons/plus.svg"/>
          <img className="w-6 h-6 flex-shrink-0"alt="Error" src="https://unpkg.com/lucide-static/icons/smile.svg"  />
          <input type="text" className=" flex-1 w-full min-w-0 px-3 py-1 text-white focus:outline-none" placeholder="Enter the text here" value={chatInput} onKeyDown={handleKey} onChange={(e)=>setChatInput(e.target.value)}/>
          <img src="https://unpkg.com/lucide-static/icons/mic.svg" className="w-6 h-6 flex-shrink-0"/>
        </div>
        {/* <div className="flex border-2 p-4 m-4 items-center gap-4">
  {/* Added explicit widths to the icons so they don't fluctuate */}
  {/* <img alt="plus" src="https://unpkg.com/lucide-static/icons/plus.svg" className="w-6 h-6 flex-shrink-0"/>
  <img alt="smile" src="https://unpkg.com/lucide-static/icons/smile.svg" className="w-6 h-6 flex-shrink-0"/> */} 
  
  {/* The Fix: Added min-w-0 and w-full so it cooperates with flex-1 */}
  {/* <input 
    type="text" 
    className="border-2 flex-1 w-full min-w-0 p-2 rounded-lg bg-transparent text-white" 
    placeholder="Enter the text here"
  /> */}
  
  {/* Removed ml-auto because flex-1 on the input already pushes this icon to the far right
  <img alt="mic" src="https://unpkg.com/lucide-static/icons/mic.svg" className="w-6 h-6 flex-shrink-0"/>
</div> */}
      </div>
    </div>
  )
}