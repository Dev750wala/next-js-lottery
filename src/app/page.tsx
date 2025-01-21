"use client";

import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import Navbar from "@/components/Header";
import abi from "../assets/Raffle Abi.json" assert { type: "json" };
import { BaseTransactionOptionsUpdated, enterRaffle, getNumberOfPlayers, } from "../thirdweb/11155111/0x2fc699ebe3833268bcddc40ed778ff9f40e317fb"
import { useEffect, useState } from "react";
import { prepareContractCall, sendTransaction } from "thirdweb"
import { Button } from "@/components/ui/button";
// import {
//     useContractWrite,
//     useContract,
//     Web3Button,
//     UseContractResult,
// } from "@thirdweb-dev/react";


// import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains"
import { client } from "./client";
import { isBaseTransactionOptions } from "thirdweb";
import { TranasctionOptions } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { Account } from "thirdweb/wallets";
import { useConnectionStatus } from "@thirdweb-dev/react"
// import { useWalletBalance,  } from "thirdweb/react"

export default function Home() {
    const [ pay, setPay ] = useState(false)

    const connectionStatus = useConnectionStatus()
    var account: Account
    if (connectionStatus === "connected") {
        account = useActiveAccount() as Account
    }
    
    // const { contract }: UseContractResult = useContract("0x2fC699ebE3833268BcDdC40Ed778FF9f40e317fB");
    // const contract = getContract({
    //     client: client,
    //     chain: sepolia,
    //     address: "0x2fC699ebE3833268BcDdC40Ed778FF9f40e317fB",
    //     abi: abi as any[]
    // })
    // useEffect(() => {
    //     async function getPlayers() {
    //         const options = {
    //             contract: {
    //                 address: "0x2fC699ebE3833268BcDdC40Ed778FF9f40e317fB",
    //                 abi: abi as any[],
    //                 client: client,
    //                 chain: sepolia
    //             }
    //         };
    //         const numberOfPlayers = await getNumberOfPlayers(options)
    //         console.log("Number of players: ", numberOfPlayers);
    //     }   
    //     getPlayers()
    // }, [])
    useEffect(() => {
        async function getPlayers() {
            const options: BaseTransactionOptionsUpdated = {
                contract: {
                    address: "0x2fC699ebE3833268BcDdC40Ed778FF9f40e317fB",
                    abi: abi as any[],
                    client: client,
                    chain: sepolia
                },
                raffleAmountByPlayer: Promise.resolve(10000000000000000n)

            };
            const enterRaffle2 = await enterRaffle(options)
            const txResponse = await sendTransaction({
                transaction: enterRaffle2,
                account: account
            })
            console.log("Transaction response: ", txResponse)
        }
        getPlayers()
    }, [pay])



    return (
        <BackgroundLines className="bg-[#040514] h-screen flex items-center justify-center w-full flex-col px-4">

            <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
                <div className="py-20">
                    <Navbar />
                    <div className="flex justify-center mb-20 ">
                        {
                            connectionStatus === "connected" ? (
                                <Button onClick={() => setPay(true)} className="bg-[#f9a826] text-black p-2 rounded-full py-2">Enter Raffle</Button>
                            ) : (
                                <h1>Connect your wallet first</h1>
                            )
                        }
                    </div>

                </div>
            </main>
        </BackgroundLines>
    );
}