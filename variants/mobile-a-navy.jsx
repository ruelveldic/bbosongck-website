// Mobile Variant A — Trust Navy & Gold (어르신 가독성 강화 + safe-area 대응)
// Font scale: body 17px+ / labels 14-15px / headlines 30-40px
// Layout: top inset (env safe-area-inset-top) + bottom inset for home indicator

const MobileANavy = () => {
  const [tab, setTab] = React.useState('home');
  const [submitted, setSubmitted] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [generatedMessage, setGeneratedMessage] = React.useState('');
  const [copied, setCopied] = React.useState(false);
  const [copiedField, setCopiedField] = React.useState(null);

  const copyToClipboard = (key, text) => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(key);
        setTimeout(() => setCopiedField(null), 2000);
      });
    } catch (e) {}
  };

  const toggleItem = (item) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]
    );
  };

  const handleQuoteSubmit = (formData) => {
    const lines = [
      '[뽀송코킹 견적 문의]',
      formData.address ? `현장 주소: ${formData.address}` : '',
      formData.detail ? `문제/내용:\n${formData.detail}` : '',
      formData.buildingType ? `건물 유형: ${formData.buildingType}` : '',
      formData.items && formData.items.length > 0 ? `의뢰 항목: ${formData.items.join(', ')}` : '',
      formData.visitDate ? `희망 방문일: ${formData.visitDate}` : '',
      formData.phone ? `연락처: ${formData.phone}` : '',
    ].filter(Boolean);
    setGeneratedMessage(lines.join('\n'));
    setSubmitted(true);
  };

  const handleKakao = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {}
    window.open(`http://pf.kakao.com/${window.KAKAO_CHANNEL_ID}/chat`, '_blank');
  };

  const handleSMS = () => {
    try { navigator.clipboard.writeText(generatedMessage); } catch (e) {}
    const body = encodeURIComponent(generatedMessage);
    window.location.href = `sms:01080180701?body=${body}`;
  };

  const resetQuote = () => {
    setSubmitted(false);
    setSelectedItems([]);
    setGeneratedMessage('');
    setCopied(false);
  };

  const C = {
    navy: '#0F2A44', navyDeep: '#091B2D', navyMid: '#1C3D5C',
    gold: '#F5A524', goldSoft: '#FFD891',
    cream: '#F7F3EC', paper: '#FBFAF6',
    line: '#e6e1d6', muted: '#5d564b',  // 어르신 가독성: muted 더 진하게
    text: '#1f1a13',
  };

  // safe-area: 상단 노치 영역 + 하단 홈 인디케이터
  const SAFE_TOP = 'max(env(safe-area-inset-top, 0px), 0px)';
  const SAFE_BOTTOM = 'max(env(safe-area-inset-bottom, 0px), 0px)';

  const services = [
    { ko: '외벽 실리콘 코킹', desc: '아파트·빌딩 외벽 재시공', img: 'assets/apartment.png' },
    { ko: '건물 누수 보수', desc: '원인 진단부터 정밀 보수', img: 'assets/crack.png' },
    { ko: '창호·유리 코킹', desc: '단열·방음 성능 회복', img: 'assets/glass.png' },
    { ko: '판넬·접합부 코킹', desc: '판넬 접합부 누수 차단', img: 'assets/panel.png' },
    { ko: '외벽 발수제', desc: '석재·콘크리트 표면 코팅', img: 'assets/repellent.png' },
    { ko: '에어컨 배관 코킹', desc: '에어컨 배관 누수 처리', img: 'assets/ac.png' },
  ];

  const portfolio = [
    { tag: '아파트', loc: '광명 H아파트', img: 'assets/apartment.png', year: '2024' },
    { tag: '오피스', loc: '강남 S빌딩', img: 'assets/glass.png', year: '2024' },
    { tag: '주상복합', loc: '송도 C단지', img: 'assets/repellent.png', year: '2023' },
    { tag: '상가', loc: '부천 R상가', img: 'assets/panel.png', year: '2024' },
  ];

  const HomePage = () => (
    <div>
      {/* HERO */}
      <div style={{ background: C.navyDeep, color: '#fff', padding: '32px 22px 36px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', background: 'rgba(245,165,36,0.14)', border: `1px solid ${C.gold}`, borderRadius: 100, color: C.goldSoft, fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, background: C.gold, borderRadius: '50%' }} />
            25년 경력 · 시공 1,200건+
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, margin: '0 0 18px', letterSpacing: '-0.03em' }}>
            건물의 한 줄 실리콘이<br />
            <span style={{ color: C.gold }}>10년의 차이</span>를<br/>만듭니다.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#d8dfe8', margin: '0 0 24px' }}>
            아파트·빌딩·상가 외벽 실링 전문.<br/>견적·자재·시공·A/S 모두 자체 인력으로 진행합니다.
          </p>
          <button onClick={() => setTab('quote')} style={{ width: '100%', padding: '20px', background: C.gold, color: C.navyDeep, fontSize: 18, fontWeight: 800, border: 'none', borderRadius: 8, cursor: 'pointer', letterSpacing: '-0.01em' }}>
            무료 현장 실사 신청  →
          </button>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div style={{ height: 220, backgroundImage: `url('assets/apartment.png')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,27,45,0.15) 0%, rgba(9,27,45,0) 50%, rgba(9,27,45,0.75) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 14, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
          <span>실제 시공 현장</span>
          <span>경기 광명시</span>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: '#fff', padding: '28px 18px', borderBottom: `1px solid ${C.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: C.line }}>
          {[
            { n: '25년+', l: '경력' },
            { n: '1,200건+', l: '누적 시공' },
            { n: '2년', l: '무상 A/S' },
            { n: '100%', l: '직영 시공' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', padding: '18px 12px', textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: C.navyDeep, letterSpacing: '-0.02em' }}>{s.n}</div>
              <div style={{ fontSize: 14, color: C.muted, marginTop: 4, fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ background: C.paper, padding: '36px 20px' }}>
        <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 10 }}>— 시공 분야</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: C.navyDeep, margin: '0 0 22px', letterSpacing: '-0.03em', lineHeight: 1.25 }}>
          한 분야만 깊게,<br/>25년 외벽 실링.
        </h2>
        <div style={{ display: 'grid', gap: 12 }}>
          {services.map((s, i) => (
            <div key={i} onClick={() => setTab('services')} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, padding: 16, display: 'flex', gap: 14, alignItems: 'center', cursor: 'pointer', minHeight: 88 }}>
              <div style={{ width: 72, height: 72, flexShrink: 0, borderRadius: 6, backgroundImage: `url('${s.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: C.navyDeep, marginBottom: 4, letterSpacing: '-0.02em' }}>{s.ko}</div>
                <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
              <span style={{ color: C.gold, fontSize: 22, fontWeight: 700 }}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div style={{ background: C.navyDeep, color: '#fff', padding: '36px 20px' }}>
        <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 10 }}>— 시공 과정</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 22px', letterSpacing: '-0.03em', lineHeight: 1.25 }}>
          상담부터 A/S까지<br/>4단계로 명확하게.
        </h2>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { n: '01', t: '상담 / 접수', d: '카톡·전화·견적폼으로 빠르게 접수해 드립니다.' },
            { n: '02', t: '현장 실사', d: '일정 확인 후 무료 방문 견적.' },
            { n: '03', t: '시공', d: '자체 인력이 직접 시공합니다.' },
            { n: '04', t: 'A/S', d: '2년 무상 보증, 즉시 재방문.' },
          ].map((p, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '18px 16px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 16, color: C.gold, fontWeight: 800, paddingTop: 2 }}>{p.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 5 }}>{p.t}</div>
                <div style={{ fontSize: 15, color: '#d8dfe8', lineHeight: 1.6 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PORTFOLIO */}
      <div style={{ background: C.cream, padding: '36px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <div>
            <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 10 }}>— 시공 사례</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: C.navyDeep, margin: 0, letterSpacing: '-0.03em' }}>최근 사례</h2>
          </div>
          <button onClick={() => setTab('works')} style={{ fontSize: 15, color: C.navyDeep, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, padding: '8px 4px' }}>전체 →</button>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          {portfolio.map((c, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: 180, backgroundImage: `url('${c.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,27,45,0.2) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, padding: '5px 11px', background: C.gold, color: C.navyDeep, fontSize: 13, fontWeight: 800, borderRadius: 4 }}>{c.tag}</div>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: C.navyDeep, marginBottom: 4, letterSpacing: '-0.02em' }}>{c.loc}</div>
                <div style={{ fontSize: 14, color: C.muted, fontWeight: 600 }}>{c.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA QUOTE TEASER */}
      <div style={{ background: C.gold, padding: '36px 22px', textAlign: 'center' }}>
        <h3 style={{ fontSize: 26, fontWeight: 800, color: C.navyDeep, margin: '0 0 12px', letterSpacing: '-0.03em', lineHeight: 1.25 }}>지금 견적 받아보세요</h3>
        <p style={{ fontSize: 16, color: C.navyDeep, opacity: 0.85, margin: '0 0 22px', lineHeight: 1.6, fontWeight: 500 }}>주소·문제 사항만 알려주시면<br/>영업시간 내 회신드립니다.</p>
        <button onClick={() => setTab('quote')} style={{ width: '100%', padding: '20px', background: C.navyDeep, color: '#fff', fontSize: 18, fontWeight: 800, border: 'none', borderRadius: 8, cursor: 'pointer', letterSpacing: '-0.01em' }}>
          견적 요청하기 →
        </button>
      </div>

      <div style={{ height: 130 }} /> {/* spacer for sticky CTA + tabbar */}
    </div>
  );

  const ServicesPage = () => (
    <div style={{ background: C.paper, minHeight: '100%' }}>
      <div style={{ background: C.navyDeep, color: '#fff', padding: '28px 22px 24px' }}>
        <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 8 }}>— 시공 분야</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.03em' }}>전체 서비스</h1>
        <p style={{ fontSize: 16, color: '#d8dfe8', margin: '10px 0 0', lineHeight: 1.6 }}>외벽 실링 한 분야 25년 전문</p>
      </div>
      <div style={{ padding: '20px', display: 'grid', gap: 16 }}>
        {services.map((s, i) => (
          <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ height: 180, backgroundImage: `url('${s.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.navyDeep, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.ko}</div>
              <div style={{ fontSize: 16, color: C.muted, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 130 }} />
    </div>
  );

  const WorksPage = () => (
    <div style={{ background: C.cream, minHeight: '100%' }}>
      <div style={{ background: C.navyDeep, color: '#fff', padding: '28px 22px 24px' }}>
        <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 8 }}>— 시공 사례</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.03em' }}>시공 사례</h1>
        <p style={{ fontSize: 16, color: '#d8dfe8', margin: '10px 0 0' }}>누적 1,200건 이상</p>
      </div>
      <div style={{ padding: '20px', display: 'grid', gap: 16 }}>
        {portfolio.concat(portfolio).map((c, i) => (
          <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ height: 220, backgroundImage: `url('${c.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 14, left: 14, padding: '6px 12px', background: C.gold, color: C.navyDeep, fontSize: 14, fontWeight: 800, borderRadius: 4 }}>{c.tag}</div>
              <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 14, color: '#fff', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{c.year}</div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.navyDeep, letterSpacing: '-0.02em' }}>{c.loc}</div>
            </div>
          </div>
        ))}
        <a href="https://m.blog.naver.com/goomiz?tab=1" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '18px 0', marginTop: 8, background: '#fff', border: `1.5px solid ${C.navyDeep}`, color: C.navyDeep, fontSize: 16, fontWeight: 800, borderRadius: 10, textAlign: 'center', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          블로그에서 더 보기 →
        </a>
      </div>
      <div style={{ height: 130 }} />
    </div>
  );

  const ContactPage = () => (
    <div style={{ background: C.paper, minHeight: '100%' }}>
      <div style={{ background: C.navyDeep, color: '#fff', padding: '28px 22px 24px' }}>
        <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 8 }}>— 연락처</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.03em' }}>연락처 / 위치</h1>
      </div>
      <div style={{ padding: 22, display: 'grid', gap: 14 }}>
        {[
          { k: '대표', v: '이용우' },
          { k: '사업자등록번호', v: '612-28-77927', copy: true },
          { k: '전화', v: '010-8018-0701', cta: 'tel:01080180701', copy: true },
          { k: '카카오톡', v: '@뽀송코킹', cta: `http://pf.kakao.com/${window.KAKAO_CHANNEL_ID}/chat`, ctaTarget: '_blank' },
          { k: '이메일', v: 'lywgogo2@naver.com', cta: 'mailto:lywgogo2@naver.com', copy: true },
          { k: '소재지', v: '경기 광명시 하안로 320', copy: true },
          { k: '운영시간', v: '월~토 09:00–19:00' },
          { k: '시공권역', v: '서울 · 경기 · 인천' },
        ].map((it, i) => (
          <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, padding: '16px 18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, color: C.muted, letterSpacing: '0.1em', fontWeight: 700, marginBottom: 6 }}>{it.k}</div>
                {it.cta ? (
                  <a href={it.cta} target={it.ctaTarget} rel={it.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined} style={{ fontSize: 18, fontWeight: 700, color: C.navyDeep, whiteSpace: 'pre-line', lineHeight: 1.5, textDecoration: 'underline', textDecorationColor: C.gold, textDecorationThickness: 2, textUnderlineOffset: 4 }}>
                    {it.v}
                  </a>
                ) : (
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.navyDeep, whiteSpace: 'pre-line', lineHeight: 1.5 }}>{it.v}</div>
                )}
              </div>
              {it.copy && (
                <button onClick={() => copyToClipboard(it.k, it.v)} style={{ flexShrink: 0, padding: '8px 12px', background: copiedField === it.k ? C.gold : 'transparent', color: copiedField === it.k ? C.navyDeep : C.navyDeep, fontSize: 13, fontWeight: 700, border: `1.5px solid ${copiedField === it.k ? C.gold : C.line}`, borderRadius: 6, cursor: 'pointer', whiteSpace: 'nowrap', minHeight: 36 }}>
                  {copiedField === it.k ? '✓ 복사됨' : '복사'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 130 }} />
    </div>
  );

  // 하단 탭바 (어르신 가독성: 라벨 13px+, 아이콘 22px, 터치 영역 큼직)
  const TabBar = () => {
    const tabs = [
      { id: 'home', label: '홈', icon: '⌂' },
      { id: 'services', label: '서비스', icon: '◐' },
      { id: 'works', label: '사례', icon: '▦' },
      { id: 'quote', label: '견적', icon: '✎' },
      { id: 'contact', label: '연락', icon: '☏' },
    ];
    return (
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: `1px solid ${C.line}`, paddingTop: 8, paddingBottom: `calc(${SAFE_BOTTOM} + 12px)`, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', zIndex: 30, boxShadow: '0 -4px 16px rgba(9,27,45,0.06)' }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ background: 'none', border: 'none', padding: '8px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', color: tab === t.id ? C.gold : C.muted, minHeight: 56 }}>
            <div style={{ fontSize: 22, lineHeight: 1, fontWeight: 700 }}>{t.icon}</div>
            <div style={{ fontSize: 13, fontWeight: tab === t.id ? 800 : 600 }}>{t.label}</div>
          </button>
        ))}
      </div>
    );
  };

  // 하단 고정 CTA — 탭바 위에 떠있음, safe-area 반영, 스크롤 시 따라옴 (fixed)
  const StickyCTA = () => (
    <div style={{ position: 'fixed', bottom: `calc(${SAFE_BOTTOM} + 100px)`, left: 12, right: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, zIndex: 25 }}>
      <a href="tel:01080180701" style={{ padding: '14px 0', background: C.navyDeep, color: '#fff', borderRadius: 100, fontSize: 14, fontWeight: 800, textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, boxShadow: '0 6px 18px rgba(9,27,45,0.35)' }}>
        <span style={{ fontSize: 16 }}>📞</span> 전화
      </a>
      <a href="sms:01080180701" style={{ padding: '14px 0', background: '#fff', color: C.navyDeep, borderRadius: 100, fontSize: 14, fontWeight: 800, textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, border: `1.5px solid ${C.navyDeep}`, boxShadow: '0 6px 18px rgba(9,27,45,0.15)' }}>
        <span style={{ fontSize: 16 }}>✉️</span> 문자
      </a>
      <a href={`http://pf.kakao.com/${window.KAKAO_CHANNEL_ID}/chat`} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 0', background: '#FEE500', color: '#3C1E1E', borderRadius: 100, fontSize: 14, fontWeight: 800, textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, textDecoration: 'none', boxShadow: '0 6px 18px rgba(254,229,0,0.45)' }}>
        <span style={{ fontSize: 16 }}>💬</span> 카톡
      </a>
    </div>
  );

  // 상단 브랜드 바 — 노치 영역 위에 padding-top 으로 안전 영역 확보
  const TopBar = () => (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30, background: C.navyDeep, color: '#fff', paddingLeft: 18, paddingRight: 18, paddingTop: `calc(${SAFE_TOP} + 12px)`, paddingBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', minHeight: 56, boxShadow: '0 2px 12px rgba(9,27,45,0.18)' }}>
      <div onClick={() => setTab('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <div style={{ width: 30, height: 30, background: C.gold, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navyDeep, fontWeight: 800, fontSize: 15 }}>BS</div>
        <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>뽀송코킹</div>
      </div>
      <a href="tel:01080180701" style={{ fontSize: 14, color: C.gold, fontWeight: 700, padding: '6px 12px', border: `1px solid ${C.gold}`, borderRadius: 100, textDecoration: 'none' }}>📞 전화</a>
    </div>
  );

  const pages = {
    home: <HomePage />,
    services: <ServicesPage />,
    works: <WorksPage />,
    quote: (
      <MobileQuoteSection
        C={C}
        submitted={submitted}
        generatedMessage={generatedMessage}
        copied={copied}
        selectedItems={selectedItems}
        toggleItem={toggleItem}
        handleQuoteSubmit={handleQuoteSubmit}
        handleKakao={handleKakao}
        handleSMS={handleSMS}
        resetQuote={resetQuote}
        goHome={() => { resetQuote(); setTab('home'); }}
      />
    ),
    contact: <ContactPage />,
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: C.paper, fontFamily: "'Pretendard', sans-serif", color: C.text, letterSpacing: '-0.005em', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <div style={{ flex: 1, overflow: 'auto', position: 'relative', paddingTop: `calc(${SAFE_TOP} + 56px)` }}>
        {pages[tab]}
      </div>
      {tab !== 'quote' && <StickyCTA />}
      <TabBar />
    </div>
  );
};

// 어르신 가독성: label 16px / input 17px / 충분한 padding
const Field = ({ label, required, hint, children }) => (
  <div>
    <label style={{ display: 'block', fontSize: 16, fontWeight: 700, color: '#091B2D', marginBottom: 8, letterSpacing: '-0.01em' }}>
      {label} {required && <span style={{ color: '#F5A524' }}>*</span>}
    </label>
    {children}
    {hint && <div style={{ fontSize: 13, color: '#5d564b', marginTop: 6, lineHeight: 1.5 }}>{hint}</div>}
  </div>
);

const inputStyle = (C) => ({
  width: '100%', padding: '16px 16px', fontSize: 17, fontFamily: 'inherit',
  border: `1.5px solid ${C.line}`, borderRadius: 8, background: '#fff', color: C.navyDeep,
  outline: 'none', boxSizing: 'border-box', minHeight: 56,
});

// 견적 페이지 — 외부 컴포넌트로 분리해서 부모 리렌더 시 unmount 방지
const MobileQuoteSection = ({ C, submitted, generatedMessage, copied, selectedItems, toggleItem, handleQuoteSubmit, handleKakao, handleSMS, resetQuote, goHome }) => {
  if (submitted) {
    return (
      <div style={{ background: C.paper, minHeight: '100%', padding: '32px 22px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ width: 64, height: 64, margin: '0 auto 18px', borderRadius: '50%', background: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 800, color: C.navyDeep }}>✓</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.navyDeep, margin: '0 0 10px', letterSpacing: '-0.03em' }}>견적 내용이 정리되었습니다</h2>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.6, margin: 0 }}>
            아래 두 가지 방법 중 편하신 방법으로<br/>전송해주세요. 사진은 채팅창에 직접 첨부해주세요.
          </p>
        </div>
        <div style={{ background: '#fff', border: `1px solid ${C.line}`, padding: 18, borderRadius: 10, marginBottom: 20, whiteSpace: 'pre-line', fontSize: 15, color: C.navyDeep, lineHeight: 1.7 }}>
          {generatedMessage}
        </div>
        <div style={{ display: 'grid', gap: 10, marginBottom: 16 }}>
          <button onClick={handleKakao} style={{ padding: '18px 0', background: '#FEE500', color: '#3C1E1E', fontSize: 17, fontWeight: 800, border: 'none', borderRadius: 100, cursor: 'pointer', boxShadow: '0 4px 14px rgba(254,229,0,0.4)' }}>
            💬 카카오톡으로 보내기
          </button>
          <button onClick={handleSMS} style={{ padding: '18px 0', background: C.navyDeep, color: '#fff', fontSize: 17, fontWeight: 800, border: 'none', borderRadius: 100, cursor: 'pointer', boxShadow: '0 4px 14px rgba(9,27,45,0.3)' }}>
            ✉️ 문자로 보내기
          </button>
        </div>
        {copied && (
          <div style={{ textAlign: 'center', fontSize: 14, color: C.navyDeep, fontWeight: 700, marginBottom: 12, padding: '10px 12px', background: '#FFF3D6', border: `1px solid ${C.gold}`, borderRadius: 8 }}>
            ✓ 내용이 복사되었습니다. 채팅창에 붙여넣어 주세요.
          </div>
        )}
        <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, textAlign: 'center', margin: '0 0 24px' }}>
          카카오톡 — 내용 자동 복사 후 채널 채팅창 열림<br/>
          문자 — 메시지 앱에 내용 자동 입력
        </p>
        <button onClick={resetQuote} style={{ width: '100%', padding: '14px 0', background: 'transparent', color: C.muted, fontSize: 14, border: `1px solid ${C.line}`, borderRadius: 8, cursor: 'pointer', marginBottom: 12 }}>
          ← 다시 작성하기
        </button>
        <button onClick={goHome} style={{ width: '100%', padding: '14px 0', background: 'transparent', color: C.muted, fontSize: 14, border: `1px solid ${C.line}`, borderRadius: 8, cursor: 'pointer' }}>
          홈으로
        </button>
        <div style={{ height: 130 }} />
      </div>
    );
  }
  return (
    <div style={{ background: C.paper, minHeight: '100%' }}>
      <div style={{ background: C.navyDeep, color: '#fff', padding: '28px 22px 24px' }}>
        <div style={{ fontSize: 14, color: C.gold, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 8 }}>— 견적 요청</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.03em' }}>견적 요청</h1>
        <p style={{ fontSize: 15, color: '#d8dfe8', margin: '10px 0 0', lineHeight: 1.6 }}>접수하시면 카톡·문자로<br/>영업시간 내 회신드립니다.</p>
      </div>
      <MobileQuoteForm
        C={C}
        selectedItems={selectedItems}
        onToggleItem={toggleItem}
        onSubmit={handleQuoteSubmit}
      />
      <div style={{ height: 130 }} />
    </div>
  );
};

// 견적 폼 — 외부 컴포넌트로 분리해서 부모 리렌더에 영향 없도록 (controlled)
const MobileQuoteForm = ({ C, selectedItems, onToggleItem, onSubmit }) => {
  const [formData, setFormData] = React.useState({
    address: '', detail: '', buildingType: '', visitDate: '', phone: ''
  });
  const update = (k) => (e) => setFormData(p => ({ ...p, [k]: e.target.value }));
  const handle = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, items: selectedItems });
  };

  return (
    <form onSubmit={handle} style={{ padding: 22, display: 'grid', gap: 22 }}>
      <Field label="작업 주소지" required>
        <input value={formData.address} onChange={update('address')} required placeholder="예) 경기 광명시 ..." style={inputStyle(C)} />
      </Field>
      <Field label="문제 / 작업 내용" required>
        <textarea value={formData.detail} onChange={update('detail')} required rows={5} placeholder="예) 베란다 외벽 실리콘이 노후되어 누수가 의심됩니다." style={{ ...inputStyle(C), resize: 'vertical' }} />
      </Field>
      <Field label="건물 유형" required>
        <select value={formData.buildingType} onChange={update('buildingType')} required style={inputStyle(C)}>
          <option value="" disabled>선택해주세요</option>
          <option>아파트</option>
          <option>빌라 / 다세대</option>
          <option>오피스 / 빌딩</option>
          <option>프라자 / 상가</option>
          <option>주택</option>
          <option>기타</option>
        </select>
      </Field>
      <Field label="의뢰 항목" hint="* 복수 선택 가능">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['외벽 코킹', '누수 보수', '창호 실링', '발수제', '판넬', '기타'].map((t) => {
            const sel = selectedItems.includes(t);
            return (
              <button key={t} type="button" onClick={() => onToggleItem(t)} style={{
                padding: '12px 18px',
                background: sel ? C.navyDeep : '#fff',
                border: `1.5px solid ${sel ? C.navyDeep : C.line}`,
                color: sel ? '#fff' : C.navyDeep,
                fontSize: 15,
                fontWeight: sel ? 800 : 600,
                borderRadius: 100,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                minHeight: 48,
              }}>{t}</button>
            );
          })}
        </div>
      </Field>
      <Field label="희망 방문일" hint="* 희망사항이며, 일정 협의 후 확정됩니다.">
        <input value={formData.visitDate} onChange={update('visitDate')} type="date" style={inputStyle(C)} />
      </Field>
      <Field label="연락처" required>
        <input value={formData.phone} onChange={update('phone')} required type="tel" placeholder="010-0000-0000" style={inputStyle(C)} />
      </Field>
      <button type="submit" style={{ padding: '20px', background: C.gold, color: C.navyDeep, fontSize: 18, fontWeight: 800, border: 'none', borderRadius: 8, cursor: 'pointer', letterSpacing: '-0.01em' }}>
        견적 요청 보내기 →
      </button>
      <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, padding: '14px 16px', background: '#fff', borderRadius: 8, border: `1px solid ${C.line}`, textAlign: 'center' }}>
        📷 사진은 카톡 / 문자 채팅창에서 직접 첨부해주세요.<br/>
        또는 <a href={`http://pf.kakao.com/${window.KAKAO_CHANNEL_ID}/chat`} target="_blank" rel="noopener noreferrer" style={{ color: C.navyDeep, fontWeight: 800, textDecoration: 'none' }}>카카오톡 채널 @뽀송코킹</a>으로 바로 문의 주셔도 됩니다.
      </div>
    </form>
  );
};

window.MobileANavy = MobileANavy;
