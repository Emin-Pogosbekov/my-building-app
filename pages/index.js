import {MainScreen, StandardScreen, Slider} from '../components'


export default function HomePage() {
  return (
    <div>
      <MainScreen />
      <StandardScreen />
      <StandardScreen bgColor='dark' reversed={true} />
      <Slider />
    </div>
  )
}
