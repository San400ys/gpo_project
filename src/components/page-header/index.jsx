import {Link} from "react-router-dom"
import {Header, Container, MyTitle, Links, User} from "./styled_components"
import {Button} from "../btn";
import {UserOutlined} from "@ant-design/icons";

export const PageHeader = () => {
    return (
        <Header>
            <Container>
                <MyTitle>
                    Панель администратора
                </MyTitle>
                <Links>
                    <Link to="/">
                        <Button>Страницы</Button>
                    </Link>
                    <Link to="/analytics">
                        <Button>Аналитика</Button>
                    </Link>
                    <User>
                        <UserOutlined style={{ fontSize: '40px'}}/>
                    </User>
                </Links>
            </Container>
        </Header>
    )
}