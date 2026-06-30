import { useState } from "react";
import { sidebarIcons } from "./dataSidebar";

export function SideBar({ selected }) {
  return (
    <nav className="Navigation flex flex-col h-screen bg-zinc-800">
      <button
        onClick={() => {
          selected(sidebarIcons[0].id);
        }}
      >
        <img
          src={sidebarIcons[1].url}
          title={sidebarIcons[0].id}
          className="image_setup"
        />
      </button>
      <button
        onClick={() => {
          selected(sidebarIcons[1].id);
        }}
      >
        <img
          src={sidebarIcons[0].url}
          title={sidebarIcons[1].id}
          className="image_setup"
        />
      </button>
      <button
        onClick={() => {
          selected(sidebarIcons[2].id);
        }}
      >
        <img
          src={sidebarIcons[2].url}
          title={sidebarIcons[2].id}
          className="image_setup"
        />
      </button>
      <button
        onClick={() => {
          selected(sidebarIcons[3].id);
        }}
      >
        <img
          src={sidebarIcons[3].url}
          title={sidebarIcons[3].id}
          className="image_setup"
        />
      </button>

      <button
        onClick={() => {
          selected(sidebarIcons[0].id);
        }}
      >
        <img
          src={sidebarIcons[4].url}
          title={sidebarIcons[4].id}
          className="image_setup"
        />
      </button>
      <div className="mt-auto">
        <button
          onClick={() => {
            selected(sidebarIcons[5].id);
          }}
        >
          <img
            src={sidebarIcons[5].url}
            title={sidebarIcons[5].id}
            className="image_setup"
          />
        </button>
      </div>
      <button
        onClick={() => {
          selected(sidebarIcons[6].id);
        }}
      >
        <img
          src={sidebarIcons[6].url}
          title={sidebarIcons[6].id}
          className="image_setup"
        />
      </button>
    </nav>
  );
}
