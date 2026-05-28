-- WSpeedrun.com — Game Service Database Setup
-- Jalankan SQL ini untuk membuat tabel di MySQL secara manual
-- (Opsional, karena schema juga dikelola via Prisma)

CREATE DATABASE IF NOT EXISTS game_db;
USE game_db;

-- Games table
CREATE TABLE IF NOT EXISTS games (
    game_id VARCHAR(36) PRIMARY KEY,
    game_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

-- Run Categories table
CREATE TABLE IF NOT EXISTS run_categories (
    run_category_id VARCHAR(36) PRIMARY KEY,
    game_id VARCHAR(36) NOT NULL,
    run_category_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games(game_id) ON DELETE CASCADE
);