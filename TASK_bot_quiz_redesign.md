# TASK: Редизайн квиз-бота vion.care

## Контекст проекта
- Repo: `CntrBiz-CA/vion-bot`
- Stack: Python, aiogram 3.13, Railway
- DB: Supabase (project `frotzpxjpyflkaswynvf`)
- Tables: `users`, `plans`, `events`, `orders`
- AI: Claude API (claude-sonnet-4-6 для генерации плана)

## Цель задачи
Переписать логику квиза Telegram-бота с 7 вопросов на 11–12 адаптивных вопросов с:
- Условным флоу (пол определяет набор вопросов)
- Red flag escalation (беременность, лекарства, хроника)
- 4 вариантами ответа на каждый вопрос (InlineKeyboard)
- Финальным персональным профилем + рекомендацией бандла

---

## Шаг 1 — Прочитай текущий код

```bash
cat bot/handlers/quiz.py
cat bot/states.py
cat bot/keyboards.py
```

Зафиксируй текущую структуру FSM-состояний и клавиатур.

---

## Шаг 2 — Новая структура FSM (states.py)

Замени текущие состояния на следующие:

```python
from aiogram.fsm.state import State, StatesGroup

class QuizStates(StatesGroup):
    Q1_gender = State()
    Q2_age = State()
    Q3_activity = State()
    Q4_sleep = State()
    Q5_stress = State()
    Q6_gut = State()
    Q7_female_status = State()   # только для женщин
    Q8_main_goal = State()
    Q9_current_pain = State()
    Q10_diet = State()
    Q11_health_context = State()
    Q12_commitment = State()
```

---

## Шаг 3 — Вопросы и варианты (quiz_config.py)

Создай файл `bot/quiz_config.py` со словарём вопросов:

```python
QUESTIONS = {
    "Q1_gender": {
        "text": "👋 Привет! Давайте составим ваш персональный план.\n\nУкажите ваш пол:",
        "options": [
            ("👨 Мужской", "male"),
            ("👩 Женский", "female"),
            ("⚧ Другой", "other"),
            ("🔒 Не указывать", "skip"),
        ]
    },
    "Q2_age": {
        "text": "📅 Ваш возраст:",
        "options": [
            ("18–25 лет", "18-25"),
            ("26–35 лет", "26-35"),
            ("36–50 лет", "36-50"),
            ("50+ лет", "50+"),
        ]
    },
    "Q3_activity": {
        "text": "🏃 Насколько вы физически активны?",
        "options": [
            ("🪑 Сидячая работа, почти нет спорта", "sedentary"),
            ("🚶 Лёгкая активность — прогулки", "light"),
            ("🏋️ Тренируюсь 3–4 раза в неделю", "moderate"),
            ("⚡ Интенсивные тренировки / профспорт", "intense"),
        ]
    },
    "Q4_sleep": {
        "text": "😴 Как вы спите?",
        "options": [
            ("✅ Сплю хорошо, просыпаюсь бодрым", "good"),
            ("😮‍💨 Долго засыпаю", "hard_to_fall"),
            ("😴 Просыпаюсь ночью", "waking_up"),
            ("🥱 Сплю достаточно, но устаю", "unrefreshing"),
        ]
    },
    "Q5_stress": {
        "text": "🧠 Уровень стресса в вашей жизни:",
        "options": [
            ("😌 Низкий — всё спокойно", "low"),
            ("😐 Умеренный — справляюсь", "moderate"),
            ("😬 Высокий — часто напряжён", "high"),
            ("🔥 Хронический стресс / выгорание", "burnout"),
        ]
    },
    "Q6_gut": {
        "text": "🫃 Как работает ваш ЖКТ?",
        "options": [
            ("✅ Без жалоб", "ok"),
            ("🫧 Вздутие и газы", "bloating"),
            ("💩 Нарушения стула (запор/диарея)", "irregular"),
            ("😣 Регулярный дискомфорт / тяжесть", "chronic"),
        ]
    },
    "Q7_female_status": {
        "text": "🌸 Есть ли особые состояния здоровья?",
        "options": [
            ("🤰 Беременна", "pregnant"),
            ("🤱 Кормлю грудью", "breastfeeding"),
            ("🌸 Планирую беременность", "planning"),
            ("✅ Ничего из перечисленного", "none"),
        ]
    },
    "Q8_main_goal": {
        "text": "🎯 Ваша главная цель:",
        "options": [
            ("⚡ Энергия и продуктивность", "energy"),
            ("😴 Качество сна и восстановление", "sleep"),
            ("💆 Снижение стресса и тревоги", "stress"),
            ("💪 Спортивный результат / тело", "sport"),
        ]
    },
    "Q9_current_pain": {
        "text": "😟 Что беспокоит вас прямо сейчас?",
        "options": [
            ("😮‍💨 Постоянная усталость, нет сил", "fatigue"),
            ("🪞 Кожа, волосы, ногти ухудшились", "beauty"),
            ("🦠 Частые простуды / слабый иммунитет", "immunity"),
            ("🫃 Проблемы с пищеварением", "gut"),
        ]
    },
    "Q10_diet": {
        "text": "🥗 Как вы питаетесь в целом?",
        "options": [
            ("🥗 Сбалансированно, слежу за питанием", "balanced"),
            ("🍕 Много фастфуда и кофе", "junk"),
            ("🥦 Вегетарианец или веган", "vegan"),
            ("🫤 По-разному, без системы", "irregular"),
        ]
    },
    "Q11_health_context": {
        "text": "💊 Есть ли что-то важное о вашем здоровье?",
        "options": [
            ("✅ Нет, всё в порядке", "none"),
            ("💊 Принимаю лекарства регулярно", "medications"),
            ("🏥 Есть хроническое заболевание", "chronic"),
            ("⚠️ Аллергия на некоторые компоненты", "allergy"),
        ]
    },
    "Q12_commitment": {
        "text": "📦 Как вы хотите начать?",
        "options": [
            ("🎯 Попробовать 1–2 продукта", "light"),
            ("📦 Комплексный подход (3–4 продукта)", "full"),
            ("📅 30-дневный курс с поддержкой", "course"),
            ("🔄 Долгосрочная программа", "longterm"),
        ]
    },
}

# Маппинг сценариев (Q8 + Q9 → scenario)
SCENARIO_MAP = {
    ("energy", "fatigue"): "Energy",
    ("energy", "immunity"): "Energy",
    ("sleep", "fatigue"): "Sleep",
    ("sleep", "beauty"): "Sleep",
    ("stress", "fatigue"): "Stress",
    ("stress", "immunity"): "Stress",
    ("sport", "fatigue"): "Sport",
    ("sport", "beauty"): "Sport",
    ("energy", "beauty"): "Beauty",
    ("sleep", "gut"): "Gut",
    ("stress", "gut"): "Gut",
}

def resolve_scenario(goal: str, pain: str) -> str:
    return SCENARIO_MAP.get((goal, pain), goal.capitalize())
```

