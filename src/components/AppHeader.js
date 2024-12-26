import { Header } from "antd/es/layout/layout";
import React from "react";
import {HeatMapOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";

function AppHeader(){
    return (
        <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z10">
            <div className="flex gap-1">
                <HeatMapOutlined/>
                <div>Recruteur</div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
                Liste des Candidats
            </div>

            <div className="flex items-center gap-1">
                <Avatar size={30} src="/arimayi_logo.jpg"  />
                <div>Arimayi</div>
            </div>
        </Header>
    );
}

export default AppHeader