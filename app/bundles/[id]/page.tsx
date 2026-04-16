import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Product = { brand: string; sku: string; role: string }

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const supabase = createClient()
  const { data: bundle } = await supabase
    .from('bundles')
    .select('name, tagline')
    .eq('id', params.id)
    .eq('active', true)
    .single()

  if (!bundle) return { title: 'Бандл не найден — vion.care' }

  return {
    title: `${bundle.name} — vion.care`,
    description: bundle.tagline,
  }
}

export default async function BundlePage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: bundle } = await supabase
    .from('bundles')
    .select('*')
    .eq('id', params.id)
    .eq('active', true)
    .single()

  if (!bundle) notFound()

  const products = (bundle.products ?? []) as Product[]

  return (
    <main style={{
      maxWidth: '640px',
      margin: '0 auto',
      padding: '2rem 1.25rem',
      fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        background: '#1A2B4A',
        borderRadius: '16px',
        padding: '1.75rem',
        marginBottom: '1.5rem',
        color: '#fff',
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{bundle.emoji}</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.4rem' }}>
          Бандл «{bundle.name}»
        </h1>
        <p style={{ opacity: 0.8, margin: 0, fontSize: '1rem' }}>{bundle.tagline}</p>
      </div>

      {/* Products */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#374151' }}>
          Состав бандла
        </h2>
        {products.map((p, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start',
            padding: '0.875rem',
            background: '#f9fafb',
            borderRadius: '10px',
            marginBottom: '0.5rem',
            border: '1px solid #f3f4f6',
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#1A2B4A',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 700,
              flexShrink: 0,
            }}>{i + 1}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>{p.sku}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.15rem' }}>
                {p.brand} · {p.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div style={{
        background: '#f0f9f4',
        border: '1px solid #d1fae5',
        borderRadius: '10px',
        padding: '1rem',
        marginBottom: '1.5rem',
      }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#059669', marginBottom: '0.25rem' }}>
          ⏱ Результат
        </div>
        <div style={{ fontSize: '0.9rem', color: '#065f46' }}>{bundle.result_short}</div>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <a
          href="https://t.me/vion_support"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textAlign: 'center',
            background: '#1A2B4A',
            color: '#fff',
            padding: '1rem',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
          }}
        >
          Заказать бандл →
        </a>
        <a
          href="/start"
          style={{
            display: 'block',
            textAlign: 'center',
            background: '#fff',
            color: '#374151',
            padding: '0.875rem',
            borderRadius: '12px',
            fontWeight: 500,
            fontSize: '0.9rem',
            textDecoration: 'none',
            border: '1px solid #e5e7eb',
          }}
        >
          🎁 Получить карту лояльности (кэшбэк)
        </a>
      </div>

      {/* Disclaimer */}
      <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center' }}>
        Это не лечение. Перед приёмом проконсультируйтесь с врачом.<br />
        БАД — вспомогательное средство для поддержки здоровья.
      </p>
    </main>
  )
}
