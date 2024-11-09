 import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#101124] h-full w-full flex flex-wrap flex-grow items-center justify-center text-gray-200">
      <div id="profileContent" className="bg-gray-700 h-[70%] w-[80%] rounded-3xl flex mx-[20%] my-[6.25%]">
        <div className="inline-block h-[100%] w-[30%]">
          <div className="flex flex-col items-center justify-center h-[100%] text-lg">
            <img src="/profile-pic.jfif" alt="Profile Pic" className='rounded-full w-48 h-48 object-cover mb-2 mt-2'/>
            <h1 className="inline-block text-[1.6rem] font-sans font-bold mb-6">ABRAR AHMED</h1>

              <div className='px-4 overflow-auto'>
                <div className='overflow-hidden h-auto w-[100%] text-justify p-3 border-2 border-gray-500 rounded-xl my-2'>
                  <p className='text-gray-300'>Hi, I am Abrar Ahmed, a Web Developer with a passion for creating user-friendly websites.  Currently, I am honing my skills in... <Link href="./about" className='underline text-white'>Read more</Link></p>
                </div>
              </div>
          </div>
        </div>

        <div id="sideContent" className="flex flex-wrap items-center p-7 h-auto w-[75%] bg-[#1A193A] rounded-3xl">
          <div>
          <h2 className="inline-block text-yellow-400 text-5xl font-bold mb-2">Hello,</h2>
          <h3 className="block text-5xl mb-2 font-mono">I am <strong>Abrar Ahmed</strong> and</h3>
          <h3 className="text-5xl  inline-block">I am&nbsp;</h3>
          <h3 className='text-5xl inline-block text-yellow-400 font-bold'>Web Developer</h3>
          </div>
        </div>

      </div>
    </main>
  )
}