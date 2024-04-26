import {Page, Container, Btn} from "../components/styled-components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChartCard} from "../components/chart-card";
import {Button} from "../components/btn";
import {Loader} from "../components/loader";
import {Mymodal} from "../components/modal"
import {addCustomChartAction} from "../store/custom-charts-reducer";
import {addChartAction} from "../store/all-charts-reducer";

export const AnalyticsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (charts !== []) {setIsLoading(false);}
    }, []);

    const dispatch = useDispatch();
    const charts = useSelector(
        (state) => state.custom.custom_charts
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    let [id, setId] = useState(4)
    const addChart = (chart) => {
        console.log(chart)
        const custom_obj = {
            "id": id,
            "name": chart.name,
            "type": chart.type,
            "inf":[
                {
                    "name": "Срок",
                    "content": chart.term,
                },
                {
                    "name": "Единицы измерения",
                    "content": chart.unitMeasure,
                },
            ]
        }
        dispatch(addCustomChartAction(custom_obj))
        const obj = {
            "id": id,
            "option": {
                "title":{
                    "text": chart.name,
                    "subtext": chart.term + " / " + chart.unitMeasure,
                    "left": "center"
                },
                "tooltip": {
                    "trigger": "axis"
                },
                "xAxis": {
                    "type": "category",
                    "data": ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
                },
                "yAxis": {
                    "type": "value"
                },
                "series": [
                    {
                        "data": [100, 280, 207, 220, 148, 123, 280],
                        "type": chart.type,
                        "color": "#1677ff"
                    }
                ]
            }
        }
        dispatch(addChartAction(obj))
        setId(id++);
        setIsModalOpen(false);
    };

    return (
        <Page>
            {isLoading ? <Loader/> : <>
                <Container>
                    {charts.map((chart) => (
                        <ChartCard chart={chart} key={chart.id}/>
                    ))}
                </Container>
                <Btn>
                    <Button widht="100px" onClick={() => setIsModalOpen(true)}>Создать диаграмму</Button>
                </Btn>
            </>}
            {isModalOpen &&
                <Mymodal
                    open={isModalOpen}
                    onCreate={addChart}
                    onCancel={() => setIsModalOpen(false)}
                />
            }
        </Page>
    );
}