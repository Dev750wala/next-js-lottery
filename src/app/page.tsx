"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines";
import Navbar from "@/components/Header";
import abi from "../assets/Raffle Abi.json" assert { type: "json" };
import { BaseTransactionOptionsUpdated, enterRaffle, getNumberOfPlayers, getRecentWinner, getEntranceFee } from "../thirdweb/11155111/0x2fc699ebe3833268bcddc40ed778ff9f40e317fb";
import { BaseTransactionOptions, sendTransaction } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { client } from "./client";
import { useActiveAccount, useActiveWalletChain } from "thirdweb/react";

export default function Home() {
    const account = useActiveAccount();
    const chain = useActiveWalletChain();
    const [isConnected, setIsConnected] = useState(false);
    const [totalPlayers, setTotalPlayers] = useState(0);
    const [lastWinner, setLastWinner] = useState("");
    const [entranceFee, setEntranceFee] = useState("");

    useEffect(() => {
        const fetchRaffleData = async () => {
            const options: BaseTransactionOptions = {
                contract: {
                    address: "0x2fC699ebE3833268BcDdC40Ed778FF9f40e317fB",
                    abi: abi as any[],
                    client: client,
                    chain: sepolia,

                }
            }
            const totalPlayers = await getNumberOfPlayers(options)
            const recentWinner = await getRecentWinner(options)
            const entranceFee = await getEntranceFee(options)
            setTotalPlayers(Number(totalPlayers))
            setLastWinner(recentWinner)
            setEntranceFee((Number(entranceFee)*10**-18).toString())
        }
        fetchRaffleData()
    }, [])


    console.log("Chain: ", chain);
    
    useEffect(() => {
        if (account && chain?.name === "Sepolia") {
            setIsConnected(!!account);
        }
    }, [account, chain]);

    async function handleEnterRaffle(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (!account) {
            console.error("Account not available");
            return;
        }

        try {
            const options: BaseTransactionOptionsUpdated = {
                contract: {
                    address: "0x2fC699ebE3833268BcDdC40Ed778FF9f40e317fB",
                    abi: abi as any[],
                    client: client,
                    chain: sepolia,
                },
                raffleAmountByPlayer: Promise.resolve(10000000000000000n),
            };

            const enterRaffleTx = await enterRaffle(options);
            const txResponse = await sendTransaction({
                transaction: enterRaffleTx,
                account: account,
            });
            console.log("Transaction response: ", txResponse);
        } catch (error) {
            console.error("Error entering raffle:", error);
        }
    }

    return (
        <BackgroundLines className="bg-[#040514] h-screen flex items-center justify-center w-full flex-col py-4">
            <main className="pt-4 min-h-[100vh] flex flex-row justify-start container w-screen z-10">
                <div className="py-20">
                    <Navbar />
                    <div className="flex flex-col justify-center items-start w-[70vw] h-[65vh] mb-20 gap-4 ml-10">
                        <h1 className="text-6xl font-extrabold text-yellow-50">Welcome to the Dev Raffle</h1>
                        <h2 className="text-2xl font-bold text-yellow-50">Total Players: {totalPlayers}</h2>
                        <h2 className="text-2xl font-bold text-yellow-50">Last Winner: {lastWinner}</h2>
                        <h2 className="text-2xl font-bold text-yellow-50">Entrance Fee: {entranceFee} ETH</h2>
                        {isConnected ? (
                            <Button onClick={handleEnterRaffle} className=" bg-[#fffb27] text-black p-2 rounded-full py-2 font-semibold">
                                Pay {entranceFee} to enter raffle
                            </Button>
                        ) : (
                            <h1 className="text-3xl font-bold text-red-600 rounded-xl bg-white p-2">Connect your wallet first</h1>
                        )}
                    </div>
                    {/* <button>Hello World</button> */}
                </div>
            </main>
        </BackgroundLines>
    );
}
