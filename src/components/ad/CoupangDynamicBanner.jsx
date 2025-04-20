import React from 'react'

const CoupangDynamicBanner = ({unit}) => {
  const unitMapper = {
    introBanner: {
      width: 550,
      height: 140,
    },
    mainBanner: {
      width: 450,
      height: 140,
    },
    testResultBanner: {
      width: 550,
      height: 140,
    }
  }
  return (
    <div>
        <iframe 
          src="https://ads-partners.coupang.com/widgets.html?id=858455&template=carousel&trackingCode=AF5489594&subId=&width=550&height=140&tsource=" 
          width={ unitMapper[unit].width}
          height={ unitMapper[unit].height} 
          frameborder="0" 
          scrolling="no" 
          referrerpolicy="unsafe-url" ></iframe>
    </div>
  )
}

export default CoupangDynamicBanner