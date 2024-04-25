import {Page, Container, Title} from "../components/styled-components"
import {useDispatch} from "react-redux";
import {Loader} from "../components/loader";

export const SettingPagesPage = () => {
    const dispatch = useDispatch()
    return (
        <Page>
            <Loader/>
        </Page>
    )
}