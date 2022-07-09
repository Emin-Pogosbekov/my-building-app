import {useRef, useState, useEffect} from 'react';
import {Subtitle, useResize} from '../';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
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
        <div className='pb-12 px-4'>
          <Swiper slidesPerView={slides} spaceBetween={20} loop={true} loopFillGroupWithBlank={true} className=''>
            <SwiperSlide>
              <div className='h-24 bg-red-600'>
                {width}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-red-600'>
                2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-red-600'>
                3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-red-600'>
                4
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-red-600'>
                5
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-24 bg-red-600'>
                6
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
