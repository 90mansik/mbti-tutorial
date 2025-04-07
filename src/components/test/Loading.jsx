import Lottie from "react-lottie";
import * as animationData from "../../assets/loading-animation2.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loading({mbtiScore, currentTest}) {

  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");

  const calculateResult = () => {
    const scoreType = currentTest?.info?.scoreType;
    const scoreArray = currentTest?.info?.scoreArray || [];

    console.log("scoreType", scoreType);
    // console.log("scoreArray", scoreArray);

    if (scoreType === "MBTI") {
      // MBTI 결과 계산 로직
      const mbtiPairs = [
        ["E", "I"],
        ["N", "S"],
        ["T", "F"],
        ["J", "P"],
      ];

      let resultType = "";

      for (let pair of mbtiPairs) {
        const firstType = pair[0]; // E, N, T, J
        const secondType = pair[1]; // I, S, F, P

        const firstTypeScore = mbtiScore[firstType] || 0; // 기본값 0
        const secondTypeScore = mbtiScore[secondType] || 0; // 기본값 0

        resultType += firstTypeScore > secondTypeScore ? firstType : secondType;
      }
      return resultType;
    } else if (scoreType === "oneChoice") {
      console.log("oneChoice init");
      console.log("mbtiScore",mbtiScore);
      // oneChoice 결과 계산 로직
      return scoreArray.reduce((highest, type) =>
        mbtiScore[type] > mbtiScore[highest] ? type : highest
      );
    } else {
      console.error("Unknown scoreType:", scoreType);
      return null;
    }
  };
  
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  };

  useEffect(() => {
    const resultType = calculateResult(); // calculateResult 함수 호출
    console.log("Generated resultType:", resultType);
    console.log("currentTest.result:", currentTest?.results);

    const resultQuery = currentTest?.results?.find((result) => result?.type === resultType)?.query;

    console.log("Matching resultQuery:", resultQuery);

    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest]);

  const loadingTime = 3700; // ms
  useEffect(() => {
    let timeout = setTimeout( ()=>{
      // resultQuery 활용해서 결과 페이지로 라우팅 하기
      console.log("finalQuery", finalQuery);
      
      finalQuery && navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);
    return() =>{
      clearTimeout(timeout);
    };

  }, [loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);
  return <Lottie options={defaultOption} height={400} width={400} style={{ marginTop: "10rem"}}/>;
}

export default Loading;

// Loading Animation
// mvtiScore Calcul -> Result MBTI TYPE ex. "ENFP"
// N초 -> Result Page Routing
// https://lottiefiles.com
// npm i react-lottie
