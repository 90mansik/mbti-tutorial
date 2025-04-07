import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading  from "./Loading";
import { useEffect } from "react";

function IntroRenderer({ currentTest}){
    const scoreArray = currentTest?.info?.scoreArray;   
    // 점수판
    // Redux // Zustand
    // 점수판 초기화 함수
    const initializeScore = (scoreArray) => {
        // console.log("Initializing score with scoreType:", scoreArray);
        const score = {};
        scoreArray.forEach((type) => {
            score[type] = 0;
        });
        // console.log("Initialized score:", score);
        return score;
    };
    const [mbtiScore, setMbtiScore] = useState(() =>
         initializeScore(currentTest?.info?.scoreArray || [])
    );

const [mode, setMode] = useState("intro");  // intro, quiz, loading

    if(mode == 'intro'){
        return <Intro info={currentTest?.info} setMode={setMode} />;
    }else if(mode == 'quiz'){
        // console.log("Quiz mode init");
        // console.log("mbtiScore", mbtiScore);
        return <Quiz
                    setMode={setMode}
                    questions={currentTest?.questions}
                    mbtiScore={mbtiScore} 
                    setMbtiScore={setMbtiScore}
                /> ;
    }else if(mode == 'loading'){
        // console.log("mod init");
        // console.log("mbtiScore", mbtiScore);
        // console.log("currentTest", currentTest);
        return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
    }else{
        return <div>잘못된 페이지입니다!</div>
    }
}

export default IntroRenderer;