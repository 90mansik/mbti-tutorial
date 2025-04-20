import {useEffect, useState} from 'react';
import {TESTS} from '../../data/TESTS';
import {Link, useSearchParams } from 'react-router-dom';
import {base_url} from '../../App';
import CoupongDynamicBanner from '../ad/CoupangDynamicBanner';

function ThumbnailList(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [testList, setTestList] = useState(TESTS);

    useEffect(
        () => {
            const currentLanguage = searchParams.get("lang") || 'Kor';
            const currentCategory = searchParams.get('cat');
            console.log("currentLanguage", currentLanguage);
            console.log("currentCategory", currentCategory);
            if(currentCategory){
                const filteredTests = TESTS.filter(
                    (test) => (test?.info?.lang == currentLanguage
                                && test?.info?.category == currentCategory )
                );
                setTestList(filteredTests);
            }else{
                console.log("cate all");
                const filteredTests = TESTS.filter( 
                    (test) => (test?.info?.lang == currentLanguage)
                    
                );
                console.log("filteredTests", filteredTests);
                setTestList(filteredTests);
            }
        },
        [searchParams]
    );
    return( 
    <div>
    {/* 이 이미지를 누르면 해당 테스트 Intro 페이지로 넘어가기  */}
    {/* base_url/:testName */}
        {testList?.map((test, index) => (
        <div>
            <Link to={`/${test?.info?.mainUrl}`} key={test?.info?.mainUrl}>
                <img  style={{ width : "100%"}}
                    src={test?.info?.thumbImage} 
                    alt={test?.info?.mainUrl} 
                />
            </Link>
            {index % 2 == 0 && <CoupongDynamicBanner unit={"mainBanner"} />}
        </div>
        ))}

        
    </div>
    );
}

export default ThumbnailList;