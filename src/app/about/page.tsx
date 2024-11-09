export default function About() {
    return (
        <div className="bg-[#101124] h-auto py-[7rem]">
            <div className="flex items-center justify-center bg-[#1A193D]  h-auto w-auto py-[4.17%]">
                {/* left side */}

                <div className="w-[60%] text-justify m-20 text-gray-300">
                    <h1 className="text-4xl mb-4 font-bold text-yellow-300">About me</h1>
                    <span className="text-[18px]">
                    Hi, I am <strong> Abrar Ahmed</strong>, a Web Developer with a passion for creating user-friendly websites.  Currently, I am honing my skills in Next.js, leveraging itspowerful features to build dynamic and efficient applications. As I expand my expertise into back-end development, I'm excited to explore technologies that enhance my full-stack capabilities. My     goal is to bridge the gap between front-end and back-end development, creating cohesive and user-friendly applications.
                    </span>
                </div>


                {/* right side */}

                <div>
                    <img src="/profile-pic.jfif" alt="Profile Picture" className="h-44 w-auto rounded-xl border-2 border-white mx-20" />
                </div>

            </div>
        </div>
    )
}