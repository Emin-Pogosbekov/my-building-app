import {MainScreen, StandardScreen, Slider, VideoBlock} from '../components'


export default function HomePage() {
  return (
    <div>
      <MainScreen />
      <StandardScreen />
      <StandardScreen bgColor='dark' reversed={true} />
      <Slider />
      <VideoBlock />
    </div>
  )
}
