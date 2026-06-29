import { ChatInbox } from "./ChatInbox";


export function ParticularChatData({chat}){
  if (!chat) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#222222] text-zinc-500">
        <img 
          className="w-20 h-20 opacity-20 mb-4" 
          src="https://unpkg.com/lucide-static/icons/message-square.svg" 
          alt="No conversation selected"
        />
        <h3 className="text-xl font-medium text-zinc-400">WhatsUpp Web</h3>
        <p className="text-sm text-zinc-500 mt-1">Select a chat from the sidebar to display messages.</p>
      </div>
    );
  }
  return(<div>
    <ChatInbox avatar={chat.avatar} name={chat.name} id={chat.id}/>
  </div>)
}