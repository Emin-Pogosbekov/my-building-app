import {useState} from 'react'
import Image from 'next/image'


export default function Tabs(props) {
  const [firstTab, setFirstTab] = useState(true)
  const [secondTab, setSecondTab] = useState(false)

  function handleTabs(e) {
    if (e.target.id === 'quality') {
      setFirstTab(true)
      setSecondTab(false)
      return
    }
    setFirstTab(false)
    setSecondTab(true)
  }


  return (
    <div className='w-full xl:w-2/3 h-app430 rounded-xl bg-white py-4'>
      <div className='pb-2 border-b border-neutral-200'>
        <button className={`text-xs ${firstTab ? 'text-appMint font-bold' : 'text-appLightText'} px-8`} id='quality' onClick={handleTabs}>Качество</button>
        <button className={`text-xs ${secondTab ? 'text-appMint font-bold' : 'text-appLightText'}`} id='speed' onClick={handleTabs}>Скорость</button>
      </div>
      <div className={`${firstTab ? 'flex' : 'hidden'} flex-col px-8 text-appDarkest text-sm font-semibold leading-6`}>
        <p className='py-10'>Secure live data connections update your revenue streams and trading limits as you go.</p>
        <ul className='px-6 list-disc'>
          <li>Keep your accounting</li>
          <li>Team in the know </li>
          <li>Without lifting a finger</li>
        </ul>
        <div className='self-center pt-10'>
          <Image src='/icons/quality.png' alt='quality' width={62} height={64} />
        </div>
      </div>
      <div className={`${secondTab ? 'flex' : 'hidden'} flex-col px-8 text-appDarkest text-sm font-semibold leading-6`}>
        <p className='py-10'>Secure live data connections update your revenue streams and trading limits as you go.</p>
        <ul className='px-6 list-disc'>
          <li>Keep your accounting</li>
          <li>Team in the know </li>
          <li>Without lifting a finger</li>
        </ul>
        <div className='self-center pt-10'>
          <Image src='/icons/speed.png' alt='speed' width={62} height={64} />
        </div>
      </div>
    </div>
  )
}
