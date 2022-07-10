import {useRef, useState, useEffect} from 'react';
import {Subtitle, useResize} from '../';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"

import "swiper/css";
import "swiper/css/navigation";

export default function Slider({bgColor}) {

  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  const [slides, setSlides] = useState(0)

  function handleWidth() {
    setWidth(ref.current.offsetWidth)
  }

  function handleSlides() {
    if (width >= 1280) {
      setSlides(5)
      return
    }

    if (width < 1280 && width >= 1024) {
      setSlides(4)
      return
    }

    if (width < 1024 && width >= 768) {
      setSlides(3)
      return
    }

    else {
      setSlides(1)
    }
  }


  useEffect(() => {
    handleWidth()
    window.addEventListener('resize', () => {
      handleWidth()
    })
    handleSlides()
  }, [width])

  return (
    <section ref={ref} className={`${bgColor === 'dark' ? 'bg-appDarkest' : 'bg-appDark'}`}>
      <div className='overflow-hidden'>
        <div className='container lg:max-w-4xl 2xl:max-w-6xl mx-auto px-4 pt-24 pb-12 w-full'>
          <Subtitle text='Loved by Industry leaders' />
        </div>
        <div className='px-4 pt-12 pb-24 h-app500 flex'>
          <Swiper id="swiper-color" slidesPerView={slides} spaceBetween={20} loop={true} navigation={true} modules={[Navigation]}  >
            <SwiperSlide>
              <div className='flex flex-col gap-y-6 bg-appHighlight rounded-lg drop-shadow-4xl px-8 py-12'>
                <h3 className='text-xl text-zinc-50 font-bold'>Pipe is super</h3>
                <p className='text-zinc-50 font-regular'>Pipe is super start-up friendly. And in terms of getting capital that you need for an M&A transaction, we've never come across a faster way to do it.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-y-6 bg-appHighlight rounded-lg drop-shadow-4xl px-8 py-12'>
                  <h3 className='text-xl text-zinc-50 font-bold'>We often risked</h3>
                  <p className='text-zinc-50 font-regular'>We often risked losing deals by requiring annual upfront payments when customers wanted to pay.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-appHighlight'>
                3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-appHighlight'>
                4
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-appHighlight'>
                5
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-appHighlight'>
                6
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
