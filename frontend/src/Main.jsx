// import { Menu } from '@headlessui/react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Me from "./images/me.png"
import { DiPython, DiJava } from 'react-icons/di'
import { SiCsharp, SiTypescript, SiMysql, SiTensorflow, SiKeras } from 'react-icons/si'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaSnapchat } from "react-icons/fa"
import { AiFillFilePdf } from 'react-icons/ai'
import { VerticalTimeline } from 'react-vertical-timeline-compontent'
// Notes: Add parallax

const ProjectGrid = () => {
    return (
        <>
            <p className="text-5xl font-bold text-white text-center mb-8">Personal Projects</p>
            <div className="grid grid-cols-3 container rounded-lg mx-auto mb-16">
                <label className="hover:cursor-pointer bg-secondary hover:bg-gold ease-in-out transition duration-200 h-48" htmlFor="my-modal">
                    <div className="text-center p-10">
                        <p className="text-white text-xl">Machine Learning Stock Predictor</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary hover:bg-gold ease-in-out transition duration-200 h-48" htmlFor="my-modal">
                    <div className="text-center p-10">
                        <p className="text-white text-xl">Chess Artificial Intelligence</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary hover:bg-gold ease-in-out transition duration-200 h-48" htmlFor="my-modal">
                    <div className="text-center p-10">
                        <p className="text-white text-xl">LectureGPT</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary hover:bg-gold ease-in-out transition duration-200 h-48" htmlFor="my-modal">
                    <div className="text-center p-10">
                        <p className="text-white text-xl">Bay Ridge Trails App</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary hover:bg-gold ease-in-out transition duration-200 h-48" htmlFor="my-modal">
                    <div className="text-center p-10">
                        <p className="text-white text-xl">Projectile Motion Simulator</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary hover:bg-gold ease-in-out transition duration-200 h-48" htmlFor="my-modal">
                    <div className="text-center p-10">
                        <p className="text-white text-xl">Fitness Newsletter</p>
                    </div>
                </label>
            </div>
            {/* <label htmlFor="my-modal" className="btn">open modal</label> */}

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </>
    )
}

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='md:container mx-auto'>
                <div className="flex justify-center mb-16">
                    <div className="avatar">
                        <div className="bg-secondary rounded-full w-56 ring-4 ring-gold mx-auto">
                            <img className="scale-90" src={Me} alt="portrait" />
                        </div>
                    </div>
                </div>

                <div className="card w-3/4 md:w-1/2 bg-secondary custom-shadow mx-auto mb-16">
                    <div className="card-body">
                        <p className="text-3xl text-white text-center mb-4">Nice to meet you, my name is</p>
                        <p className="text-6xl font-bold text-important text-center">Rodz Andrie Amor</p>
                        <p className="text-2xl text-white font-semibold italic text-center">Software Engineer & Quant</p>
                        <p className="text-lg text-white italic text-center"><span className="text-umd-red">University</span> of <span className="text-black">Maryland</span> - Class of 2025</p>
                    </div>
                </div>

                <div id="about" className="flex flex-col md:flex-row mx-auto justify-center mb-16">
                    <div className="card bg-secondary w-2/5 mx-8 custom-shadow">
                        <div className="card-body">
                            <p className="text-4xl text-center mb-4 text-white text-bold">About Me</p>
                            <p className="text-white text-lg leading-6">
                                My name is Rodz Andrie Amor, but I go by Andrie. I am a student at
                                the <span className="text-gold">University of Maryland</span> with a major in <span className="text-gold">Computer Science</span> and
                                minor in <span className="text-gold">Computational Finance.</span>
                            </p>
                            <p className="text-white text-lg leading-6">I am currently working to become a Software Engineer or a Quant.</p>
                            <p className="text-white text-lg leading-6 pb-12">Feel free to contact me if you want to collaborate on any projects, ventures, or just want to chat!</p>
                            <div className="flex justify-center">
                                <div className="border border-gold md:w-1/2 hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200">
                                    <a href="mailto:ramorSTEM2022@gmail.com"><p className="text-center text-lg p-4">Email Me!</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-secondary w-2/5 mx-8 custom-shadow">
                        <div className="card-body">
                            <p className="text-4xl text-center mb-4 text-white text-bold">Skills</p>
                            <p>test</p>
                            <div className="flex text-white">
                                <DiPython size={100} />
                                <SiCsharp size={100} />
                                <DiJava size={100} />
                                <SiTypescript size={100} />
                                <SiMysql size={100} />
                            </div>
                            <div className="flex text-white">
                                <SiTensorflow size={100} />
                                <SiKeras size={100} />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="resume" className="mb-12">
                    <p className="text-5xl font-bold text-white text-center mb-8">Resume</p>
                    <div className="flex mx-auto justify-center">
                        <div className="w-48 text-white text-center rounded-lg hover:opacity-70" style={{"background-color":"#c50927"}}>
                            <a href="https://docs.google.com/document/d/1WJnkfLH81-em35itJjUpeag_lw7QDBj-TioHr3SMw6s/edit?usp=sharing" target="_blank" className="text-white block mx-auto text-center px-12 py-6"><AiFillFilePdf className="mx-auto" size={30}/></a>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <p className="text-5xl font-bold text-white text-center mb-6">Contact</p>
                    <div className="flex mx-auto justify-center">
                        <a className="p-5 mx-4 rounded-full text-white hover:opacity-70" style={{background: "#007bb5"}} target="_blank" href="https://www.linkedin.com/in/rodzamor/"><FaLinkedin size={30} /></a>
                        <a className="p-5 mx-4 rounded-full text-white hover:opacity-70" style={{background: "#3B5998"}} target="_blank" href="https://github.com/RodzAmor"><FaGithub size={30} /></a>
                        <a className="p-5 mx-4 rounded-full text-white hover:opacity-70" style={{background: "#e95950"}} target="_blank" href="https://www.instagram.com/andrie.amor/?hl=en"><FaInstagram size={30} /></a>
                        <a className="p-5 mx-4 rounded-full text-white hover:opacity-70" style={{background: "#55ACEE"}} target="_blank" href="https://twitter.com/RodzAmor"><FaTwitter size={30} /></a>
                        {/* <a class="p-2 rounded-full" style={{background: "#fffc00", color: "black"}} href="https://t.snapchat.com/r8W7gXG"><FaSnapchat size={30} /></a> */}
                    </div>
                </div>
            </div>

            <div id="research" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Research</p>
            </div>

            <ProjectGrid />

            <div id="research" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Research</p>
            </div>

            <div id="experience" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Experience</p>
            </div>

            <div id="education" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Education</p>
            </div>
            <Footer />
        </>
    )
}
export default Main;