import { ParticularChatData } from "./ParticularChatData";
import { ChatMenu } from "./ChatMenu";
import { useState } from "react";
export function JoiningChats(){
  const [activeChat,setActiveChat]=useState(null)

   return (
    <div className="flex [flex-direction:row] [align-items:center] h-screen w-screen overflow-hidden bg-zinc-900 text-white">
      <div className="h-full border-r border-zinc-800 flex flex-col flex-shrink-0">
        <ChatMenu 
          selectedData={setActiveChat} 
          selectedChatID={activeChat?.id} 
        />
      </div>
      <div className="w-full h-full flex flex-col bg-[#222222]">
        <ParticularChatData chat={activeChat} />
      </div>

    </div>
  );
}