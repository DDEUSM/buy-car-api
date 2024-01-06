INSERT INTO brands (id,name,nationId) VALUES
('14fg4po009','toyota','jp123'),
('476ythgvasq','nissan','jp123'),
('876yyytgv','mercedes-benz','ger123'),
('900jukli0','subaru','jp123'),
('56ihhgn58u8','peugeot','frc1234'),
('45thghjj600','aston martin','eng123');


INSERT INTO carCategories (id,name) VALUES
('899trfgh','roadster'),
('lms34t4','le mans'),
('rally1234','rally'),
('f123','formula 1');

INSERT INTO cars (id,model,brandId,version,categoryId,modelYear,color,price) VALUES
('54652fr344','supra','14fg4po009','z','899trfgh',2023,'red',130000),
('476ythgvasq','skyline gt-r','476ythgvasq','r34','899trfgh',2000,'blue',78000),
('58yhjut53bb','gt-one','14fg4po009','unique','lms34t4',1995,'red',1000000),
('489ignbghnn','clr','876yyytgv','unique','lms34t4',1999,'grey',1200000),
('898rgyrgdd','Impreza','900jukli0','wrc','rally1234',1999,'blue',280000),
('785gtg742',208,'56ihhgn58u8','wrx','rally1234',2015,'blue',120000),
('57gyhg47hh','amr21','45thghjj600','unique','f123',2021,'green',3000000);

INSERT INTO driverGroups (id,name) VALUES
('1347yf83','le mans'),
('3rdf4545','rally'),
('hjhjyjqer','formula 1'),
('f4t4t42vfg','citizen');

INSERT INTO nations (id,name) VALUES
('jp123','japan'),
('ger123','germany'),
('frc1234','france'),
('eng123','england');


INSERT INTO permissionsToBuy (id,driverGroupId,carCategoryId) VALUES
('4877756tfhh','f4t4t42vfg','899trfgh'),
('875hgntiekds','3rdf4545','rally1234'),
('34723dweawr','hjhjyjqer','f123'),
('57346111374gh','3rdf4545','899trfgh'),
('45gththjhh','hjhjyjqer','lms34t4'),
('4857gikk453yt','hjhjyjqer','899trfgh'),
('47121113f00','1347yf83','899trfgh'),
('11100119rhf','1347yf83','lms34t4');


