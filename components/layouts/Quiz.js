import React, {useState} from 'react'
import Image from 'next/image'
import {BigSubtitle, Paragraph, Popup} from '../'
import {HiArrowNarrowRight} from "react-icons/hi"
import Modal from 'react-modal'
const axios = require('axios').default


const customStyles = {
  content: {
    backgroundColor: '#050505',
    border: 'none',
    borderRadius: '20px',
    padding: '0'
  },
}


Modal.defaultStyles.overlay.backgroundColor = 'rgba(5, 5, 5, .8)'
Modal.defaultStyles.overlay.backdropFilter = 'blur(20px)'
Modal.defaultStyles.overlay.zIndex = '99999'


export default function Quiz() {
  const [apart, setApart] = useState(false)
  const [house, setHouse] = useState(false)
  const [commerce, setCommerce] = useState(false)
  const [other, setOther] = useState(false)

  const [newBuilding, setNewBuilding] = useState(false)
  const [oldBuilding, setOldBuilding] = useState(false)

  const [hasDesign, setHasDesign] = useState(false)
  const [noDesign, setNoDesign] = useState(false)

  const [startFast, setStartFast] = useState(false)
  const [startMonth, setStartMonth] = useState(false)
  const [startHalfYear, setStartHalfYear] = useState(false)
  const [startDontKnow, setStartDontKnow] = useState(false)


  const [quizPage, setQuizPage] = useState(1)

  const [modalIsOpen, setIsOpen] = useState(false)

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [formResponse, setFormResponse] = useState(null)


  const handleQuizPage = (e) => {
    switch (e.target.name) {
      case 'next':
        if (quizPage < 2) setQuizPage(2)
        break;
      case 'prev':
        if (quizPage > 1) setQuizPage(1)
        break;
    }
  }

  const handleModal = (e) => {
    e.preventDefault()
    setIsOpen(!modalIsOpen)
  }

  const handleCheckbox = (e) => {
    switch (e.target.name) {
      case 'apart':
        setApart(!apart)
        break
      case 'house':
        setHouse(!house)
        break
      case 'commerce':
        setCommerce(!commerce)
        break
      case 'other':
        setOther(!other)
        break
      case 'newBuilding':
        setNewBuilding(!newBuilding)
        break
      case 'oldBuilding':
        setOldBuilding(!oldBuilding)
        break
      case 'hasDesign':
        setHasDesign(!hasDesign)
        break
      case 'noDesign':
        setNoDesign(!noDesign)
        break
      case 'startFast':
        setStartFast(!startFast)
        break
      case 'startMonth':
        setStartMonth(!startMonth)
        break
      case 'startHalfYear':
        setStartHalfYear(!startHalfYear)
        break
      case 'startDontKnow': 
        setStartDontKnow(!startDontKnow)
      default:
        console.log('Default here...');
    }
  }


  const handleFormInput = (e) => {
    switch (e.target.name) {
      case 'user_name':
        setUserName(e.target.value)
        break;
      case 'user_phone':
        setUserPhone(e.target.value)
      default:
        break;
    }
  }


  var data = {
    service_id: 'service_m0ovipq',
    template_id: 'template_gibzuzn',
    user_id: 'fKuNt0RVnnVHA3eI_',
    template_params: {
        'apart': apart,
        'house': house,
        'commerce': commerce,
        'other': other,
        'newBuilding': newBuilding,
        'oldBuilding': oldBuilding,
        'hasDesign': hasDesign,
        'noDesign': noDesign,
        'startFast': startFast,
        'startMonth': startMonth,
        'startHalfYear': startHalfYear,
        'startDontKnow': startDontKnow,
        'user_name': userName,
        'user_phone': userPhone
    }
}

const sendForm = (e) => {
  e.preventDefault()
  console.log(JSON.stringify(data))
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    setFormResponse(true)
    setTimeout(() => {
      setIsOpen(false)
      setFormResponse(false)
    }, 4000);
  })
  .catch(err => setFormResponse(false))

}

  return (
    <section className='flex flex-col justify-between bg-appDark relative'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <BigSubtitle text='Unlock your biggest quizes' />
        <Paragraph text='Pipe makes recurring revenue streams tradable for their annual value, meaning more cash flow for scaling companies. No customer discounts, no restrictive debt.' align='center' />
      </div>
      <div className='w-full px-4 pb-24'>
        <div className='container mx-auto max-w-5xl rounded-3xl px-4 pt-4 bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className='flex flex-col w-full px-4 md:px-24 md:pt-10 bg-appHighlight rounded-t-2xl h-app600'>
            <div className={`${quizPage > 1 ? 'hidden' : 'flex'} flex-col`}>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>Выберите тип объекта, который планируется отремонтировать</h2>
              <label>
                <input type='checkbox' checked={apart} name='apart' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Квартира</span>
              </label>
              <label>
                <input type='checkbox' checked={house} name='house' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Загородная недвижимость</span>
              </label>
              <label>
                <input type='checkbox' checked={commerce} name='commerce' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Коммерческое помещение</span>
              </label>
              <label>
                <input type='checkbox' checked={other} name='other' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Другое</span>
              </label>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>В каком строении находится ваш объект?</h2>
              <label>
                <input type='checkbox' checked={newBuilding} name='newBuilding' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Новое строение</span>
              </label>
              <label>
                <input type='checkbox' checked={oldBuilding} name='oldBuilding' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Вторичная недвижимость</span>
              </label>
            </div>
            <div className={`${quizPage < 2 ? 'hidden' : 'flex'} flex-col`}>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>Есть ли у вас готовый дизайн-проект?</h2>
              <label>
                <input type='checkbox' checked={hasDesign} name='hasDesign' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Да</span>
              </label>
              <label>
                <input type='checkbox' checked={noDesign} name='noDesign' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Нет</span>
              </label>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>В течение какого срока планируется старт ремонтных работ?</h2>
              <label>
                <input type='checkbox' checked={startFast} name='startFast' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Как можно скорее</span>
              </label>
              <label>
                <input type='checkbox' checked={startMonth} name='startMonth' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Месяца</span>
              </label>
              <label>
                <input type='checkbox' checked={startHalfYear} name='startHalfYear' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Полугода</span>
              </label>
              <label>
                <input type='checkbox' checked={startDontKnow} name='startDontKnow' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Пока неизвестно</span>
              </label>
            </div>
            <div className={`w-full flex ${quizPage > 1 ? 'justify-between' : 'justify-end'} gap-x-8 self-center`}>
             <button className={`py-4 mt-8 text-appLightText   text-sm font-semibold gap-x-2 items-center ${quizPage > 1 ? 'flex' : 'hidden'}`} name='prev' onClick={handleQuizPage}>Назад</button>
             <button className={`py-4 mt-8 text-appMint text-sm font-semibold gap-x-2 items-center ${quizPage !== 2 ? 'flex' : 'hidden'}`} name='next' onClick={handleQuizPage}>Далее<HiArrowNarrowRight/></button>
             <button className={`py-4 mt-8 text-appMint text-sm font-semibold gap-x-2 items-center ${quizPage === 2 ? 'flex' : 'hidden'}`} onClick={handleModal}>Отправить<HiArrowNarrowRight /></button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        className='Modal'
      >
        {
          formResponse ? 
            <div className='text-white'>Сообщение успешно отправлено</div>
          :
          <div className='w-full h-full flex flex-col sm:flex-row'>
            <div className='w-full h-2/5 sm:h-full md:w-1/2 relative flex flex-col'>
              <Image src='/images/modal.jpg' layout='fill' objectFit='cover' />
            </div>
            <div className='px-4 py-12 md:px-10'>
              <div className='text-zinc-50 font-medium pb-4 max-w-sm'>Оставьте свои контактные данные, чтобы получить персональную консультацию</div>
              <form className='w-full flex flex-col'>
                <input placeholder='Введите ваше имя' onChange={handleFormInput} name='user_name' className='w-full mt-6 mb-2 py-2 border-b border-b-appLightText bg-inherit text-white font-light font-xs focus:outline-none' />
                <input placeholder='Введите номер телефона' onChange={handleFormInput} name='user_phone' className='w-full py-2 border-b border-b-appLightText bg-inherit text-white font-light font-xs focus:outline-none' />
                <button onClick={sendForm} className='w-full h-12 mt-2 mb-4 bg-appMint font-medium text-black rounded'>Отправить</button>
                <button className='text-appLightText text-sm font-semibold mt-8' onClick={handleModal}>Закрыть</button>
            </form>
            </div>
          </div>
        }
        
      </Modal>
    </section>
  )
}
