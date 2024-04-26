import {Routes, Route} from "react-router-dom"
import {PageHeader} from "./components/page-header"
import {SettingPagesPage} from "./pages/setting-pages-page"
import {AnalyticsPage} from "./pages/analytics-page";
import {ChartPage} from "./pages/chart-page";
import {ScrollToTop} from "./components/scroll-to-top"
import {Page} from "./components/styled-components";
import {useEffect} from "react";
import {request} from "./api/request";
import {addCustomChartAction} from "./store/custom-charts-reducer";
import {useDispatch} from "react-redux";
import {addChartAction} from "./store/all-charts-reducer";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        request
            .fetch("/custom_charts")
            .then((response) => response.json())
            .then((data) => {
                data.map((el) => (
                    dispatch(addCustomChartAction(el))
                ))
            })
    }, []);
    useEffect(() => {
        request
            .fetch("/charts")
            .then((response) => response.json())
            .then((data) => {
                data.map((el) => (
                    dispatch(addChartAction(el))
                ))
            })
    }, []);
    return (
        <Page>
            <PageHeader/>
            <Routes>
                <Route path="/" element={<SettingPagesPage/>}/>
                <Route path="/analytics" element={<AnalyticsPage/>}/>
                <Route path="/analytics/chart/:chartId" element={<ChartPage />} />
            </Routes>
            <ScrollToTop/>
        </Page>
    )
}

export default App
