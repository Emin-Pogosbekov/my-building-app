import {BigSubtitle, Paragraph} from '../'

export default function VideoBlock() {
  return (
    <section className='flex flex-col justify-between bg-appDarkest'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <BigSubtitle text='Unlock your biggest asset' />
        <Paragraph text='Pipe makes recurring revenue streams tradable for their annual value, meaning more cash flow for scaling companies. No customer discounts, no restrictive debt.' align='center' />
      </div>
      <video autoPlay muted loop className='w-1/2 mx-auto'>
        <source src='./videos/my-video.mp4' type='video/mp4' />
      </video>
    </section>
  )
}
