"use client";
import React from "react";
import { Menu } from "antd";
import Link from "next/link";

export default function RecruteurSider() {

  const ItemDuMenu = [
    { 
        label: <Link href="/recruteurs/liste">Liste candidats Informatique</Link>, 
        key: "1" 
    },
  ];

  return <Menu mode="inline" items={ItemDuMenu} selectedKeys={["1"]} />;
}