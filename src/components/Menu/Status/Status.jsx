import { StatusMenu } from "./StatusMenu";
import { StatusSide } from "./StatusSide";

export function Status() {
  return (
    <div className="flex flex-row items-center h-screen w-full overflow-hidden bg-zinc-900 text-white">
      <div className="h-full border-r border-zinc-800 flex flex-col flex-shrink-0">
        <StatusMenu />
      </div>
      <div className="flex-1 min-w-0 h-full flex flex-col bg-[#222222]">
        <StatusSide/>
      </div>
    </div>
  );
}