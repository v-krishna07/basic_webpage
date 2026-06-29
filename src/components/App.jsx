import { ChannelsMenu } from "./Menu/ChannelsMenu";
import { CommunitiesMenu } from "./Menu/CommunitiesMenu";
import { MediaMenu } from "./Menu/MediaMenu";
import { StatusMenu } from "./Menu/StatusMenu";
import { UserMenu } from "./Menu/UserMenu";
import { JoiningChats } from "./Menu/Chat/JoiningChats";
import { SideBar } from "./SideBar";
import "../style/app.css"
import { Route, Routes } from "react-router-dom";
export default function App(){
  return(<div className="grid grid-cols-[auto_320px_1fr] h-screen overflow-hidden">
    <div><SideBar/></div>
    <Routes>
      <Route path="/" element={<JoiningChats/>}/>
      <Route path="/Status" element={<StatusMenu/>}/>
      <Route path="/Channels" element={<ChannelsMenu/>}/>
      <Route path="/Communities" element={<CommunitiesMenu/>}/>
      <Route path="/Media" element={<MediaMenu/>}/>
      <Route path="/User" element={<UserMenu/>}/>
    </Routes>
  </div>)
}