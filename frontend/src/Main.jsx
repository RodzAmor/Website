// import { Menu } from '@headlessui/react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

// Notes: Add parallax

const Card = () => {
    return (
        <div className="card w-2/5 bg-secondary custom-shadow mx-auto">
            <div className="card-body">
                {/* <h2 className="card-title">Shoes!</h2> */}
                <p className="text-3xl">Nice to meet you, my name is </p>
                <p className="text-6xl font-bold text-important">Rodz Andrie Amor</p>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='md:container mx-auto'>
                <Card />
            </div>
            <Footer />
        </>
    )
}
export default Main;