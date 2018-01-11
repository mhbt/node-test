CREATE DATABASE quiz;
USE quiz;
CREATE TABLE question (
    id INT,
    statement VARCHAR(500),
    answer BOOLEAN,
    PRIMARY KEY (id)
);
INSERT INTO question VALUES(
    1,
    "Lahore is the capital of Pakistan.",
    0
);
INSERT INTO question VALUES(
    2,
    "Karachi is said to be city of lights.",
    1
);
INSERT INTO question VALUES(
    3,
    "Pakistan has atomic power.",
    1
);
INSERT INTO question VALUES(
    4,
    "Lake Saif-ul-malooq is in Swat Valley.",
    1
);
INSERT INTO question VALUES(
    5,
    "Most expensive city of Pakistan is Islamabad.",
    0
);
INSERT INTO question VALUES(
    6,
    "Pakistan is an Islamic country.",
    1
);
INSERT INTO question VALUES(
    7,
    "Pakistan exports leature?",
    1
);
INSERT INTO question VALUES(
    8,
    "Pakistan means Residency of brown people.",
    0
);
INSERT INTO question VALUES(
    9,
    "Nawaz Sharif is current president of Pakistan.",
    0
);
INSERT INTO question VALUES(
    10,
    "Pakistan is democratic land.",
    1
);