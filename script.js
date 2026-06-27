const candidates = [
  {
    id: "kim",
    name: "김도윤",
    personType: "후보자",
    party: "미래시민당",
    partyColor: "#2f6bd6",
    region: "서울",
    role: "시장 후보",
    topics: ["주거", "교통", "복지", "일자리"],
    pledges: 42,
    progress: 61,
    unclear: 4,
    summary: "청년 주거와 교통 예산을 주요 공약으로 제시했습니다.",
    topicProgress: { 주거: 68, 일자리: 54, 교통: 72, 복지: 47 },
    details: [
      { title: "청년 주거 지원 확대", topic: "주거", goal: "월세 지원 대상과 공공임대 공급 확대", method: "예산 증액, 자치구 협약, 임대주택 공급 일정 조정", check: "지원 대상자 수와 예산 규모를 공약 당시 목표와 비교", status: "부분 이행" },
      { title: "지역 교통 예산 2배 확보", topic: "교통", goal: "혼잡 노선 증차와 버스 배차 간격 단축", method: "국비 신청, 시의회 예산 심사, 노선 수요 조사", check: "총 교통 예산인지 특정 사업비인지 구분해 검증", status: "진행 중" },
      { title: "돌봄센터 5개 신설", topic: "복지", goal: "생활권별 돌봄 공백 완화", method: "공공시설 활용, 운영 인력 배치, 구청 협약", check: "센터 개소 수와 실제 이용자 증가를 함께 확인", status: "완료" },
      { title: "청년 창업 임대료 바우처", topic: "일자리", goal: "초기 창업자의 고정비 부담 완화", method: "상권별 임대료 지원과 창업 교육 연계", check: "지원금 수령 사업체의 생존율과 예산 집행률 확인", status: "진행 중" },
      { title: "심야 버스 노선 확대", topic: "교통", goal: "늦은 시간 귀가 교통 사각지대 해소", method: "수요 조사 후 심야 노선 8개 증편", check: "운행 횟수와 실제 이용자 수를 월별로 비교", status: "부분 이행" },
      { title: "노후 공공임대 리모델링", topic: "주거", goal: "취약 주거지 안전과 에너지 효율 개선", method: "단지별 안전 진단과 단계별 보수 공사", check: "완료 세대 수와 하자 보수 민원 감소 여부 확인", status: "진행 중" },
      { title: "장애인 이동 지원 차량 증차", topic: "복지", goal: "교통 약자의 대기 시간 단축", method: "특별교통수단 차량과 운전 인력 추가 배치", check: "평균 배차 대기 시간과 차량 가동률 확인", status: "완료" },
      { title: "지역 경제 활성화 패키지", topic: "일자리", goal: "소상공인 매출 회복과 지역 고용 확대", method: "상권 쿠폰, 교육, 컨설팅을 통합 지원", check: "정량 목표가 부족해 매출·고용 지표 기준 보완 필요", status: "판단 불가" },
    ],
  },
  {
    id: "park",
    name: "박서연",
    personType: "후보자",
    party: "국민생활연합",
    partyColor: "#d64d4d",
    region: "부산",
    role: "시장 후보",
    topics: ["일자리", "교육", "복지", "주거"],
    pledges: 38,
    progress: 55,
    unclear: 6,
    summary: "지역 일자리와 돌봄 확대를 중심으로 공약을 구성했습니다.",
    topicProgress: { 일자리: 58, 교육: 62, 복지: 45, 주거: 41 },
    details: [
      { title: "사회초년생 보증금 대출 지원", topic: "주거", goal: "주거 초기 비용 부담 완화", method: "이자 지원 조례와 금융기관 협약 추진", check: "대출 한도, 대상자 수, 재원 출처 확인", status: "진행 중" },
      { title: "공공 일자리 3천 개 창출", topic: "일자리", goal: "청년과 경력단절 시민의 고용 확대", method: "공공서비스 분야 일자리 사업 편성", check: "신규 일자리인지 기존 사업 재분류인지 검증", status: "미이행" },
      { title: "방과후 프로그램 비용 완화", topic: "교육", goal: "교육비 부담 감소", method: "교육청·지자체 공동 예산 편성", check: "학교별 지원 단가와 실제 참여 학생 수 확인", status: "판단 불가" },
      { title: "돌봄센터 접근성 개선", topic: "복지", goal: "도보권 돌봄 시설 확대", method: "공공 유휴 공간 전환과 민간 위탁 병행", check: "센터 수 증가와 이용 가능 정원 증가를 분리해 확인", status: "부분 이행" },
      { title: "지역 제조업 재교육 바우처", topic: "일자리", goal: "전환 산업 인력 재취업 지원", method: "직업훈련기관과 기업 채용 연계", check: "교육 수료 후 취업률과 유지율 확인", status: "진행 중" },
      { title: "무상 통학 안전 알림 서비스", topic: "교육", goal: "학생 등하교 안전 강화", method: "학교별 신청 기반 알림 시스템 도입", check: "개인정보 동의 절차와 실제 이용 학교 수 확인", status: "진행 중" },
      { title: "어르신 건강 방문 상담", topic: "복지", goal: "취약계층 만성질환 관리 강화", method: "보건소 방문 인력 확충과 동 단위 상담 일정 운영", check: "방문 건수보다 건강 지표 개선 여부 확인", status: "완료" },
      { title: "지역 대학 창업 캠퍼스", topic: "일자리", goal: "대학 기반 창업 생태계 확대", method: "공동 창업 공간과 멘토링 예산 편성", check: "입주 기업 수, 투자 유치, 고용 창출 지표 확인", status: "진행 중" },
    ],
  },
  {
    id: "lee",
    name: "이하준",
    personType: "후보자",
    party: "교육개혁당",
    partyColor: "#6c5dd3",
    region: "대구",
    role: "교육감 후보",
    topics: ["교육", "복지", "교통"],
    pledges: 31,
    progress: 49,
    unclear: 5,
    summary: "학교 안전, 방과후 돌봄, 기초학력 지원을 강조했습니다.",
    topicProgress: { 교육: 66, 복지: 44, 교통: 32, 일자리: 28 },
    details: [
      { title: "기초학력 맞춤 지원", topic: "교육", goal: "학습 격차 완화", method: "진단 평가, 보충 수업, 전담 교사 배치", check: "개인정보 보호와 실제 지원 인력 규모 검토", status: "진행 중" },
      { title: "학교 주변 안전 인프라 확충", topic: "교통", goal: "어린이 보호구역 사고 감소", method: "보행 안전 시설 설치와 통학로 개선", check: "공사 발주서와 학교별 완료 현황 확인", status: "진행 중" },
      { title: "돌봄교실 운영 시간 확대", topic: "복지", goal: "맞벌이 가정 돌봄 부담 완화", method: "운영 인력 증원과 학교 공간 활용", check: "운영 시간과 실제 이용 가능 인원 확인", status: "부분 이행" },
      { title: "디지털 교과서 접근성 개선", topic: "교육", goal: "기기·가정환경 차이로 생기는 학습 격차 감소", method: "기기 대여와 오프라인 자료 병행 제공", check: "대여 기기 수와 실제 수업 활용률 확인", status: "진행 중" },
      { title: "학교 급식 알레르기 표시 강화", topic: "복지", goal: "학생 건강 안전 관리", method: "급식 시스템 표시 항목 확대와 조리 인력 교육", check: "학교별 표시 이행률과 사고 신고 건수 확인", status: "완료" },
      { title: "교원 행정업무 경감", topic: "교육", goal: "교사가 수업과 학생 상담에 집중하도록 지원", method: "행정 전담 인력 배치와 보고 서식 통합", check: "실제 행정 업무 시간 감소 여부 확인", status: "판단 불가" },
    ],
  },
  {
    id: "choi",
    name: "최유진",
    personType: "현직 정치인",
    party: "무소속",
    partyColor: "#6b7280",
    region: "경기",
    role: "현직 국회의원",
    topics: ["산업", "일자리", "환경", "복지"],
    pledges: 46,
    progress: 63,
    unclear: 7,
    summary: "현직 의정활동과 지역 산업·복지 공약 이행을 함께 추적합니다.",
    topicProgress: { 산업: 70, 일자리: 59, 환경: 52, 복지: 61 },
    details: [
      { title: "반도체 특화 인력 양성", topic: "산업", goal: "지역 산업 인력난 완화", method: "대학·기업 공동 교육 과정과 장학금 지원", check: "교육 수료자 취업률과 기업 참여 수 확인", status: "진행 중" },
      { title: "산단 통근 교통 개선", topic: "교통", goal: "산업단지 출퇴근 불편 완화", method: "광역버스 노선 조정과 환승센터 개선", check: "평균 통근 시간 변화와 이용자 수 확인", status: "부분 이행" },
      { title: "미세먼지 저감 설비 지원", topic: "환경", goal: "중소 제조업 배출 저감", method: "저감 장비 보조금과 현장 컨설팅", check: "배출량 자료와 보조금 집행 내역 확인", status: "완료" },
      { title: "노동자 휴게시설 확충", topic: "복지", goal: "산단 노동환경 개선", method: "공용 휴게시설 설치와 관리 예산 편성", check: "설치 수량과 실제 이용 가능 시간 확인", status: "진행 중" },
      { title: "지역 청년 연구지원금", topic: "일자리", goal: "지역 R&D 인재 정착 유도", method: "연구비 지원과 기업 과제 매칭", check: "선정 기준과 사후 성과 공개 여부 확인", status: "판단 불가" },
    ],
  },
];

