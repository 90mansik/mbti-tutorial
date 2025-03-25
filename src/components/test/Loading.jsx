import Lottie from "react-lottie";
import * as animationData from "../../assets/loading-animation.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loading({mbtiScore, currentTest}) {

  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  }

  useEffect( () => {
    // 4개의 슬롯 Array [[E, I], [N, S], [T,F], [J, P]]
    const mbtiPairs = [
      ["E", "I"]
      ,["N", "S"]
      ,["T", "F"]
      ,["J", "P"]
    ];
    // 비어있는 문자열 변수
    let resultType = "";
    // Array 순회 -> 각 슬롯의 winner 선정 -> 문자열 변수에 추가
    for(let pair of mbtiPairs){
      let firstType = pair[0];    // E, N, T, J
      let secondType = pair[1];   // I, S, F, P

      let firstTypeScore = mbtiScore[firstType]; // 2
      let secondTypeScore = mbtiScore[secondType]; // 1

      if(firstTypeScore > secondTypeScore){
        resultType += firstType;
      }else{
        resultType += secondType;
      }
    }
    console.log("Generated resultType:", resultType);
    console.log("currentTest.result:", currentTest?.results);

    const resultQuery = currentTest?.results?.find((result)=>(
      result?.type == resultType
    ))?.query;

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
