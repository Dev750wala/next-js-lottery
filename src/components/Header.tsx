import Link from 'next/link'
import { createWallet } from 'thirdweb/wallets'
import { ConnectButton } from 'thirdweb/react'
import { client } from '@/app/client'
import { sepolia } from 'thirdweb/chains'

export default function Navbar() {
    const wallets = [
        createWallet("io.metamask"),
        createWallet("app.backpack"),
        createWallet("com.coinbase.wallet"),
    ]

    return (
        <nav className="bg-transparent backdrop-blur shadow-md fixed top-0 left-0 right-0 z-50 p-3">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <h1 className="text-slate-300 font-extrabold px-3 py-2">
                            Raffle DApp
                        </h1>
                        <h2 className="text-slate-300 underline hover:text-slate-200 font-extrabold px-3 py-2 rounded-md">
                            <Link href="https://devsadisatsowala.tech">
                                My Portfolio
                            </Link>
                        </h2>
                    </div>
                    <div>
                        <ConnectButton
                            client={client}
                            wallets={wallets}
                            chain={sepolia}
                            connectButton={
                                {
                                    label: "Connect wallet",
                                    className: "bg-white text-black p-2 rounded-full py-2"
                                }
                            }
                            connectModal={{
                                size: "wide",
                                title: "Connect your Wallet",
                                showThirdwebBranding: false,
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