const newsItems = [
  { group: "popular", rank: 1, title: "KBS 정치 뉴스", source: "국내 방송", date: "정치 섹션", summary: "국회, 대통령실, 정당, 선거 이슈를 한국어 기사와 영상으로 확인할 수 있습니다.", angle: "국내 정치 현안과 발언 원문 확인", url: "https://news.kbs.co.kr/news/pc/category/category.do?ref=pSiteMap&categoryName=정치" },
  { group: "popular", rank: 2, title: "MBC 정치 뉴스", source: "국내 방송", date: "정치 섹션", summary: "대통령실, 국회, 정당 관련 주요 뉴스를 방송 리포트 형식으로 볼 수 있습니다.", angle: "방송 리포트와 현장 발언 비교", url: "https://imnews.imbc.com/news/2026/politics/" },
  { group: "popular", rank: 3, title: "SBS 정치 뉴스", source: "국내 방송", date: "정치 섹션", summary: "정치권 주요 이슈와 선거 관련 뉴스를 빠르게 모아볼 수 있는 섹션입니다.", angle: "정책 논란과 여야 반응 확인", url: "https://news.sbs.co.kr/news/newsSection.do?sectionType=01" },
  { group: "popular", rank: 4, title: "연합뉴스 정치", source: "국내 통신사", date: "정치 섹션", summary: "정치 일정, 국회, 정부 발표를 속보 중심으로 확인하기 좋습니다.", angle: "팩트 확인용 1차 보도 흐름 확인", url: "https://www.yna.co.kr/politics/index" },
  { group: "latest", rank: 1, title: "중앙선거관리위원회 정책공약마당", source: "공식 자료", date: "상시 확인", summary: "후보자 공약과 정책 자료를 확인할 때 가장 먼저 대조할 수 있는 공식 창구입니다.", angle: "후보별 공약 원문 확인", url: "https://policy.nec.go.kr/" },
  { group: "latest", rank: 2, title: "국회 의안정보시스템", source: "공식 자료", date: "상시 확인", summary: "공약이 법안으로 이어졌는지, 발의·심사·통과 상태를 확인할 수 있습니다.", angle: "법안 처리 단계 확인", url: "https://likms.assembly.go.kr/bill/main.do" },
  { group: "latest", rank: 3, title: "대한민국 정책브리핑", source: "정부 자료", date: "상시 확인", summary: "정부 정책 발표와 보도자료를 공약 이행 근거로 대조할 수 있습니다.", angle: "정부 발표와 실제 사업 근거 확인", url: "https://www.korea.kr/" },
  { group: "latest", rank: 4, title: "AP News: South Korea politics", source: "국제 통신사", date: "최근 기사 목록", summary: "한국 정치 관련 국제 보도 흐름을 확인할 수 있는 뉴스 검색 페이지입니다.", angle: "국내 보도와 다른 표현·쟁점 비교", url: "https://apnews.com/search?q=South%20Korea%20politics" },
];

