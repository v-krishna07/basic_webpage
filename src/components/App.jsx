import { ChannelsMenu } from "./Menu/ChannelsMenu";
import { CommunitiesMenu } from "./Menu/CommunitiesMenu";
import { MediaMenu } from "./Menu/MediaMenu";
import { Status } from "./Menu/Status/Status";
import { UserMenu } from "./Menu/UserMenu";
import { JoiningChats } from "./Menu/Chat/Chats";
import { SideBar } from "./Menu/Sidebar/SideBar";
import "../style/app.css"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { sidebarIcons } from "./Menu/Sidebar/dataSidebar";







export default function App(){


  const [selectedTheme,setSelectedTheme]=useState(sidebarIcons[0].id)

  const COMPARISION = {
    [sidebarIcons[0].id]:<JoiningChats/>,
    [sidebarIcons[1].id]:<Status/>,
    [sidebarIcons[2].id]:<ChannelsMenu/>,
    [sidebarIcons[3].id]:<CommunitiesMenu/>,
    [sidebarIcons[4].id]:<JoiningChats/>,
    [sidebarIcons[5].id]:<MediaMenu/>,
    [sidebarIcons[6].id]:<UserMenu/>,
  }

  return(<div className="grid grid-cols-[auto_1fr] h-screen overflow-hidden">
    <div><SideBar selected={setSelectedTheme}/></div>
    <div className="h-full w-full overflow-hidden">
      {COMPARISION[selectedTheme]||<JoiningChats/>}
    </div>
  </div>)
}