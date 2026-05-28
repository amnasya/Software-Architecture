<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  </p>

## Description

WSpeedrun Game Service — Game & Category Management

## Project setup

```bash
npm install
```

## Compile and run the project

```bash
npm run start
npm run start:dev
npm run start:prod
```

## Run tests

```bash
npm run test
npm run test:e2e
```

## Environment Variables

Buat file `.env` di root folder:

```env
DATABASE_URL="mysql://root:password@localhost:3306/game_db"
AUTH_SERVICE_URL="http://localhost:3000"
JWT_SECRET="auth-service-secret-key-2024"
JWT_EXPIRES_IN="1d"
PORT=3001
```

## Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev
```