const debateData = {
  youth: [
    { candidate: "김도윤", title: "청년·주거 정책 토론", claims: ["청년 월세 지원 대상을 확대하겠다고 발언", "공공임대 공급 일정을 앞당기겠다고 주장"], evidence: "예산안과 주택 공급 계획표 확인 필요", check: "목표 가구 수, 예산 규모, 시행 시점 검증" },
    { candidate: "박서연", title: "청년·주거 정책 토론", claims: ["사회초년생 보증금 대출 지원을 강조", "역세권 청년주택 인허가 절차 단축을 제안"], evidence: "조례 개정 가능성과 금융 재원 출처 확인 필요", check: "대출 이자 지원 규모와 실제 대상자 수 검증" },
  ],
  transport: [
    { candidate: "김도윤", title: "교통·예산 정책 토론", claims: ["버스 배차 간격 단축과 혼잡 노선 증차를 약속", "교통 예산 2배 확보를 언급"], evidence: "지방 예산안, 국비 신청서, 노선별 수요 자료 확인 필요", check: "예산 2배가 총액인지 특정 사업비인지 구분" },
    { candidate: "정민아", title: "교통·예산 정책 토론", claims: ["생활권 순환버스 도입을 제안", "보행 안전 예산을 확대하겠다고 발언"], evidence: "교통영향평가와 구의회 회의록 확인 필요", check: "시범사업인지 전면 시행인지 확인" },
  ],
  education: [
    { candidate: "이하준", title: "교육·돌봄 정책 토론", claims: ["기초학력 진단과 맞춤형 보충 수업 확대를 발언", "학교 주변 안전 시설 확충을 강조"], evidence: "교육청 예산과 학교별 시행 계획 확인 필요", check: "학생 개인정보 보호와 실제 지원 인력 규모 검토" },
    { candidate: "박서연", title: "교육·돌봄 정책 토론", claims: ["돌봄센터 접근성을 높이겠다고 주장", "방과후 프로그램 비용 부담 완화를 제안"], evidence: "돌봄센터 설치 현황, 운영 예산, 지자체 협약서 확인 필요", check: "센터 수 증가와 실제 이용자 증가를 분리해 판단" },
  ],
};

