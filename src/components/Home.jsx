import ImageSlider from './ImageSlider'
import ImageSlider2 from './ImageSlider2'
import Brand1 from '../assets/brand 1.png'
import Brand2 from '../assets/brand2.png'
import Brand3 from '../assets/brand3.png'
import Brand4 from '../assets/brand4.png'
import Brand5 from '../assets/brand5.webp'
import report1 from'../assets/report1.png'
import report2 from'../assets/report2.png'
import report3 from'../assets/report 3.png'

const Home = () => {
    return (
        <div id='home' >
            <div className=''>

            <div className='max-sm:px-4'>
                <div className='flex  flex-col items-center text-center justify-center w-full font-semibold xl:text-6xl lg:text-6xl max-sm:text-5xl lg:mt-11 max-sm:pt-8'>
                    <div >
                        <span>Top-Notch </span>
                        <span className='underline'>GA4 Audit</span>
                    </div>
                    Tools
                    <div className='block box-border h-60 lg:w-1/2 sm:w-full font-thin text-lg text-center mt-8'>Get a comprehensive Google Analytics 4 audit report with a customized action plan in minutes. Our tool makes it easy to identify and fix errors in your analytics account, so you can get the most out of your data.
                    </div>
                </div >
                <div className='flex justify-center items-center -mt-12 space-x-8 '>
                    <button className="bg-black font-semibold  text-base text-white rounded-xl p-5 hover:bg-yellow-700 ">Start Your GA4 Audit Now</button>
                    <button className="bg-white font-semibold text-base text-black rounded-xl p-5 hover:bg-black hover:text-white">Download Sample Audit</button>
                </div>
                </div>
                <div className='flex flex-col mt-12 gap-14 pb-12  h-full'>
                    <ImageSlider />
                    <ImageSlider2 />
                </div>
                <div className='bg-white'>
                    <div className='flex items-center justify-evenly pt-24 pb-12  max-sm:hidden'>
                        <div className='font-semibold text-xl'>
                            Trusted by
                        </div>
                        <div className='flex flex-wrap gap-12'>
                            <img src={Brand1} alt='Logo' className=' w-40 h-10' />
                            <img src={Brand2} alt='Logo' className=' w-40 h-10' />
                            <img src={Brand3} alt='Logo' className=' w-40 h-10' />
                            <img src={Brand4} alt='Logo' className=' w-40 h-10' />
                            <img src={Brand5} alt='Logo' className=' w-40 h-10' />
                        </div>
                    </div>
                    <div className='flex justify-center pt-10 items-center bg-white'>
                        <button className=" bg-blue-700 font-medium text-lg  text-white rounded-xl mt-6  p-4 ">How GA4 Auditor Works!</button>
                    </div>
                    <div className=' flex flex-col items-center text-center justify-center w-full font-semibold text-5xl max-sm:text-4xl max-sm:font-medium mt-10 px-3'>
                        <div >
                            <span>It has never been easier to audit </span>
                            <span className='underline'>your GA4 account</span>
                        </div>
                        <div className='block box-border  font-thin text-lg text-center mt-12 mb-12 md:mb-12 sm:mb-0'>
                          Here's how you can get a comprehensive GA4 audit report with our tools in just 3 steps:
                        </div>
                    </div >
                    <div className='flex flex-col lg:flex-row justify-between lg:px-0 px-2'>
                <div className='lg:mt-20 xl:mt-20 max-sm:-mt-6  lg:w-1/3 p-11'>


                    <img src={report1} className='mx-auto  lg:mx-0 rounded-full'/>
                    <div className='text-center  font-bold text-xl'>1. Connect Google analytics</div>
                    <div className='font-thin text-lg text-center '>
                        Connect your Google Analytics 4 account to our tool and select the property you want to audit.
                    </div>
                </div>
                <div className='lg:-mt-11 w-full lg:w-1/3 p-11'>

                    <img src={report2} className='mx-auto lg:mx-0 rounded-full'/>
                    <div className='text-center  font-bold text-xl'>2. Customize Report</div>
                    <div className='font-thin text-lg text-center '>
                        Customize the report to your preferences including language, theme, and formats.
                    </div>
                </div>
                <div className='lg:mt-20 xl:mt-20 lg:w-1/3 p-11'>
 
                    <img src={report3} className='mx-auto lg:mx-0 rounded-full'/>
                    <div className='text-center font-bold text-xl'>3. Download Audit</div>
                    <div className='font-thin text-lg text-center '>
                        Download the customized report in your preferred file format in just minutes and receive actionable insights.
                    </div>
                </div>
            </div>
                    <div className='flex justify-center items-center pb-10'>
                    <button className="bg-black font-semibold  text-xl text-white rounded-xl  px-10 py-5 ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home