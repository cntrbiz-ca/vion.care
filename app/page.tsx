'use client'
import Image from 'next/image'
import styles from './page.module.css'

const scenarios = [
  {
    icon: '⚡',
    title: 'Энергия',
    sub: 'Для тех, кто устаёт к полудню',
    desc: 'Магний, B-комплекс, CoQ10, адаптогены — стек, который убирает хроническую усталость без кофеина.',
    color: '#f5c000',
    glow: 'rgba(245,192,0,0.15)',
  },
  {
    icon: '🌙',
    title: 'Сон',
    sub: 'Засыпать легко, просыпаться отдохнувшим',
    desc: 'Магний глицинат, L-теанин, ашваганда — восстановление без зависимости от снотворных.',
    color: '#7b8ff5',
    glow: 'rgba(123,143,245,0.15)',
  },
  {
    icon: '🧠',
    title: 'Стресс',
    sub: 'Руководителям и перегруженным',
    desc: 'Адаптогены, витамин C мегадоза, цинк, B6 — кортизол под контроль, голова ясная.',
    color: '#f07020',
    glow: 'rgba(240,112,32,0.15)',
  },
  {
    icon: '✨',
    title: 'Красота',
    sub: 'Кожа, волосы, ногти',
    desc: 'Коллаген, биотин, гиалуронат, витамин E — работает изнутри, результат виден снаружи.',
    color: '#e070c0',
    glow: 'rgba(224,112,192,0.15)',
  },
  {
    icon: '🌿',
    title: 'Gut Health',
    sub: 'ЖКТ и иммунитет',
    desc: 'Мультиштаммовый пробиотик, пребиотик, глутамин — микробиом в порядке, иммунитет крепче.',
    color: '#2db84b',
    glow: 'rgba(45,184,75,0.15)',
  },
  {
    icon: '💪',
    title: 'Спорт',
    sub: 'Восстановление и результат',
    desc: 'Креатин, BCAA, Omega-3, витамин D3 — больше энергии на тренировке, меньше боли после.',
    color: '#20c0e0',
    glow: 'rgba(32,192,224,0.15)',
  },
]

