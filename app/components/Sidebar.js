"use client";
import React from "react";
import { ChartLine, House, Info, Question, Table } from "@phosphor-icons/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 flex flex-col px-3 py-4 space-y-2 rounded-full">
      <button className=" rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
        <House className="h-8 w-8 text-stone-50 m-3" />
      </button>
      <button className=" rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
      <RxDashboard className="h-8 w-8 text-stone-50 m-3" />
      </button>
      <button className=" rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
      <ChartLine className="h-8 w-8 text-stone-50 m-3" />
      </button>
      <button className=" rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
      <Table className="h-8 w-8 text-stone-50 m-3" />
      </button>
      <button className=" rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
      <Info className="h-8 w-8 text-stone-50 m-3" />
      </button>

      
   
    </div>
  );
};

export default Sidebar;
