import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./page/Main";
import Test from "./page/Test";
import Privacy from './page/Privacy';
import TestResult from "./page/TestResult";
import { useEffect } from 'react';
import ReactG4 from 'react-ga4'


// export const base_url = "http://localhost:5173";
export const base_url = import.meta.env.VITE_BASE_URL;

function App() {
  useEffect( () => {
    ReactG4.initialize(
      [
        {
          trackingId : "GTM-TW4PFXB6",
          gaOptions:{
            siteSpeedSampleRate : 100
          }
          
        }
      ]
    )
  })
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Thumbnail List Page */}
        <Route path="/" element={<Main />} />
        {/* Test Intro-Quiz-Loading Page */}
        <Route path="/:testParam" element={<Test />} />
        {/* Test Result Page */}
        <Route path="/:testParam/result/:resultParam" element={<TestResult />} />
        {/* Pricacy Page */}
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// 주소체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / Loading : root/:testName
// 3. 결과 페이지 : root/:testName/result/:resultName