import React from 'react'
import { LinkOutlined, RedoOutlined, HomeOutlined} from '@ant-design/icons';
import { base_url } from '../../App';
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';
const ResultButtonGruop = ({testParam, resultParam}) => {

  console.log("resultParam", resultParam);
  const navigate = useNavigate();
  const oncLickRedoButton = () =>{
    navigate( `/${testParam}`)
  }

  const OnClickGoHomeButton = () =>{
    navigate("/");
  }

  const OnClickCopyToClipboard = () => {
    // navigator.clipboard.writeText(window.location.href)
    navigator.clipboard.writeText(`${base_url}/${testParam}/result/${resultParam}`)
    .then(() => alert("URL 복사 완료!"))
    .catch(() => alert("복사 실패 😢"));
  }
  return (
    <div className={styles.mainDiv}>
        <div className={styles.upperDiv}>
            <button   className={styles.upperButton} onClick={OnClickCopyToClipboard} ><LinkOutlined />&nbsp; 링크 복사</button>
            <button 
                className={styles.upperButton}
                onClick={oncLickRedoButton}><RedoOutlined />&nbsp; 다시 하기</button>
        </div>
        <button className={styles.bottomButton}
                onClick={OnClickGoHomeButton}><HomeOutlined />&nbsp; 다른 테스트 하러 가기</button>
    </div>

  )
}

export default ResultButtonGruop;