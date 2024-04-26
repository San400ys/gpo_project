import {Card, Left, Right, Svg, Title, Text, Span} from "./styled_components"
import {useNavigate} from "react-router-dom";
import {LineChart} from "../../assets/line-chart";
import {BarChart} from "../../assets/bar-chart";
import {PieChart} from "../../assets/pie-chart";

export const ChartCard = ({chart}) => {
    const nav = useNavigate();
    const chartType = () => {
        switch (chart.type){
            case "line":return(<LineChart/>);
            case "bar":return(<BarChart/>);
            case "pie":return(<PieChart/>);
        }
    }
    let i=0;
    return (
        <Card onClick={() => nav('chart/'+chart.id, { replace: false })}>
            <Left>
                <Svg>{chartType()}</Svg>
                <Title>{chart.name}</Title>
            </Left>
            <Right>
                {chart.inf.map((el) => (
                    <Text key={i++}><Span>{el.name} </Span>{el.content}</Text>
                ))}
            </Right>
        </Card>
    )
}
