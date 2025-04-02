import React from "react";
import { base_url } from '../../App';
import { eventSenderGA } from "../../tools/tools";
import { useNavigate } from 'react-router-dom';
import { LinkOutlined, HomeOutlined} from '@ant-design/icons';
import styles from './IntroButtonGroup.module.css';


const IntroButtonGroup = ({testParam}) => {
  const navigate = useNavigate();
  const OnClickCopyToClipboard = () => {
    eventSenderGA("Copy","Copy Url Button","Result");
    console.log("bsae_url",`${base_url}`);
    console.log("testParam",`${testParam}`);
    navigator.clipboard.writeText(`${base_url}/${testParam}`)
    .then(() => alert("URL 복사 완료!"))
    .catch(() => alert("복사 실패 😢"));
  }
  const OnClickGoHomeButton = () =>{
    eventSenderGA("Paging","Go-Home Button","Result");
    navigate("/");
  }

  return <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
          <button   className={styles.upperButton} onClick={OnClickCopyToClipboard} ><LinkOutlined />&nbsp; 링크 복사</button>
          <button className={styles.bottomButton}
              onClick={OnClickGoHomeButton}><HomeOutlined />&nbsp; 다른 테스트 하러 가기</button>
      </div>
  </div>
}

export default IntroButtonGroup;