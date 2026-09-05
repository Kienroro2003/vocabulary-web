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

## Quality gate

Chạy đầy đủ các bước kiểm tra frontend trước khi mở pull request:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Workflow `Frontend CI` chạy các bước này với Node.js 24 cho pull request vào
`main` và mỗi lần push lên `main`. Job `quality-gate` là integration contract:
task publish image VA-31 phải khai báo `needs: quality-gate` trong cùng workflow.

## Quy ước liên kết Jira

Branch, commit và pull request phải chứa Jira issue key, ví dụ:

```text
VA-29-setup-tailwind
VA-29 Setup Tailwind CSS v4
```

Task bootstrap repository: `VA-30`.
