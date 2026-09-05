# Vocabulary Web

Frontend React + TypeScript cho Vocabulary Manager MVP.

Styling foundation dùng Tailwind CSS v4 thông qua Vite plugin. Design tokens nền
tảng và keyboard focus được khai báo trong `src/index.css`; giao diện được xây
theo hướng desktop-first. Utility không prefix mô tả desktop từ 1024px; các
variant `max-lg`, `max-md` và `max-sm` lần lượt điều chỉnh giao diện xuống
tablet và mobile.

## Yêu cầu

- Node.js 24 LTS
- npm 11 trở lên

## Chạy local

```bash
npm ci
npm run dev
```

Vite sẽ in URL local sau khi development server khởi động.

## Production build

```bash
npm run build
npm run preview
```

## Quy ước liên kết Jira

Branch, commit và pull request phải chứa Jira issue key, ví dụ:

```text
VA-29-setup-tailwind
VA-29 Setup Tailwind CSS v4
```

Task bootstrap repository: `VA-30`.
