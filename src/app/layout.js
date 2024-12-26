"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import RecruteurHeader from "@/components/Header/RecruteurHeader";
import CandidatsHeader from "@/components/Header/CandidatHeader"; 
import Sider from "antd/es/layout/Sider";
import RecruteurSider from "@/components/Sider/RecruteurSider";
import CandidatsSider from "@/components/Sider/CandidatsSider";
import { Layout } from 'antd';
import { Content } from "antd/es/layout/layout";
import { usePathname } from 'next/navigation';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { I18nProvider } from '@/app/i18n-provider';
import '@/i18n/config';

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"], 
});

export default function RootLayout({ children }) {
 const pathname = usePathname();
 const isCandidatsRoute = pathname.startsWith("/candidats");
 const isRecruteursRoute = pathname.startsWith("/recruteurs");

 return (
   <html>
     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <I18nProvider>
         <AntdRegistry>
           <Layout>
             {isCandidatsRoute && <CandidatsHeader />}
             {isRecruteursRoute && <RecruteurHeader />}

             <Layout hasSider={isCandidatsRoute || isRecruteursRoute}>
               {(isCandidatsRoute || isRecruteursRoute) && (
                 <Sider
                   theme="light"
                   style={{
                     position: "fixed",
                     top: "64px",
                     left: 0,
                     borderRight: "2px solid grey",
                     height: "calc(100vh - 64px)",
                   }}
                 >
                   {isCandidatsRoute && <CandidatsSider />}
                   {isRecruteursRoute && <RecruteurSider />}
                 </Sider>
               )}

               <Layout style={{ marginLeft: (isCandidatsRoute || isRecruteursRoute) ? "200px" : 0 }}>
                 <Content style={{ padding: "20px", minHeight: "calc(100vh - 64px)" }}>
                   {children}
                 </Content>
               </Layout>
             </Layout>

             <LanguageSwitcher />
           </Layout>
         </AntdRegistry>
       </I18nProvider>
     </body>
   </html>
 );
}