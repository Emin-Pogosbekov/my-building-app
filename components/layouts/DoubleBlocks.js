import {BigSubtitle, Paragraph, Tabs} from '../'
import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay} from "swiper";
import "swiper/css"
import Image from 'next/image'


export default function DoubleBlocks({bgColor, subtitleText, paragraphText}) {
  return (
    <section className='flex flex-col justify-between bg-appDarkest'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <BigSubtitle text='Unlock your biggest asset' />
        <Paragraph text='Pipe makes recurring revenue streams tradable for their annual value, meaning more cash flow for scaling companies. No customer discounts, no restrictive debt.' align='center' />
      </div>

      <div className='flex flex-col gap-y-2'>
        <div className={`container lg:max-w-4xl 2xl:max-w-6xl mx-auto px-6 pb-10 w-full flex flex-col md:flex-row gap-y-app1 md:gap-x-1`}>
          <div className='flex flex-col bg-appBlocks h-80 lg:h-app430 pt-12 rounded-t-lg md:rounded-r-none md:rounded-l-lg md:flex-1 divide-y divide-appHighlight'>
            <div className='flex flex-col gap-y-6 px-10 lg:px-20 lg:py-10'>
              <h3 className='text-xl text-zinc-50 font-bold'>We often risked</h3>
              <p className='text-appLightText font-medium pb-4 border-b border-appMint'>We often risked losing deals by requiring annual upfront payments when customers wanted to pay.</p>
            </div>
          </div>
          <div className='bg-appBlocks h-80 lg:h-app430 rounded-b-lg md:rounded-l-none md:rounded-r-lg md:flex-1 overflow-hidden'>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className='w-full h-80 lg:h-app430 relative'>
                  <Image src='/images/first.jpg' layout='fill' objectFit='cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-80 lg:h-app430 relative'>
                  <Image src='/images/second.jpg' layout='fill' objectFit='cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-80 lg:h-app430 relative'>
                  <Image src='/images/third.jpg' layout='fill' objectFit='cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={`container lg:max-w-4xl 2xl:max-w-6xl mx-auto px-6 pb-32 w-full flex flex-col md:flex-row gap-y-app1 md:gap-x-1`}>
          <div className='flex flex-col bg-appBlocks h-80 lg:h-app430 pt-12 rounded-t-lg md:rounded-r-none md:rounded-l-lg md:flex-1 divide-y divide-appHighlight'>
            <div className='flex flex-col gap-y-6 px-10 lg:px-20 lg:py-10'>
              <h3 className='text-xl text-zinc-50 font-bold'>We often risked</h3>
              <p className='text-appLightText font-medium pb-4 border-b border-appMint'>We often risked losing deals by requiring annual upfront payments when customers wanted to pay.</p>
            </div>
          </div>
          <div className='bg-appBlocks h-80 lg:h-app430 py-2 xl:py-10 rounded-b-lg md:rounded-l-none md:rounded-r-lg md:flex-1 flex justify-center overflow-hidden'>
            <div className='w-full mx-2 xl:w-3/4 px-4 py-4 lg:py-10 lg:px-10 flex gap-y-8 flex-col bg-appGrayAccordion rounded-lg'>
              <div className='w-full flex justify-between pb-2 border-b'>
                <span className='text-white text-sm font-medium px-2'>Услуга</span>
                <span className='text-white text-sm font-medium px-2'>Цена</span>
              </div>
              <div className='w-full flex justify-between pb-2 border-b'>
                <span className='text-white text-sm font-regular px-2'>Внутренняя отделка</span>
                <span className='text-white text-sm font-regular px-2'>от 25 000 Р / кв.м.</span>
              </div>
              <div className='w-full flex justify-between pb-2 border-b'>
                <span className='text-white text-sm font-regular px-2'>Дизайн интерьера</span>
                <span className='text-white text-sm font-regular px-2'>от 5 000 Р / кв.м.</span>
              </div>
              <div className='w-full flex justify-between pb-2 border-b'>
                <span className='text-white text-sm font-regular px-2'>Авторский надзор</span>
                <span className='text-white text-sm font-regular px-2'>40 000 Р / мес.</span>
              </div>
              <button className='text-appMint text-sm font-semibold'>Подробнее</button>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
