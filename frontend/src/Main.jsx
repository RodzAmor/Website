// import { Menu } from '@headlessui/react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Me from "./images/me.png"
import { DiJava, DiSwift, DiReact } from 'react-icons/di'
import { SiCsharp, SiTypescript, SiMysql, SiTensorflow, SiKeras } from 'react-icons/si'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaSnapchat, FaAws } from "react-icons/fa"
import { AiFillFilePdf } from 'react-icons/ai'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import STAMP from './images/experience/STAMP.png'
import CVS from './images/experience/CVS.png'
import PandaExpress from './images/experience/PandaExpress.png'
import CodeNinjas from './images/experience/CodeNinjas.png'
import UMD from './images/UMD.png'
import Microplastics from './images/research/microplastics.jpeg'
import ProjectGrid from "./Projects"
// Notes: Add parallax


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

                <div className="card w-10/12 md:w-1/2 bg-secondary custom-shadow mx-auto mb-16">
                    <div className="card-body">
                        <p className="text-3xl text-white text-center mb-4">Nice to meet you, my name is</p>
                        <p className="text-6xl font-bold text-important text-center">Rodz Andrie Amor</p>
                        <p className="text-2xl text-white font-semibold italic text-center">Software Engineer & Quant</p>
                        <p className="text-lg text-white italic text-center"><span className="text-umd-red">University</span> of <span className="text-black">Maryland</span> - Class of 2025</p>
                    </div>
                </div>

                <div id="about" className="grid grid-cols-1 lg:grid-cols-2 mx-auto justify-center items-stretch mb-16 gap-y-8 lg:gap-y-0 gap-x-4">
                    <div className="card bg-secondary w-10/12 custom-shadow mb-6 lg:mb-0 mx-auto">
                        <div className="card-body">
                            <p className="text-4xl text-center mb-4 text-white text-bold">About Me</p>
                            <p className="text-white text-lg leading-6">
                                My name is Rodz Andrie Amor, but I go by Andrie. I am a student at
                                the <span className="text-gold">University of Maryland</span> with a major in <span className="text-gold">Computer Science</span> and
                                minor in <span className="text-gold">Computational Finance.</span>
                            </p>
                            <p className="text-white text-lg leading-6">I am currently working to become a Software Engineer and a Quant.</p>
                            <p className="text-white text-lg leading-6 pb-12">Feel free to contact me if you want to collaborate on any projects, ventures, or just want to chat!</p>
                            <div className="flex justify-center">
                                <div className="border border-gold md:w-1/2 hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200">
                                    <a href="mailto:ramorSTEM2022@gmail.com"><p className="text-center text-lg p-4">Email Me!</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-10/12 bg-secondary custom-shadow mx-auto">
                        <div className="card-body flex-grow-0">
                            <p className="text-4xl text-center mb-4 text-white text-bold">Skills</p>
                            <p className="text-lg text-center text-white text-bold">Languages</p>
                            <div className="grid grid-cols-3 gap-2 gap-y-4 text-white">
                                <div className="mx-auto">
                                    <svg width="80px" height="80px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#327EBD"/>
                                    <stop offset="1" stop-color="#1565A7"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFDA4B"/>
                                    <stop offset="1" stop-color="#F9C600"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </div>
                                <SiCsharp size={80} className="mx-auto" style={{ color: '#239120' }} />
                                <div className="mx-auto">
                                    <svg width="80px" height="80px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"/>
                                        <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"/>
                                        <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"/>
                                        <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"/>
                                        <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"/>
                                        <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"/>
                                        <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"/>
                                        <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"/>
                                    </svg>
                                </div>
                                <DiSwift size={70} className="mx-auto" style={{ color: '#FA7343' }} />
                                <SiTypescript size={70} className="mx-auto" style={{ color: '#007ACC' }} />
                            </div>
                            <p className="text-lg text-center text-white text-bold mt-2">Libraries and Frameworks</p>
                            <div className="grid grid-cols-3 gap-2 gap-y-4 text-white">
                                <SiMysql size={70} className="mx-auto" style={{ color: '#4479A1' }} />
                                <SiTensorflow size={70} className="mx-auto" style={{ color: '#FF6F00' }} />
                                <SiKeras size={70} className="mx-auto" style={{ color: '#D00000' }} />
                                <FaAws size={70} className="mx-auto" style={{ color: '#FF9900' }} />
                                <div className="mx-auto">
                                    <svg width="80px" height="80px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
                                    </svg>
                                </div>
                                <div className="mx-auto">
                                    <svg fill="#000000" width="80px" height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>dotnet</title>
                                        <path d="M3.175 20.551c-0.001 0.289-0.123 0.549-0.318 0.733l-0.001 0c-0.2 0.188-0.47 0.303-0.767 0.303s-0.568-0.116-0.769-0.304l0.001 0.001c-0.195-0.184-0.317-0.444-0.317-0.732s0.122-0.549 0.318-0.732l0.001-0c0.2-0.188 0.47-0.303 0.767-0.303s0.567 0.115 0.768 0.304l-0.001-0.001c0.195 0.184 0.317 0.444 0.318 0.733v0zM14.051 21.417h-1.947l-5.126-8.088c-0.118-0.182-0.227-0.392-0.314-0.613l-0.009-0.024h-0.045c0.041 0.365 0.064 0.787 0.064 1.215 0 0.104-0.001 0.208-0.004 0.312l0-0.015v7.213h-1.721v-11.003h2.073l4.955 7.898c0.209 0.326 0.344 0.552 0.404 0.675h0.030c-0.050-0.374-0.078-0.806-0.078-1.245 0-0.083 0.001-0.165 0.003-0.248l-0 0.012v-7.093h1.715zM22.433 21.417h-6.025v-11.003h5.786v1.55h-4.005v3.117h3.69v1.542h-3.69v3.254h4.244zM30.996 11.964h-3.084v9.454h-1.781v-9.454h-3.077v-1.55h7.941z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="resume" className="mb-12">
                    <p className="text-5xl font-bold text-white text-center mb-8">Resume</p>
                    <div className="flex mx-auto justify-center">
                        <div className="w-48 text-white text-center rounded-lg hover:opacity-70" style={{backgroundColor:"#c50927"}}>
                            <a href="https://docs.google.com/document/d/1Exv4McCOxzov3E-loC_IC0UWufRMmmrDgPsmX94tXx0/edit?usp=sharing" target="_blank" className="text-white block mx-auto text-center px-12 py-6"><AiFillFilePdf className="mx-auto" size={30}/></a>
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


            <ProjectGrid />

            <div id="experience" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Experience</p>
                <VerticalTimeline lineColor='#e6b04b'>
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#412224', color: '#fff', boxShadow: 'none', boxShadow:'rgb(0 0 0 / 35%) 0px 5px 15px'}}
                        contentArrowStyle={{ borderRight: '7px solid #412224' }}
                        date="December 2022 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img className="rounded-full" src={STAMP}></img>}>
                        <h3 className="vertical-timeline-element-title text-important font-semibold text-2xl">
                            <a href="https://stamp.umd.edu/stamp.umd.edu" target="_blank" className="hover:opacity-80">Department of Student Affairs</a>
                        </h3>    
                        <p>Developed and implemented innovative web solutions to improve user experience, utilizing the Drupal content management system and MySQL database. Constructed schemas and designed object-relational mappings.</p>
                        <p>Worked with users to create modern and dynamic webpages using C# and ASP.NET web forms.</p>
                        <p>Designed and built Web APIs using the ASP.NET Core framework to fulfill client requests.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#412224', color: '#fff', boxShadow: 'none', boxShadow:'rgb(0 0 0 / 35%) 0px 5px 15px'}}
                        contentArrowStyle={{ borderRight: '7px solid #412224' }}
                        date="August 2022 - December 2022"
                        icon={<img className="rounded-full" src={UMD}></img>}>
                        <h3 className="vertical-timeline-element-title text-important font-semibold text-2xl">
                            <a href="https://reslife.umd.edu/" target="_blank" className="hover:opacity-80">Department of Resident Life</a>
                        </h3>
                        <p>Served as the primary point of contact for residents at UMD Ellicott Hall, handling inquiries and resolving issues.</p>
                        <p>Responsible for checking residents in, issuing keys and swipes, and performing key and package audits.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#412224', color: '#fff', boxShadow: 'none', boxShadow:'rgb(0 0 0 / 35%) 0px 5px 15px'}}
                        contentArrowStyle={{ borderRight: '7px solid #412224' }}
                        date="May 2022 - August 2022"
                        icon={<img className="rounded-full" src={PandaExpress}></img>}>
                        <h3 className="vertical-timeline-element-title text-important font-semibold text-2xl">
                            <a href="https://www.pandaexpress.com/" target="_blank" className="hover:opacity-80">Panda Express</a>
                        </h3>
                        <p>Provided high-quality customer service during high-volume, fast-paced operations.</p>
                        <p>Trained new employees and taught them techniques to improve efficiency.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#412224', color: '#fff', boxShadow: 'none', boxShadow:'rgb(0 0 0 / 35%) 0px 5px 15px'}}
                        contentArrowStyle={{ borderRight: '7px solid #412224' }}
                        date="November 2021 - May 2022"
                        icon={<img className="rounded-full" src={CVS}></img>}>
                        <h3 className="vertical-timeline-element-title text-important font-semibold text-2xl">
                            <a href="https://www.cvshealth.com/" target="_blank" className="hover:opacity-80">CVS Pharmacy</a>
                        </h3>
                        <p>Handled important store operations including store invoices, working the register, and stocking shelves.</p>
                        <p>Boosted sales by presenting and selling the Carepass service to over 30 clients.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#412224', color: '#fff', boxShadow: 'none', boxShadow:'rgb(0 0 0 / 35%) 0px 5px 15px'}}
                        contentArrowStyle={{ borderRight: '7px solid #412224' }}
                        date="March 2021 - September 2021"
                        icon={<img className="rounded-full" src={CodeNinjas}></img>}>
                        <h3 className="vertical-timeline-element-title text-important font-semibold text-2xl">
                            <a href="https://www.codeninjas.com/" target="_blank" className="hover:opacity-80">Code Ninjas</a>
                        </h3>
                        <p>Mentored software development with programming languages in JavaScript, Lua, and Python.</p>
                        <p>Directed and led summer courses on Lua game development and Python programming. </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            <div id="research" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Research</p>
                <div className="card w-3/4 md:w-1/2 bg-secondary custom-shadow mx-auto mb-16">
                    <div className="card-body">
                        <a className="hover:opacity-90 mb-4"><img src={Microplastics} className='rounded-lg w-64 mx-auto'></img></a>
                        <p className="text-3xl text-white text-center mb-4">Microplastics Research with the US Naval Academy</p>
                        <p className="text-lg text-white text-center">2021-2022</p>
                        <p className="text-lg font-bold text-important text-center italic mb-2">290 Buchanan Rd, Annapolis, MD 21402</p>
                        <p className="text-white text-center">Collaborated with the Naval Academy’s Hendrix Oceanography to implement techniques for sampling, analyzing, and calculating the concentration of Microplastics across 9 transects in the Chesapeake Bay.</p>
                    </div>
                </div>
            </div>

            <div id="education" className="mb-16">
                <p className="text-5xl font-bold text-white text-center mb-6">Education</p>
                <div className="card w-3/4 md:w-1/2 bg-secondary custom-shadow mx-auto mb-16">
                    <div className="card-body">
                        <a href="umd.edu" className="hover:opacity-90 mb-4"><img src={UMD} className='w-48 mx-auto'></img></a>
                        <p className="text-3xl text-white text-center mb-4">University of Maryland, College Park</p>
                        <p className="text-lg font-bold text-important text-center italic mb-2">College Park, MD 20742</p>
                        <p className="text-lg text-white text-center">2022-2025</p>
                        <p className="text-lg text-white text-center">Bachelor of Science</p>
                        <p className="text-lg text-white italic text-important text-center">Major in Computer Science - Minor in Computational Finance</p>
                        <p className="text-white text-center">GPA: 3.98</p>
                        <p className="text-white text-center mb-2">Deans List: Fall 2022, Spring 2023</p>
                        <p className="text-white text-center underline">Relevant Courses</p>
                        <ul className="text-white text-center leading-5">
                            <li>Object Oriented Programming II</li>
                            <li>Database Systems</li>
                            <li>Introduction to Computer Systems</li>
                            <li>Discrete Structures</li>
                            <li>Linear Algebra</li>
                            <li>Calculus 3 & Analytical Geometry</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Main;