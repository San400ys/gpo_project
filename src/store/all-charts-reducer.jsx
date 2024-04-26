const initialState = {
    all_charts: []
}

export const allChartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHART":
            return {...state, all_charts: [...state.all_charts, action.chart]}
        case "DELETE_CHART":
            return {
                ...state,
                all_charts: state.all_charts.filter(
                    (chart) => chart.id !== action.chart.id
                )
            }
        default:
            return state
    }
}

export const addChartAction = (value) => ({
    type: "ADD_CHART",
    chart: value
})
export const deleteChartAction = (value) => ({
    type: "DELETE_CHART",
    chart: value
})
