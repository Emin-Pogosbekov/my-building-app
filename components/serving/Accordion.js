export default function Accordion() {
  return (
    <div className='w-full xl:w-2/3 text-sm font-semibold text-zink-50'>
      <div className='flex items-center gap-x-6 w-full h-16 rounded-xl bg-appHighlight px-5 py-4'>
        <div className='w-7 h-7 bg-appGreen rounded-full' />
        <span className=''>Экономим ваше время</span>
      </div>
      <ul className='list-disc px-10 pt-6 pb-10 flex flex-col gap-y-4'>
        <li>Keep your accounting</li>
        <li>Team in the know</li>
        <li>Without lifting a finger</li>
      </ul>
    </div>
  )
}
