import {BigSubtitle, Paragraph} from '../'

export default function Quiz() {
  return (
    <section className='flex flex-col justify-between bg-appDark'>
      <div className='container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6'>
        <BigSubtitle text='Unlock your biggest quizes' />
        <Paragraph text='Pipe makes recurring revenue streams tradable for their annual value, meaning more cash flow for scaling companies. No customer discounts, no restrictive debt.' align='center' />
      </div>
      <div className='w-full px-4 pb-24'>
        <div className='container mx-auto max-w-5xl rounded-3xl px-14 pt-14 bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className='w-full px-4 py-64 bg-appHighlight rounded-t-2xl'>
            What is your favorite
          </div>
        </div>
      </div>
    </section>
  )
}
