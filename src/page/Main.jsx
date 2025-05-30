import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumbnailList from "../components/main/ThumbnailList";
import Header from "../components/Header";
import KakaoAdfit from "../components/ad/KakaoAdfit";

function Main(){
    return <div style={{ width : 450, margin: "0 auto"}}>

        <Header />
        <KakaoAdfit />
        {/* <LanguageIcons /> */}
        {/* <MainBanner /> */}
        <CategoryButtons />
        <ThumbnailList />
    </div>;
}

export default Main;
