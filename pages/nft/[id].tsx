import React from 'react';

function NFTPage() {
    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            <div className='bg-gradient-to-br from-cyan-600 to-rose-300 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>

                    {/*LEFT IMAGE*/}
                    <div className='bg-gradient-to-br from-yellow-300 to-purple-500 p-2 rounded-xl'>
                        <img
                            className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                            src='https://links.papareact.com/8sg'
                            alt='Ape NFT'
                        />
                    </div>

                    {/*LEFT TEXT*/}
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

                    <button className='rounded-full bg-blue-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
                        Sign-In
                    </button>
                </header>

                <hr className='my-2 border'/>

                {/*RIGHT CONTENT*/}
                <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
                    <img
                        className='w-80 object-cover pb-10 lg:h-40'
                        src='https://links.papareact.com/bdy'
                        alt='Apes'
                    />

                    <h1 className='text-3xl font-bold lg:text-4xl lg:font-extrabold'>
                        The NICK Coding Group | NFT Drop
                    </h1>

                    <p className='pt-2 text-xl text-green-500'>
                        13 / 21 NFT's claimed
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NFTPage;
