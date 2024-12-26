"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CandidatsSider() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState(["1"]);

  useEffect(() => {
    if (pathname === "/") {
      setSelectedKey(["1"]);
    } else if (pathname.startsWith("/candidats/Informations")) {
      setSelectedKey(["2"]);
    }
  }, [pathname]);

  const ItemDuMenu = [
    { label: <Link href="/candidats/Formulaire">Formulaire</Link>, key: "1" },
    { type: "divider" },
    { label: <Link href="/candidats/Informations">Informations</Link>, key: "2" },
  ];

  return <Menu mode="inline" items={ItemDuMenu} selectedKeys={selectedKey} />;
}
