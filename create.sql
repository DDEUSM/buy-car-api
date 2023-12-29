CREATE TABLE IF NOT EXISTS DriverGroups (
    id TEXT PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS CarCategories (
    id TEXT PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS PermissionsToBuy (
    id TEXT PRIMARY KEY,
    driverGroupId TEXT REFERENCES DriverGroups (id),
    carCategoryId TEXT REFERENCES CarCategories (id)
);

CREATE TABLE IF NOT EXISTS Users (
    id TEXT PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    passwordHash TEXT,
    driverGroupId TEXT REFERENCES DriverGroups (id),
    credits REAL    
);

CREATE TABLE IF NOT EXISTS Nations (
    id TEXT PRIMARY KEY,
    name TEXT
);

CREATE TABLE Brands (
    id TEXT PRIMARY KEY,
    name TEXT,
    nationId TEXT REFERENCES Nations (id)
);

CREATE TABLE IF NOT EXISTS Cars (
    id TEXT PRIMARY KEY,
    model TEXT,
    brandId TEXT REFERENCES Brands (id),
    version TEXT,
    categoryId TEXT REFERENCES CarCategories (id),
    modelYear INTEGER,
    color TEXT,
    price FLOAT
);

CREATE TABLE IF NOT EXISTS Sales (
    id TEXT PRIMARY KEY,
    ownerId TEXT REFERENCES Users (id),
    carId TEXT REFERENCES Cars (id)
);