---

## Шаг 4 — Логика conditional flow (quiz.py)

### Правило пропуска Q7
```python
# После Q6 — проверяем пол
async def after_q6(gender: str) -> str:
    if gender in ("male", "skip"):
        return "Q8_main_goal"   # пропускаем Q7
    return "Q7_female_status"
```

### Red flag escalation
```python
RED_FLAG_TRIGGERS = {
    "Q7_female_status": ["pregnant", "breastfeeding"],
    "Q11_health_context": ["medications", "chronic", "allergy"],
}

RED_FLAG_MESSAGE = (
    "⚠️ *Важная информация*\n\n"
    "На основе ваших ответов мы рекомендуем проконсультироваться "
    "с врачом или фармацевтом перед началом приёма БАД.\n\n"
    "Это не означает, что вы не можете использовать добавки — "
    "просто для вашей безопасности важна профессиональная консультация.\n\n"
    "Мы продолжим и покажем вам информационный план, "
    "но *финальный выбор остаётся за вашим специалистом*."
)
```

---

## Шаг 5 — Финальный Claude API промпт

Создай функцию `generate_plan(answers: dict) -> str` в `bot/ai.py`:

```python
import anthropic
import json

client = anthropic.Anthropic()

def build_user_profile(answers: dict) -> str:
    gender_map = {"male": "Мужской", "female": "Женский", "other": "Другой", "skip": "Не указан"}
    return f"""
Пол: {gender_map.get(answers.get('Q1_gender'), 'Не указан')}
Возраст: {answers.get('Q2_age', '—')}
Активность: {answers.get('Q3_activity', '—')}
Сон: {answers.get('Q4_sleep', '—')}
Стресс: {answers.get('Q5_stress', '—')}
ЖКТ: {answers.get('Q6_gut', '—')}
Статус (женский): {answers.get('Q7_female_status', 'н/п')}
Главная цель: {answers.get('Q8_main_goal', '—')}
Текущая проблема: {answers.get('Q9_current_pain', '—')}
Питание: {answers.get('Q10_diet', '—')}
Контекст здоровья: {answers.get('Q11_health_context', '—')}
Готовность: {answers.get('Q12_commitment', '—')}
Сценарий: {answers.get('scenario', '—')}
    """.strip()

async def generate_plan(answers: dict) -> str:
    profile = build_user_profile(answers)

    system_prompt = """Ты — персональный нутрициолог-советник сервиса vion.care.
Ты составляешь персональный план приёма БАД на основе профиля пользователя.

ПРАВИЛА:
- Не ставишь диагнозы
- Не лечишь болезни
- Не заменяешь врача
- Для red-flag случаев добавляешь предупреждение
- Пишешь на русском языке
- Стиль: тёплый, экспертный, конкретный

СТРУКТУРА ОТВЕТА (строго в таком порядке):
1. Короткое описание профиля (2–3 предложения, от первого лица к пользователю)
2. Основной бандл (3–4 продукта): название + одна строка зачем
3. Дополнительно по желанию (1–2 продукта)
4. Важно учесть (если есть ограничения)
5. Призыв к действию: "Ваш бандл готов → [получить]"

Формат: Telegram Markdown (жирный через *, курсив через _)
Длина: не более 400 слов."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1000,
        system=system_prompt,
        messages=[
            {"role": "user", "content": f"Профиль пользователя:\n{profile}"}
        ]
    )
    return response.content[0].text
```

