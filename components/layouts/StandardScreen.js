import {Subtitle, Paragraph, Tabs} from '../'


export default function StandardScreen({children, bgColor, reversed, subtitleText, paragraphText}) {
  return (
    <section className={`${bgColor === 'dark' ? 'bg-appDarkest' : 'bg-appDark'}`}>
      <div className={`container lg:max-w-4xl 2xl:max-w-6xl mx-auto px-4 pt-24 pb-32 w-full flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-y-12`}>
        <div className='flex flex-col justify-center gap-y-6 md:flex-1'>
          <Subtitle text={subtitleText} />
          <Paragraph text={paragraphText} align='left' />
        </div>
        <div className={`flex ${reversed ? 'md:justify-start' : 'md:justify-end'} md:self-center md:flex-1 text-white`}>
          {children}
        </div>
      </div>
    </section>
  )
}
