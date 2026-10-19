# Game Studio Portfolio

# WHAT YOU NEED TO CHANGE

Everything lives in **`src/data/content.ts`**. Anything highlighted in yellow on the site (`[IN BRACKETS]` or `YOUR_...`) is a placeholder. Buttons with missing links show a dashed "link needed" label instead of a broken link.

### Personal information (`founder`, `company`)
Your name, date of birth, education, program, role and bio are already filled in. Still to change: `company.email` (`YOUR_EMAIL`), `company.location` if needed, and `socialLinks` (`YOUR_GITHUB_URL`, `YOUR_INSTAGRAM_URL`, `YOUR_LINKEDIN_URL`).

### Company information (`company`)
Studio name (`[YOUR STUDIO NAME]`, also in `seo.title`), tagline, hand note and description.

### Projects (`projects`, in order 01 Battleship, 02 Color Territory, 03 SpongeBob Chatbot)
Each project has `description`, `fullDescription`, `highlight`, `goal`, `gameplay`, `technologies`, `role`, `year`, `github`, `live`, `cover`, `screenshots`. Still open: `goal`, `gameplay`, Color Territory `multiplayer`, and all `github` / `live` links. The SpongeBob "How it works" block is `howItWorks`; the disclaimer is `disclaimer`.

### Images
Put files in `public/images/` and update the paths in `content.ts` (placeholders are `.svg`; for photos use e.g. `.jpg`).

| Image | Folder / file |
|---|---|
| Portrait | `public/images/about/portrait.svg` (replace, or add `portrait.jpg` and change `founder.image`) |
| Hero tiles (4) | `public/images/hero/` |
| Battleship | `public/images/projects/battleship/` — `cover`, `screen-01`…`screen-03` |
| Color Territory | `public/images/projects/color-territory/` — `cover`, `screen-01`…`screen-03` |
| SpongeBob Chatbot | `public/images/projects/spongebob-chatbot/` — `cover`, `screen-01`…`screen-03` |
| Gallery | `public/images/gallery/` (list in `content.gallery`, with `size`: portrait / landscape / square) |

---


Одностраничный сайт-портфолио инди-студии (editorial / scrapbook-стиль) + страницы проектов `/projects/battleship` и `/projects/color-territory`.

## Tech stack
Next.js 14 (App Router) · TypeScript · обычный CSS · Vercel serverless route для Telegram. Рисованные элементы — SVG/CSS, шрифты — Google Fonts (Space Grotesk, Pinyon Script, Caveat).

## Folder structure
```
src/data/content.ts       ← ВЕСЬ текст и ссылки сайта
src/app/                  страницы, layout, стили (globals.css)
src/app/api/contact/      серверный endpoint → Telegram
src/components/           Navbar, Hero, About, Projects, Gallery, Process, Services, ContactForm, Footer, Doodle…
public/images/            ваши картинки
```

## Install & run
```
npm install
npm run dev      # http://localhost:3000
```

## Как менять контент
Всё в **`src/data/content.ts`**. Placeholder'ы (`[YOUR TEXT HERE]`, `YOUR_GITHUB_URL`) на сайте подсвечены жёлтым маркером — исчезнет подсветка, когда замените текст.
- **Студия / имя / email / локация / bio:** блоки `company` и `founder`.
- **Соцсети:** `socialLinks`.
- **Проекты:** массив `projects` (Battleship, Color Territory): описание, goal, gameplay, multiplayer, players, technologies, `github`, `live`, cover, screenshots.
- **GitHub / Live Demo:** поля `github` и `live` каждого проекта. Пока там `YOUR_...` — кнопки неактивны и помечены.
- **SEO:** блок `seo`.

## Как заменить картинки
Положите файлы в `public/images/...` и поправьте пути в `content.ts` (сейчас стоят `.svg`-заглушки; для своих фото пишите, например, `/images/about/portrait.jpg`).

| Что | Куда |
|---|---|
| Портрет | `public/images/about/` |
| 4 картинки hero | `public/images/hero/` |
| Обложка и скриншоты Battleship | `public/images/projects/battleship/` |
| Обложка и скриншоты Color Territory | `public/images/projects/color-territory/` |
| Галерея | `public/images/gallery/` (в `content.gallery` задайте `size`: portrait / landscape / square) |
| Favicon | `public/favicon.svg` |

Сжимайте фото (до ~300–500 КБ, например в squoosh.app).

## Telegram-бот
1. Откройте Telegram, найдите **@BotFather**.
2. Отправьте `/newbot`, выберите имя и username (на `bot`).
3. Скопируйте **токен**.
4. Откройте своего бота и отправьте ему любое сообщение (`/start`).
5. Узнайте **Chat ID**: 
   - откройте в браузере `https://api.telegram.org/bot<ТОКЕН>/getUpdates` и найдите `"chat":{"id":...}`; или
   - напишите боту **@userinfobot** / **@getidsbot** — он покажет ваш ID.
   (Для группы: добавьте бота в группу, напишите сообщение, посмотрите `getUpdates`; ID группы начинается с `-`.)
6. Создайте файл `.env.local` в корне проекта:
```
TELEGRAM_BOT_TOKEN=ваш_токен
TELEGRAM_CHAT_ID=ваш_chat_id
```
Перезапустите `npm run dev`. `.env.local` уже в `.gitignore`; шаблон — `.env.example`.

## Deploy на Vercel
1. Залейте проект на GitHub (без `.env.local`).
2. vercel.com → *Add New → Project* → выберите репозиторий.
3. *Settings → Environment Variables*: добавьте `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.
4. Deploy. После смены переменных сделайте Redeploy.

## Security
- Токен хранится только в env на сервере, во frontend его нет.
- Сервер валидирует поля, экранирует HTML и не показывает пользователю детали ошибок; есть honeypot-поле от ботов.
- Если токен случайно попал в GitHub — отзовите его через BotFather (`/revoke`).

## Troubleshooting
- **Форма: «Something went wrong»** — проверьте env-переменные, что вы писали боту первым, и логи (`npm run dev` / Vercel Logs).
- **Картинка не видна** — путь в `content.ts` должен начинаться с `/images/` и совпадать с именем файла (регистр важен).
- **Шрифты не загрузились** — нужен интернет; сайт использует запасные шрифты.
- **Порт занят** — `npm run dev -- -p 3001`.

---

## CONTENT CHECKLIST

- [ ] Replace studio name
- [ ] Replace my email
- [ ] Add GitHub link
- [ ] Add Instagram link
- [ ] Add LinkedIn link
- [ ] Add portrait
- [ ] Add Battleship screenshots
- [ ] Add Battleship GitHub link
- [ ] Add Battleship Live Demo
- [ ] Add Color Territory screenshots
- [ ] Add Color Territory GitHub link
- [ ] Add Color Territory Live Demo
- [ ] Add SpongeBob Chatbot screenshots
- [ ] Add SpongeBob Chatbot GitHub link
- [ ] Add SpongeBob Chatbot Live Demo
- [ ] Replace gallery images
- [ ] Fill in goal / gameplay (and multiplayer) for each project
