import {Card, Inf, Svg, Title} from "./styled_components"
import {useNavigate} from "react-router-dom";
import {LineChart} from "../../assets/line-chart";
import {BarChart} from "../../assets/bar-chart";
import {PieChart} from "../../assets/pie-chart";

export const ChartCard = ({chart}) => {
    const nav = useNavigate();
    const chartType = () => {
        switch (chart.type){
            case "Line":return(<LineChart/>);
            case "Bar":return(<BarChart/>);
            case "Pie":return(<PieChart/>);
        }
    }

    return (
        <Card onClick={() => nav('chart/'+chart.id, { replace: false })}>
            <Inf>
                <Svg>{chartType()}</Svg>
                <Title>{chart.name}</Title>
            </Inf>
            Тут я не понял, что надо разместить
        </Card>
    )
}
