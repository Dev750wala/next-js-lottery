"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets"
import { BackgroundLines } from "@/components/ui/background-lines";
import Navbar from "@/components/Header";

export default function Home() {

    return (
        <BackgroundLines className="bg-[#040514] h-screen flex items-center justify-center w-full flex-col px-4">

            <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
                <div className="py-20">
                    <Navbar />

                    <div className="flex justify-center mb-20 ">
                    </div>

                </div>
            </main>
        </BackgroundLines>
    );
}