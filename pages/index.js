import {MainScreen, StandardScreen, Slider, Quiz, VideoBlock} from '../components'


export default function HomePage() {
  return (
    <div>
      <MainScreen />
      <StandardScreen />
      <StandardScreen bgColor='dark' reversed={true} />
      <Slider />
      <VideoBlock />
      <Quiz />
    </div>
  )
}
