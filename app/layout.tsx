import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'vion.care — Включи своё здоровье',
  description: 'Персонализированные наборы нутриентов на основе ваших целей и анализов. Квиз → рекомендация → доставка по Алматы.',
  keywords: 'БАДы, витамины, персонализация, здоровье, Алматы, Казахстан, нутрициология',
  openGraph: {
    title: 'vion.care — Включи своё здоровье',
    description: 'Персонализированные наборы нутриентов для вашего образа жизни',
    url: 'https://vion.care',
    siteName: 'vion.care',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
