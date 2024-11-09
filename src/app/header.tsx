import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#1A193D] h-auto text-center text-white">
            <div className="flex flex-row items-center justify-between">
                <div id="Logo" className="px-[4%] text-3xl font-bold text-yellow-400">
                    Portfolio
                </div>

                <div className="mx-5 font-semibold text-center">
                    <ul className="flex flex-row flex-wrap items-center justify-center text-sm h-[10vh] mx-7">
                        <li className="p-2 mx-4 bg-transparent transition-all hover:bg-yellow-300 hover:text-gray-700 rounded-lg "><Link href="./">HOME</Link></li>
                        <li className="p-2 mx-4 bg-transparent transition-all hover:bg-yellow-300 hover:text-gray-700 rounded-lg "><Link href="./about">ABOUT</Link></li>
                        <li className="p-2 mx-4 bg-transparent transition-all hover:bg-yellow-300 hover:text-gray-700 rounded-lg "><Link href="./projects">PROJECTS</Link></li>
                        <li className="p-2 mx-4 bg-transparent text-center transition-all hover:bg-yellow-300 hover:text-gray-700 rounded-lg "><Link href="./contact">CONTACT</Link></li>
                    </ul>
                </div>

            </div>
        </header>
    )
}