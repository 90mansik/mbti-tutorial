import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterShareButton, XIcon } from 'react-share';
import { base_url} from "../../App";
import styles from './shareButtonGrouop.module.css';

const ShareButtonGruop = ({testParam, resultParam, renderTestInfo}) => {
    console.log("rendertestinfo",renderTestInfo);

    const OnClickCopyToClipboard = () => {
    // navigator.clipboard.writeText(window.location.href)
    navigator.clipboard.writeText(`${base_url}/${testParam}/result/${resultParam}`)
    .then(() => alert("URL 복사 완료!"))
    .catch(() => alert("복사 실패 😢"));
    }
  return (
    <div>
        <h3>친구에게 공유하기</h3>
        <div className={styles.shareButtonDiv}>
            <FacebookShareButton
                url={`${base_url}/${testParam}/result/${resultParam}`}
                 hashtag={`#${renderTestInfo?.info?.mainTitle}`}
            >
                <FacebookIcon round={true} size={48} className={styles.socialMediaIcon}/>
            </FacebookShareButton>
            <TwitterShareButton
                title={renderTestInfo?.info?.mainTitle}
                url={`${base_url}/${testParam}/result/${resultParam}`}
                hashtags={[renderTestInfo?.info?.mainTitle]}
            >
                <XIcon round={true} size={48} className={styles.socialMediaIcon} />
            </TwitterShareButton>

            <button 
                onClick={OnClickCopyToClipboard}
                className={styles.urlShareButton}>
                URL
            </button>
        </div>
    </div>
  )
}

export default ShareButtonGruop;