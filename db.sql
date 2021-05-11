create user freechat@localhost
create database freechat
use freechat

create table users (
    id int,
    mail text,
    nickname text,
    profileImg text,
    salt text,
    pw text
)

create table messages (
    idx int,
    authorId varchar(10),
    content text
)