import * as S from "./styles"
import Frontend from "../templates/Frontend"
import ButtonContact from "../atoms/ButtonContact"

import HeroHeaderImage from '../assets/hero-header-image.png'
import CardActivity from "../molecules/CardActivity"

function Main() {

  return (
    <div>
      <Frontend>
        <S.Container>
          <div>
            <h1>Desing driven development of your web product</h1>
            <h6>We are a full service digital agency that builds immesive user experience.</h6>

            <ButtonContact />
          </div>

          <S.ColumnImage>
            <CardActivity />

            <img src={HeroHeaderImage} alt="Uma mulher fazendo pesquisa" />
          </S.ColumnImage>
        </S.Container>
      </Frontend>
    </div>
  )
}

export default Main
