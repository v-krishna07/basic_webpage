import { ChatMenu } from "./ChatMenu";
import { ParticularChat } from "./ParticularChat";
import { SideBar } from "./SideBar";
import "../style/app.css"
export default function App(){
  return(<div className="grid grid-cols-[auto_320px_1fr]">
    <div><SideBar/></div>
    <div><ChatMenu/></div>
    <div><ParticularChat/></div>
  </div>)
}