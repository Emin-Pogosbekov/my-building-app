import React, {useState} from 'react'
import {BigSubtitle, Paragraph} from '../'
import {HiArrowNarrowRight} from "react-icons/hi"

export default function Quiz() {
  const [apart, setApart] = useState(false)
  const [house, setHouse] = useState(false)
  const [commerce, setCommerce] = useState(false)
  const [other, setOther] = useState(false)

  const [newBuilding, setNewBuilding] = useState(false)
  const [oldBuilding, setOldBuilding] = useState(false)

  const [quizPage, setQuizPage] = useState(1)

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
      default:
        console.log('Default here...');
    }
  }

  return (
    <section className='flex flex-col justify-between bg-appDark'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <BigSubtitle text='Unlock your biggest quizes' />
        <Paragraph text='Pipe makes recurring revenue streams tradable for their annual value, meaning more cash flow for scaling companies. No customer discounts, no restrictive debt.' align='center' />
      </div>
      <div className='w-full px-4 pb-24'>
        <div className='container mx-auto max-w-5xl rounded-3xl px-4 pt-4 bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className='flex flex-col w-full px-4  bg-appHighlight rounded-t-2xl h-app600'>
            <div className={`${quizPage > 1 ? 'hidden' : 'flex'} flex-col`}>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>Выберите тип объекта, который планируется отремонтировать</h2>
              <label>
                <input type='checkbox' checked={apart} name='apart' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Квартира</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Загородная недвижимость</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Коммерческое помещение</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Другое</span>
              </label>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>В каком строении находится ваш объект?</h2>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Новое строение</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Вторичная недвижимость</span>
              </label>
            </div>
            <div className={`${quizPage < 2 ? 'hidden' : 'flex'} flex-col`}>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>Есть ли у вас готовый дизайн-проект?</h2>
              <label>
                <input type='checkbox' checked={apart} name='apart' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Да</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Нет</span>
              </label>
              <h2 className='text-xl text-zinc-50 font-bold py-12'>В течение какого срока планируется старт ремонтных работ?</h2>
              <label>
                <input type='checkbox' checked={apart} name='apart' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Как можно скорее</span>
              </label>
              <label>
                <input type='checkbox' checked={apart} name='apart' onChange={handleCheckbox} />
                <span className='text-appLightText font-medium px-2'>Месяца</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Полугода</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='text-appLightText font-medium px-2'>Пока неизвестно</span>
              </label>
            </div>
            <div className={`w-full flex ${quizPage > 1 ? 'justify-between' : 'justify-end'} gap-x-8 self-center`}>
             <button className={`py-4 mt-8 text-appLightText   text-sm font-semibold gap-x-2 items-center ${quizPage > 1 ? 'flex' : 'hidden'}`} name='prev' onClick={handleQuizPage}>Назад</button>
             <button className={`py-4 mt-8 text-appMint text-sm font-semibold gap-x-2 items-center ${quizPage !== 2 ? 'flex' : 'hidden'}`} name='next' onClick={handleQuizPage}>Далее<HiArrowNarrowRight/></button>
             <button className={`py-4 mt-8 text-appMint text-sm font-semibold gap-x-2 items-center ${quizPage === 2 ? 'flex' : 'hidden'}`}>Отправить<HiArrowNarrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
