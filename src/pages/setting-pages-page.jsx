import {Page, Container, Title} from "../components/styled-components"
import {useDispatch} from "react-redux";

export const SettingPagesPage = () => {
    const dispatch = useDispatch()

    return (
        <Page>
            <Container>
                <Title>Страницы</Title>
            </Container>
        </Page>
    )
}