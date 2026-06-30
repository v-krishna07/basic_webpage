import { mockChats } from "./chatsData";
import { useState } from "react";

export function ChatMenu({ selectedData, selectedChatID }) {
  // const [selectedChatID,setSelectedChatID]= useState(null)

  return (
    <div className="h-full flex flex-col">
      <div className="top_layout">
        <div title="Whatsapp" className="hover:[cursor:pointer] p-2">
          <h1>WhatsUpp</h1>
        </div>
        <div className="top_imgs">
          <img
            className="w-6"
            title="New Chat"
            src="https://api.iconify.design/lucide:message-square.svg?color=%23ffffff"
          />
          <img
            className="w-6"
            title="Menu"
            src="https://api.iconify.design/lucide:message-square.svg?color=%23ffffff"
          />
        </div>
      </div>
      <div className="m-3 mb-5 py-1 px-2 border-1 hover:border-white hover:border-1 focus:border-green-500 [background-color:rgb(53,52,52)]  rounded-[40px]">
        <div className="flex justify-center items-center">
          <label className="h-full px-3">
            <img
              className="w-6 h-6 flex-shrink-0 invert"
              src="https://unpkg.com/lucide-static/icons/folder.svg"
            />
          </label>
          <input
            className="[flex-grow:1] mx-0 px-0 w-full h-full py-3 focus:outline-none focus:text-white"
            type="text"
            placeholder="Search or Start a new chat"
          />
        </div>
      </div>
      <div className="ChatContent">
        {mockChats.map((value, index) => {
          const isActive = value.id === selectedChatID;
          return (
            <button
              key={value.id}
              className={`flex [flex-grow:1] gap-3 [width:100%] hover:[cursor:pointer] hover:bg-zinc-600 rounded-[10px] my-2 ${isActive ? "[outline:none] [background-color:grey] rounded-[10px] [z-index:10]" : ""}`}
              onClick={() => selectedData(value)}
            >
              <div>
                <img
                  src={value.avatar}
                  alt={value.name}
                  className="w-14 rounded-[20px] min-w-0 flex-1"
                />
              </div>
              <div>
                <div className="[text-align:start] overflow-hidden">
                  {value.name}
                </div>
                <div className="one-line-limit text-zinc-400">
                  {value.lastMsg}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
