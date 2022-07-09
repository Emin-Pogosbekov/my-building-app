import {MainScreen, StandardScreen} from '../components'


export default function HomePage() {
  return (
    <div>
      <MainScreen />
      <StandardScreen />
      <StandardScreen bgColor='dark' reversed={true} />
    </div>
  )
}
