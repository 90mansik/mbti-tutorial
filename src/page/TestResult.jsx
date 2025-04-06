import { useNavigate, useParams } from "react-router-dom";
import ResultButtonGruop from "../components/testResult/ResultButtonGruop";
import ResultThumbnailList from "../components/testResult/ResultThumbnailList";
import ShareButtonGruop from "../components/testResult/ShareButtonGruop";
import TestResultRender from "../components/testResult/TestResultRender";
import { useEffect, useState } from "react";
import { TESTS } from "../data/TESTS";


// console.log("ShareButtonGruop:", ShareButtonGruop);
console.log("TestResultRender:", TestResultRender);

function TestResult(){
    const navigate = useNavigate();
    const {testParam, resultParam} = useParams();
    const [renderResultInfo, setRenderResultInfo] = useState({});
    const [renderTestInfo, setRenderTestInfo] = useState({});
    useEffect(() => {
        const testInfo = TESTS.find((test) => (test.info.mainUrl == testParam));
        if(!testInfo){
            alert('존재하지 않는 테스트입니다!');
            navigate("/");
        }

        console.log("testInfo", testInfo);
        console.log("resultParam", resultParam);

        setRenderTestInfo(testInfo);

        const resultInfo = testInfo?.results?.find((result) =>(
            result.query == resultParam
        ));
        if( !resultInfo){
            alert("존재하지 않는 결과값입니다!")
            navigate(`/${testInfo?.info?.mainUrl}`);
        }
        setRenderResultInfo(resultInfo);

    }, [testParam, resultParam, navigate]);
    return <div>
        <TestResultRender renderResultInfo={renderResultInfo} />
        {/* <ShareButtonGruop testParam={testParam} resultParam={resultParam} renderTestInfo={renderTestInfo} /> */}
        <ResultButtonGruop testParam={testParam} resultParam={resultParam}  />
        <ResultThumbnailList testParam={testParam} />
    </div>;
}


// 1. Intro -> Quiz -> Loading -> Result
// 2. Direct Access
export default TestResult;
