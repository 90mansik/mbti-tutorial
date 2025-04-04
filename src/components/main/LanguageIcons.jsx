import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";
import styles from "./LanguageIcons.module.css";

function LanguageIcons(){
    const navigate = useNavigate();
    const onButtonClick =(lang) => {
        navigate(`/?lang=${lang}`)
        console.log(`/?lang=${lang}`);
    }

    
    return <div >
        {/* -> mbti.com?lang=Kor  */}
        <CircleFlag className={styles.flagIcon} onClick={() => onButtonClick("Kor")}countryCode="kr" width={48} />
        {/* -> mbti.com?lang=Eng  */}
        <CircleFlag className={styles.flagIcon} onClick={() => onButtonClick("Kor")}countryCode="us" width={48} />      
        {/* -> mbti.com?lang=JP  */}
        <CircleFlag className={styles.flagIcon} onClick={() => onButtonClick("Kor")}countryCode="jp" width={48} />
    </div>;
}


// mbti.com/?lang=Eng&cat=love

export default LanguageIcons;