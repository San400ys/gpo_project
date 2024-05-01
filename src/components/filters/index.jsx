import {Main, FilterTitle, Block} from "./styled_components"
import {Select, Button, ColorPicker} from "antd";
import {useState, useMemo} from "react";
import {addChartAction, changeChartAction, deleteChartAction} from "../../store/all-charts-reducer";
import {useDispatch} from "react-redux";

export const Filters = ({chart}) => {
    const dispatch = useDispatch()
    const [xAxis, setXAxis] = useState('');
    const [yAxis, setYAxis] = useState('');
    const [color, setColor] = useState(chart.option.series[0].color);
    const [chartType, setChartType] = useState('line');
    const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);

    const handleChange = () => {
        chart.option.series[0].type = chartType;
        chart.option.series[0].color = typeof color === 'string' ? color : color.toHexString();
        dispatch(deleteChartAction(chart));
        dispatch(addChartAction(chart));
        console.log(chart)
    }

    return (
        <Main>
            <Block>
                <FilterTitle>Ось X</FilterTitle>
                <Select
                    defaultValue="Неделя"
                    style={{
                        width: 260, marginBottom: "20px"
                    }}
                    onChange={setXAxis}
                >
                    <Select.Option value="Неделя">Неделя</Select.Option>
                    <Select.Option value="Месяц">Месяц</Select.Option>
                    <Select.Option value="Год">Год</Select.Option>
                </Select>
                <FilterTitle>Ось Y</FilterTitle>
                <Select
                    defaultValue="Тысячи"
                    style={{
                        width: 260, marginBottom: "20px"
                    }}
                    onChange={setYAxis}
                >
                    <Select.Option value="Сотни">Сотни</Select.Option>
                    <Select.Option value="Тысячи">Тысячи</Select.Option>
                    <Select.Option value="Миллионы">Миллионы</Select.Option>
                </Select>
                <FilterTitle>Тип графика</FilterTitle>
                <Select
                    defaultValue={chart.option.series[0].type}
                    style={{
                        width: 260, marginBottom: "20px"
                    }}
                    onChange={setChartType}
                >
                    <Select.Option value="line">Линейный</Select.Option>
                    <Select.Option value="bar">По столбцам</Select.Option>
                    <Select.Option value="pie">Пирог</Select.Option>
                </Select>
                <FilterTitle>Цвет</FilterTitle>
                <ColorPicker value={color} onChange={setColor}>
                    <Button type="primary" style={{backgroundColor: bgColor}}>
                        Выбрать
                    </Button>
                </ColorPicker>
            </Block>
            <Button type="primary" onClick={() => handleChange()}>Применить</Button>
        </Main>
    )
}