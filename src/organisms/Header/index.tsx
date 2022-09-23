import * as S from './styles'

import Button from '../../atoms/Button'
import Logo from '../../molecules/Logo'
import Menu from '../Menu'

const Header = () => {
    return (
        <>
            <S.Box>
                <Logo />
                <Menu />
                <Button />
            </S.Box>
        </>
    )
}

export default Header