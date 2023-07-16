import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import { AiOutlineMail, AiFillPhone } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="footer max-w-7xl container mx-auto p-4 bg-secondary text-white rounded-lg custom-shadow overflow-x-auto">
            <div className="flex justify-center">
                <p className="p-2">Copyright © {new Date().getFullYear} Rodz Amor</p>
                <div className="flex items-center p-2"><AiOutlineMail /><p className="pl-1">(443) 851-9114</p></div>
                <div className="flex items-center p-2">
                    <AiFillPhone /><a href="mailto:ramorSTEM2022@gmail.com" className="hover:opacity-80 pl-1" style={{color: "#457b9d"}}>ramorSTEM2022@gmail.com</a>
                </div>
            </div> 

            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a className="p-2 rounded-full hover:opacity-70" style={{background: "#007bb5"}} href="https://www.linkedin.com/in/rodzamor/"><FaLinkedin size={20} /></a>
                <a className="p-2 rounded-full hover:opacity-70" style={{background: "#3B5998"}} href="https://github.com/RodzAmor"><FaGithub size={20} /></a>
                <a className="p-2 rounded-full hover:opacity-70" style={{background: "#e95950"}} href="https://www.instagram.com/andrie.amor/?hl=en"><FaInstagram size={20} /></a>
                <a className="p-2 rounded-full hover:opacity-70" style={{background: "#55ACEE"}} href="https://twitter.com/RodzAmor"><FaTwitter size={20} /></a>
                {/* <a class="p-2 rounded-full" style={{background: "#fffc00", color: "black"}} href="https://t.snapchat.com/r8W7gXG"><FaSnapchat size={20} /></a> */}
            </div>
        </footer>
    )
}

export default Footer;