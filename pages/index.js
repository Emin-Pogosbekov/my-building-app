import {MainScreen, StandardScreen, Slider, Quiz, VideoBlock, Tabs} from '../components'


export default function HomePage() {
  return (
    <div>
      <MainScreen
        titleText='Услуги профессиональной строительной бригады'
        paragraphText='Больше 30 лет мы занимается отделочными работами в жилых комплексах бизнес и премиум уровня по всей России'
        buttonText='Заказать'
      />
      <StandardScreen
        subtitleText='Отделочные работы под ключ'
        paragraphText='Выполняя все самые важные работы на объекте своими силами, мы получаем полный контроль над финальным результатом'
      >
        <Tabs />
      </StandardScreen>
      <StandardScreen
        bgColor='dark'
        reversed={true}
        subtitleText='Индивидуальный подход, отражающийся в деталях'
        paragraphText='Мы умеем работать с самой требовательной аудиторией и готовы реализовать самые изысканные идеи'
      />
      <Slider />
      <VideoBlock />
      <Quiz />
    </div>
  )
}