let selectedCandidate = candidates[0];
let activeStatusFilter = "all";
let activeNewsGroup = "popular";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function statusCounts(details) {
  const counts = { "완료": 0, "진행 중": 0, "부분 이행": 0, "미이행": 0, "판단 불가": 0 };
  details.forEach((item) => { counts[item.status] = (counts[item.status] || 0) + 1; });
  return counts;
}

function allPolicies() {
  return candidates.flatMap((candidate) => candidate.details.map((detail) => ({ ...detail, candidate })));
}

function aiReviewFor(promise) {
  const scoreByStatus = {
    "완료": 92,
    "진행 중": 73,
    "부분 이행": 58,
    "미이행": 22,
    "판단 불가": 35,
  };
  const statusReason = {
    "완료": "공식 자료에서 실행 결과와 예산 또는 사업 완료 근거가 함께 확인되었습니다.",
    "진행 중": "예산·절차·사업 공고 등 진행 근거는 있으나 최종 성과가 아직 확인되지 않았습니다.",
    "부분 이행": "공약의 일부는 실행됐지만 규모, 대상, 기간이 원래 약속보다 줄었거나 제한되었습니다.",
    "미이행": "공약 실행을 뒷받침하는 공식 절차나 예산 근거가 확인되지 않았습니다.",
    "판단 불가": "공약 표현이 넓거나 측정 기준이 부족해 결론을 내리기 어렵습니다.",
  };
  const riskByStatus = {
    "완료": "성과 숫자가 실제 시민 체감으로 이어졌는지 추가 확인이 필요합니다.",
    "진행 중": "절차가 진행 중이라는 사실만으로 최종 이행을 단정하지 않습니다.",
    "부분 이행": "축소된 규모가 합리적 변경인지 공약 후퇴인지 사람 검토가 필요합니다.",
    "미이행": "자료 누락 가능성이 있어 후보자 반론 자료를 열어둡니다.",
    "판단 불가": "명확한 지표가 생기기 전까지 낮은 확신도로 표시합니다.",
  };
  const score = scoreByStatus[promise.status] || 50;
  return {
    score,
    confidence: score >= 80 ? "높음" : score >= 55 ? "보통" : "낮음",
    reason: statusReason[promise.status] || "공개 기준과 근거 자료를 종합해 임시 분류했습니다.",
    evidence: ["공약 원문", "예산·조례 자료", "회의록·보도자료", "공식 통계"],
    criteria: ["구체적 목표 존재", "예산 또는 법적 절차 확인", "실제 시행 결과 확인", "공약 대비 규모 변화"],
    risk: riskByStatus[promise.status] || "추가 자료가 들어오면 판단이 바뀔 수 있습니다.",
    humanReview: promise.status === "판단 불가" || promise.status === "부분 이행" || promise.status === "미이행"
      ? "검증단 추가 확인 필요"
      : "검증단 확인 완료",
  };
}

