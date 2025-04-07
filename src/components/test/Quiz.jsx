import { useEffect, useState } from "react";
import styles from './quiz.module.css';
import { Flex, Progress } from 'antd';
import { arrayShuffler } from "../../tools/tools";

function Quiz({
    setMode, questions, mbtiScore, setMbtiScore
}) {
    const [questionNum, setQuestionNum] = useState(0);
    const onOptionClick = (type) =>{
         console.log("Quzi.type", type);
        mbtiScore[type] += 1;
        console.log("Quzi mbtiScore", mbtiScore);
        setMbtiScore({ ...mbtiScore});
        setQuestionNum((prev) => prev +1);
    };
    useEffect(()=>{
        if(questionNum == questions.length){
            console.log("go loading Page")
            setMode("loading");
        }
         console.log("questionNum", questionNum);
         console.log("questions.length", questions.length);
    }, [questionNum, questions.length, setMode]);
    return <div>
        <h3 className={styles.questionText}>
            {questions[questionNum]?.question}
        </h3>
        {/*  */}
        
        {questions[questionNum]?.question && 
            arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
            <button className={styles.optionButton}
                onClick={() => {onOptionClick(option.type)}}
                key={option.content}
            >
                {option.content}
            </button>
        ))}
        <Progress 
            percent={questionNum / questions.length * 100 } 
            showInfo={false}
        />
        <p className={styles.progressText}>
          {questionNum} / {questions.length} 
        </p>
    </div>;
}

export default Quiz;

// 16 Results
// 12 Question - Options selection
// MBTI Calcul

// 12 end -> loading
// Progress bar > ant.design
// shuffling answer options
//CSS

//Progress bar
// shuffling answer options