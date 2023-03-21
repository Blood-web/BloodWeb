-- Recreate Tables

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL, 
    lastname varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    phoneNumber varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    role varchar(255) NOT NULL,
    subroles varchar(255) NOT NULL,
    shares INT NOT NULL DEFAULT 0,
    fshares INT NOT NULL DEFAULT 0,
    Diamonds INT NOT NULL DEFAULT 0,
    bombs INT NOT NULL DEFAULT 0,
    lastLoginDate DATE DEFAULT GET_DATE(),
    PRIMARY KEY(id)
);
