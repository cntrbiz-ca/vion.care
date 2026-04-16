import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { token: string } }): Promise<Metadata> {
  const supabase = createClient()
  const { data: plan } = await supabase
    .from('plans')
    .select('bundle_name')
    .eq('token', params.token)
    .single()

  return {
    title: plan ? `${plan.bundle_name} — Ваш план vion.care` : 'План не найден — vion.care',
    description: 'Персональный план приёма БАД от vion.care',
  }
}

export default async function PlanPage({ params }: { params: { token: string } }) {
  const supabase = createClient()
  const { data: plan } = await supabase
    .from('plans')
    .select('*, bundles(*)')
    .eq('token', params.token)
    .single()

  if (!plan) redirect('/')

  const bundle = plan.bundles as {
    id: string; name: string; emoji: string; tagline: string;
    result_short: string; products: Array<{ brand: string; sku: string; role: string }>
  } | null

  const products = (plan.products ?? []) as Array<{
    name: string; dose: string; time: string; role: string
  }>

  const schedule = (plan.schedule ?? {}) as {
    morning?: typeof products
    evening?: typeof products
    other?: typeof products
  }

  return (
    <main style={{
      maxWidth: '640px',
      margin: '0 auto',
      padding: '2rem 1.25rem',
      fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        background: '#1A2B4A', borderRadius: '16px',
        padding: '1.75rem', marginBottom: '1.5rem', color: '#fff',
      }}>
        <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem' }}>
          vion.care · персональный план
        </div>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.3rem' }}>
          🧬 Ваш план готов
        </h1>
        {plan.bundle_name && (
          <p style={{ opacity: 0.8, margin: 0, fontSize: '0.95rem' }}>
            Сценарий: {plan.bundle_name}
          </p>
        )}
      </div>

      {/* AI-generated plan text */}
      {plan.explanation && (
        <div style={{
          background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px',
          padding: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.7,
          fontSize: '0.9rem', color: '#1f2937',
          whiteSpace: 'pre-wrap',
        }}>
          {plan.explanation}
        </div>
      )}

      {/* Schedule */}
      {products.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#374151' }}>
            📋 Расписание приёма
          </h2>

          {schedule.morning && schedule.morning.length > 0 && (
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f59e0b', marginBottom: '0.4rem' }}>
                ☀️ Утро
              </div>
              {schedule.morning.map((p, i) => (
                <ProductCard key={`m${i}`} product={p} />
              ))}
            </div>
          )}

          {schedule.evening && schedule.evening.length > 0 && (
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#6366f1', marginBottom: '0.4rem' }}>
                🌙 Вечер
              </div>
              {schedule.evening.map((p, i) => (
                <ProductCard key={`e${i}`} product={p} />
              ))}
            </div>
          )}

          {schedule.other && schedule.other.length > 0 && (
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', marginBottom: '0.4rem' }}>
                ⏱ Другое
              </div>
              {schedule.other.map((p, i) => (
                <ProductCard key={`o${i}`} product={p} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bundle card */}
      {bundle && (
        <div style={{
          background: '#f0f4ff', border: '1px solid #dbeafe', borderRadius: '12px',
          padding: '1.25rem', marginBottom: '1.5rem',
        }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3b82f6', marginBottom: '0.4rem' }}>
            🎁 Рекомендованный бандл
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1e3a5f', marginBottom: '0.25rem' }}>
            {bundle.emoji} {bundle.name}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.75rem' }}>
            {bundle.tagline}
          </div>
          {bundle.result_short && (
            <div style={{ fontSize: '0.8rem', color: '#059669', marginBottom: '0.75rem' }}>
              ⏱ {bundle.result_short}
            </div>
          )}
          <a
            href={`/bundles/${bundle.id}`}
            style={{
              display: 'inline-block', background: '#1A2B4A', color: '#fff',
              padding: '0.6rem 1.25rem', borderRadius: '10px',
              fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
            }}
          >
            Подробнее о бандле →
          </a>
        </div>
      )}

      {/* CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <a
          href="https://t.me/vion_support"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block', textAlign: 'center', background: '#1A2B4A', color: '#fff',
            padding: '1rem', borderRadius: '12px', fontWeight: 600,
            fontSize: '0.95rem', textDecoration: 'none',
          }}
        >
          Заказать бандл →
        </a>
        <a
          href="https://vion.club"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block', textAlign: 'center', background: '#fff', color: '#374151',
            padding: '0.875rem', borderRadius: '12px', fontWeight: 500,
            fontSize: '0.9rem', textDecoration: 'none', border: '1px solid #e5e7eb',
          }}
        >
          🎁 Карта лояльности (кэшбэк)
        </a>
      </div>

      {/* Disclaimer */}
      <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', lineHeight: 1.6 }}>
        ⚠️ БАД не является лекарственным средством.<br />
        Перед приёмом проконсультируйтесь со специалистом при наличии заболеваний.<br />
        vion.care — wellness-платформа.
      </p>
    </main>
  )
}

function ProductCard({ product }: { product: { name: string; dose: string; time: string; role: string } }) {
  return (
    <div style={{
      display: 'flex', gap: '0.75rem', alignItems: 'center',
      padding: '0.75rem', background: '#f9fafb', borderRadius: '10px',
      marginBottom: '0.4rem', border: '1px solid #f3f4f6',
    }}>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#111827' }}>
          {product.name}
        </div>
        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          {product.dose} · {product.role}
        </div>
      </div>
    </div>
  )
}
