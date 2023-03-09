import React from "react";
import Download from "../icon/Download";

const AppComp = (props) => {
  const size = (Math.round(props.size/1024/1024));
  return (
    <div className="flex flex-col items-center justify-center rounded-3xlpx-2 py-2 border-red-200 space-y-1">
      <h1 className="text-white"><span className="font-bold">{props.name.replace(/-/g, ' ').replace(/ release/g, '-release').replace(/.apk/g, '')}</span></h1>
      <button className="px-6 py-2 min-w-fit rounded-full text-gray-100 font-bold bg-red-600 hover:bg-red-800 text-xs flex items-center" onClick={() => (document.location.href = props.download)} ><Download style="w-4 h-4" />&nbsp; Download {size} MB</button>
    </div>
  );
};

export default AppComp;
