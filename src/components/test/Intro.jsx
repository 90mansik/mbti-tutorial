import { useParams } from "react-router-dom";
import { eventSenderGA } from "../../tools/tools";
import IntroButtonGroup from "./IntroButtonGroup";

function Intro({info, setMode}) {
        const onImageClick = () =>{
            eventSenderGA("Paging","Test Start Button","Intro");
            setMode("quiz");
        };

    return (<div>
        <div>
            <h1>{info?.mainTitle}</h1>
            <h3>{info?.subTitle}</h3>
            <img 
                //onClick={onImageClick}
                 onClick={() => setMode("quiz")}
                style={{width : "100%", cursor: "pointer"}} 
                src={info?.mainImage} 
                alt={info?.mainTitle} 
            />
        </div>
        <p><span style={{ fontWeight :"bold", color: "brown"}}>{info?.mainTitle}</span>로 여러분의 성향을 테스트 해보세요!</p>
        <IntroButtonGroup  testParam={info?.mainUrl} />
    </div>
    );
}

export default Intro;