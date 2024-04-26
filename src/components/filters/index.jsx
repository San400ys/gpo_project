import {Main, FilterTitle} from "./styled_components"
import {Select, Button, ColorPicker} from "antd";
import {useState, useMemo} from "react";

export const Filters = () => {
    const [color, setColor] = useState("#1677ff");
    const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);
    const handleChange = () => {

    }
    return (
        <Main>
            <FilterTitle>Ось X</FilterTitle>
            <Select
                defaultValue="Неделя"
                style={{
                    width: 260, marginBottom: "20px"
                }}
                onChange={handleChange}
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
                onChange={handleChange}
            >
                <Select.Option value="Сотни">Сотни</Select.Option>
                <Select.Option value="Тысячи">Тысячи</Select.Option>
                <Select.Option value="Миллионы">Миллионы</Select.Option>
            </Select>
            <FilterTitle>Цвет</FilterTitle>
            <ColorPicker value={color} onChange={setColor}>
                <Button type="primary" style={{backgroundColor: bgColor}}>
                    Выбрать
                </Button>
            </ColorPicker>
        </Main>
    )
}