var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cav.db')

db.serialize(function () {

  db.run("create table user ( user_id integer primary key, username varchar(20) not null, fullname varchar(40), password varchar(30) not null);");

  db.run("create table artist ( artist_id integer primary key, artist_name varchar(50) not null, description varchar(255), website varchar(255), genre varchar(25) );");

  db.run("create table concert ( concert_id integer primary key, concert_name varchar(75) not null, date date, genre varchar(25) );");

  db.run("create table venue ( venue_id integer primary key, venue_name varchar(75) not null, location varchar(50) not null );");

  db.run("create table artist_follow (artist_follow_id integer primary key, artist_id bigint not null, user_id bigint not null, foreign key(artist_id) references artist(artist_id), foreign key(user_id) references user(user_id));");

  db.run("create table artist_concert_cr (artist_concert_id integer primary key, artist_id int, concert_id int, foreign key(artist_id) references artist(artist_id), foreign key(concert_id) references concert(concert_id));");

  db.run("create table venue_concert_cr ( venue_concert_id integer primary key, venue_id int, concert_id int, foreign key(venue_id) references venue(venue_id), foreign key(concert_id) references concert(concert_id));");

  db.run("create table review ( review_id integer primary key, description varchar(255), date date, sound_rate int, crowd_rate int, effects_rate int, entertainment_rate int, user_id int not null, concert_id int not null, foreign key(user_id) references user(user_id), foreign key(concert_id) references concert(concert_id));");
});