function renderAiReview(promise) {
  const review = aiReviewFor(promise);
  return `
    <details class="ai-review">
      <summary>AI 판단 기준 자세히 보기</summary>
      <div class="ai-review-body">
        <div class="ai-score">
          <strong>${review.score}</strong>
          <span>판단 점수 · 확신도 ${review.confidence}</span>
        </div>
        <p><strong>분류 이유:</strong> ${review.reason}</p>
        <p><strong>주의할 점:</strong> ${review.risk}</p>
        <div class="ai-grid">
          <div>
            <h4>확인 기준</h4>
            <ul>${review.criteria.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h4>대조한 근거</h4>
            <ul>${review.evidence.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <p class="human-review">${review.humanReview}</p>
      </div>
    </details>
  `;
}

function renderCandidates() {
  const keyword = $("#candidateSearch").value.trim().toLowerCase();
  const topic = $("#topicFilter").value;
  const sort = $("#sortFilter").value;

  let filtered = candidates.filter((candidate) => {
    const text = `${candidate.name} ${candidate.personType} ${candidate.party} ${candidate.region} ${candidate.role} ${candidate.topics.join(" ")}`.toLowerCase();
    return (!keyword || text.includes(keyword)) && (topic === "all" || candidate.topics.includes(topic));
  });

  filtered = filtered.sort((a, b) => {
    if (sort === "region") return a.region.localeCompare(b.region, "ko");
    if (sort === "pledges") return b.pledges - a.pledges;
    if (sort === "progress") return b.progress - a.progress;
    return a.name.localeCompare(b.name, "ko");
  });

  $("#candidateResults").innerHTML = filtered.length ? filtered.map((candidate) => `
    <article class="candidate-result party-surface" style="--party-color: ${candidate.partyColor}">
      <header>
        <div>
          <p class="promise-meta">${candidate.region} · ${candidate.role}</p>
          <h3>${candidate.name} ${candidate.personType}</h3>
          <p class="candidate-party">${candidate.party}</p>
        </div>
        <span class="person-type">${candidate.personType}</span>
      </header>
      <p>${candidate.summary}</p>
      <div class="meta-line">${candidate.topics.map((topicName) => `<span>${topicName}</span>`).join("")}</div>
      <div class="mini-stats">
        <span>공약 ${candidate.pledges}개</span>
        <span>이행률 ${candidate.progress}%</span>
        <span>판단 불가 ${candidate.unclear}개</span>
      </div>
      <button class="button primary choose-candidate" type="button" data-id="${candidate.id}">이 인물 보기</button>
    </article>
  `).join("") : `<p class="neutral-alert">검색 조건에 맞는 인물이 없습니다. 지역이나 분야를 넓혀보세요.</p>`;

  $$(".choose-candidate").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCandidate = candidates.find((candidate) => candidate.id === button.dataset.id) || candidates[0];
      renderDashboard();
      $("#dashboard").scrollIntoView({ behavior: "smooth" });
    });
  });
  syncPartyMode();
}

