# vion.care

Сайт персонализированных нутриентов для Алматы.

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Deploy на Vercel

### Вариант 1 — через Vercel CLI

```bash
npm install -g vercel
vercel
```

### Вариант 2 — через GitHub

1. Загрузите репозиторий на GitHub
2. Зайдите на [vercel.com](https://vercel.com)
3. New Project → Import Git Repository
4. Выберите репозиторий → Deploy

Vercel автоматически определит Next.js и настроит всё сам.

### Настройка домена vion.care

В Vercel → Project Settings → Domains → Add Domain → `vion.care`

Затем в DNS провайдере добавьте:
- `A` запись: `76.76.21.21`
- `CNAME` для `www`: `cname.vercel-dns.com`

## Структура

```
app/
  layout.tsx      — мета-теги, шрифты
  page.tsx        — главная страница (все секции)
  page.module.css — стили
  globals.css     — CSS переменные, анимации
public/
  logo.png        — логотип vion.care
```

## Секции

- **Hero** — заголовок, квиз CTA, карточка-пример набора
- **Scenarios** — 6 сценариев (Энергия, Сон, Стресс, Красота, Gut Health, Спорт)
- **How it works** — 4 шага + квиз блок
- **Gift certificates** — 3 тарифа + визуальная карточка
- **Lab partners** — интеграция с лабораториями
- **vion.club** — программа лояльности (Boomerange white label)
- **Footer**

## Следующие шаги

- [ ] Подключить реальный Telegram-бот (`@vioncarebot`)
- [ ] Настроить Instagram ссылки (`@vion.care`)  
- [ ] Добавить страницу `/quiz` с реальным квизом на Claude API
- [ ] Настроить Google Analytics / Яндекс.Метрика
- [ ] Добавить страницы `/scenarios/[slug]` для каждого сценария
