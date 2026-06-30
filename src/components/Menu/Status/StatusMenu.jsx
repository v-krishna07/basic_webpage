import { useState } from "react";
import { mockStatus, SeenStatus } from "./statusData";

export function StatusMenu() {
  const [unSeen, setUnSeen] = useState(mockStatus);
  const [seen, setSeen] = useState(SeenStatus);
  const [imageView, setImageview] = useState(null);

  const handleClick = (id, avatar) => {
    setImageview(avatar);
    const moveitem = unSeen.find((item) => item.id === id);
    if (moveitem) {
      setSeen([...seen, moveitem]);
      setUnSeen(unSeen.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="h-full flex flex-col bg-zinc-900 text-white relative">
      <div className="top_layout">
        <div title="Status" className="p-1 mt-2 ml-2">
          <h1>Status</h1>
        </div>
        <div className="top_imgs">
          <img
            className="w-6"
            title="Status Privacy"
            src="https://api.iconify.design/lucide:circle-dashed.svg?color=%23ffffff"
          />
          <img
            className="w-6"
            title="Status Menu"
            src="https://api.iconify.design/lucide:ellipsis-vertical.svg?color=%23ffffff"
          />
        </div>
      </div>

      <div className="flex gap-3 items-center mx-[15px] my-2 p-2 hover:bg-zinc-600 rounded-[15px] cursor-pointer transition">
        <div className="relative w-14 h-14 flex-shrink-0">
          <img
            src={mockStatus[0]?.avatar}
            className="w-full h-full aspect-[1/1] rounded-full object-cover"
            alt="My Profile"
          />
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-zinc-900 flex items-center justify-center text-white text-[14px] font-bold shadow-md">
            +
          </div>
        </div>
        <div className="text-left flex-1 min-w-0">
          <div className="font-medium text-zinc-100 text-[16px]">My status</div>
          <div className="text-zinc-400 text-sm one-line-limit">
            Click to add status
          </div>
        </div>
      </div>

      <div className="mx-[15px] mt-4 mb-2 px-2 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
        Recent updates
      </div>

      <div className="ChatContent">
        {unSeen.map((value) => {
          return (
            <button
              key={value.id}
              className="flex gap-3 w-full items-center text-left hover:cursor-pointer hover:bg-zinc-600 rounded-[10px] p-2 my-1 transition group focus:outline-none"
              onClick={() => handleClick(value.id, value.avatar)}
            >
              <div className="w-14 h-14 flex-shrink-0 p-[2px] border-2 border-emerald-500 rounded-full">
                <img
                  src={value.avatar}
                  alt={value.alt}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="overflow-hidden flex-1 min-w-0">
                <div className="text-[16px] font-medium text-zinc-100 group-hover:text-white">
                  {value.name}
                </div>
                <div className="text-zinc-400 text-sm one-line-limit">
                  {value.lastSeen}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mx-[15px] mt-4 mb-2 px-2 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
        Viewed
      </div>

      <div className="ChatContent">
        {seen.map((value) => {
          return (
            <button
              key={value.id}
              className="flex gap-3 w-full items-center text-left hover:cursor-pointer hover:bg-zinc-600 rounded-[10px] p-2 my-1 transition group focus:outline-none"
              onClick={() => setImageview(value.avatar)}
            >
              <div className="w-14 h-14 flex-shrink-0 p-[2px] border-2 border-zinc-500 rounded-full">
                <img
                  src={value.avatar}
                  alt={value.alt}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="overflow-hidden flex-1 min-w-0">
                <div className="text-[16px] font-medium text-zinc-100 group-hover:text-white">
                  {value.name}
                </div>
                <div className="text-zinc-400 text-sm one-line-limit">
                  {value.lastSeen}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {imageView && (
        <div className="fixed inset-0 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          {/* Back panel click target layer */}
          <div
            className="absolute inset-0"
            onClick={() => setImageview(null)}
          />

          <button
            onClick={() => setImageview(null)}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-800/60 transition z-50"
            title="Close view"
          >
            ✕
          </button>

            <img
            src={imageView}
            className="max-w-[75vw] max-h-[90vh] rounded-sm z-10 relative border-2 border-zinc-900 bg-black"
            alt="Status display"
          />
        </div>
      )}
    </div>
  );
}
