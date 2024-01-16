CREATE TABLE FightingGame_Game (
    game_Name VARCHAR (50),
    game_Type VARCHAR (50),
    PRIMARY KEY (game_Name)
);

CREATE TABLE FightingGame_Char (
    ID int NOT NULL AUTO_INCREMENT,
    Game_ID VARCHAR (50),
    Char_Name VARCHAR (50),
    PRIMARY KEY (ID),
    FOREIGN KEY (Game_ID) REFERENCES FightingGame_Game(game_Name) ON UPDATE CASCADE 
);

CREATE TABLE FightingGame_Combo (
    ID int NOT NULL AUTO_INCREMENT,
    Char_ID int NOT NULL,
    Combo_Input VARCHAR (1000),
    Video_Example VARCHAR (1000),
    FOREIGN KEY (Char_ID) REFERENCES FightingGame_Char(ID) ON UPDATE CASCADE 
);

CREATE TABLE FightingGame_Setups (
    ID int NOT NULL AUTO_INCREMENT,
    Char_ID int NOT NULL,
    Setup_Input VARCHAR (1000),
    Video_Example VARCHAR (1000),
    FOREIGN KEY (Char_ID) REFERENCES FightingGame_Char(ID) ON UPDATE CASCADE 
);

