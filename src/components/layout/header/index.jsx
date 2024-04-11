import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname])

    return (
        <nav className="fixed w-full top-0 bg-bgHeader z-10">
            <div className="px-4 lg:px-40 flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={require("../../../assets/images/Logo3.png")} className="h-16" alt="Flowbite Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setOpen(prev => !prev)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={["w-full md:block md:w-auto ", !open && "hidden"].join(" ")} id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row space-x-8 rtl:space-x-reverse">
                        <li className="pl-[30px]">
                            <Link to="/" className="uppercase cursor-pointer font-normal block py-2 px-3 text-white rounded hover:font-semibold md:border-0 md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/tokenomics" className="uppercase cursor-pointer font-normal block py-2 px-3 text-white rounded hover:font-semibold md:border-0 md:p-0">Tokenomics/roadmap</Link>
                        </li>
                        <li>
                            <Link to="/iod-policy" className="uppercase cursor-pointer font-normal block py-2 px-3 text-white rounded hover:font-semibold md:border-0 md:p-0">IDO Policy</Link>
                        </li>
                        <li>
                            <Link to="/faqs" className="uppercase cursor-pointer font-normal block py-2 px-3 text-white rounded hover:font-semibold md:border-0 md:p-0">FAQs</Link>
                        </li>
                        <li>
                            <Link to="/dapp" className="uppercase cursor-pointer font-normal block py-2 px-3 text-white rounded hover:font-semibold md:border-0 md:p-0">DAPP</Link>
                        </li>
                        <li>
                            <Link to="/staking" target="_blank" className="uppercase cursor-pointer font-normal block py-2 px-3 text-white rounded hover:font-semibold md:border-0 md:p-0">Staking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export { Header };