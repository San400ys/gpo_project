const initialState = {
    custom_charts: []
}

export const customChartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CUSTOM_CHART":
            return {...state, custom_charts: [...state.custom_charts, action.chart]}
        case "DELETE_CUSTOM_CHART":
            return {
                ...state,
                custom_charts: state.custom_charts.filter(
                    (chart) => chart.id !== action.chart.id
                )
            }
        default:
            return state
    }
}

export const addCustomChartAction = (value) => ({
    type: "ADD_CUSTOM_CHART",
    chart: value
})
export const deleteCustomChartAction = (value) => ({
    type: "DELETE_CUSTOM_CHART",
    chart: value
})
