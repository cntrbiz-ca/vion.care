import type { Metadata } from 'next'
import Script from 'next/script'
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
      <body>
        {children}
        {process.env.NEXT_PUBLIC_YM_ID && (
          <>
            <Script id="ym" strategy="afterInteractive">{`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${process.env.NEXT_PUBLIC_YM_ID}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
            `}</Script>
            <noscript>
              <div>
                <img src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YM_ID}`} style={{position:'absolute',left:'-9999px'}} alt="" />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}