function renderPolicies() {
  const keyword = $("#policySearch").value.trim().toLowerCase();
  const topic = $("#policyTopicFilter").value;
  const filtered = allPolicies().filter((item) => {
    const text = `${item.title} ${item.topic} ${item.goal} ${item.method} ${item.candidate.name}`.toLowerCase();
    return (!keyword || text.includes(keyword)) && (topic === "all" || item.topic === topic);
  });

  $("#policyResults").innerHTML = filtered.length ? filtered.map((item) => `
    <article class="policy-card party-surface" style="--party-color: ${item.candidate.partyColor}">
      <header>
        <div>
          <p class="promise-meta">${item.topic} · ${item.candidate.name} ${item.candidate.personType}</p>
          <h3>${item.title}</h3>
        </div>
        <span class="status-badge" data-status="${item.status}">${item.status}</span>
      </header>
      <p><strong>목표:</strong> ${item.goal}</p>
      <p><strong>검증 기준:</strong> ${item.check}</p>
      <button class="button primary choose-policy-candidate" type="button" data-id="${item.candidate.id}">대시보드에서 보기</button>
    </article>
  `).join("") : `<p class="neutral-alert">검색 조건에 맞는 정책이 없습니다.</p>`;

  $$(".choose-policy-candidate").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCandidate = candidates.find((candidate) => candidate.id === button.dataset.id) || candidates[0];
      renderDashboard();
      $("#dashboard").scrollIntoView({ behavior: "smooth" });
    });
  });
  syncPartyMode();
}

function renderDashboard() {
  const counts = statusCounts(selectedCandidate.details);
  $("#selectedCandidateName").textContent = `${selectedCandidate.name} ${selectedCandidate.personType}`;
  $("#selectedCandidateParty").textContent = selectedCandidate.party;
  $(".candidate-summary").style.setProperty("--party-color", selectedCandidate.partyColor);
  $("#statusGrid").innerHTML = `
    <div><dt>총 공약</dt><dd>${selectedCandidate.pledges}</dd></div>
    <div><dt>상세 보기</dt><dd>${selectedCandidate.details.length}</dd></div>
    <div><dt>완료</dt><dd>${counts["완료"]}</dd></div>
    <div><dt>진행 중</dt><dd>${counts["진행 중"]}</dd></div>
    <div><dt>부분 이행</dt><dd>${counts["부분 이행"]}</dd></div>
    <div><dt>판단 불가</dt><dd>${counts["판단 불가"]}</dd></div>
  `;
  $("#topicBars").innerHTML = Object.entries(selectedCandidate.topicProgress).map(([topic, value]) => `
    <div><span>${topic}</span><meter value="${value}" min="0" max="100"></meter><b>${value}%</b></div>
  `).join("");
  $("#detailIntro").textContent = `${selectedCandidate.name} ${selectedCandidate.personType}의 주요 공약 ${selectedCandidate.details.length}개를 목표, 실행 방식, 검증 기준으로 정리했습니다.`;
  renderPromises(activeStatusFilter);
  renderDetails();
  syncPartyMode();
}

function renderPromises(filter = "all") {
  const filtered = filter === "all" ? selectedCandidate.details : selectedCandidate.details.filter((promise) => promise.status === filter);
  $("#promiseList").innerHTML = filtered.length ? filtered.map((promise) => `
    <article class="promise-card">
      <header>
        <div><p class="promise-meta">${promise.topic} · ${selectedCandidate.name}</p><h3>${promise.title}</h3></div>
        <span class="status-badge" data-status="${promise.status}">${promise.status}</span>
      </header>
      <p class="reason"><strong>핵심 이유:</strong> ${promise.check}</p>
      <p class="reason"><strong>한 줄 요약:</strong> ${promise.goal}</p>
      <div class="evidence-tags"><span>공약집</span><span>예산안</span><span>회의록</span></div>
      ${renderAiReview(promise)}
    </article>
  `).join("") : `<p class="neutral-alert">해당 상태의 공약이 없습니다.</p>`;
}

