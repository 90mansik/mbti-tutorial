import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from './CategoryButtons.module.css';

function CategoryButtons(){
    const [searchParams] = useSearchParams();
    const [languge, setLanguage] = useState("Kor");
    const navigate = useNavigate();


    useEffect( ()=>{
        const currentLang = searchParams.get('lang' ) || 'Kor';
        setLanguage(currentLang);
    }, [searchParams]);

    const onCategoryButtonClick = (category) =>{
        // mbti.com -> mbti.com/?lang=Kor&cat=love
        // navigate(`/?lang=${languge}&cat=?${category}`);
        if( category == 'all'){
            navigate(`/?lang=${languge}`);
        }else if( category == 'love' || category == 'characteristic' ||  category == 'etc'){
            navigate(`/?lang=${languge}&cat=${category}`);
        }else{
            alert("잘못된 카테고리입니다.");
            navigate(`/?lang=${languge}`);
        }
    }
    return <div>
        {/* mbit.com | mbti.com?lang=Kor  */}
        <button className={styles.categoryButton} onClick={() => onCategoryButtonClick('all')}> 🧩 ALL</button>
        {/* mbit.com | mbti.com/?lang=Kor -> &cat=chracteristic */}
        <button className={styles.categoryButton} onClick={() => onCategoryButtonClick('characteristic')}> 🧠 성격</button>
        {/* mbit.com | mbti.com/?lang=Kor -> &cat=love */}
        <button className={styles.categoryButton} onClick={() => onCategoryButtonClick('love')}>💕 연애</button>
        {/* mbit.com | mbti.com/?lang=Eng -> &cat=etc */}
        <button className={styles.categoryButton} onClick={() => onCategoryButtonClick('etc')}>✨ 기타</button>


        

    </div>;
}

export default CategoryButtons;

// mbti.com/?lang=Kor&Cat=love
// lang=Kor | cat=love|char|all
// cat=love | lang\Kor|Eng|JP