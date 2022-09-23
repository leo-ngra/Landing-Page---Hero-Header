import * as S from './styles'

type FrontendProps = {
  children: React.ReactNode;
}

const Frontend = ({ children }: FrontendProps) => {
  return (
    <div>
        <S.Container>Teste FrontEnd {children}</S.Container>
    </div> 
  )
}

export default Frontend