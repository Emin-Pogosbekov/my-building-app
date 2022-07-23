import {HiOutlineChevronDown} from 'react-icons/hi'
import {useState} from 'react'


export default function Accordion() {
  const [firstTab, setFirstTab] = useState(true)
  const [secondTab, setSecondTab] = useState(false)
  const [thirdTab, setThirdTab] = useState(false)

  function handleFirstTabs() {
      setFirstTab(true)
      setSecondTab(false)
      setThirdTab(false)
  }

  function handleSecondTabs() {
      setFirstTab(false)
      setSecondTab(true)
      setThirdTab(false)
  }

  function handleThirdTabs(e) {
      setFirstTab(false)
      setSecondTab(false)
      setThirdTab(true)
  }


  return (
    <div className='w-full flex flex-col gap-y-2'>

      <div className='w-full xl:w-2/3 text-sm font-semibold text-zink-50'>
        <button onClick={handleFirstTabs} id='firstTab' className='flex cursor-pointer justify-between items-center gap-x-6 w-full h-16 rounded-xl bg-appHighlight px-5 py-4'>
          <div className='flex items-center gap-x-6'>
            <div className='w-7 h-7 bg-appGreen rounded-full' />
            <span className=''>Экономим ваше время</span>
          </div>
          <div className={`${firstTab ? 'rotate-0' : '-rotate-90'}`}>
            <HiOutlineChevronDown />
          </div>
        </button>
        <ul className={`list-disc px-10 pt-6 pb-10 flex-col gap-y-4 ${firstTab ? 'flex' : 'hidden'}`}>
          <li>Keep your accounting</li>
          <li>Team in the know</li>
          <li>Without lifting a finger</li>
        </ul>
      </div>

      <div className='w-full xl:w-2/3 text-sm font-semibold text-zink-50'>
        <div onClick={handleSecondTabs} className='flex cursor-pointer justify-between items-center gap-x-6 w-full h-16 rounded-xl bg-appHighlight px-5 py-4'>
          <div className='flex items-center gap-x-6'>
            <div className='w-7 h-7 bg-appGreen rounded-full' />
            <span className=''>Предлагаем только лучшее</span>
          </div>
          <div className={`${secondTab ? 'rotate-0' : '-rotate-90'}`}>
            <HiOutlineChevronDown />
          </div>
        </div>
        <ul className={`list-disc px-10 pt-6 pb-10 flex-col gap-y-4 ${secondTab ? 'flex' : 'hidden'}`}>
          <li>Keep your accounting</li>
          <li>Team in the know</li>
          <li>Without lifting a finger</li>
        </ul>
      </div>

      <div className='w-full xl:w-2/3 text-sm font-semibold text-zink-50'>
        <div onClick={handleThirdTabs} className='flex cursor-pointer justify-between items-center gap-x-6 w-full h-16 rounded-xl bg-appHighlight px-5 py-4'>
          <div className='flex items-center gap-x-6'>
            <div className='w-7 h-7 bg-appGreen rounded-full' />
            <span className=''>Заряжаем позитивом</span>
          </div>
          <div className={`${thirdTab ? 'rotate-0' : '-rotate-90'}`}>
            <HiOutlineChevronDown />
          </div>
        </div>
        <ul className={`list-disc px-10 pt-6 pb-10 flex-col gap-y-4 ${thirdTab ? 'flex' : 'hidden'}`}>
          <li>Keep your accounting</li>
          <li>Team in the know</li>
          <li>Without lifting a finger</li>
        </ul>
      </div>

    </div>
  )
}
