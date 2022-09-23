import * as S from './styles'
import { FiArrowLeft, FiArrowRight} from 'react-icons/fi'

const CardChart = () => {
    const amountBars = Array.from(Array(12).keys())
  
    return(
        <S.Container>
            <div>
                <FiArrowLeft />
                    <strong>Stats</strong>
                <FiArrowRight />
            </div>

            <S.Chart>
                {amountBars.map((item) => (
                        <div key={String(item)}>
                            <div>
                                <span></span>
                            </div>
                        <small>{item + 1}</small>   
                        </div>     
                ))}
            </S.Chart>
        </S.Container>
    )
}

export default CardChart