import CardActivity from '../../molecules/CardActivity'
import CardChart from '../../molecules/CardChart'
import HeroHeaderImage from '../../assets/hero-header-image.png'
import * as S from './styles'

const ProductStats = () => {
    return (
        <S.Container>
            <CardActivity />

            <CardChart />

            <img src={HeroHeaderImage} alt="Uma mulher fazendo pesquisa" />
          </S.Container>
    )
}

export default ProductStats