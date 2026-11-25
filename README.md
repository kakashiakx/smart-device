# Smart Device 120Hz API

REST API quản lý thiết bị thông minh, sử dụng Node.js, SQLite và Prisma.

## Yêu cầu

- Node.js 20+
- Docker và Docker Compose

## Chạy bằng Docker

```bash
cp .env.example .env
docker compose up --build
```

API: http://localhost:3000  
Swagger: http://localhost:3000/docs

## Chạy local

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma migrate deploy
npm start
```

## API endpoints

- `GET /health`
- `GET /api/devices`
- `POST /api/devices`
- `GET /api/devices/:id`
- `PUT /api/devices/:id`
- `DELETE /api/devices/:id`

OpenAPI specification: `openapi.yaml`
