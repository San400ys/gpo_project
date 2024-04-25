import {Routes, Route} from "react-router-dom"
import {PageHeader} from "./components/page-header"
import {SettingPagesPage} from "./pages/setting-pages-page"
import {AnalyticsPage} from "./pages/analytics-page";
import {ChartPage} from "./pages/chart-page";
import {ScrollToTop} from "./components/scroll-to-top"
import {Page} from "./components/styled-components";

function App() {
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
