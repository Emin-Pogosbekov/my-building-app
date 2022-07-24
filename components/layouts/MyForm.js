import React, {useRef} from 'react'
import {BigSubtitle, Paragraph, Button} from '../'
import emailjs from '@emailjs/browser'


export default function MyForm() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m0ovipq', 'template_aqg2p5a', form.current, 'fKuNt0RVnnVHA3eI_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className='flex flex-col justify-between bg-appDarkest pb-24'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <BigSubtitle text='Остался один шаг до нашего знакомства' />
        <Paragraph text='Оставьте свои контактные данные и мы перезвоним, чтобы во всех деталях обсудить ваши цели и задачи.' align='center' />
      </div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col md:flex-row md:gap-x-4 md:w-3/4 lg:w-1/3 md:items-center md:self-center md:justify-between mx-4 px-4 py-4 md:py-2 rounded-lg bg-appGrayAccordion gap-y-2' >
        <input
          type='phone' name='user_phone' placeholder='Введите номер телефона'
          className='md:w-full px-2 py-4 bg-transparent text-white font-xl focus:outline-none'
        />
        <button
          className='md:w-48 md:shrink-0 h-12 bg-appMint font-medium text-black rounded'>
            Отправить
        </button>
      </form>
    </section>
  )
}
