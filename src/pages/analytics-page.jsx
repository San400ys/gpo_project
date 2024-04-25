import {Page, Container, Btn} from "../components/styled-components"
import {useDispatch} from "react-redux";
import {request} from "../api/request";
import {ChartCard} from "../components/chart-card";
import {useEffect, useState} from "react";
import {Button} from "../components/btn";

export const AnalyticsPage = () => {
    const dispatch = useDispatch()
    const [charts, setCharts] = useState([])
    useEffect(() => {
        request
            .fetch("/custom_charts")
            .then((response) => response.json())
            .then((data) => {
                setCharts(data);
            })
    }, []);
    return (
        <Page>
            <Container>
                {charts.map((chart) => (
                    <ChartCard chart={chart} key={chart.id}/>
                ))}
            </Container>
            <Btn>
                <Button widht="100px">Создать диаграмму</Button>
            </Btn>
        </Page>
    )
}