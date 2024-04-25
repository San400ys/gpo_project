import {MyTable, TH, TD} from "./styled_components"

export const Table = ({table}) => {

    return(
        <MyTable>
            <thead>
            <tr>
                {table.xAxis.data.map((day) => (
                    <TH>{day}</TH>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {table.series.map((datas) => (
                    datas.data.map((dat) => (
                        <TD>{dat}</TD>
                ))))}
            </tr>
            </tbody>
        </MyTable>
    )
}