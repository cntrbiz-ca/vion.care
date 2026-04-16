'use client'
import Image from 'next/image'
import styles from './page.module.css'

const scenarios = [
  { icon: '⚡', label: 'Энергия', color: '#FF9500' },
  { icon: '🌙', label: 'Сон', color: '#5E5CE6' },
  { icon: '🧠', label: 'Стресс', color: '#FF6B6B' },
  { icon: '✦', label: 'Красота', color: '#FF2D55' },
  { icon: '🌿', label: 'Gut Health', color: '#34C759' },
  { icon: '💪', label: 'Спорт', color: '#007AFF' },
]

export default function Home() {
  return (
    <main className={styles.main}>

      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo}>
            <Image src="/logo.png" alt="vion" width={88} height={35} priority />
          </a>
          <ul className={styles.navMenu}>
            <li><a href="#how">Как работает</a></li>
            <li><a href="#science">Наука</a></li>
            <li><a href="#scenarios">Сценарии</a></li>
            <li><a href="#club">vion.club</a></li>
          </ul>
          <a href="#quiz" className={styles.navBtn}>Пройти тест</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroBody}>
          <div className={`container-narrow ${styles.heroText}`}>
            <div className={`${styles.heroPill} anim-1`}>
              <span className={styles.heroPillDot} />
              AI-тестирование · 5 000 000 000+ записей
            </div>
            <h1 className={`${styles.heroTitle} anim-2`}>
              Включи<br />своё здоровье.
            </h1>
            <p className={`${styles.heroSub} anim-3`}>
              Пройдите AI-тестирование на базе крупнейшей
              нутрициологической модели в мире. Получите персональный план
              от лучших экспертов планеты.
            </p>
            <div className={`${styles.heroActions} anim-4`}>
              <a href="#quiz" className={styles.btnBlack}>
                Пройти тестирование
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#how" className={styles.btnGhost}>Как это работает</a>
            </div>
          </div>

          {/* Floating card */}
          <div className={`${styles.heroCardWrap} anim-4`}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <div className={styles.heroCardAvatar}>AI</div>
                <div>
                  <div className={styles.heroCardTitle}>Ваш AI-анализ готов</div>
                  <div className={styles.heroCardSub}>Персонализировано · Только для вас</div>
                </div>
              </div>
              {[
                { label: 'Дефицит Витамина D', pct: 72, c: '#FF9500' },
                { label: 'Уровень Магния', pct: 45, c: '#FF6B6B' },
                { label: 'Omega-3 статус', pct: 30, c: '#007AFF' },
                { label: 'Пробиотический индекс', pct: 58, c: '#34C759' },
              ].map(item => (
                <div key={item.label} className={styles.heroCardRow}>
                  <div className={styles.heroCardRowHead}>
                    <span className={styles.heroCardRowLabel}>{item.label}</span>
                    <span className={styles.heroCardRowPct} style={{ color: item.c }}>{item.pct}%</span>
                  </div>
                  <div className={styles.heroCardBarBg}>
                    <div className={styles.heroCardBarFill} style={{ width: `${item.pct}%`, background: item.c }} />
                  </div>
                </div>
              ))}
              <div className={styles.heroCardFooter}>
                <span className={styles.heroCardFooterDot} />
                Обработано 5.2B параметров
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '5B+', label: 'записей в базе', sub: 'крупнейшая нутрициологическая база данных' },
              { num: '127', label: 'экспертов мира', sub: 'ведущие нутрициологи Harvard, Stanford, Mayo Clinic' },
              { num: '98%', label: 'точность подбора', sub: 'персонализация под ваш уникальный профиль' },
            ].map(s => (
              <div key={s.num} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSub}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className={styles.how}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className={styles.eyebrow}>Как это работает</p>
          <h2 className={styles.h2}>Три шага к здоровью,<br />которое работает.</h2>
        </div>
        <div className="container">
          <div className={styles.howGrid}>
            {[
              { n: '01', icon: '🧬', title: 'Тестирование', body: 'AI-опрос за 7 минут. Алгоритм обрабатывает 80+ параметров: образ жизни, цели, симптомы, рацион.' },
              { n: '02', icon: '⚙️', title: 'Анализ', body: 'Нейросеть на 5 миллиардах записей сопоставляет ваш профиль с протоколами 127 ведущих нутрициологов мира.' },
              { n: '03', icon: '📋', title: 'Ваш план', body: 'Получаете персональный стек нутриентов с точными дозировками, объяснением «почему» и расписанием.' },
            ].map(s => (
              <div key={s.n} className={styles.howCard}>
                <div className={styles.howNum}>{s.n}</div>
                <div className={styles.howIcon}>{s.icon}</div>
                <h3 className={styles.howTitle}>{s.title}</h3>
                <p className={styles.howBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ CTA */}
      <section id="quiz" className={styles.quizSection}>
        <div className={styles.quizBg} />
        <div className="container-narrow">
          <p className={styles.eyebrowLight}>Бесплатно</p>
          <h2 className={styles.quizH2}>Узнайте, чего не хватает<br />вашему организму.</h2>
          <p className={styles.quizSub}>
            7 минут. Без анализов крови. Без регистрации.<br />
            AI обработает ваш профиль и даст точный персональный план.
          </p>
          <div className={styles.quizActions}>
            <a
              href="https://t.me/vion_care_bot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhite}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(Number(process.env.NEXT_PUBLIC_YM_ID), 'reachGoal', 'quiz_start')
                }
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.281c-.144.658-.537.817-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.604.295l.213-3.053 5.56-5.023c.24-.213-.054-.333-.374-.12L8.32 14.617l-2.96-.924c-.643-.204-.656-.643.136-.953l11.57-4.461c.538-.194 1.006.131.828.942z"/>
              </svg>
              Получить персональный план — бесплатно
            </a>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
              За 3 минуты · Без регистрации · На основе квиза
            </p>
            <a href="https://instagram.com/vion.care" target="_blank" rel="noopener noreferrer" className={styles.quizLink}>
              Instagram @vion.care →
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE: AI */}
      <section id="science" className={styles.feature}>
        <div className="container">
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <p className={styles.eyebrow}>Искусственный интеллект</p>
              <h2 className={styles.h2}>Самая мощная<br />модель в нутрициологии.</h2>
              <p className={styles.featureBody}>
                Более 5 миллиардов записей о реакциях организма на нутриенты.
                Алгоритм учитывает ваш образ жизни, симптомы, цели —
                и находит именно ваш паттерн здоровья.
              </p>
              <a href="#quiz" className={styles.featureLink}>Пройти тестирование →</a>
            </div>
            <div className={styles.featureVis}>
              <div className={styles.visCard}>
                <div className={styles.visCardLabel}>AI Processing</div>
                {[
                  { t: 'Анализ образа жизни', p: 100, c: '#34C759' },
                  { t: 'Сопоставление с базой', p: 87, c: '#007AFF' },
                  { t: 'Генерация протокола', p: 74, c: '#FF9500' },
                  { t: 'Валидация экспертами', p: 61, c: '#FF2D55' },
                ].map(b => (
                  <div key={b.t} className={styles.visBar}>
                    <div className={styles.visBarHead}>
                      <span>{b.t}</span>
                      <span style={{ color: b.c, fontWeight: 600 }}>{b.p}%</span>
                    </div>
                    <div className={styles.visBarBg}>
                      <div className={styles.visBarFill} style={{ width: `${b.p}%`, background: b.c }} />
                    </div>
                  </div>
                ))}
                <div className={styles.visCardNote}>🧬 Обработано 5 227 481 924 записей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE: EXPERTS */}
      <section className={`${styles.feature} ${styles.featureGray}`}>
        <div className="container">
          <div className={`${styles.featureInner} ${styles.featureInnerRev}`}>
            <div className={styles.featureText}>
              <p className={styles.eyebrow}>Экспертная база</p>
              <h2 className={styles.h2}>127 лучших<br />нутрициологов планеты.</h2>
              <p className={styles.featureBody}>
                Ведущие специалисты Harvard, Stanford, Mayo Clinic и европейских
                нутрициологических институтов разработали протоколы,
                которые легли в основу рекомендаций vion.care.
              </p>
              <a href="#quiz" className={styles.featureLink}>Начать тестирование →</a>
            </div>
            <div className={styles.featureVis}>
              <div className={styles.visCard}>
                <div className={styles.visCardLabel}>Экспертная сеть</div>
                <div className={styles.expertTags}>
                  {['🇺🇸 Harvard Med','🇺🇸 Stanford','🇬🇧 Imperial','🇩🇪 Charité','🇯🇵 Tokyo U','🇨🇭 ETH Zürich','🇫🇷 Sorbonne','🇸🇪 Karolinska'].map(e => (
                    <span key={e} className={styles.expertTag}>{e}</span>
                  ))}
                </div>
                <div className={styles.expertCheck}>
                  <span>✓</span>
                  <div>
                    <div className={styles.expertCheckTitle}>127 верифицированных специалистов</div>
                    <div className={styles.expertCheckSub}>Протоколы обновляются ежеквартально</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section id="scenarios" className={styles.scenarios}>
        <div className="container">
          <div className={styles.scenariosHead}>
            <p className={styles.eyebrow}>Сценарии</p>
            <h2 className={styles.h2}>Выберите свою цель.</h2>
            <p className={styles.scenariosSub}>AI подберёт персональный план под каждый из них.</p>
          </div>
          <div className={styles.scenariosGrid}>
            {scenarios.map(s => (
              <a href="#quiz" key={s.label} className={styles.scenarioChip}>
                <span className={styles.scenarioEmoji}>{s.icon}</span>
                <span className={styles.scenarioLabel}>{s.label}</span>
                <span className={styles.scenarioArrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT */}
      <section className={styles.gift}>
        <div className="container">
          <div className={styles.giftInner}>
            <div className={styles.giftText}>
              <p className={styles.eyebrow}>Подарочные сертификаты</p>
              <h2 className={styles.h2}>
                Подари заботу,<br />а не баночки.
              </h2>
              <p className={styles.giftBody}>
                Сертификат vion.care — это ссылка на персональный AI-тест
                плюс готовый набор нутриентов под результаты.
                Идеально для мамы, партнёра, лучшего друга.
              </p>
              <a href="#quiz" className={styles.btnBlack}>Оформить сертификат</a>
            </div>
            <div className={styles.giftVis}>
              <div className={styles.giftCard}>
                <div className={styles.giftCardTop}>
                  <Image src="/logo.png" alt="vion" width={72} height={28} />
                  <span className={styles.giftBadge}>Gift</span>
                </div>
                <div className={styles.giftCardMid}>
                  <div className={styles.giftCardTitle}>Персональный план здоровья</div>
                  <div className={styles.giftCardCode}>VION · 2025 · CARE</div>
                </div>
                <div className={styles.giftCardBot}>
                  <span>Включает AI-тест + набор нутриентов</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLUB */}
      <section id="club" className={`${styles.feature} ${styles.featureDark}`}>
        <div className="container">
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <p className={styles.eyebrowLight}>Программа лояльности</p>
              <h2 className={styles.h2Light}>vion.club</h2>
              <p className={styles.featureBodyLight}>
                Каждый шаг к здоровью приносит баллы. Розыгрыши санаторного
                лечения, персональных стеков, эксклюзивный ранний доступ
                к новым протоколам.
              </p>
              <a href="https://www.vion.club" target="_blank" rel="noopener noreferrer" className={styles.btnWhite}>
                Вступить в vion.club →
              </a>
            </div>
            <div className={styles.featureVis}>
              <div className={styles.clubCard}>
                <div className={styles.clubCardTop}>
                  <Image src="/logo.png" alt="vion" width={64} height={26} />
                  <span className={styles.clubBadge}>CLUB</span>
                </div>
                <div className={styles.clubLevel}>Gold Member</div>
                <div className={styles.clubPoints}>4 850</div>
                <div className={styles.clubPointsLabel}>баллов</div>
                <div className={styles.clubBarBg}>
                  <div className={styles.clubBarFill} />
                </div>
                <div className={styles.clubBarLabel}>1 150 до Platinum</div>
                <div className={styles.clubDomain}>VION.CLUB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalBg} />
        <div className="container-narrow" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 className={styles.finalTitle}>Ваше здоровье.<br />Персонализированно.</h2>
          <p className={styles.finalSub}>Пройдите AI-тестирование прямо сейчас.</p>
          <a href="#quiz" className={styles.btnBlack}>
            Начать тестирование
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <Image src="/logo.png" alt="vion.care" width={80} height={32} />
            <nav className={styles.footerNav}>
              {['Как работает','Наука','Сценарии','vion.club','Сертификаты'].map(l => (
                <a key={l} href="#how">{l}</a>
              ))}
            </nav>
          </div>
          <div className={styles.footerBot}>
            <span>© 2025 vion.care</span>
            <span>БАД не является лекарственным средством</span>
            <span>
              <a href="https://instagram.com/vion.care" target="_blank" rel="noopener noreferrer">Instagram</a>
              {' · '}
              <a href="https://t.me/vioncare" target="_blank" rel="noopener noreferrer">Telegram</a>
              {' · '}
              <a href="https://www.vion.club" target="_blank" rel="noopener noreferrer">vion.club</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
