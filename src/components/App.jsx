import { ChannelsMenu } from "./Menu/ChannelsMenu";
import { CommunitiesMenu } from "./Menu/CommunitiesMenu";
import { MediaMenu } from "./Menu/MediaMenu";
import { StatusMenu } from "./Menu/StatusMenu";
import { UserMenu } from "./Menu/UserMenu";
import { JoiningChats } from "./Menu/Chat/Chats";
import { SideBar } from "./Menu/Sidebar/SideBar";
import "../style/app.css"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { sidebarIcons } from "./Menu/Sidebar/dataSidebar";
export default function App(){
  const [selectedTheme,setSelectedTheme]=useState(sidebarIcons[0].id)
  return(<div className="grid grid-cols-[auto_320px_1fr] h-screen overflow-hidden">
    <div><SideBar selected={setSelectedTheme}/></div>
    
    <div>{(selectedTheme===sidebarIcons[0].id)&&<JoiningChats/>}</div>
    <div>{(selectedTheme===sidebarIcons[1].id)&&<StatusMenu/>}</div>
    <div>{(selectedTheme===sidebarIcons[2].id)&&<ChannelsMenu/>}</div>
    <div>{(selectedTheme===sidebarIcons[3].id)&&<CommunitiesMenu/>}</div>
    <div>{(selectedTheme===sidebarIcons[4].id)&&<JoiningChats/>}</div>
    <div>{(selectedTheme===sidebarIcons[5].id)&&<MediaMenu/>}</div>
    <div>{(selectedTheme===sidebarIcons[6].id)&&<UserMenu/>}</div>
  </div>)
}