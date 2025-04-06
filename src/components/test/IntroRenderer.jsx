import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading  from "./Loading";

function IntroRenderer({ currentTest}){
    // 점수판
    // Redux // Zustand
    // 점수판 초기화 함수
    const initializeScore = (scoreType) => {
        const score = {};
        scoreType.forEach((type) => {
            score[type] = 0; // 각 타입의 초기 점수는 0
        });
        return score;
    };
    const [mbtiScore, setMbtiScore] = useState(
        initializeScore(currentTest?.info?.scoreArray || [])
    );

const [mode, setMode] = useState("intro");  // intro, quiz, loading
    if(mode == 'intro'){
        return <Intro info={currentTest?.info} setMode={setMode} />;
    }else if(mode == 'quiz'){
        return <Quiz
                    setMode={setMode}
                    questions={currentTest?.questions}
                    mbtiScore={mbtiScore} 
                    setMbtiScore={setMbtiScore}
                /> ;
    }else if(mode == 'loading'){
        return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
    }else{
        return <div>잘못된 페이지입니다!</div>
    }
}

export default IntroRenderer;