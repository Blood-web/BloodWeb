
USE Users;

--Always update First
INSERT INTO HODLERSLOG (`type`,`Description`,`val`) VALUES ( );

-- +1 fs to all users bar Jack and test
UPDATE TABLE HODLERS SET fshares =fsahres+1 WHERE NOT firstname='Jack' AND NOT firstname='t';

-- LOG

