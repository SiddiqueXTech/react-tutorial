import React from 'react'

export const Shop = () => {
  return (
    <>
       <div className='grid grid-cols-5 h-screen text-center'>
        <div className='col-span-1 bg-zinc-800'>
        </div>
        <div className='col-span-4'>
          <div className='container h-100'>

          </div>
          <div className='text-white bg-zinc-800 w-1/2 m-auto rounded-2xl border-zinc-400 border flex'>
            <input type="text" className='w-full h-full p-3 outline-none' placeholder='Ask me anything' />
            <button>Ask</button>
          </div>
        </div>
        </div> 
    </>
  )
}
