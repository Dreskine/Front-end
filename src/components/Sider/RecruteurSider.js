"use client";
import React, { useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";
import { useState } from "react";


export default function RecruteurSider() {
    const pathname = usePathname()
    const [selectedKey, setSelectedKey] = useState(["1"])
    useEffect(()=>{
        if(pathname.startsWith("candidatsC")){
            setSelectedKey(["2"])
        }
        else if(pathname.startsWith("candidatsD")){
            selectedKey(["3"])
        }
        else if(pathname === "candidats"){
            selectedKey(["1"])
        }
    },[pathname] )

    const ItemDuMenu = [
        {label:<Link href="/">Liste candidats Info</Link>, key:1},
        {type: "divider"},
        {label:<Link href="recruteurs/liste">Liste candidats Informatique</Link>, key:2},
    ];
    return <Menu mode="inline" items={ItemDuMenu} selectedKeys={selectedKey}></Menu>
}

