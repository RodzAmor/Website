import OptionsReport from './OptionsReport.html';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const DerivativesReport = () => {
    const backgroundStyle = {
        background: 'white'
    }

    return (
        <>
            <Navbar />
            <h1 className='text-white text-4xl text-center font-semibold mb-6'>Machine Learning Report - Stock Options Prices Predictor</h1>
            <div className='block text-center mb-8'>
                <a href="https://colab.research.google.com/drive/12iWQhXGDHkB9ixfJSYhPvgTSxszcdd9K?usp=sharing" className="text-important text-2xl hover:underline" target="_blank" rel="noopener noreferrer">Google Colab</a>
            </div>
            <div style={backgroundStyle} className='rounded-xl w-11/12 mx-auto mb-8'>
                <div dangerouslySetInnerHTML={{ __html: OptionsReport }} />
            </div>
            <Footer />
        </>
    )
}

export default DerivativesReport