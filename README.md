# Smart Device 120 Hz API

A REST API for managing specifications of premium smart devices.

## Features

- 120 Hz display refresh rate
- 120 FPS rendering support
- Dolby Atmos and DTS:X audio metadata
- Dynamic AMOLED 2X and Ultra Retina XDR display profiles
- Request validation with Zod
- TypeScript and Express 5
- Health and device endpoints

## Requirements

- Node.js 20 or later
- npm

## Installation

```bash
npm install
npm run dev
```

The API starts at `http://localhost:3000`.

## Endpoints

- `GET /health`
- `GET /api/v1/devices`
- `GET /api/v1/devices/:id`
- `POST /api/v1/devices`
- `DELETE /api/v1/devices/:id`

## Example

```bash
curl http://localhost:3000/api/v1/devices
```
