import {MainScreen, StandardScreen, Slider, Quiz, VideoBlock, Tabs, Accordion, DoubleBlocks} from '../components'


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
      >
        <Accordion />
      </StandardScreen>
      <Slider />
      <VideoBlock />
      <Quiz />
      <DoubleBlocks bgColor='dark' subtitleText='This is a subtitle text' paragraphText='Lorem ipsum dolor some info more' />
      <StandardScreen
        subtitleText='Честная работа - залог доверия'
        paragraphText='Выполняя все самые важные работы на объекте своими силами, мы получаем полный контроль над финальным результатом'
      >
        <h3>Ok let's go</h3>
      </StandardScreen>
    </div>
  )
}
