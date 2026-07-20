# Генопоиск WGS

Премиальный лендинг для Genopoisk WGS.

## Стек

- Только HTML / CSS / JavaScript. Без React, Vue, Bootstrap, Tailwind, jQuery и любых сборщиков.
- Методология классов — БЭМ (`block__element--modifier`).
- Все значения дизайна — через CSS Custom Properties из `css/variables.css`.
- Mobile First: базовые стили — под мобильный экран, все расширения под большие экраны собраны в `css/responsive.css`.
- Production ready: код готов к переносу в Tilda Zero Block без адаптации.

## Структура

```
index.html

css/
  variables.css   — дизайн-токены (цвета, шрифты, отступы, тени, z-index)
  reset.css       — современный CSS-reset
  typography.css  — базовая типографика
  layout.css      — контейнер, сетка, отступы секций, плавный скролл
  hero.css        — блок hero
  sections.css    — общие стили контентных секций
  buttons.css      — блок button и его модификаторы
  animations.css  — reveal-on-scroll и keyframes
  responsive.css  — все min-width медиа-запросы (единая точка для расширения вёрстки)

js/
  app.js         — точка входа, реестр и запуск модулей
  animations.js  — IntersectionObserver для reveal-on-scroll

assets/
  images/
  icons/
  video/
```

## Брейкпоинты

`sm: 480px`, `md: 768px`, `lg: 1024px`, `xl: 1280px` (см. комментарий в `css/variables.css` и правила в `css/responsive.css`).

## Именование классов

БЭМ без общего префикса (проект — самостоятельный лендинг, не набор блоков для разных страниц):

```
.hero {}
.hero__title {}
.button--primary {}
```

## Локальный просмотр

Открыть `index.html` в браузере — без сборки и сервера.

## Git-конвенции

Коммиты — небольшими логическими частями: одна секция или один самостоятельный кусок функциональности за коммит.
