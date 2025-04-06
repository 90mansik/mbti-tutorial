export const TESTS = [
  // 부자 순위 테스트
    {
    info: {
      mainTitle: "부자 순위 테스트",
      subTitle: "나는 부자순위 몇위 일까",
      mainUrl: "richTest",
      scoreType: "MBTI",
      scoreArray: ["E", "I", "S", "N", "T", "F", "J", "P"], // 점수 타입 배열
      mainImage:
        "https://mansik.dothome.co.kr/img/rich/mbti01-rich.png?_t=1743918363",
        
      thumbImage:
        "https://mansik.dothome.co.kr/img/rich/mbti01-rich.png?_t=1743918363",
      lang: "Kor",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "돈 버는 기회가 생겼는데…사람을 엄청 만나야 한다?!",
        answers: [
          {
            type: "E",
            content: "사람? 오히려 좋아. 소개팅도 얹어줘.",
          },
          {
            type: "I",
            content: "화상회의로 가능합니까?",
          },
        ],
      },
      {
        which: "EI",
        question: "비즈니스 미팅에서 네트워킹 타임 발생",
        answers: [
          {
            type: "E",
            content: "명함 10장 돌려야지",
          },
          {
            type: "I",
            content: "콜라 홀짝이며 미소 장착",
          },
        ],
      },
      {
        which: "EI",
        question: "하루 일과 끝! 돈 버는 시간 끝! 이제?",
        answers: [
          {
            type: "E",
            content: "친구들 만나서 맥주 한잔하며 정보 공유",
          },
          {
            type: "I",
            content: "침대에 누워 조용히 유튜브+혼자만의 시간",
          },
        ],
      },
      {
        which: "SN",
        question: "새로운 재테크 기법을 들었을 때 당신은?",
        answers: [
          {
            type: "S",
            content: "근데 수익률 통계 있어요? 실제 사례도 보고 싶음",
          },
          {
            type: "N",
            content: "이거 곧 뜰 것 같지 않아요? 느낌 좋은데",
          },
        ],
      },
      {
        which: "SN",
        question: "친구가 '이건 미래 먹거리야!' 라며 투자 권유",
        answers: [
          {
            type: "S",
            content: "지금 당장 수익 나는 건 맞아?",
          },
          {
            type: "N",
            content: "이건 5년 뒤에 터질 대박이야",
          },
        ],
      },
      {
        which: "SN",
        question: "스타트업 창업 아이템을 고민 중일 때 당신은?",
        answers: [
          {
            type: "S",
            content: "요즘 뜨는 카페 프랜차이즈, 수익 구조 확실함",
          },
          {
            type: "N",
            content: "메타버스 감정 기반 서비스 어때?",
          },
        ],
      },
      {
        which: "TF",
        question: "돈 얘기하다 싸움 날 뻔... 당신의 반응은?",
        answers: [
          {
            type: "T",
            content: "감정은 내 통장처럼 잠깐 묻어둔다.",
          },
          {
            type: "F",
            content: "돈보다 사람이 먼저지,뭐",
          },
        ],
      },
      {
        which: "TF",
        question: "친구가 코인으로 500만원 날리고 조언을 구한다면?",
        answers: [
          {
            type: "T",
            content: "그래서 니가 들어간 시점이 언제였는데?",
          },
          {
            type: "F",
            content: "헉...너 괜찮아? 밥은 먹었어?",
          },
        ],
      },
      {
        which: "TF",
        question:
          "기념일 선물 고르기 미션 발생! 당신은?",
        answers: [
          {
            type: "T",
            content: "최신 전동칫솔 + 쿠폰 묶음",
          },
          {
            type: "F",
            content: "추억이 담긴 포토북 + 손편지",
          },
        ],
      },
      {
        which: "JP",
        question: "갑자기 생긴 황금 같은 주말.. 당신은?",
        answers: [
          {
            type: "J",
            content: "기분 좋게 오늘 뭐할지 일정표 씀.",
          },
          {
            type: "P",
            content: "‘일어나서 딩굴딩굴 하다가 일몰쯤 약속 잡음",
          },
        ],
      },
      {
        which: "JP",
        question:
          "월급 들어온 다음날 당신의 지갑 사정은?",
        answers: [
          {
            type: "J",
            content: "자동이체 + 예적금 + 소비계획표 ON",
          },
          {
            type: "P",
            content: "이거 사고, 저것도 사면..카드값뭐야?",
          },
        ],
      },
      {
        which: "JP",
        question: "재테크 계획을 세우자고 할 때 나는?",
        answers: [
          {
            type: "J",
            content:
              "엑셀, 노션, 캘린더까지 다 켬",
          },
          {
            type: "P",
            content:
              "일단 뭐부터 해볼까... 시작해보고. 되면 좋고?",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "ESTJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/03.ESTJ.jpg?_t=1743604231",
      },
      {
        type: "ESTP",
        query: "ESTP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/07.ESTP.jpg?_t=1743604231",
      },
      {
        type: "ESFJ",
        query: "ESFJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/10.ESFJ.jpg?_t=1743604231",
      },
      {
        type: "ESFP",
        query: "ESFP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/13.ESFP.jpg?_t=1743604231",
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/01.ENTJ.jpg?_t=1743604231",
      },
      {
        type: "ENTP",
        query: "ENTP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/15.ENTP.jpg?_t=1743604231",
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/05.ENFJ.jpg?_t=1743604231",
      },
      {
        type: "ENFP",
        query: "ENFP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/09.ENFP.jpg?_t=1743604231",
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/04.ISTJ.jpg?_t=1743604231",
      },
      {
        type: "ISTP",
        query: "ISTP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/08.ISTP.jpg?_t=1743604231",
      },
      {
        type: "ISFJ",
        query: "ISFJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/11.ISFJ.jpg?_t=1743604231",
      },
      {
        type: "ISFP",
        query: "ISFP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/14.ISFP.jpg?_t=1743604231",
      },
      {
        type: "INTJ",
        query: "INTJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/02.INTJ.jpg?_t=1743604231",
      },
      {
        type: "INTP",
        query: "INTP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/16.INTP.jpg?_t=1743604231",
      },
      {
        type: "INFJ",
        query: "INFJ",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/06.INFJ.jpg?_t=1743604231",
      },
      {
        type: "INFP",
        query: "INFP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/12.INFP.jpg?_t=1743604231",
      },
    ],
  }
  ,
  // 야구 구단 테스트
  {
    info: {
      mainTitle: "야구 구단 테스트",
      subTitle: "나에게 맞는 야구 구단은 어디?",
      mainUrl: "baseballTeamTest",
      scoreType: "oneChoice",
      scoreArray: ["LG", "SSG", "SAM", "KT", "LOT", "NC", "DU", "KI", "KIA", "HAN"], // 점수 타입 배열
      mainImage:
        "https://mansik.dothome.co.kr/img/baseballTest/baseball_main.jpg?_t=1743950459",
        
      thumbImage:
        "https://mansik.dothome.co.kr/img/baseballTest/baseball_main.jpg?_t=1743950459",
      lang: "Kor",
      category: "etc",
    },
    questions: [
      {
        which: "EI",
        question: "내가 선호하는 야구 응원 방식은?",
        answers: [
          {
            type: "KIA",
            content: "드럼치고 소리 지르며 열정적으로!",
          },
          {
            type: "DU",
            content: "깔끔한 박자와 감성, 응원에도 품격을!",
          },
          {
            type: "KI",
            content: "혼자 조용히 박수 치며 응원하는 스타일",
          },
          {
            type: "KT",
            content: "경기 흐름에 따라 반응하는 스마트형",
          },
        ],
      },
      {
        which: "EI",
        question: "팀이 연패 중일 때 내 반응은?",
        answers: [
          {
            type: "LOT",
            content: "무덤덤하지만 속은 불타오름",
          },
          {
            type: "SAM",
            content: "괜찮아, 다음에 이기겠지! 낙관주의자",
          },
          {
            type: "NC",
            content: "차분히 분석하며 다음에 이길 전략에 대해 논의",
          },
          {
            type: "HAN",
            content: "이번에도 울 준비 됐어.. 감정 과몰입",
          },
        ],
      },
      {
        which: "EI",
        question: "경기장을 찾는 나의 스타일은?",
        answers: [
          {
            type: "DU",
            content: "도시락 풀세팅, 먹고 응원도 열심히",
          },
          {
            type: "LG",
            content: "자리는 정중앙, 선수 한명 한명 집중",
          },
          {
            type: "KIA",
            content: "응원단보다 더 큰 목소리 내는 열혈팬",
          },
          {
            type: "HAN",
            content: "작은 응원도 진심으로, 포기란 없다",
          },
        ],
      },
      {
        which: "SN",
        question: "내가 좋아하는 팀의 이미지는?",
        answers: [
          {
            type: "SAM",
            content: "안정적이고 믿음직한 명문팀",
          },
          {
            type: "LOT",
            content: "드라마틱한 반전과 뜨거운 열기",
          },
          {
            type: "LG",
            content: "승부는 당연, 예술적인 경기력까지!",
          },
          {
            type: "KI",
            content: "무에서 유를 만드는 노력의 결정체",
          },
        ],
      },
      {
        which: "SN",
        question: "경기에서 중요한 순간, 내 스타일은?",
        answers: [
          {
            type: "NC",
            content: "입 꾹 다물고 조용히 손만 꽉 쥠",
          },
          {
            type: "LG",
            content: "갑자기 자리에서 벌떡 일어나 응원",
          },
          {
            type: "HAN",
            content: "주변 팬들과 손잡고, 이길 수 있다!!! 외치기",
          },
          {
            type: "KT",
            content: "소리 없이 집중, 심리전도 경기다!!",
          },
        ],
      },
      {
        which: "SN",
        question: "야구장에서 가장 행복한 순간은?",
        answers: [
          {
            type: "HAN",
            content: "팀이 이기는 순간, 벅차서 눈물남",
          },
          {
            type: "LOT",
            content: "역전 홈런 때 관중 전체가 터질 때",
          },
          {
            type: "NC",
            content: "승리를 차분히 정리하는 마지막 아웃 카운트",
          },
          {
            type: "DU",
            content: "치킨 먹으며 감성에 젖는 7회말",
          },
        ],
      },
      {
        which: "TF",
        question: "야구팀의 SNS나 굿즈도 중요하게 생각해?",
        answers: [
          {
            type: "KT",
            content: "응, 응원도 콘텐츠 시대!",
          },
          {
            type: "KIA",
            content: "난 그런 거보다 경기가 전부야",
          },
          {
            type: "LG",
            content: "은근 팬덤 관리도 팀 이미지에 중요하지",
          },
          {
            type: "SAM",
            content: "굿즈? 나오면 바로 결제함",
          },
        ],
      },
      {
        which: "TF",
        question: "내가 응원팀을 선택하는 기준은?",
        answers: [
          {
            type: "LOT",
            content: "내 고향 또는 연고지",
          },
          {
            type: "DU",
            content: "팀의 역사와 전통",
          },
          {
            type: "KI",
            content: "스토리와 성장성",
          },
          {
            type: "NC",
            content: "분석과 기대치, 통계적 매력",
          },
        ],
      },
      {
        which: "TF",
        question:
          "주변 팬과의 소통 스타일은?",
        answers: [
          {
            type: "LOT",
            content: "혼자 와도 옆사람이랑 금방 친구됨",
          },
          {
            type: "SAM",
            content: "익숙한 멤버끼리 조용한 응원",
          },
          {
            type: "KIA",
            content: "적극적으로 춤과 노래 다 같이 함",
          },
          {
            type: "KT",
            content: "조용히 커뮤니티 글로 응원 후기 씀",
          },
        ],
      },
      {
        which: "JP",
        question: "팬으로서 가장 중요하게 생각하는건?",
        answers: [
          {
            type: "HAN",
            content: "팀과의 감정적 유대감",
          },
          {
            type: "NC",
            content: "경기력과 실속 있는 운영",
          },
          {
            type: "DU",
            content: "응원문화와 팬 서비스",
          },
          {
            type: "KI",
            content: "성과와 실험적인 전술",
          },
        ],
      },
    ],
    results: [
      {
        type: "LG",
        query: "LG",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "SSG",
        query: "SSG",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "SAM",
        query: "SAM",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "KT",
        query: "KT",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "LOT",
        query: "LOT",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "NC",
        query: "NC",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "DU",
        query: "DU",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "KI",
        query: "KI",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "KIA",
        query: "KIA",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      },
      {
        type: "HAN",
        query: "HAN",
        img_src:
          "https://mansik.dothome.co.kr/img/test/test-result.png?_t=1743943398",
      }
    ],
  }
];

// mbti.com
// images.mbti.com
