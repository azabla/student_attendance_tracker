"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { GraduationCap, Hand, LayoutDashboard, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  const { user } = useKindeBrowserClient();

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="border shadow-md h-screen p-5 ">
      <div className="flex gap-1">
        <Image
          src={"/logo.svg"}
          width={80}
          height={40}
          alt="logo"
          className=""
        />
        <span className="flex items-center text-slate-600 font-bold">
          YOUR SCHOOL
        </span>
      </div>

      <hr className="my-5" />
      {menuList.map((menu, index) => (
        <h2
          className="flex items-center gap-3 p-4 font-md 
      text-slate-700
       hover:bg-primary
       hover:text-white 
       cursor-pointer 
       rounded-lg"
        >
          <menu.icon />
          {menu.name}
        </h2>
      ))}

      <div className="flex gap-2 items-center bottom-5 fixed p-2">
        <Image
          src={user?.picture}
          width={35}
          height={35}
          alt="user profile"
          className="rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">
            {user?.given_name} {user?.family_name}
          </h2>
          <h2 className="text-sm text-slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
