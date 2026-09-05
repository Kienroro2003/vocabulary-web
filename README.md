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

## Container production

Build và chạy frontend bằng Nginx trên cổng `80` của container:

```bash
docker build -t vocabulary-web:local .
docker run --rm -p 8080:80 vocabulary-web:local
```

Image public được publish tại `kienroro/vocabulary-web`. Pull và chạy bản mới
nhất bằng:

```bash
docker pull kienroro/vocabulary-web:latest
docker run --rm -p 8080:80 kienroro/vocabulary-web:latest
```

Push lên `main` tạo tag `latest` và `sha-<commit>`. Git tag `vX.Y.Z` tạo các
Docker tag `X.Y.Z`, `X.Y` và `X`. Pull request chỉ build image đa kiến trúc để
xác minh, không đăng nhập hoặc push lên Docker Hub.

## Quy ước liên kết Jira

Branch, commit và pull request phải chứa Jira issue key, ví dụ:

```text
VA-29-setup-tailwind
VA-29 Setup Tailwind CSS v4
```

Task bootstrap repository: `VA-30`.
