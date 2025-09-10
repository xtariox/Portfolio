import Link from "next/link"
import { useState } from "react"
const navItems = [
{
    id: 1,
    isActive: true,
    text: "Home",
    link: "#"
},
{
    id: 2,
    isActive: false,
    text: "Portfolio",
    link: "#"
},
{
    id: 3,
    isActive: false,
    text: "Blog",
    link: "#"
},
{
    id: 4,
    isActive: false,
    text: "About",
    link: "#"
},
]


export const Navbar = () => {
const [openNavbar, setOpenNavbar] = useState(false)
const toggleNavbar = () => {
    setOpenNavbar(openNavbar => !openNavbar)
}
const closeNavbar = () => {
    setOpenNavbar(false)
}
return (
    <>
        <div onClick={() => { closeNavbar() }} aria-hidden="true" className={
            `fixed bg-gray-800/40 inset-0 z-30 ${openNavbar ? "flex lg:hidden" : "hidden"}`
        } />
        <header className="sticky px-5 left-0 top-0 w-full flex items-center h-20 bg-white border-b border-b-gray-200 dark:bg-gray-950 dark:border-b-gray-800 z-40">
            <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                <div className="w-full flex items-center lg:hidden">
                    <button onClick={() => { toggleNavbar() }} aria-label="toggle navbar" className="outline-none border-r border-r-gray-200 dark:border-r-gray-800 pr-3 relative py-3 children:flex">
                        <span aria-hidden="true" className={`
                            h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                            ${openNavbar ? " rotate-45 translate-y-[0.33rem]" : ""}
                        `} />
                        <span aria-hidden="true" className={`
                            mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                            ${openNavbar ? " -rotate-45 -translate-y-[0.33rem]" : ""}
                        `} />
                    </button>
                </div>
                <div className={`
                    top-full absolute left-0 bg-white dark:bg-gray-950 dark:lg:bg-transparent
                     lg:flex w-full ease-linear duration-300
                    lg:relative lg:bg-transparent border-b border-b-gray-200 dark:border-b-gray-800 lg:border-b-0
                    ${openNavbar ? "" : "invisible opacity-0 lg:visible lg:opacity-100"}
                `}>
                    <ul className=" px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-x-5 text-gray-700 dark:text-gray-300 py-4 lg:py-0">
                        {
                            navItems.map(item => (
                                <li key={item.id}>
                                    <Link href={item.link} className={`
                                        relative py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                                        ${item.isActive ? "after:bg-gray-600 after:w-4" : ""}
                                    `}>
                                        {item.text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex items-center flex-1">
                    <Link href="#" className="flex items-center gap-x-0.5 text-gray-800 dark:text-gray-200">
                        <span className="bg-gray-700 dark:bg-gray-800 text-white px-2 py-1.5 rounded-lg">H</span>
                        <span aria-hidden="true" className="hidden sm:flex">AIDA</span>
                    </Link>
                </div>
                <div className="flex justify-end items-center gap-x-1.5 sm:gap-x-2 w-full text-gray-700 dark:text-gray-300">
                    <a href="https://github.com/" target="_blank" className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100" rel="noopener noreferrer">
                      <span className="sr-only">GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="m-1 w-5 h-5" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100" rel="noopener noreferrer">
                      <span className="sr-only">LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="m-1 w-5 h-5" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.821 0-1.358.54-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.908 8.212h2.4v-4.045c0-.216.016-.432.08-.586.176-.432.577-.88 1.25-.88.881 0 1.234.664 1.234 1.637v3.874h2.4V9.359c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.6 5.6 0 0 1 .016-.025V6.169h-2.4c.03.7 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                </div>
            </nav>
        </header>
    </>
)
}
 