BEGIN;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (name, password) VALUES
('Muhammad', '123'),
('Noor', '123'),
('Ibrahim', '123'),
('Nadia', '123'),
('Asmaa', '123'),
('Reem', '123'),
('Mansour', '123');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER ,
    title VARCHAR(256) NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO posts (user_id, title, content) VALUES
( '1', 'first post from user 1', 'Test suite  MINGW64 to run'),
( '2', 'first post from user 2', ' MINGW64 suite failed to run'),
( '2', 'sec post from user 2', 'Test suite failed to run'),
( '3', 'first post from user 3', 'Test  MINGW64 failed to run'),
( '2', '3th post from user 2', 'Test suite failed to  MINGW64'),
( '3', 'sec post from user 3', 'Test suite failed to run'),
( '1', 'sec post from user 1', ' MINGW64 suite failed to run');

COMMIT;