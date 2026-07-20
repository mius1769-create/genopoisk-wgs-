# Design System
Version: 1.0
Project: Genopoisk WGS
Status: Approved

---

# Цель

Дизайн должен создавать ощущение современного цифрового продукта, а не сайта медицинской лаборатории.

Основные ассоциации:

- Apple
- Linear
- Vercel
- Notion
- Stripe

Запрещается копировать медицинские сайты, сайты клиник или лабораторий.

---

# Дизайн-принципы

1. Простота важнее декоративности.
2. Большие отступы лучше плотной компоновки.
3. Типографика важнее графических эффектов.
4. Каждая анимация должна иметь смысл.
5. Минимум визуального шума.
6. Один главный акцент на экран.
7. Пользователь должен чувствовать контроль над данными.

---

# Цветовая палитра

## Background

Primary

#050505

Secondary

#0D1117

Surface

#131820

Glass

rgba(255,255,255,.06)

Border

rgba(255,255,255,.12)

---

## Typography

Primary

#FFFFFF

Secondary

#B8BEC7

Muted

#7C848F

Disabled

#5A616B

---

## Accent

Primary Green

#1FE5B0

Hover

#34EDBD

Pressed

#18C89A

Glow

rgba(31,229,176,.35)

---

# Типографика

Шрифт

Montserrat

Fallback

system-ui,
Arial,
sans-serif

---

## H1

72px

Weight

700

Line-height

0.95

Letter spacing

-0.03em

---

## H2

48px

Weight

700

---

## H3

32px

Weight

600

---

## Body Large

22px

Weight

400

---

## Body

18px

Weight

400

---

## Small

15px

Weight

400

---

## Caption

13px

Weight

500

Uppercase допускается только для Badge.

---

# Контейнер

Desktop

1440px

Tablet

1100px

Mobile

100%

---

# Горизонтальные отступы

Desktop

120px

Tablet

64px

Mobile

24px

---

# Вертикальные интервалы

Между секциями

160px

Внутри секции

80px

Между карточками

24px

Между заголовком и текстом

24px

---

# Сетка

Desktop

12 колонок

Tablet

8 колонок

Mobile

4 колонки

Использовать CSS Grid.

Bootstrap запрещён.

---

# Радиусы

Button

16px

Card

20px

Glass

24px

Tag

999px

---

# Тени

Использовать минимально.

Основная

0 12px 40px rgba(0,0,0,.25)

Hover

0 20px 60px rgba(0,0,0,.35)

Не использовать цветные тени.

---

# Glass

Glass используется только:

- Hero
- File Cards
- Floating Cards
- Badge

Параметры:

background: rgba(255,255,255,.06);

backdrop-filter: blur(24px);

border: 1px solid rgba(255,255,255,.12);

---

# Кнопки

Primary

Высота

56px

Padding

0 32px

Radius

16px

Hover

translateY(-2px)

Transition

250ms

---

Secondary

Transparent

Border

1px solid rgba(255,255,255,.15)

Hover

rgba(255,255,255,.08)

---

# Карточки

Radius

20px

Padding

24px

Gap

16px

Background

Surface

---

# Иконки

Использовать только outline стиль.

Толщина

2px

Размер

20–24px

Не использовать разноцветные иконки.

---

# Иллюстрации

Используются:

- изометрия
- абстрактные цифровые элементы
- стеклянные панели
- файловые карточки

Запрещены:

- ДНК-спирали
- врачи
- лаборатории
- пробирки
- микроскопы
- фотографии людей

---

# Анимации

Максимальная продолжительность

400ms

Floating

8–14 секунд

Hover

200–250ms

Использовать только:

opacity

transform

filter

---

# Responsive

Desktop

1440+

Tablet

768–1439

Mobile

320–767

Каждая секция обязана корректно работать на всех разрешениях.

---

# Запрещено

Не использовать:

- Bootstrap
- Tailwind
- jQuery
- GSAP
- Three.js
- Canvas
- Lottie

Предпочтительно:

- CSS Grid
- Flexbox
- CSS Variables
- Vanilla JS
- Intersection Observer

---

# Код

Использовать BEM или понятные семантические классы.

Избегать глубокой вложенности CSS.

Максимальная вложенность — три уровня.

---

# Производительность

Lighthouse:

Performance ≥95

Accessibility ≥95

Best Practices ≥95

SEO ≥95

---

# Главный принцип

Пользователь должен воспринимать Genopoisk как современный технологический сервис хранения и анализа генетических данных.

Если элемент не усиливает это ощущение — его следует удалить.
