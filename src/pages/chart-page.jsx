import {Page, Container, View, ChartInf} from "../components/styled-components"
import {useParams} from "react-router-dom"
import {request} from "../api/request";
import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';
import {Filters} from "../components/filters";
import {Table} from "../components/table"
import {useDispatch} from "react-redux";

export const ChartPage = () => {
    const dispatch = useDispatch()
    const {chartId} = useParams()
    const [chart, setChart] = useState({})

    useEffect(() => {
        request
            .fetch("/charts?id=" + chartId)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setChart(data[0]);
            })
    }, []);

    const AComp = () => chart?.option ? <><Filters options={chart.option}/>
        <ChartInf>
            <ReactECharts
                option={chart.option}
                notMerge={true}
                lazyUpdate={true}
                style={{width: '1040px', height: '600px'}}
            />
            <Table table={chart.option}/>
        </ChartInf></> : 'Loading...'

    return (
        <Page>
            <Container>
                <View>
                    <AComp/>
                </View>
            </Container>
        </Page>
    )
}