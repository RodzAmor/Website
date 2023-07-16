import '../styles.css';
import Icon from '../images/icon.png'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="navbar mx-auto max-w-7xl container rounded-lg custom-shadow bg-secondary mt-1 mb-16">
                <div className="flex-1">
                    <img src={Icon} alt="" style={{height:50, width:50}} />
                    <a className="btn btn-ghost text-important normal-case text-lg md:text-5xl" href="/">Rodz Amor</a>
                </div>

                <div className='flex justify-center z-10'>
                    <ul className="hidden sm:flex menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <a className='text-white text-lg md:text-2xl font-semibold' href="/">Portfolio</a>
                            <ul className="p-2 bg-secondary custom-shadow">
                                <li className='bg-secondary'><a className="text-lg text-white" href="#about">About</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="#resume">Resume</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="#projects">Projects</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="#experience">Experience</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="#research">Research</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="#education">Education</a></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a className='text-white text-lg md:text-2xl font-semibold' href="/derivatives-report">ML Reports</a>
                            <ul className="p-2 bg-secondary custom-shadow">
                                <li className='bg-secondary'><a className="text-lg text-white" href="/derivatives-report">Options Price Prediction</a></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a className='text-white text-lg md:text-2xl font-semibold' href="#projects">Projects</a>
                        </li>
                        {/* <li tabIndex={0}>
                            <a className='text-white text-lg md:text-2xl font-semibold' href="/blog">Blog</a>
                        </li> */}
                        {/* <li tabIndex={0}>
                            <a className='text-white text-lg md:text-2xl font-semibold'>
                                Personal
                            </a>
                            <ul className="p-2 bg-secondary custom-shadow">
                                <li className='bg-secondary'><a className="text-lg text-white" href="/videos">Videos</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="/books">Reading<br></br>Journal</a></li>
                                <li className='bg-secondary'><a className="text-lg text-white" href="/stocks">Stocks</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="">
                        <ul className="sm:hidden menu menu-horizontal px-1">
                            {/* <li className='sm:hidden'> */}
                            <li>
                            <button onClick={toggleMenu}>
                                <p className='text-white text-2xl font-semibold '>Menu</p>
                                <GiHamburgerMenu className='text-white' size={30} />
                            </button>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                isMenuOpen && (
                    <div className='navbar mx-auto max-w-7xl container rounded-lg custom-shadow bg-secondary -mt-16 mb-16 flex-col'>
                        <ul className="menu menu-vertical px-1">
                            <li tabIndex={0}>
                                <a className="text-xl mx-auto font-semibold text-white" href="#about">About</a>
                                <a className="text-xl mx-auto font-semibold text-white" href="#resume">Resume</a>
                                <a className="text-xl mx-auto font-semibold text-white" href="#projects">Projects</a>
                                <a className="text-xl mx-auto font-semibold text-white" href="#experience">Experience</a>
                                <a className="text-xl mx-auto font-semibold text-white" href="#education">Education</a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default Navbar;