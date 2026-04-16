import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'vion.care — Персональные рекомендации',
  description: 'Получи персональный план от нутрициологов за 3 минуты бесплатно',
}

const links = [
  {
    href: 'https://t.me/vion_care_bot',
    label: 'Пройти диагностику',
    sub: 'Персональный план за 3 минуты',
    emoji: '🧬',
    primary: true,
  },
  {
    href: 'https://t.me/vion_care_bot',
    label: 'Написать боту',
    sub: 'Telegram — бесплатно',
    emoji: '🤖',
    primary: false,
  },
  {
    href: 'https://vion.club',
    label: 'Получить карту лояльности',
    sub: 'Кэшбэк на все покупки',
    emoji: '🎁',
    primary: false,
  },
  {
    href: 'https://t.me/vion_support',
    label: 'Поддержка',
    sub: 'Вопросы и консультации',
    emoji: '💬',
    primary: false,
  },
]

export default function StartPage() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      background: '#f8f9fc',
      fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#1A2B4A' }}>
          vion<span style={{ color: '#4F8EF7' }}>.care</span>
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#6b7280', marginTop: '0.4rem' }}>
          Персональные рекомендации БАД
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              borderRadius: '14px',
              background: link.primary ? '#1A2B4A' : '#ffffff',
              color: link.primary ? '#ffffff' : '#111827',
              border: link.primary ? 'none' : '1px solid #e5e7eb',
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>{link.emoji}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{link.label}</div>
              <div style={{
                fontSize: '0.8rem',
                color: link.primary ? 'rgba(255,255,255,0.7)' : '#6b7280',
                marginTop: '0.15rem',
              }}>{link.sub}</div>
            </div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: '2.5rem', fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center' }}>
        БАД не является лекарственным средством
      </p>
    </main>
  )
}
