import logoImg from '../../assets/mobills.svg'
import { Container, Content } from './styles'

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova Transanção
                </button>
            </Content>
        </Container>
    )
}