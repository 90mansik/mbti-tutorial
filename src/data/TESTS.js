export const TESTS = [
  // personalColor
  {
    info: {
      mainTitle: "부자 순위 테스트",
      subTitle: "나는 부자순위 몇위 일까",
      mainUrl: "personalColor",
      scoreType: "MBTI",
      mainImage:
        "https://mansik.dothome.co.kr/img/rich/mbti01-rich.png?_t=1743345063",
      thumbImage:
        "https://mansik.dothome.co.kr/img/rich/mbti01-rich.png?_t=1743345063",
      lang: "Kor",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "돈 버는 기회가 생겼는데… 사람을 엄청 만나야 한다?!",
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
            content: "가나만 할 수 있는 메타버스 감정 기반 서비스 어때?",
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
        question: "감자기 생긴 황금 같은 주말.. 당신은?",
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
  },
  // personalColorEng
  {
    info: {
      mainTitle: "Personal Color Test",
      subTitle: "What is the color that suits me?",
      mainUrl: "personalColorEng",
      scoreType: "MBTI",
      mainImage:
        "https://www.dropbox.com/scl/fi/jmihoko6rjpk0d3rgewsr/personalColorEng-intro.png?rlkey=ifyyqa8m4w44vq1nk08fshhnj&st=n42rl4fc&dl=1",
      thumbImage:
        "https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1",
      lang: "Eng",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "처음 보는 친구들에게 나는?",
        answers: [
          {
            type: "E",
            content: "내가 먼저 말을 건낸다.",
          },
          {
            type: "I",
            content: "대부분 다른 친구가 먼저 말을 건낸다.",
          },
        ],
      },
      {
        which: "EI",
        question: "주말에 난?",
        answers: [
          {
            type: "E",
            content: "사람들과 만나는 것을 즐긴다.",
          },
          {
            type: "I",
            content: "혼자 있는 게 싫지 않은 편이다.",
          },
        ],
      },
      {
        which: "EI",
        question: "친구들과 놀 때 나는?",
        answers: [
          {
            type: "E",
            content: "왁자지껄한 신나는 분위기를 좋아한다.",
          },
          {
            type: "I",
            content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "내가 더 중요하게 생각하는 것은?",
        answers: [
          {
            type: "S",
            content: "현재가 없으면 미래도 없다.",
          },
          {
            type: "N",
            content: "미래를 생각하지 않으면 발전이 없다.",
          },
        ],
      },
      {
        which: "SN",
        question: "일할 때 나는?",
        answers: [
          {
            type: "S",
            content: "남들이 하는 대로 따라 가는 것이 좋다.",
          },
          {
            type: "N",
            content: "스스로 나만의 방법을 만드는 게 좋다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "주변 사람들이 나에게 하는 말은?",
        answers: [
          {
            type: "S",
            content: "꾸준하고 참을성이 있다는 말을 자주한다.",
          },
          {
            type: "N",
            content: "창의적이고 독창적이라는 말을 자주한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "거절해야 하는 상황이 오면 나는?",
        answers: [
          {
            type: "T",
            content: "강력하게 할 수 없다고 말한다.",
          },
          {
            type: "F",
            content: "고민하다가 대부분 들어주는 편이다.",
          },
        ],
      },
      {
        which: "TF",
        question: "화났을 때 나는?",
        answers: [
          {
            type: "T",
            content: "논리적으로 잘 말하면서 따진다. ",
          },
          {
            type: "F",
            content: "할말이 많지만 너무 분해서 눈물부터 난다.",
          },
        ],
      },
      {
        which: "TF",
        question:
          "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
        answers: [
          {
            type: "T",
            content: "친구의 잘못된 점을 말해준다.",
          },
          {
            type: "F",
            content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.",
          },
        ],
      },
      {
        which: "JP",
        question: "준비물을 준비할 때 나는?",
        answers: [
          {
            type: "J",
            content: "하루 전 날 미리 준비한다.",
          },
          {
            type: "P",
            content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.",
          },
        ],
      },
      {
        which: "JP",
        question:
          "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
        answers: [
          {
            type: "J",
            content: "계획에 없던 일인데…매우 당황스럽다.",
          },
          {
            type: "P",
            content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!",
          },
        ],
      },
      {
        which: "JP",
        question: "내가 가고싶은 여행지 스타일은?",
        answers: [
          {
            type: "J",
            content:
              "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!",
          },
          {
            type: "P",
            content:
              "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!",
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
  },
  // personalColorJP
  {
    info: {
      mainTitle: "パーソナルカラー診断_性格編",
      subTitle: "自分に似合う色は何だろう？ パーソナルカラーテスト",
      mainUrl: "personalColorJP",
      scoreType: "MBTI",
      mainImage:
        "https://www.dropbox.com/scl/fi/oyaueh1pzggp5s92532ba/personalColorJP-intro.png?rlkey=pc8j3xs4o64hlxoiqegk6nrdb&st=ipxjb532&dl=1",
      thumbImage:
        "https://www.dropbox.com/scl/fi/kt272mdx3kigrtgwojeod/personalColorJP-thumb.png?rlkey=j19yzp6gt6iokqgg8kzrl1gpj&st=gzznyj10&dl=1",
      lang: "JP",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "처음 보는 친구들에게 나는?",
        answers: [
          {
            type: "E",
            content: "내가 먼저 말을 건낸다.",
          },
          {
            type: "I",
            content: "대부분 다른 친구가 먼저 말을 건낸다.",
          },
        ],
      },
      {
        which: "EI",
        question: "주말에 난?",
        answers: [
          {
            type: "E",
            content: "사람들과 만나는 것을 즐긴다.",
          },
          {
            type: "I",
            content: "혼자 있는 게 싫지 않은 편이다.",
          },
        ],
      },
      {
        which: "EI",
        question: "친구들과 놀 때 나는?",
        answers: [
          {
            type: "E",
            content: "왁자지껄한 신나는 분위기를 좋아한다.",
          },
          {
            type: "I",
            content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "내가 더 중요하게 생각하는 것은?",
        answers: [
          {
            type: "S",
            content: "현재가 없으면 미래도 없다.",
          },
          {
            type: "N",
            content: "미래를 생각하지 않으면 발전이 없다.",
          },
        ],
      },
      {
        which: "SN",
        question: "일할 때 나는?",
        answers: [
          {
            type: "S",
            content: "남들이 하는 대로 따라 가는 것이 좋다.",
          },
          {
            type: "N",
            content: "스스로 나만의 방법을 만드는 게 좋다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "주변 사람들이 나에게 하는 말은?",
        answers: [
          {
            type: "S",
            content: "꾸준하고 참을성이 있다는 말을 자주한다.",
          },
          {
            type: "N",
            content: "창의적이고 독창적이라는 말을 자주한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "거절해야 하는 상황이 오면 나는?",
        answers: [
          {
            type: "T",
            content: "강력하게 할 수 없다고 말한다.",
          },
          {
            type: "F",
            content: "고민하다가 대부분 들어주는 편이다.",
          },
        ],
      },
      {
        which: "TF",
        question: "화났을 때 나는?",
        answers: [
          {
            type: "T",
            content: "논리적으로 잘 말하면서 따진다. ",
          },
          {
            type: "F",
            content: "할말이 많지만 너무 분해서 눈물부터 난다.",
          },
        ],
      },
      {
        which: "TF",
        question:
          "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
        answers: [
          {
            type: "T",
            content: "친구의 잘못된 점을 말해준다.",
          },
          {
            type: "F",
            content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.",
          },
        ],
      },
      {
        which: "JP",
        question: "준비물을 준비할 때 나는?",
        answers: [
          {
            type: "J",
            content: "하루 전 날 미리 준비한다.",
          },
          {
            type: "P",
            content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.",
          },
        ],
      },
      {
        which: "JP",
        question:
          "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
        answers: [
          {
            type: "J",
            content: "계획에 없던 일인데…매우 당황스럽다.",
          },
          {
            type: "P",
            content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!",
          },
        ],
      },
      {
        which: "JP",
        question: "내가 가고싶은 여행지 스타일은?",
        answers: [
          {
            type: "J",
            content:
              "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!",
          },
          {
            type: "P",
            content:
              "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "ESTJ",
        img_src:
          "https://www.dropbox.com/scl/fi/pw32b9gizven8wqpw5dwf/ESTJ.png?rlkey=qtklzibgln378c3bdknwjw7tf&st=8l16g8ct&dl=1",
      },
      {
        type: "ESTP",
        query: "ESTP",
        img_src:
          "https://www.dropbox.com/scl/fi/ibgrksb70x2bjzcp0z04h/ESTP.png?rlkey=ik3lcdangfzm98erz6br44qb1&st=lhd9w11r&dl=1",
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
          "https://www.dropbox.com/scl/fi/fpewgwyldewu32atxl46r/ESFP.png?rlkey=wqk84mirvwsztbndmcxnyf5nq&st=6e0egn3c&dl=1",
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        img_src:
          "https://www.dropbox.com/scl/fi/5z99j9pguw2v481c2684d/ENTJ.png?rlkey=gh85ty07z8wt487w67qxax5px&st=ss1r7dxx&dl=1",
      },
      {
        type: "ENTP",
        query: "ENTP",
        img_src:
          "https://www.dropbox.com/scl/fi/wbt2slrxassf1w1xkmtre/ENTP.png?rlkey=otdc1hazlyxnangfcryydh5k1&st=69k3sp7u&dl=1",
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        img_src:
          "https://www.dropbox.com/scl/fi/45rtpzm7yc0abt0jpw4dg/ENFJ.png?rlkey=03bckb05d1vkz534jkqskdunh&st=sja06fnq&dl=1",
      },
      {
        type: "ENFP",
        query: "ENFP",
        img_src:
          "https://www.dropbox.com/scl/fi/q6mzyi55sr85bpaahvrbf/ENFP.png?rlkey=3721niechpy0xsvvc2i9rzrd3&st=96zbdbsu&dl=1",
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        img_src:
          "https://www.dropbox.com/scl/fi/65z4aoimkhjya6wmu7vo8/ISTJ.png?rlkey=guf8653rlsy12qwqju2prox59&st=fgwc8cnp&dl=1",
      },
      {
        type: "ISTP",
        query: "ISTP",
        img_src:
          "https://www.dropbox.com/scl/fi/be1p8s7v4y3cn5l5jqm1q/ISTP.png?rlkey=3zylu48zhmqmit9ihfy76487u&st=8vdfflut&dl=1",
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
          "https://www.dropbox.com/scl/fi/0p3eidtg3jcmfmxp6f59s/ISFP.png?rlkey=wmktoly5dyl6xezae7nwxwu3u&st=sh6o7h2i&dl=1",
      },
      {
        type: "INTJ",
        query: "INTJ",
        img_src:
          "https://www.dropbox.com/scl/fi/ibyezz790rxzciz7mmdmb/INTJ.png?rlkey=aewbj0ydimf4z1xv0olhpc2zh&st=lcotd17i&dl=1",
      },
      {
        type: "INTP",
        query: "INTP",
        img_src:
          "https://www.dropbox.com/scl/fi/gnthsbrbmpe23m07dacyt/INTP.png?rlkey=i45gddj68d5go2mpanknj4yf7&st=aois0s0l&dl=1",
      },
      {
        type: "INFJ",
        query: "INFJ",
        img_src:
          "https://www.dropbox.com/scl/fi/tndrtsb971747ngvvhh8a/INFJ.png?rlkey=y7lvzvphffjam2yr5hpsqhbnz&st=1sk1yal6&dl=1",
      },
      {
        type: "INFP",
        query: "INFP",
        img_src:
          "https://mansik.dothome.co.kr/img/rich/12.INFP.jpg?_t=1743604231",
      },
    ],
  },
];

// mbti.com
// images.mbti.com
