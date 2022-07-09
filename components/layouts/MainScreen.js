import {Title, Paragraph, Button} from '../'
import Image from 'next/image'

export default function MainScreen() {
  return (
    <section className='flex flex-col justify-between h-screen bg-appDarkest relative'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <Title text='Grow on your terms. Fast, flexible financing for D2C' />
        <Paragraph text='Pipe transforms recurring revenue into up-front capital for growth without dilution or restrictive debt.' align='center' />
        <Button text='Get Started' />
      </div>
      <div className='container mx-auto px-4 lg:px-24 xl:px-48 w-full'>
        <div className='w-full h-80 relative rounded-t-lg overflow-hidden md:h-app700 lg:h-96'>
          <Image src='/images/background.jpg' alt='Ремонт от элитной строительной бригады' layout='fill' objectFit='cover' />
        </div>
      </div>
    </section>
  )
}
