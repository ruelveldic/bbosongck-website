// Variant A: Trust Navy — 정통 기업형, 깊은 네이비 + 골든 옐로우 액센트
const VariantANavy = () => {
  const [activeService, setActiveService] = React.useState(0);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const C = {
    navy: '#0F2A44', navyDeep: '#091B2D', navyMid: '#1C3D5C',
    gold: '#F5A524', goldSoft: '#FFD891',
    cream: '#F7F3EC', paper: '#FBFAF6',
    line: 'rgba(255,255,255,0.12)', muted: '#94A3B8',
  };

  const services = [
    { ko: '외벽 실리콘 코킹', en: 'Exterior Caulking', desc: '아파트·빌딩 외벽 실리콘 재시공으로 누수와 결로를 차단합니다.', spec: '내후성 실리콘 / 보증 5년', img: 'assets/apartment.png' },
    { ko: '건물 누수 보수', en: 'Leak Repair', desc: '누수 원인 진단부터 부위별 정밀 보수까지 한 팀이 책임집니다.', spec: '현장 진단 무료', img: 'assets/crack.png' },
    { ko: '창호·유리 코킹', en: 'Window Sealing', desc: '창호 주변 실링 재시공으로 단열·방음 성능을 회복합니다.', spec: '24시간 경화', img: 'assets/glass.png' },
    { ko: '외벽 크랙 보수', en: 'Crack Repair', desc: '균열 폭에 맞춰 우레탄·실리콘으로 재밀폐 처리합니다.', spec: '구조 검토 포함', img: 'assets/crack.png' },
    { ko: '판넬·접합부 코킹', en: 'Panel Joint', desc: '샌드위치 판넬·금속 외장재 접합부 누수 차단 시공.', spec: '내한성 자재', img: 'assets/panel.png' },
    { ko: '외벽 발수제', en: 'Water Repellent', desc: '석재·콘크리트 외벽 표면 발수 코팅으로 수명을 연장합니다.', spec: '재시공 주기 7년', img: 'assets/repellent.png' },
  ];

  const process = [
    { n: '01', t: '문의·접수', d: '전화 또는 견적 폼으로 현장 정보를 접수합니다.' },
    { n: '02', t: '현장 실사', d: '담당자가 직접 방문해 부위·자재·환경을 점검합니다.' },
    { n: '03', t: '견적 제출', d: '평수·자재·공정별로 투명하게 산출된 견적을 드립니다.' },
    { n: '04', t: '시공 진행', d: '안전 장비를 갖춘 숙련 인력이 직접 시공합니다.' },
    { n: '05', t: 'A/S 보증', d: '시공 부위는 5년간 무상 A/S로 책임집니다.' },
  ];

  const portfolio = [
    { tag: '아파트', loc: '경기 광명 H아파트', area: '24개동 / 12,400세대', year: '2024', img: 'assets/apartment.png' },
    { tag: '오피스', loc: '서울 강남 S빌딩', area: '지상 18층 외벽 전면', year: '2024', img: 'assets/glass.png' },
    { tag: '주상복합', loc: '인천 송도 C단지', area: '3개동 외벽 + 창호', year: '2023', img: 'assets/repellent.png' },
    { tag: '상가', loc: '경기 부천 R상가', area: '판넬 접합부 누수 보수', year: '2024', img: 'assets/panel.png' },
    { tag: '아파트', loc: '서울 양천 P아파트', area: '균열 보수 + 발수제', year: '2023', img: 'assets/crack.png' },
    { tag: '학교', loc: '경기 안양 K초등학교', area: '본관 외벽 실링 재시공', year: '2024', img: 'assets/ac.png' },
  ];

  const reviews = [
    { who: '김OO 입주자대표', where: '광명시 H아파트', body: '오래된 외벽 실리콘 때문에 베란다 천장에 곰팡이가 심했는데, 시공 후 결로가 확실히 줄었습니다. 작업자분들도 깔끔하게 정리해 주셔서 만족합니다.', score: 5 },
    { who: '박OO 관리소장', where: '강남구 오피스', body: '견적 단계에서 부위별로 자세히 설명해 주셔서 이해하기 쉬웠습니다. 작업 전후 사진도 모두 받았고 마감 품질이 좋습니다.', score: 5 },
    { who: '이OO 건물주', where: '부천 상가', body: '판넬 사이로 비가 새서 여러 업체에 문의했는데, 원인을 가장 정확히 짚어주셨습니다. 그 후 지금까지 누수 없습니다.', score: 5 },
  ];

  const faqs = [
    { q: '시공 보증 기간은 어떻게 되나요?', a: '시공 부위에 따라 다르지만, 외벽 실리콘 코킹은 기본 5년 무상 A/S를 보장합니다. 시공 직후 발생하는 하자는 즉시 재방문 처리합니다.' },
    { q: '견적은 무료인가요?', a: '서울·경기 권역은 현장 실사와 견적 모두 무료로 진행합니다. 원거리 지역은 사전 안내드린 후 진행합니다.' },
    { q: '비 오는 날에도 시공이 가능한가요?', a: '실리콘 자재는 표면이 건조한 상태에서만 시공할 수 있어, 우천 시에는 일정 조정을 안내드립니다. 안전과 품질을 위한 부분입니다.' },
    { q: '입주 상태에서도 시공할 수 있나요?', a: '가능합니다. 입주민이 거주 중인 상태에서도 외벽 작업이 가능하며, 작업 일정·소음·먼지에 대해 사전 공지를 도와드립니다.' },
    { q: '자재는 어떤 등급을 사용하나요?', a: '국내외 인증 내후성 실리콘(KS·산업표준 등급)만 사용합니다. 견적서에 자재 브랜드와 등급을 명시해 드립니다.' },
  ];

  return (
    <div style={{ width: '100%', background: C.paper, color: C.navyDeep, fontFamily: "'Pretendard', sans-serif", letterSpacing: '-0.01em' }}>

      {/* TOP UTILITY BAR */}
      <div style={{ background: C.navyDeep, color: '#cfd8e3', fontSize: 12, padding: '8px 56px', display: 'flex', justifyContent: 'space-between', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ display: 'flex', gap: 18 }}>
          <span>평일 08:00 – 19:00 / 주말 사전협의</span>
          <span style={{ opacity: .5 }}>|</span>
          <span>서울·경기·인천 당일 현장 방문</span>
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          <span>사업자등록 OOO-OO-OOOOO</span>
          <span style={{ opacity: .5 }}>|</span>
          <span>KAKAO ID @bbosongck</span>
        </div>
      </div>

      {/* NAV */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: C.navy, color: '#fff', padding: '16px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${C.line}`, boxShadow: '0 4px 16px rgba(9,27,45,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 38, height: 38, background: C.gold, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navyDeep, fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", fontSize: 20 }}>B</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>뽀송코킹</div>
            <div style={{ fontSize: 11, color: C.goldSoft, fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>Exterior Sealing Specialists</div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 32, fontSize: 15, fontWeight: 500 }}>
          {[
            { label: '회사소개', id: 'about' },
            { label: '서비스', id: 'services' },
            { label: '시공과정', id: 'process' },
            { label: '시공사례', id: 'portfolio' },
            { label: '고객후기', id: 'testimonials' },
            { label: '문의', id: 'contact' },
          ].map((m, i) => (
            <a key={i} href={`#${m.id}`} style={{ color: '#fff', textDecoration: 'none', opacity: 0.78, cursor: 'pointer', transition: 'opacity 0.15s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.78}>{m.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="tel:01012345678" style={{ padding: '10px 18px', border: `1px solid ${C.line}`, color: '#fff', fontSize: 13, fontWeight: 500, borderRadius: 4, cursor: 'pointer', textDecoration: 'none' }}>1588-0000</a>
          <a href="#contact" style={{ padding: '10px 20px', background: C.gold, color: C.navyDeep, fontSize: 13, fontWeight: 700, borderRadius: 4, cursor: 'pointer', textDecoration: 'none' }}>무료 견적 →</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" style={{ background: `linear-gradient(180deg, ${C.navy} 0%, ${C.navyDeep} 100%)`, color: '#fff', padding: '80px 56px 120px', position: 'relative', overflow: 'hidden', scrollMarginTop: 90 }}>
        {/* decorative grid */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: 'rgba(245,165,36,0.12)', border: `1px solid ${C.gold}`, borderRadius: 100, color: C.goldSoft, fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, background: C.gold, borderRadius: '50%' }} />
              SINCE 2009 · 누적 시공 1,200건+
            </div>
            <h1 style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, margin: '0 0 28px', letterSpacing: '-0.035em' }}>
              건물의 한 줄 실리콘이<br/>
              <span style={{ color: C.gold }}>10년의 차이</span>를 만듭니다.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#cfd8e3', maxWidth: 520, margin: '0 0 40px', fontWeight: 400 }}>
              외벽 실리콘 코킹은 단열·방수·미관을 동시에 결정하는 마감입니다. 뽀송코킹은 아파트·빌딩·상가의 외벽 실링을 15년간 직접 시공해 온 전문 팀입니다.
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
              <a href="#contact" style={{ padding: '18px 28px', background: C.gold, color: C.navyDeep, fontSize: 15, fontWeight: 700, borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                무료 현장 실사 신청 <span>→</span>
              </a>
              <a href="#portfolio" style={{ padding: '18px 28px', background: 'transparent', border: `1px solid ${C.line}`, color: '#fff', fontSize: 15, fontWeight: 500, borderRadius: 4, cursor: 'pointer', textDecoration: 'none' }}>
                시공 사례 보기
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, paddingTop: 32, borderTop: `1px solid ${C.line}` }}>
              {[
                { n: '15+', l: '경력 연차' },
                { n: '1,200+', l: '누적 시공 건수' },
                { n: '5년', l: '무상 A/S 보증' },
                { n: '24h', l: '문의 응대' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: C.gold, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '-0.02em' }}>{s.n}</div>
                  <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual: real site photo */}
          <div style={{ position: 'relative', height: 560, border: `1px solid ${C.line}`, borderRadius: 8, overflow: 'hidden', backgroundImage: `url('assets/apartment.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,27,45,0.35) 0%, rgba(9,27,45,0) 30%, rgba(9,27,45,0) 60%, rgba(9,27,45,0.85) 100%)' }} />
            <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: '#fff', fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.15em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              <span>FIG.01 — APARTMENT EXTERIOR CAULKING</span>
              <span>GWANGMYEONG, KR</span>
            </div>
            {/* spec card overlay */}
            <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, background: 'rgba(9,27,45,0.85)', backdropFilter: 'blur(8px)', border: `1px solid ${C.line}`, borderRadius: 6, padding: '18px 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { k: '내후성', v: 'Class 25+' },
                { k: '인장강도', v: '2.0 MPa' },
                { k: '내수명', v: '20년+' },
              ].map((s, i) => (
                <div key={i} style={{ borderLeft: i ? `1px solid ${C.line}` : 'none', paddingLeft: i ? 16 : 0 }}>
                  <div style={{ fontSize: 10, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter',sans-serif" }}>{s.k}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk',sans-serif", marginTop: 4 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#fff', padding: '32px 56px', borderBottom: '1px solid #e6e1d6' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ fontSize: 13, color: '#7a7164', fontWeight: 500, letterSpacing: '0.05em' }}>주요 시공 협력 / 고객사</div>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', opacity: 0.7 }}>
            {['HYUNDAI E&C', 'GS BUILDING', 'DAEWOO', 'SK ECO', 'POSCO', 'LOTTE C&C'].map((b, i) => (
              <div key={i} style={{ fontSize: 14, fontWeight: 700, color: '#7a7164', letterSpacing: '0.08em', fontFamily: "'Inter', sans-serif" }}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 56px', background: C.paper, scrollMarginTop: 90 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div>
            <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 20 }}>— ABOUT US</div>
            <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: '0 0 28px', letterSpacing: '-0.03em', color: C.navyDeep }}>
              한 번 시공하면<br/>10년이 가야 합니다.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#5a5447', margin: 0 }}>
              뽀송코킹은 2009년부터 외벽 실링 한 가지 분야에 집중해 온 전문 시공팀입니다. 견적, 자재, 시공, A/S 모든 단계를 자체 인력으로 직접 처리하기 때문에, 가격은 합리적이고 책임은 명확합니다.
            </p>
            <div style={{ marginTop: 40, padding: '32px 0', borderTop: `1px solid #d8d0c0`, borderBottom: `1px solid #d8d0c0` }}>
              <div style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 22, fontStyle: 'italic', color: C.navyDeep, lineHeight: 1.6, fontWeight: 400 }}>
                “보이는 마감보다 보이지 않는 한 줄에 더 많은 시간을 씁니다.”
              </div>
              <div style={{ marginTop: 16, fontSize: 13, color: '#7a7164', fontWeight: 500 }}>이용우 — 대표 / 시공 책임</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { n: '01', t: '직접 시공', d: '하청 없이 자체 인력만 투입합니다. 책임 라인이 짧고 명확합니다.' },
              { n: '02', t: '투명한 견적', d: '평수·자재·공정별로 항목을 분리해 적습니다. 추가 청구 없습니다.' },
              { n: '03', t: '검증된 자재', d: 'KS 인증 내후성 실리콘만 사용하며, 견적서에 브랜드를 명시합니다.' },
              { n: '04', t: '5년 A/S 보증', d: '시공 부위 하자에 대해 5년간 무상 재시공으로 책임집니다.' },
            ].map((v, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e6e1d6', borderRadius: 6, padding: 28 }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600, color: C.gold, marginBottom: 14 }}>{v.n}</div>
                <div style={{ fontSize: 19, fontWeight: 700, color: C.navyDeep, marginBottom: 10, letterSpacing: '-0.02em' }}>{v.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#5a5447' }}>{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '120px 56px', background: C.navy, color: '#fff', scrollMarginTop: 90 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
          <div>
            <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 16 }}>— SERVICES 01 / 06</div>
            <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.03em' }}>
              외벽이 마주하는<br/>모든 문제를 다룹니다.
            </h2>
          </div>
          <div style={{ fontSize: 14, color: '#cfd8e3', maxWidth: 320, lineHeight: 1.7 }}>
            누수, 결로, 균열, 단열 손실 — 원인은 다르지만 외벽 실링 한 곳에서 시작되는 경우가 많습니다.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 0, border: `1px solid ${C.line}` }}>
          <div style={{ borderRight: `1px solid ${C.line}` }}>
            {services.map((s, i) => (
              <div key={i} onClick={() => setActiveService(i)}
                style={{
                  padding: '24px 28px',
                  borderBottom: i < services.length - 1 ? `1px solid ${C.line}` : 'none',
                  cursor: 'pointer',
                  background: activeService === i ? C.navyDeep : 'transparent',
                  borderLeft: activeService === i ? `3px solid ${C.gold}` : '3px solid transparent',
                  transition: 'all 0.2s',
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 11, color: C.muted, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.1em', marginBottom: 4 }}>0{i+1}</div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>{s.ko}</div>
                  </div>
                  <span style={{ color: activeService === i ? C.gold : C.muted, fontSize: 18 }}>→</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '48px 56px', background: C.navyDeep, position: 'relative' }}>
            <div style={{ fontSize: 11, color: C.gold, fontFamily: "'Inter',sans-serif", letterSpacing: '0.18em', fontWeight: 600, marginBottom: 14 }}>{services[activeService].en.toUpperCase()}</div>
            <h3 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 24px', letterSpacing: '-0.02em' }}>{services[activeService].ko}</h3>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#cfd8e3', maxWidth: 540, margin: '0 0 32px' }}>{services[activeService].desc}</p>
            <div style={{ display: 'inline-block', padding: '10px 16px', background: 'rgba(245,165,36,0.12)', border: `1px solid ${C.gold}`, borderRadius: 4, fontSize: 13, color: C.goldSoft, fontWeight: 500 }}>
              {services[activeService].spec}
            </div>
            {/* visual: real photo */}
            <div style={{ marginTop: 40, height: 280, borderRadius: 4, backgroundImage: `url('${services[activeService].img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,27,45,0) 50%, rgba(9,27,45,0.7) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, fontSize: 11, color: '#fff', fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.15em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                {services[activeService].en.toUpperCase()} — ON-SITE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: '120px 56px', background: C.paper, scrollMarginTop: 90 }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 16 }}>— PROCESS</div>
          <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.03em', color: C.navyDeep }}>
            5단계로 진행됩니다.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 32, left: '10%', right: '10%', height: 1, background: '#d8d0c0' }} />
          {process.map((p, i) => (
            <div key={i} style={{ padding: '0 16px', position: 'relative' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', border: `2px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 24, position: 'relative', zIndex: 2 }}>{p.n}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: C.navyDeep, marginBottom: 10, letterSpacing: '-0.02em' }}>{p.t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: '#5a5447' }}>{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: '120px 56px', background: '#fff', scrollMarginTop: 90 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 16 }}>— PORTFOLIO</div>
            <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.03em', color: C.navyDeep }}>
              최근 시공 사례
            </h2>
          </div>
          <a style={{ fontSize: 14, color: C.navy, fontWeight: 600, borderBottom: `2px solid ${C.gold}`, paddingBottom: 4, cursor: 'pointer' }}>전체 사례 보기 (124건) →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {portfolio.map((c, i) => (
            <div key={i} style={{ border: '1px solid #e6e1d6', borderRadius: 6, overflow: 'hidden', background: '#fff', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ height: 240, backgroundImage: `url('${c.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 20 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,27,45,0.4) 0%, rgba(9,27,45,0) 40%, rgba(9,27,45,0.65) 100%)' }} />
                <div style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
                  <div style={{ display: 'inline-block', padding: '4px 10px', background: C.gold, color: C.navyDeep, fontSize: 11, fontWeight: 700, borderRadius: 2, marginBottom: 8 }}>{c.tag}</div>
                </div>
                <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 11, color: '#fff', opacity: 0.9, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.1em', textShadow: '0 1px 4px rgba(0,0,0,0.5)', zIndex: 2 }}>{c.year}</div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.navyDeep, marginBottom: 8, letterSpacing: '-0.02em' }}>{c.loc}</div>
                <div style={{ fontSize: 14, color: '#7a7164' }}>{c.area}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="testimonials" style={{ padding: '120px 56px', background: C.cream, scrollMarginTop: 90 }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 16 }}>— TESTIMONIALS</div>
          <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.03em', color: C.navyDeep }}>
            현장에서 들은 이야기
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e6e1d6', borderRadius: 6, padding: 32 }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {Array.from({ length: r.score }).map((_, j) => (
                  <span key={j} style={{ color: C.gold, fontSize: 16 }}>★</span>
                ))}
              </div>
              <div style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 17, lineHeight: 1.75, color: C.navyDeep, marginBottom: 28, fontWeight: 400 }}>
                “{r.body}”
              </div>
              <div style={{ paddingTop: 20, borderTop: '1px solid #e6e1d6' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navyDeep }}>{r.who}</div>
                <div style={{ fontSize: 13, color: '#7a7164', marginTop: 2 }}>{r.where}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '120px 56px', background: C.paper }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 16 }}>— FAQ</div>
            <h2 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.03em', color: C.navyDeep }}>
              자주 묻는<br/>질문
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5a5447', marginTop: 24 }}>
              궁금한 점이 더 있다면<br/>편하게 전화 또는 카카오로 문의 주세요.
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid #d8d0c0' }}>
                <div onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: C.gold, fontWeight: 600 }}>Q.0{i+1}</span>
                    <span style={{ fontSize: 18, fontWeight: 600, color: C.navyDeep, letterSpacing: '-0.01em' }}>{f.q}</span>
                  </div>
                  <span style={{ fontSize: 22, color: C.navy, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 0 28px 60px', fontSize: 15, lineHeight: 1.8, color: '#5a5447' }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" style={{ padding: '120px 56px', background: C.navy, color: '#fff', scrollMarginTop: 90 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div>
            <div style={{ fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif", marginBottom: 16 }}>— GET A QUOTE</div>
            <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: '0 0 28px', letterSpacing: '-0.03em' }}>
              현장 실사부터<br/>견적까지 무료입니다.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cfd8e3', marginBottom: 40 }}>
              간단한 정보만 남겨주시면 영업일 기준 24시간 안에 담당자가 직접 연락드립니다.
            </p>
            <div style={{ display: 'grid', gap: 20 }}>
              {[
                { l: '대표 전화', v: '1588-0000', sub: '평일 08:00 – 19:00' },
                { l: '카카오톡', v: '@bbosongck', sub: '24시간 메시지 가능' },
                { l: '이메일', v: 'info@bbosongck.com', sub: '도면·사진 첨부 가능' },
                { l: '본사', v: '경기 광명시 OO로 OO', sub: '서울·경기·인천 출장' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, paddingBottom: 20, borderBottom: i < 3 ? `1px solid ${C.line}` : 'none' }}>
                  <div style={{ fontSize: 12, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter',sans-serif", paddingTop: 4 }}>{c.l}</div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: '#fff', fontFamily: "'Space Grotesk',sans-serif" }}>{c.v}</div>
                    <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: C.navyDeep, border: `1px solid ${C.line}`, borderRadius: 8, padding: 48 }}>
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  <Field label="성함" placeholder="홍길동" req C={C} />
                  <Field label="연락처" placeholder="010-0000-0000" req C={C} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <Field label="현장 주소" placeholder="시·구·동까지 입력" C={C} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter',sans-serif", marginBottom: 10 }}>의뢰 항목</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['외벽 코킹', '누수 보수', '창호 실링', '발수제', '판넬', '기타'].map((t, i) => (
                      <button key={i} type="button" style={{ padding: '8px 14px', background: 'transparent', border: `1px solid ${C.line}`, color: '#fff', fontSize: 13, borderRadius: 100, cursor: 'pointer' }}>{t}</button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 12, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter',sans-serif", marginBottom: 10 }}>요청 사항</div>
                  <textarea placeholder="건물 종류, 층수, 시공 희망 시기 등을 적어주세요." style={{ width: '100%', minHeight: 120, background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.line}`, color: '#fff', padding: 14, fontSize: 14, fontFamily: 'inherit', borderRadius: 4, resize: 'vertical', outline: 'none' }} />
                </div>
                <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: C.muted, marginBottom: 24, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
                  <span>개인정보 수집·이용에 동의합니다. (견적 회신 외 용도로 사용되지 않습니다)</span>
                </label>
                <button type="submit" style={{ width: '100%', padding: 18, background: C.gold, color: C.navyDeep, fontSize: 15, fontWeight: 700, border: 'none', borderRadius: 4, cursor: 'pointer', fontFamily: 'inherit' }}>
                  무료 견적 신청하기 →
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: C.gold, color: C.navyDeep, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, marginBottom: 24 }}>✓</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>접수가 완료되었습니다.</h3>
                <p style={{ color: C.muted, lineHeight: 1.7 }}>영업일 기준 24시간 안에<br/>담당자가 직접 연락드립니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.navyDeep, color: C.muted, padding: '60px 56px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40, marginBottom: 40, paddingBottom: 40, borderBottom: `1px solid ${C.line}` }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 32, height: 32, background: C.gold, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navyDeep, fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif" }}>B</div>
              <div style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>뽀송코킹</div>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.8 }}>
              외벽 실리콘 코킹 전문 시공팀.<br/>아파트·빌딩·상가의 실링과 누수를 책임집니다.
            </div>
          </div>
          {[
            { t: '서비스', items: ['외벽 코킹', '누수 보수', '창호 실링', '발수제 시공'] },
            { t: '회사', items: ['회사 소개', '시공 사례', '공지사항', '채용'] },
            { t: '문의', items: ['1588-0000', 'KAKAO @bbosongck', 'info@bbosongck.com'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, color: '#fff', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{col.t}</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {col.items.map((it, j) => <div key={j} style={{ fontSize: 13 }}>{it}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
          <div>© 2024 뽀송코킹 · 대표 이용우 · 사업자등록 OOO-OO-OOOOO</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.1em' }}>BBOSONG CAULKING — EST. 2009</div>
        </div>
      </footer>
    </div>
  );
};

const Field = ({ label, placeholder, req, C }) => (
  <div>
    <div style={{ fontSize: 12, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter',sans-serif", marginBottom: 10 }}>
      {label} {req && <span style={{ color: C.gold }}>*</span>}
    </div>
    <input placeholder={placeholder} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.line}`, color: '#fff', padding: '12px 14px', fontSize: 14, fontFamily: 'inherit', borderRadius: 4, outline: 'none' }} />
  </div>
);

window.VariantANavy = VariantANavy;
