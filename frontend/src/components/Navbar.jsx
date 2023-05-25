import '../styles.css';
import Icon from '../images/icon.png'

const Navbar = () => {
    return (
        <div className="navbar mx-auto max-w-6xl container rounded-lg custom-shadow bg-secondary mt-2">
            <div className="flex-1">
                <img src={Icon} alt="" style={{height:50, width:50}} />
                <a className="btn btn-ghost text-important normal-case text-5xl" href="/">Rodz Amor</a>
            </div>
            <div className='flex justify-center'>
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <a className='text-white text-2xl font-semibold' href="/">Portfolio</a>
                        <ul className="p-2 bg-secondary custom-shadow">
                            <li className='bg-secondary'><a className="text-lg text-white" href="/books">About</a></li>
                            <li className='bg-secondary'><a className="text-lg text-white" href="/stocks">Resume</a></li>
                            <li className='bg-secondary'><a className="text-lg text-white" href="/books">Projects</a></li>
                            <li className='bg-secondary'><a className="text-lg text-white" href="/stocks">Experience</a></li>
                            <li className='bg-secondary'><a className="text-lg text-white" href="/stocks">Education</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <a className='text-white text-2xl font-semibold' href="/projects">Projects</a>
                    </li>
                    <li tabIndex={0}>
                        <a className='text-white text-2xl font-semibold'>
                            Personal
                            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
                        </a>
                        <ul className="p-2 bg-secondary custom-shadow">
                            <li className='bg-secondary'><a className="text-lg text-white" href="/books">Books</a></li>
                            <li className='bg-secondary'><a className="text-lg text-white" href="/stocks">Stocks</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;