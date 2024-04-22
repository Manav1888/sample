import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footers = () => {
  return (
    <div className='bg-black text-white py-11 '>
        <div className='lg:flex xl:flex max-sm:flex-col justify-evenly p-11'>
            <div className='flex-col text-center  '>
                <div className='m-2'>Privacy Policy</div>
                <div className='m-2'>contact@ga4auditor.com</div>
                <div className='m-2'>GA4 SQL</div>
            </div>
            <div className='flex-col text-center'>
                <div className='m-2'>Terms & Conditions</div>
                <div className='m-2'>Affiliate & Referral</div>
                <div className='m-2'>Swipe Insight</div>
            </div>
        </div>
        <div className='flex w-full justify-center items-center gap-x-4 pb-8 border-b-2 border-b-gray-600'>
            <FontAwesomeIcon icon={faFacebook} size='2x' />
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
            <FontAwesomeIcon icon={faTwitter} size='2x'/>
            <FontAwesomeIcon icon={faTwitter} size='2x'/>
        </div>
    </div>
  )
}

export default Footers