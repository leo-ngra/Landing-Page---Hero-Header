import * as S from "./styles"
import Frontend from "../templates/Frontend"

import ProductInformation from "../organisms/ProductInformation"
import ProductStats from "../organisms/ProductStats"

function Main() {

  return (
    <div>
      <Frontend>
        <S.Container>
          <ProductInformation />

          <ProductStats />
        </S.Container>
      </Frontend>
    </div>
  )
}

export default Main
