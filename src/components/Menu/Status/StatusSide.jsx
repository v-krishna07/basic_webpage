export function StatusSide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#222222] text-zinc-500">
      <img
        className="w-20 h-20 opacity-20 mb-4"
        src="https://unpkg.com/lucide-static/icons/message-square.svg"
        alt="No conversation selected"
      />
      <h3 className="text-xl font-medium text-zinc-400">Share Status updates</h3>
      <p className="text-sm text-zinc-500 mt-1">
        Share photos,videos and text that disappear after 24 hours
      </p>
    </div>
    
  );
}
