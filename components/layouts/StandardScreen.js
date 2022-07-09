import {Subtitle, Paragraph} from '../'


export default function StandardScreen({bgColor, reversed}) {
  return (
    <section className={`${bgColor === 'dark' ? 'bg-appDarkest' : 'bg-appDark'}`}>
      <div className={`container lg:max-w-4xl 2xl:max-w-6xl mx-auto px-4 pt-24 pb-32 w-full flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-y-12`}>
        <div className='flex flex-col gap-y-6 md:flex-1'>
          <Subtitle text='One click, instant payout' />
          <Paragraph text='Connect to Pipe and convert your revenue streams into up-front capital with the click of a button.' align='left' />
        </div>
        <div className={`flex ${reversed ? 'md:justify-start' : 'md:justify-end'} md:self-center md:flex-1 text-white`}>
          <Subtitle text='Hello I am hereee!' />
        </div>
      </div>
    </section>
  )
}
