import {Main, Input, FilterTitle} from "./styled_components"
import {Select} from "antd";
import {Button, ColorPicker} from 'antd';
import {useState, useMemo} from "react";

export const Filters = () => {
    const [color, setColor] = useState("#1677ff");
    const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);
    const btnStyle = {
        backgroundColor: bgColor,
    };
    const handleChange = () => {

    }
    return (
        <Main>
            <FilterTitle>Ось X</FilterTitle>
            <Select
                defaultValue="Дни недели"
                style={{
                    width: 260, marginBottom: "20px"
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'Дни недели',
                        label: 'Дни недели',
                    },
                    {
                        value: 'Месяцы',
                        label: 'Месяцы',
                    },
                    {
                        value: 'Года',
                        label: 'Года',
                    }
                ]}
            />
            <FilterTitle>Ось Y</FilterTitle>
            <Select
                defaultValue="Дни недели"
                style={{
                    width: 260, marginBottom: "20px"
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'Дни недели',
                        label: 'Дни недели',
                    },
                    {
                        value: 'Месяцы',
                        label: 'Месяцы',
                    },
                    {
                        value: 'Года',
                        label: 'Года',
                    }
                ]}
            />
            <FilterTitle>Цвет</FilterTitle>
            <ColorPicker value={color} onChange={setColor}>
                <Button type="primary" style={btnStyle}>
                    Выбрать
                </Button>
            </ColorPicker>

        </Main>
    )
}