---

## Шаг 6 — Сохранение в Supabase

После завершения квиза — сохраняй в таблицу `users` и `plans`:

```python
# В таблицу users — обновляй или создавай запись по telegram_id
# В таблицу plans — сохраняй JSON ответов + сгенерированный текст плана + scenario

plan_record = {
    "user_id": user_db_id,
    "quiz_answers": json.dumps(answers),
    "scenario": answers.get("scenario"),
    "plan_text": generated_plan,
    "red_flag": answers.get("red_flag", False),
    "token": generate_uuid_token(),
}
```

---

## Шаг 7 — Финальное сообщение боту

После генерации плана отправь пользователю:

```python
FINAL_MESSAGE_TEMPLATE = """
🧬 *Ваш персональный профиль vion.care готов*

{profile_description}

📊 *Ваши параметры:*
• Сценарий: {scenario}
• Главная цель: {goal}
• Уровень стресса: {stress}

{plan_text}

━━━━━━━━━━━━━━━━
📦 *Ваш план доступен по ссылке:*
https://vion.care/plan/{token}
━━━━━━━━━━━━━━━━

_⚠️ БАД не является лекарственным средством. 
Проконсультируйтесь со специалистом при наличии заболеваний._
"""
```

---

## Шаг 8 — Клавиатуры (keyboards.py)

Создай универсальную функцию для 4-кнопочных клавиатур:

```python
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

def build_quiz_keyboard(options: list[tuple[str, str]]) -> InlineKeyboardMarkup:
    """
    options: list of (label, callback_data)
    Всегда 4 кнопки, по 2 в ряд если ярлыки короткие,
    по 1 в ряд если длинные (> 20 символов)
    """
    buttons = [
        InlineKeyboardButton(text=label, callback_data=f"quiz:{data}")
        for label, data in options
    ]
    # Если все ярлыки короткие — 2 колонки
    max_len = max(len(label) for label, _ in options)
    if max_len <= 20:
        rows = [buttons[i:i+2] for i in range(0, len(buttons), 2)]
    else:
        rows = [[btn] for btn in buttons]
    return InlineKeyboardMarkup(inline_keyboard=rows)
```

---

## Шаг 9 — Тест и деплой

```bash
# Локальный тест
python -m pytest tests/test_quiz_flow.py -v

# Проверить что бот стартует без ошибок
python bot/main.py

# Деплой на Railway (если настроен CLI)
railway up
```

---

## Чеклист перед мержем

- [ ] Q7 показывается ТОЛЬКО при gender = female / other
- [ ] Red flag message отправляется при pregnant / breastfeeding / medications / chronic / allergy
- [ ] Все 12 состояний FSM существуют и обрабатываются
- [ ] Callback data формат: `quiz:{value}` (не конфликтует с другими хендлерами)
- [ ] Supabase: `quiz_answers` сохраняется как JSON, `scenario` как строка
- [ ] Финальное сообщение содержит ссылку `vion.care/plan/{token}`
- [ ] Дисклеймер присутствует в финальном сообщении
- [ ] Бот не крашится при timeout (пользователь не ответил долго)

---

## Файлы для изменения / создания

| Файл | Действие |
|------|----------|
| `bot/states.py` | Переписать QuizStates |
| `bot/quiz_config.py` | Создать новый |
| `bot/handlers/quiz.py` | Переписать хендлеры |
| `bot/keyboards.py` | Добавить `build_quiz_keyboard()` |
| `bot/ai.py` | Добавить `generate_plan()` |
| `bot/db.py` | Проверить/обновить save_plan() |

---

*vion.care | Claude Code Task v1.0 | 2026*
