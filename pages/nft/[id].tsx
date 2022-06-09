import React from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

function NFTPage() {

    //AUTHENTICATION
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    console.log(address)

    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            <div className='bg-gradient-to-br from-cyan-600 to-rose-300 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>

                    {/*LEFT IMAGE*/}
                    <div className='bg-gradient-to-br from-yellow-300 to-purple-500 p-2 rounded-xl'>
                        <img
                            className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                            src='https://i.pinimg.com/736x/2c/a3/e6/2ca3e6ca589553a8cd71566437ee150d.jpg'
                            alt='Ape NFT'
                        />
                    </div>

                    {/*LEFT TEXT*/}
                    <div className='p-5 text-center space-y-2'>
                        <h1 className='text-4xl font-bold text-white'>
                            NFT Nick
                        </h1>

                        <h2 className='text-xl text-gray-300'>
                            A collection of awesome NFTs!
                        </h2>
                    </div>
                </div>
            </div>

            {/*RIGHT HEADER*/}
            <div className='flex flex-1 flex-col p-12 lg:col-span-6 bg-gray-100'>
                <header className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                        The{' '}
                        <span className='font-extrabold underline decoration-amber-500'>
                            NICK
                        </span>{' '}
                        NFT Marketplace
                    </h1>

                    <button
                        onClick={() => (address ? disconnect() : connectWithMetamask())}
                        className='rounded-full bg-blue-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'
                    >
                        {address ? 'Sign Out' : 'Sign In'}
                    </button>
                </header>

                <hr className='my-2 border'/>

                {address && (
                    <p className='text-gray-600 text-center text-sm'>
                        You are logged into metaMask {address.substring(0, 5)}...{address.substring(address.length - 5)}
                    </p>
                )}

                {/*RIGHT CONTENT*/}
                <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
                    <img
                        className='w-full object-cover pb-10 lg:h-100 lg:w-100'
                        src='https://nftnewspro.com/wp-content/uploads/2021/09/most-expensive-nft.png'
                        alt='Apes'
                    />

                    <h1 className='text-3xl font-bold lg:text-4xl lg:font-extrabold'>
                        The NICK Coding Group | NFT Drop
                    </h1>

                    <p className='pt-2 text-xl text-green-500'>
                        13 / 21 NFT's claimed
                    </p>
                </div>

                {/*MINT NFT BUTTON*/}
                <button className=' mt-10 h-16 w-full bg-red-600 text-white rounded-full font-bold'>
                    Mint NFT (0.01 ETH)
                </button>
            </div>
        </div>
    );
}

export default NFTPage;
