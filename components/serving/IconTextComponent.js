import Image from 'next/image'


export default function IconTextComponent() {
  return (
    <div className='w-full xl:w-2/3 h-app430 py-4 px-4 flex flex-col'>
      <div className='flex items-center py-6 gap-x-8'>
        <div className='shrink-0 relative w-9'>
          <Image src='/icons/news.png' width={36} height={36} />
        </div>
        <p className='text-zink-50 text-sm font-semibold'>Все начинается с максимально детального планирования будущих работ</p>
      </div>
      <div className='flex items-center py-6 gap-x-8'>
        <div className='shrink-0 relative w-9'>
          <Image src='/icons/aperture.png' width={36} height={36} />
        </div>
        <p className='text-zink-50 text-sm font-semibold'>Фото отчеты отразят проделанные работы, закупленные материалы, чеки</p>
      </div>
      <div className='flex items-center py-6 gap-x-8'>
        <div className='shrink-0 relative w-9'>
          <Image src='/icons/camera.png' width={36} height={36} />
        </div>
        <p className='text-zink-50 text-sm font-semibold'>Видео съемка помогает нашим клиентам видеть что делается на объекте даже если они далеко</p>
      </div>
    </div>
  )
}
