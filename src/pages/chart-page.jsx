import {Page, Container, View, ChartInf} from "../components/styled-components"
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';
import {Filters} from "../components/filters";
import {Table} from "../components/table"
import {Loader} from "../components/loader"
import {useDispatch, useSelector, } from "react-redux";

export const ChartPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {chartId} = useParams()
    const [chart, setChart] = useState({})

    const dispatch = useDispatch()
    const charts = useSelector(
        (state) => state.all.all_charts
    );
    useEffect(() => {
        const temp = charts.filter((el) => el.id === Number(chartId))
        console.log(temp)
        setChart(temp[0])
        setIsLoading(false)
    }, []);

    return (
        <Page>
            {isLoading ? <Loader/> : <Container>
                <View>
                    <Filters chart={chart}/>
                    <ChartInf>
                        <ReactECharts
                            option={chart.option}
                            notMerge={true}
                            lazyUpdate={true}
                            style={{width: '1040px', height: '600px'}}
                        />
                        {/*<Table table={chart.option}/>*/}
                    </ChartInf>
                </View>
            </Container>}
        </Page>
    )
}