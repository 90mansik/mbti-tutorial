import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
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
  return (
    <div className={styles.mainDiv}>
        <div className={styles.upperDiv}>
            <CopyToClipboard text={`${base_url}/${testParam}/result/${resultParam}`}>
                <button   className={styles.upperButton} onClick={() => alert("URL이 복사되었습니다.")}><LinkOutlined />&nbsp; 링크 복사</button>
            </CopyToClipboard>
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