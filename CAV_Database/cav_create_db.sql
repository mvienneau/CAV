# Script to create database and tables for CAV

create database CAV;
use CAV;

create table user (
    user_id bigint primary key not null auto_increment,
    username varchar(15) not null,
    fullname varchar(40) not null,
    email varchar(50),
    password varchar(30) not null );

create table artist (
    artist_id bigint primary key not null auto_increment,
    artist_name varchar(50) not null,
    description varchar(255),
    website varchar(255),
    genre varchar(25) );

create table concert (
    concert_id bigint primary key not null auto_increment,
    concert_name varchar(75) not null,
    date date,
    genre varchar(25) );

create table venue (
    venue_id bigint primary key not null auto_increment,
    venue_name varchar(75) not null,
    location varchar(50) not null );

create table artist_follow (
    artist_follow_id bigint primary key not null auto_increment,
    artist_id bigint not null,
    user_id bigint not null,
    foreign key(artist_id) references artist(artist_id),
    foreign key(user_id) references user(user_id));

create table artist_concert_cr (
    artist_concert_id bigint not null primary key auto_increment,
    artist_id bigint,
    concert_id bigint,
    foreign key(artist_id) references artist(artist_id),
    foreign key(concert_id) references concert(concert_id));

create table venue_concert_cr (
    venue_concert_id bigint not null primary key auto_increment,
    venue_id bigint,
    concert_id bigint,
    foreign key(venue_id) references venue(venue_id),
    foreign key(concert_id) references concert(concert_id));

create table review (
    review_id bigint not null primary key auto_increment,
    description varchar(255),
    date date,
    sound_rate integer,
    crowd_rate integer,
    effects_rate integer,
    entertainment_rate integer,
    user_id bigint not null,
    concert_id bigint not null,
    foreign key(user_id) references user(user_id),
    foreign key(concert_id) references concert(concert_id));


