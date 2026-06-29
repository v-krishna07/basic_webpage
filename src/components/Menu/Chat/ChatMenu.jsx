import { mockChats } from "./chatsData"
import { useState } from "react"

export function ChatMenu({selectedData,selectedChatID}) {

  // const [selectedChatID,setSelectedChatID]= useState(null)


  return (
    <div className="h-full overflow-y-auto px-4 [scrollbar-width:none] [background-color:#333333] [-ms-overflow-style:none]">
      <div className="flex justify-between flex-shrink-0 w-full text-2xl pb-5 pt-2 font-bold text-green-600"><div><h1>WhatsUpp</h1></div>
      <div className="flex items-center flex-shrink-0"><img className="mr-3" src="https://unpkg.com/lucide-static/icons/message-square.svg"/><img className='mr-3'src="https://unpkg.com/lucide-static/icons/help-circle.svg"/></div></div>
      <div className="border-2 rounded-[35px] overflow-hidden mb-5 flex focus-within:border-2 focus-within:border-green-500">
        <div className="flex flex-shrink-0 justify-center"><label className="flex items-center  py-3  ml-2 mr-1 justify-center"><img className="w-6 h-6 [opacity:50%]" src="https://unpkg.com/lucide-static/icons/folder.svg"/></label><input className="mx-0 px-0 w-full h-full py-3 focus:outline-none focus:text-white"type="text" placeholder="Search or Start a new chat"/></div>
      </div>
      <div>{mockChats.map((value,index)=>{
        const isActive = value.id===selectedChatID;
        return(<button key={value.id} className={`flex w-full h-full overflow-scroll hover:[cursor:pointer] hover:bg-zinc-600 rounded-[10px] my-2 ${isActive? "outline:green bg-zinc-900 rounded-[10px] [z-index:10]":null}`} onClick={()=>selectedData(value)}>
          <div><img src={value.avatar} alt={value.name} className="w-15 rounded-[20px]"/></div>
          <div><div className="[text-align:start] overflow-hidden">{value.name}</div><div className="one-line-limit">{value.lastMsg}</div></div>
        </button>)
      })}</div>
    </div>
  )
}