const steps = [
  { num: '01', title: 'Квиз за 3 минуты', desc: 'Расскажите о целях, образе жизни и самочувствии. Без медицинского образования — всё понятно.' },
  { num: '02', title: 'AI-рекомендация', desc: 'Алгоритм подбирает 3–5 нутриентов с объяснением почему именно они нужны именно вам.' },
  { num: '03', title: 'Доставка по Алматы', desc: 'Готовый набор приедет в течение дня. Оплата через Kaspi Pay или картой.' },
  { num: '04', title: 'Результат через 30 дней', desc: 'Трекайте изменения в Telegram-боте. Скорректируйте набор по ощущениям.' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navInner}>
            <a href="/" className={styles.logo}>
              <Image src="/logo.png" alt="vion.care" width={120} height={48} priority />
            </a>
            <div className={styles.navLinks}>
              <a href="#scenarios">Сценарии</a>
              <a href="#how">Как работает</a>
              <a href="#gift">Подарки</a>
              <a href="#loyalty">Клуб</a>
            </div>
            <a href="#quiz" className={styles.navCta}>Пройти квиз →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Доставка по Алматы · Оплата Kaspi Pay
            </div>
            <h1 className={styles.heroTitle}>
              Включи<br />
              <span className={styles.heroTitleGradient}>своё здоровье</span>
            </h1>
            <p className={styles.heroSub}>
              Персонализированные наборы нутриентов под ваши цели.<br />
              Квиз → AI-рекомендация → доставка за день.
            </p>
            <div className={styles.heroActions}>
              <a href="#quiz" className={styles.btnPrimary}>
                <span>Пройти бесплатный квиз</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#scenarios" className={styles.btnSecondary}>Смотреть сценарии</a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>6</span>
                <span className={styles.heroStatLabel}>сценариев здоровья</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>3 мин</span>
                <span className={styles.heroStatLabel}>на квиз</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>1 день</span>
                <span className={styles.heroStatLabel}>доставка</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardBadge}>Ваш набор готов</div>
              <div className={styles.heroCardTitle}>Стек «Энергия»</div>
              <div className={styles.heroCardItems}>
                {[
                  { name: 'Магний B6', dose: '400 мг / день', color: '#2db84b' },
                  { name: 'Витамин D3+K2', dose: '5000 МЕ / день', color: '#f5c000' },
                  { name: 'CoQ10', dose: '200 мг / день', color: '#f07020' },
                  { name: 'Ашваганда KSM-66', dose: '600 мг / день', color: '#7b8ff5' },
                ].map((item) => (
                  <div key={item.name} className={styles.heroCardItem}>
                    <div className={styles.heroCardItemDot} style={{ background: item.color }} />
                    <div>
                      <div className={styles.heroCardItemName}>{item.name}</div>
                      <div className={styles.heroCardItemDose}>{item.dose}</div>
                    </div>
                    <div className={styles.heroCardItemCheck} style={{ color: item.color }}>✓</div>
                  </div>
                ))}
              </div>
              <div className={styles.heroCardFooter}>
                <span>Цена набора</span>
                <span className={styles.heroCardPrice}>14 500 ₸/мес.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section id="scenarios" className={styles.scenarios}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Сценарии</div>
            <h2 className={styles.sectionTitle}>Мы продаём не банки.<br />Мы продаём <em>результат</em>.</h2>
            <p className={styles.sectionSub}>Выберите свой сценарий — получите готовый персональный стек.</p>
          </div>
          <div className={styles.scenariosGrid}>
            {scenarios.map((s) => (
              <div
                key={s.title}
                className={styles.scenarioCard}
                style={{ '--glow': s.glow } as React.CSSProperties}
              >
                <div className={styles.scenarioIcon} style={{ background: s.glow, border: `1px solid ${s.color}30` }}>
                  <span style={{ fontSize: 32 }}>{s.icon}</span>
                </div>
                <div className={styles.scenarioColor} style={{ background: s.color }} />
                <h3 className={styles.scenarioTitle} style={{ color: s.color }}>{s.title}</h3>
                <div className={styles.scenarioSub}>{s.sub}</div>
                <p className={styles.scenarioDesc}>{s.desc}</p>
                <a href="#quiz" className={styles.scenarioLink} style={{ color: s.color }}>
                  Подобрать набор →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className={styles.how}>
        <div className={styles.howBg} />
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Процесс</div>
            <h2 className={styles.sectionTitle}>Как это работает</h2>
          </div>
          <div className={styles.howSteps}>
            {steps.map((step, i) => (
              <div key={step.num} className={styles.howStep}>
                <div className={styles.howStepNum}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.howStepLine} />}
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* QUIZ BLOCK */}
          <div id="quiz" className={styles.quizBlock}>
            <div className={styles.quizInner}>
              <div className={styles.quizLeft}>
                <h3 className={styles.quizTitle}>Пройдите квиз прямо сейчас</h3>
                <p className={styles.quizDesc}>3 минуты — и вы получите персональную рекомендацию от AI-нутрициолога. Бесплатно, без регистрации.</p>
                <div className={styles.quizFeatures}>
                  {['7 простых вопросов', 'AI-анализ вашего профиля', 'Готовый стек с дозировками', 'Цена и ссылка на заказ'].map(f => (
                    <div key={f} className={styles.quizFeature}>
                      <span className={styles.quizFeatureCheck}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.quizRight}>
                <a
                  href="https://t.me/vioncarebot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                  style={{ fontSize: 18, padding: '18px 40px' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
                  </svg>
                  Начать в Telegram
                </a>
                <p className={styles.quizNote}>или напишите нам в Instagram @vion.care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIFT CERTIFICATES */}
      <section id="gift" className={styles.gift}>
        <div className="container">
          <div className={styles.giftInner}>
            <div className={styles.giftContent}>
              <div className={styles.sectionBadge}>Подарочные сертификаты</div>
              <h2 className={styles.sectionTitle}>Подари здоровье.<br />Не банку — заботу.</h2>
              <p className={styles.giftDesc}>
                Сертификат включает персональный квиз + готовый набор нутриентов под ответы.
                Идеально для мамы, партнёра, коллеги.
              </p>
              <div className={styles.giftCards}>
                {[
                  { name: 'Базовый', price: '15 000 ₸', desc: 'Квиз + 3-компонентный набор на месяц' },
                  { name: 'Стандарт', price: '25 000 ₸', desc: 'Квиз + полный стек из 5 нутриентов', hot: true },
                  { name: 'Премиум', price: '40 000 ₸', desc: 'Квиз + набор + консультация нутрициолога' },
                ].map((card) => (
                  <div key={card.name} className={`${styles.giftCard} ${card.hot ? styles.giftCardHot : ''}`}>
                    {card.hot && <div className={styles.giftCardHotLabel}>Популярный</div>}
                    <div className={styles.giftCardName}>{card.name}</div>
                    <div className={styles.giftCardPrice}>{card.price}</div>
                    <div className={styles.giftCardDesc}>{card.desc}</div>
                    <a href="#quiz" className={styles.giftCardBtn}>Купить →</a>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.giftVisual}>
              <div className={styles.giftVisualCard}>
                <div className={styles.giftVisualLogo}>
                  <Image src="/logo.png" alt="vion.care" width={100} height={40} />
                </div>
                <div className={styles.giftVisualTitle}>Подарочный сертификат</div>
                <div className={styles.giftVisualAmount}>25 000 ₸</div>
                <div className={styles.giftVisualCode}>VION-2024-XXXX</div>
                <div className={styles.giftVisualSub}>Включает персональный квиз<br />и набор нутриентов</div>
                <div className={styles.giftVisualFooter}>vion.care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAB PARTNERS */}
      <section className={styles.labs}>
        <div className="container">
          <div className={styles.labsInner}>
            <div className={styles.labsContent}>
              <div className={styles.sectionBadge}>Партнёрство</div>
              <h2 className={styles.labsTitle}>Есть анализы?<br />Получите точный подбор.</h2>
              <p className={styles.labsDesc}>
                Загрузите результаты анализов в квизе — AI-нутрициолог учтёт
                реальные показатели и исключит дефициты с доказательной точностью.
              </p>
              <p className={styles.labsNote}>
                Партнёрство с лабораториями Алматы: 
                <strong> Invivo · Олимп Диагностика · CMD</strong>
              </p>
            </div>
            <div className={styles.labsBiomarkers}>
              {['Витамин D', 'Ферритин', 'B12', 'Магний', 'Цинк', 'Омега-3', 'Кортизол', 'TSH'].map((b) => (
                <div key={b} className={styles.labsBiomarker}>{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOYALTY */}
      <section id="loyalty" className={styles.loyalty}>
        <div className={styles.loyaltyBg} />
        <div className="container">
          <div className={styles.loyaltyInner}>
            <div className={styles.loyaltyContent}>
              <div className={styles.sectionBadge} style={{ background: 'rgba(240,112,32,0.1)', color: '#f07020', borderColor: 'rgba(240,112,32,0.3)' }}>
                Программа лояльности
              </div>
              <h2 className={styles.sectionTitle}>vion.club</h2>
              <p className={styles.loyaltyDesc}>
                Каждая покупка приносит баллы. Баллы — скидки, розыгрыши и подарки.
                Платформа работает на базе Boomerange — white label система лояльности.
              </p>
              <div className={styles.loyaltyPerks}>
                {[
                  { icon: '🎯', title: 'Баллы за покупки', desc: '1 балл = 1 ₸. Копятся с каждого заказа.' },
                  { icon: '🏨', title: 'Розыгрыши', desc: 'Лечение в санаториях и SPA-сертификаты ежемесячно.' },
                  { icon: '🎁', title: 'Наборы в подарок', desc: 'Победители получают полные стеки на месяц.' },
                  { icon: '💊', title: 'Эксклюзивный доступ', desc: 'Новинки и акции — сначала для участников клуба.' },
                ].map((perk) => (
                  <div key={perk.title} className={styles.loyaltyPerk}>
                    <span className={styles.loyaltyPerkIcon}>{perk.icon}</span>
                    <div>
                      <div className={styles.loyaltyPerkTitle}>{perk.title}</div>
                      <div className={styles.loyaltyPerkDesc}>{perk.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.vion.club"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOrange}
              >
                Вступить в vion.club →
              </a>
            </div>
            <div className={styles.loyaltyVisual}>
              <div className={styles.loyaltyCard}>
                <div className={styles.loyaltyCardHeader}>
                  <Image src="/logo.png" alt="vion" width={80} height={32} />
                  <span className={styles.loyaltyCardBadge}>CLUB</span>
                </div>
                <div className={styles.loyaltyCardLevel}>Gold Member</div>
                <div className={styles.loyaltyCardPoints}>
                  <span className={styles.loyaltyCardPointsNum}>4 850</span>
                  <span className={styles.loyaltyCardPointsLabel}>баллов</span>
                </div>
                <div className={styles.loyaltyCardProgress}>
                  <div className={styles.loyaltyCardProgressBar}>
                    <div className={styles.loyaltyCardProgressFill} style={{ width: '62%' }} />
                  </div>
                  <div className={styles.loyaltyCardProgressLabel}>1 150 до Platinum</div>
                </div>
                <div className={styles.loyaltyCardDomain}>vion.club</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBg}>
          <div className={styles.finalCtaOrb} />
        </div>
        <div className="container">
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>Готовы включить своё здоровье?</h2>
            <p className={styles.finalCtaSub}>3 минуты — и вы знаете, что именно вам нужно.</p>
            <a href="#quiz" className={styles.btnPrimary} style={{ fontSize: 18, padding: '18px 48px' }}>
              Пройти квиз бесплатно →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              <Image src="/logo.png" alt="vion.care" width={100} height={40} />
              <p className={styles.footerDesc}>
                Персонализированные нутриенты<br />для жителей Алматы и Казахстана.
              </p>
              <div className={styles.footerSocials}>
                <a href="https://instagram.com/vion.care" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://t.me/vioncare" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href="https://www.vion.club" target="_blank" rel="noopener noreferrer">vion.club</a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerLinksCol}>
                <div className={styles.footerLinksTitle}>Сценарии</div>
                {['Энергия', 'Сон', 'Стресс', 'Красота', 'Gut Health', 'Спорт'].map(l => (
                  <a key={l} href="#scenarios">{l}</a>
                ))}
              </div>
              <div className={styles.footerLinksCol}>
                <div className={styles.footerLinksTitle}>Компания</div>
                {['Как работает', 'Подарочные сертификаты', 'vion.club', 'Партнёрство с лабами'].map(l => (
                  <a key={l} href="#how">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2025 vion.care — продукт CntrBiz-CA</span>
            <span>БАД не является лекарственным средством</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
