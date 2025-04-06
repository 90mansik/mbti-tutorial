import mainImage from '../../data/img/mainImg_panda.png';
 
 function MainBanner(){
     return <div >
        {/* <h1>MBTI TEST Platform</h1>*/}
         <img src={mainImage} alt="Main Banner" style={{ maxWidth: "100%", height: "auto" }} />
     </div>;
 }

 export default MainBanner;