function renderDetails() {
  $("#detailList").innerHTML = selectedCandidate.details.map((promise) => `
    <article class="detail-card">
      <header>
        <div><p class="promise-meta">${promise.topic}</p><h3>${promise.title}</h3></div>
        <span class="status-badge" data-status="${promise.status}">${promise.status}</span>
      </header>
      <dl>
        <div><dt>목표</dt><dd>${promise.goal}</dd></div>
        <div><dt>실행 방식</dt><dd>${promise.method}</dd></div>
        <div><dt>검증 기준</dt><dd>${promise.check}</dd></div>
      </dl>
      ${renderAiReview(promise)}
    </article>
  `).join("");
}

function renderNews() {
  const items = newsItems.filter((item) => item.group === activeNewsGroup);
  $("#newsList").innerHTML = items.map((item) => `
    <article class="news-card">
      <header>
        <div><p class="promise-meta">${item.source} · ${item.date}</p><h3>${activeNewsGroup === "popular" ? `${item.rank}. ` : ""}${item.title}</h3></div>
        <span class="party-neutral">${activeNewsGroup === "popular" ? "인기" : "검증 참고"}</span>
      </header>
      <p>${item.summary}</p>
      <p><strong>확인 관점:</strong> ${item.angle}</p>
      <a class="link-button" href="${item.url}" target="_blank" rel="noopener">원문 또는 목록 보기</a>
    </article>
  `).join("");
}

function renderDebate() {
  $("#debateSummary").innerHTML = debateData[$("#debateSelect").value].map((card) => `
    <article class="debate-card">
      <p class="promise-meta">${card.title}</p>
      <h3>${card.candidate} 후보 발언 요약</h3>
      <ul>${card.claims.map((claim) => `<li>${claim}</li>`).join("")}</ul>
      <p><strong>근거 확인:</strong> ${card.evidence}</p>
      <p><strong>검증 포인트:</strong> ${card.check}</p>
    </article>
  `).join("");
}

function syncPartyMode() {
  const show = $("#partyColorToggle").checked;
  document.body.classList.toggle("show-party-color", show);
  $("#partyStatusBadge").textContent = show ? "정당색 표시 중" : "정당색 미사용";
}

$$(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".tab").forEach((tab) => tab.classList.remove("is-active"));
    $$(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
    button.classList.add("is-active");
    $(`#tab-${button.dataset.tab}`).classList.add("is-active");
  });
});

$$(".dash-tab").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".dash-tab").forEach((tab) => tab.classList.remove("is-active"));
    $$(".dash-panel").forEach((panel) => panel.classList.remove("is-active"));
    button.classList.add("is-active");
    $(`#dash-${button.dataset.dash}`).classList.add("is-active");
  });
});

[$("#candidateSearch"), $("#topicFilter"), $("#sortFilter")].forEach((control) => control.addEventListener("input", renderCandidates));
[$("#policySearch"), $("#policyTopicFilter")].forEach((control) => control.addEventListener("input", renderPolicies));
$("#debateSelect").addEventListener("input", renderDebate);
$("#partyColorToggle").addEventListener("change", syncPartyMode);

$$(".news-filter").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".news-filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeNewsGroup = button.dataset.news;
    renderNews();
  });
});

$$(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    $$(".chip").forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeStatusFilter = chip.dataset.filter;
    renderPromises(activeStatusFilter);
  });
});

$("#reportButton").addEventListener("click", () => {
  $("#reportMessage").textContent = "제보가 접수되었습니다. 관리자 검토 후 근거 목록에 반영됩니다.";
});

renderCandidates();
renderPolicies();
renderNews();
renderDebate();
renderDashboard();
