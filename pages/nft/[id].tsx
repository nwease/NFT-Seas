import React from 'react';

function NFTPage() {
    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    {/*LEFT*/}
                    <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                        <img
                            className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                            src='https://links.papareact.com/8sg'
                            alt='Ape NFT'
                        />
                    </div>

                    {/*RIGHT*/}
                    <div className='p-5 text-center space-y-2'>
                        <h1 className='text-4xl font-bold text-white'>
                            Ape NICK
                        </h1>

                        <h2 className='text-xl text-gray-300'>
                            A collection of NFTs!
                        </h2>
                    </div>
                </div>
            </div>

            <div className=''>
                <header className=''>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                        The <span> NICK </span> NFT Market
                    </h1>

                    <button className=''>
                        Sign-In
                    </button>
                </header>

                <div className=''>
                {/*CONTENT*/}
                </div>

                <div className=''>
                {/*BUTTON*/}
                </div>
            </div>
        </div>
    );
}

export default NFTPage;
