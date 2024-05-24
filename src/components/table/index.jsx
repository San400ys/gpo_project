import {MyTable, TH, TD} from "./styled_components"

export const Table = ({table}) => {
    if (table.series[0].type !== "pie"){
        return(
            <MyTable>
                <thead>
                <tr>
                    <TH></TH>
                    {table.xAxis.data.map((day) => (
                        <TH>{day}</TH>
                    ))}
                </tr>
                </thead>
                <tbody>
                {table.series.map((datas) => (
                    <tr>
                        <TD>{datas.name}</TD>
                        {datas.data.map((dat) => (
                            <TD>{dat}</TD>
                        ))}
                    </tr>
                ))}
                </tbody>
            </MyTable>
        )
    }
    else{
        return(
            <MyTable>
                <thead>
                <tr>
                    {table.series[0].data.map((datas) => (
                        <TD>{datas.name}</TD>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {table.series[0].data.map((datas) => (
                            <TD>{datas.value}</TD>
                    ))}
                </tr>
                </tbody>
            </MyTable>
        )
    }

}