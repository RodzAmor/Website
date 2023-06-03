import LectureGPT from './images/projects/LectureGPT.jpg'
import UMDLoop from './images/projects/UMDLoop.png'
import BayRidgeTrailsApp from './images/projects/BayRidgeTrailsApp.png'
import BlueCannonBall from './images/projects/BlueCannonBall.png'
import doghouse from './images/projects/doghouse.png'

const ProjectGrid = () => {
    return (
        <div id='projects'>
            <p className="text-5xl font-bold text-white text-center mb-8">Personal Projects</p>
            <div className="grid lg:grid-cols-3 container rounded-lg mx-auto mb-16">
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="options-modal">
                    <div className="absolute inset-0 bg-cover z-0"
                        style={{ backgroundImage: `url(https://miro.medium.com/v2/resize:fit:800/1*_GiyDH1bob96fo8JsO1_hg.png)`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Machine Learning Model for Options Pricing</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>ML Model build using the KNN Algorithm to predict prices of options primarily for S&P500 ETFs.</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="wip-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(https://chessfox.com/wp-content/uploads/2018/08/effective-chess-calculation-observe-consequences.png)`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Chess Artificial Intelligence</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>WIP - Come back later to see see the completed project</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="loop-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(${UMDLoop})`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>UMDLoop Engineering</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>UMDLoop engineering team website to display the team, plan meetings, and record inventory</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="wip-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(https://www.edgarsdatalab.com/post/rstats_tweets_tidyverse_files/figure-html/unnamed-chunk-14-1.png)`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Congressional Sentiment Analysis</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>WIP - Come back later to see see the completed project</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="lecturegpt-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(${LectureGPT})`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>LectureGPT</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>BitCamp 2023 Project made to help summarize lectures and recordings with GPT API</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="trails-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(${BayRidgeTrailsApp})`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Bay Ridge Trails App</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>Utilizes UIKit to navigate hiking trails in Bay Ridge for the Bay Ridge Civic Association</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="projectile-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(${BlueCannonBall})`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Projectile Motion Simulator</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>Developed to simulate the projectile motion of shooting a cannonball allowing you to change velocity and angle</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="fitness-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(${doghouse})`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Fitness Newsletter</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>Fitness Newsletter developed to support new gym members who are having trouble getting into rhythym</p>
                    </div>
                </label>
                <label className="hover:cursor-pointer bg-secondary ease-in-out transition duration-200 h-56 relative" htmlFor="events-modal">
                    <div className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1279646/GreatWebApiDesign_Luke_01-5e7e687064df8fea5936f68980783188-20867f02fe09dfa8e98c7ae02dc06d3a.png)`, transitionDuration: '200ms', filter: `brightness(0.55)` }}></div>
                    <div className="absolute inset-0 transition-all duration-200 z-10" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'background-color 0.2s ease-in-out' }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.20)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)'}></div>
                    <div className="text-center relative p-8">
                        <p className="text-important text-3xl font-bold mb-4" style={{textShadow:'0px 0px 20px #000000'}}>Events and Availability API</p>
                        <p className="hidden lg:block text-white text-md font-bold" style={{textShadow:'0px 0px 20px #000000'}}>Web API used in the University of Maryland app that delivers hours and availability of events and dining halls</p>
                    </div>
                </label>
            </div>

            {/* Start of Modals */}

            <input type="checkbox" id="wip-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <h3 className="font-bold text-lg text-white">WIP - Come back later to see see the completed project!</h3>
                    <div className="modal-action">
                        <label htmlFor="wip-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="loop-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">Developed application for the UMDLoop engineering team to display the team, plan meetings, and record inventory.</p>
                    <p className="mb-4">The web application is built with the MERN stack, incorporating MongoDB for data storage and dynamic webpages, Express for backend routing, React for frontend user interface, and Node.js for application logic.</p>
                    <a href="https://umd-loop.vercel.app/" className="text-important hover:underline" target="_blank">UMD Loop Website</a>
                    <div className="modal-action">
                        <label htmlFor="loop-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="lecturegpt-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">Developed application to summarize lectures and videos for studying.</p>
                    <p className="mb-4">The application is built with python and uses Whisper API to convert MP4 to mp3 and then uses a ChatGPT API to get a summary.</p>
                    <a href="https://lecture-gpt.vercel.app/" className="text-important hover:underline" target="_blank">LectureGPT Website</a>
                    <div className="modal-action">
                        <label htmlFor="lecturegpt-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="trails-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">Published the Bay Ridge Trails app in the Apple App Store.</p>
                    <p className="mb-4">Developed in Swift utilizing UIKit to navigate hiking trails in Bay Ridge for the Bay Ridge Civic Association. Has GPS tracking capabilities and utilizes an index of coordinates to delineate trail lines.</p>
                    <a href="https://apps.apple.com/us/app/bay-ridge-trails/id1551006001" className="text-important hover:underline" target="_blank">Trails App</a>
                    <div className="modal-action">
                        <label htmlFor="trails-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="projectile-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">Developed a two-dimensional projectile motion simulator written in Python with the pyGame module.</p>
                    <p className="mb-4">It consists of a cannon shooting a cannonball that simulates the trajectory and projectile motion. Optimized software to decrease inefficiency and increase runtime efficiency by ~5%. Written as the final project for the CPT-160 Python Programming course.</p>
                    <a href="https://github.com/RodzAmor/Cannon-Ball-Projectile-Simulator" className="text-important hover:underline" target="_blank">Github Link</a>
                    <div className="modal-action">
                        <label htmlFor="projectile-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="fitness-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">Developed web application for fitness content using React.js to provide users with an interactive experience.</p>
                    <p className="mb-4">The web application is built using the MERN stack, incorporating MongoDB for data storage and dynamic webpages, Express for backend routing, React for frontend user interface, and Node.js for application logic.</p>
                    <a href="https://www.doghousefit.com/" className="text-important hover:underline" target="_blank">Fitness Website</a>
                    <div className="modal-action">
                        <label htmlFor="fitness-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="events-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">Accomplished creating a Web API used in the University of Maryland app that delivers hours and availability of events and dining halls.</p>
                    <p className="mb-4">Used C# to connect to UMD’s MySQL database and populate ModoLab components to format and return JSON. Project assigned by the University’s Department of Student Affairs.</p>
                    <div className="modal-action">
                        <label htmlFor="events-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="options-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-secondary">
                    <p className="font-semibold text-lg text-white mb-2">ML Model built with KNN algorithm compared with LinearRegressor and DecisionTrees. Hyperparameters tuned with with a GridSearchCV.</p>
                    <p className="mb-4">Hello, this ML project has been one of my great passion projects for quite some time and I am incredibly happy to be able to finally implement my ideas. This field is incredibly vast and I have only just scraped the surface, so I am excited to learn more and build more projects! I intend for this to be a "living" project that I would incrementally improve as my knowledge and understanding of machine learning improves over time.</p>
                    <a href="https://colab.research.google.com/drive/12iWQhXGDHkB9ixfJSYhPvgTSxszcdd9K?usp=sharing" className="text-important hover:underline" target="_blank">Google Colab</a>
                    <div className="modal-action">
                        <label htmlFor="options-modal" className="btn btn-primary border-none hover:none text-important">Okay</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGrid