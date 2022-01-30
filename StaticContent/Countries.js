var countries = [
    { Capital: 'Kabul', Lat: 34.5328, Long: 69.1658, Country: 'Afghanistan', ABR: 'AF', ABR2: 'AFG', Capital_Local: 'Kābul', City_Pop: '3678034', Country_Pop: '1004993580', Primary: 'Primary' },
    { Capital: 'Tirana', Lat: 41.33, Long: 19.82, Country: 'Albania', ABR: 'AL', ABR2: 'ALB', Capital_Local: 'Tiranë', City_Pop: '418495', Country_Pop: '1008162156', Primary: 'Primary' },
    { Capital: 'Algiers', Lat: 36.7764, Long: 3.0586, Country: 'Algeria', ABR: 'DZ', ABR2: 'DZA', Capital_Local: 'Alger', City_Pop: '3415811', Country_Pop: '1012973369', Primary: 'Primary' },
    { Capital: 'Pago Pago', Lat: -14.274, Long: -170.7046, Country: 'American Samoa', ABR: 'AS', ABR2: 'ASM', Capital_Local: 'Pago Pago', City_Pop: '12576', Country_Pop: '1016976740', Primary: 'Primary' },
    { Capital: 'Andorra la Vella', Lat: 42.5, Long: 1.5, Country: 'Andorra', ABR: 'AD', ABR2: 'AND', Capital_Local: 'Andorra la Vella', City_Pop: '22151', Country_Pop: '1020828846', Primary: 'Primary' },
    { Capital: 'Luanda', Lat: -8.8383, Long: 13.2344, Country: 'Angola', ABR: 'AO', ABR2: 'AGO', Capital_Local: 'Luanda', City_Pop: '8417000', Country_Pop: '1024949724', Primary: 'Primary' },
    { Capital: 'The Valley', Lat: 18.2167, Long: -63.05, Country: 'Anguilla', ABR: 'AI', ABR2: 'AIA', Capital_Local: 'The Valley', City_Pop: 'N/A', Country_Pop: '1660698387', Primary: 'Primary' },
    { Capital: 'Saint John’s', Lat: 17.1211, Long: -61.8447, Country: 'Antigua And Barbuda', ABR: 'AG', ABR2: 'ATG', Capital_Local: 'Saint John', City_Pop: '21926', Country_Pop: '1028912067', Primary: 'Primary' },
    { Capital: 'Buenos Aires', Lat: -34.5997, Long: -58.3819, Country: 'Argentina', ABR: 'AR', ABR2: 'ARG', Capital_Local: 'Buenos Aires, Ciudad Autónoma de', City_Pop: '16157000', Country_Pop: '1032717330', Primary: 'Primary' },
    { Capital: 'Yerevan', Lat: 40.1814, Long: 44.5144, Country: 'Armenia', ABR: 'AM', ABR2: 'ARG', Capital_Local: 'Yerevan', City_Pop: '1075800', Country_Pop: '1051074169', Primary: 'Primary' },
    { Capital: 'Oranjestad', Lat: 12.5186, Long: -70.0358, Country: 'Aruba', ABR: 'AW', ABR2: 'ABW', Capital_Local: 'Oranjestad', City_Pop: '34980', Country_Pop: '1533513057', Primary: 'Primary' },
    { Capital: 'Canberra', Lat: -35.2931, Long: 149.1269, Country: 'Australia', ABR: 'AU', ABR2: 'AUS', Capital_Local: 'Australian Capital Territory', City_Pop: '426704', Country_Pop: '1036142029', Primary: 'Primary' },
    { Capital: 'Vienna', Lat: 48.2083, Long: 16.3731, Country: 'Austria', ABR: 'AT', ABR2: 'AUT', Capital_Local: 'Wien', City_Pop: '1911191', Country_Pop: '1040261752', Primary: 'Primary' },
    { Capital: 'Baku', Lat: 40.3667, Long: 49.8352, Country: 'Azerbaijan', ABR: 'AZ', ABR2: 'AZE', Capital_Local: 'Bakı', City_Pop: '2181800', Country_Pop: '1031946365', Primary: 'Primary' },
    { Capital: 'Nassau', Lat: 25.0667, Long: -77.3333, Country: 'Bahamas, The', ABR: 'BS', ABR2: 'BHS', Capital_Local: 'Nassau', City_Pop: '274400', Country_Pop: '1044318561', Primary: 'Primary' },
    { Capital: 'Manama', Lat: 26.225, Long: 50.5775, Country: 'Bahrain', ABR: 'BH', ABR2: 'BHR', Capital_Local: 'Al ‘Āşimah', City_Pop: '157474', Country_Pop: '1048989486', Primary: 'Primary' },
    { Capital: 'Dhaka', Lat: 23.7289, Long: 90.3944, Country: 'Bangladesh', ABR: 'BD', ABR2: 'BGD', Capital_Local: 'Dhaka', City_Pop: '15443000', Country_Pop: '1050529279', Primary: 'Primary' },
    { Capital: 'Bridgetown', Lat: 13.0975, Long: -59.6167, Country: 'Barbados', ABR: 'BB', ABR2: 'BRB', Capital_Local: 'Saint Michael', City_Pop: '110000', Country_Pop: '1052274244', Primary: 'Primary' },
    { Capital: 'Minsk', Lat: 53.9022, Long: 27.5618, Country: 'Belarus', ABR: 'BY', ABR2: 'BLR', Capital_Local: 'Minsk', City_Pop: '2009786', Country_Pop: '1112348503', Primary: 'Primary' },
    { Capital: 'Brussels', Lat: 50.8333, Long: 4.3333, Country: 'Belgium', ABR: 'BE', ABR2: 'BEL', Capital_Local: 'Brussels-Capital Region', City_Pop: '1743000', Country_Pop: '1056469830', Primary: 'Primary' },
    { Capital: 'Belmopan', Lat: 17.25, Long: -88.7675, Country: 'Belize', ABR: 'BZ', ABR2: 'BLZ', Capital_Local: 'Cayo', City_Pop: '17222', Country_Pop: '1084586375', Primary: 'Primary' },
    { Capital: 'Cotonou', Lat: 6.4, Long: 2.52, Country: 'Benin', ABR: 'BJ', ABR2: 'BEN', Capital_Local: 'Littoral', City_Pop: '762000', Country_Pop: '1204955174', Primary: 'Primary' },
    { Capital: 'Porto-Novo', Lat: 6.4833, Long: 2.6167, Country: 'Benin', ABR: 'BJ', ABR2: 'BEN', Capital_Local: 'Ouémé', City_Pop: '300000', Country_Pop: '1204172060', Primary: 'Secondary' },
    { Capital: 'Hamilton', Lat: 32.2942, Long: -64.7839, Country: 'Bermuda', ABR: 'BM', ABR2: 'BMU', Capital_Local: 'Hamilton', City_Pop: '52320', Country_Pop: '1060000000', Primary: 'Primary' },
    { Capital: 'Thimphu', Lat: 27.4833, Long: 89.6333, Country: 'Bhutan', ABR: 'BT', ABR2: 'BTN', Capital_Local: 'Thimphu', City_Pop: '104000', Country_Pop: '1064010361', Primary: 'Primary' },
    { Capital: 'La Paz', Lat: -16.4942, Long: -68.1475, Country: 'Bolivia', ABR: 'BO', ABR2: 'BOL', Capital_Local: 'La Paz', City_Pop: '2867504', Country_Pop: '1068000064', Primary: 'Primary' },
    { Capital: 'Sucre', Lat: -19.0431, Long: -65.2592, Country: 'Bolivia', ABR: 'BO', ABR2: 'BOL', Capital_Local: 'Chuquisaca', City_Pop: '300000', Country_Pop: '1068823873', Primary: 'Secondary' },
    { Capital: 'Sarajevo', Lat: 43.8667, Long: 18.4167, Country: 'Bosnia And Herzegovina', ABR: 'BA', ABR2: 'BIH', Capital_Local: 'Bosnia and Herzegovina, Federation of', City_Pop: '275524', Country_Pop: '1070966777', Primary: 'Primary' },
    { Capital: 'Gaborone', Lat: -24.6569, Long: 25.9086, Country: 'Botswana', ABR: 'BW', ABR2: 'BWA', Capital_Local: 'Gaborone', City_Pop: '231626', Country_Pop: '1072756768', Primary: 'Primary' },
    { Capital: 'Brasília', Lat: -15.7939, Long: -47.8828, Country: 'Brazil', ABR: 'BR', ABR2: 'BRA', Capital_Local: 'Distrito Federal', City_Pop: '3015268', Country_Pop: '1076144436', Primary: 'Primary' },
    { Capital: 'Bandar Seri Begawan', Lat: 4.9167, Long: 114.9167, Country: 'Brunei', ABR: 'BN', ABR2: 'BRN', Capital_Local: 'Brunei and Muara', City_Pop: '50000', Country_Pop: '1096465895', Primary: 'Primary' },
    { Capital: 'Sofia', Lat: 42.6979, Long: 23.3217, Country: 'Bulgaria', ABR: 'BG', ABR2: 'BGR', Capital_Local: 'Sofia-Grad', City_Pop: '1355142', Country_Pop: '1100762037', Primary: 'Primary' },
    { Capital: 'Ouagadougou', Lat: 12.3572, Long: -1.5353, Country: 'Burkina Faso', ABR: 'BF', ABR2: 'BFA', Capital_Local: 'Centre', City_Pop: '1626950', Country_Pop: '1854029208', Primary: 'Primary' },
    { Capital: 'Bujumbura', Lat: -3.3825, Long: 29.3611, Country: 'Burundi', ABR: 'BI', ABR2: 'BDI', Capital_Local: 'Bujumbura Mairie', City_Pop: '658859', Country_Pop: '1108101689', Primary: 'Primary' },
    { Capital: 'Gitega', Lat: -3.4264, Long: 29.9306, Country: 'Burundi', ABR: 'BI', ABR2: 'BDI', Capital_Local: 'Gitega', City_Pop: '41944', Country_Pop: '1108778000', Primary: 'Secondary' },
    { Capital: 'Praia', Lat: 14.9177, Long: -23.5092, Country: 'Cabo Verde', ABR: 'CV', ABR2: 'CPV', Capital_Local: 'Praia', City_Pop: '127832', Country_Pop: '1132398770', Primary: 'Primary' },
    { Capital: 'Phnom Penh', Lat: 11.5696, Long: 104.921, Country: 'Cambodia', ABR: 'KH', ABR2: 'KHM', Capital_Local: 'Phnom Penh', City_Pop: '2129371', Country_Pop: '1116260534', Primary: 'Primary' },
    { Capital: 'Yaoundé', Lat: 3.8578, Long: 11.5181, Country: 'Cameroon', ABR: 'CM', ABR2: 'CMR', Capital_Local: 'Centre', City_Pop: '2440462', Country_Pop: '1120298240', Primary: 'Primary' },
    { Capital: 'George Town', Lat: 19.2866, Long: -81.3744, Country: 'Cayman Islands', ABR: 'KY', ABR2: 'CYM', Capital_Local: 'George Town', City_Pop: '27704', Country_Pop: '1136159124', Primary: 'Primary' },
    { Capital: 'Bangui', Lat: 4.3732, Long: 18.5628, Country: 'Central African Republic', ABR: 'CF', ABR2: 'CAF', Capital_Local: 'Bangui', City_Pop: '889231', Country_Pop: '1140080881', Primary: 'Primary' },
    { Capital: 'N’Djamena', Lat: 12.11, Long: 15.05, Country: 'Chad', ABR: 'TD', ABR2: 'TCD', Capital_Local: 'Ville de N’Djaména', City_Pop: '1092066', Country_Pop: '1148708596', Primary: 'Primary' },
    { Capital: 'Santiago', Lat: -33.45, Long: -70.6667, Country: 'Chile', ABR: 'CL', ABR2: 'CHL', Capital_Local: 'Región Metropolitana', City_Pop: '7007000', Country_Pop: '1152554349', Primary: 'Primary' },
    { Capital: 'Beijing', Lat: 39.905, Long: 116.3914, Country: 'China', ABR: 'CN', ABR2: 'CHN', Capital_Local: 'Beijing', City_Pop: '19433000', Country_Pop: '1156228865', Primary: 'Primary' },
    { Capital: 'Flying Fish Cove', Lat: -10.4167, Long: 105.7167, Country: 'Christmas Island', ABR: 'CX', ABR2: 'CXR', Capital_Local: 'Flying Fish Cove', City_Pop: 'N/A', Country_Pop: '1162889600', Primary: 'Primary' },
    { Capital: 'Bogotá', Lat: 4.6126, Long: -74.0705, Country: 'Colombia', ABR: 'CO', ABR2: 'COL', Capital_Local: 'Bogotá', City_Pop: '9464000', Country_Pop: '1170483426', Primary: 'Primary' },
    { Capital: 'Moroni', Lat: -11.7036, Long: 43.2536, Country: 'Comoros', ABR: 'KM', ABR2: 'COM', Capital_Local: 'Grande Comore', City_Pop: '111329', Country_Pop: '1174793581', Primary: 'Primary' },
    { Capital: 'Brazzaville', Lat: -4.2667, Long: 15.2833, Country: 'Congo (Brazzaville)', ABR: 'CG', ABR2: 'COG', Capital_Local: 'Brazzaville', City_Pop: '1827000', Country_Pop: '1178340306', Primary: 'Primary' },
    { Capital: 'Kinshasa', Lat: -4.3233, Long: 15.3081, Country: 'Congo (Kinshasa)', ABR: 'CD', ABR2: 'COD', Capital_Local: 'Kinshasa', City_Pop: '13528000', Country_Pop: '1180000363', Primary: 'Primary' },
    { Capital: 'Avarua', Lat: -21.207, Long: -159.771, Country: 'Cook Islands', ABR: 'CK', ABR2: 'COK', Capital_Local: 'Avarua', City_Pop: '5445', Country_Pop: '1184217570', Primary: 'Primary' },
    { Capital: 'San José', Lat: 9.9333, Long: -84.0833, Country: 'Costa Rica', ABR: 'CR', ABR2: 'CRI', Capital_Local: 'San José', City_Pop: '288054', Country_Pop: '1188749877', Primary: 'Primary' },
    { Capital: 'Abidjan', Lat: 5.3364, Long: -4.0267, Country: 'Côte D’Ivoire', ABR: 'CI', ABR2: 'CIV', Capital_Local: 'Abidjan', City_Pop: '4980000', Country_Pop: '1384207980', Primary: 'Primary' },
    { Capital: 'Yamoussoukro', Lat: 6.8161, Long: -5.2742, Country: 'Côte D’Ivoire', ABR: 'CI', ABR2: 'CIV', Capital_Local: 'Yamoussoukro', City_Pop: '355573', Country_Pop: '1384683557', Primary: 'Secondary' },
    { Capital: 'Zagreb', Lat: 45.8, Long: 15.95, Country: 'Croatia', ABR: 'HR', ABR2: 'HRV', Capital_Local: 'Zagreb, Grad', City_Pop: '790017', Country_Pop: '1191233290', Primary: 'Primary' },
    { Capital: 'Havana', Lat: 23.1367, Long: -82.3589, Country: 'Cuba', ABR: 'CU', ABR2: 'CUB', Capital_Local: 'La Habana', City_Pop: '2141652', Country_Pop: '1192752771', Primary: 'Primary' },
    { Capital: 'Willemstad', Lat: 12.108, Long: -68.935, Country: 'Curaçao', ABR: 'CW', ABR2: 'CUW', Capital_Local: 'Willemstad', City_Pop: '150000', Country_Pop: '1531000000', Primary: 'Primary' },
    { Capital: 'Nicosia', Lat: 35.1725, Long: 33.365, Country: 'Cyprus', ABR: 'CY', ABR2: 'CYP', Capital_Local: 'Lefkosía', City_Pop: '330000', Country_Pop: '1196944155', Primary: 'Primary' },
    { Capital: 'Prague', Lat: 50.0833, Long: 14.4167, Country: 'Czechia', ABR: 'CZ', ABR2: 'CZE', Capital_Local: 'Praha, Hlavní Město', City_Pop: '1335084', Country_Pop: '1203744823', Primary: 'Primary' },
    { Capital: 'Copenhagen', Lat: 55.6761, Long: 12.5689, Country: 'Denmark', ABR: 'DK', ABR2: 'DNK', Capital_Local: 'Hovedstaden', City_Pop: '602481', Country_Pop: '1208763942', Primary: 'Primary' },
    { Capital: 'Djibouti', Lat: 11.595, Long: 43.1481, Country: 'Djibouti', ABR: 'DJ', ABR2: 'DJI', Capital_Local: 'Djibouti', City_Pop: '562000', Country_Pop: '1262028958', Primary: 'Primary' },
    { Capital: 'Roseau', Lat: 15.3, Long: -61.3833, Country: 'Dominica', ABR: 'DM', ABR2: 'DMA', Capital_Local: 'Saint George', City_Pop: '16582', Country_Pop: '1212060440', Primary: 'Primary' },
    { Capital: 'Santo Domingo', Lat: 18.4764, Long: -69.8933, Country: 'Dominican Republic', ABR: 'DO', ABR2: 'DOM', Capital_Local: 'Ozama', City_Pop: '2581827', Country_Pop: '1214636202', Primary: 'Primary' },
    { Capital: 'Quito', Lat: -0.2186, Long: -78.5097, Country: 'Ecuador', ABR: 'EC', ABR2: 'ECU', Capital_Local: 'Pichincha', City_Pop: '2011388', Country_Pop: '1218441993', Primary: 'Primary' },
    { Capital: 'Cairo', Lat: 30.0561, Long: 31.2394, Country: 'Egypt', ABR: 'EG', ABR2: 'EGY', Capital_Local: 'Al Qāhirah', City_Pop: '19372000', Country_Pop: '1818253931', Primary: 'Primary' },
    { Capital: 'San Salvador', Lat: 13.6989, Long: -89.1914, Country: 'El Salvador', ABR: 'SV', ABR2: 'SLV', Capital_Local: 'San Salvador', City_Pop: '567698', Country_Pop: '1222647454', Primary: 'Primary' },
    { Capital: 'Malabo', Lat: 3.7521, Long: 8.7737, Country: 'Equatorial Guinea', ABR: 'GQ', ABR2: 'GNQ', Capital_Local: 'Bioko Norte', City_Pop: '187302', Country_Pop: '1226861333', Primary: 'Primary' },
    { Capital: 'Asmara', Lat: 15.3333, Long: 38.9167, Country: 'Eritrea', ABR: 'ER', ABR2: 'ERI', Capital_Local: 'Ma’ākel', City_Pop: '963000', Country_Pop: '1232791236', Primary: 'Primary' },
    { Capital: 'Tallinn', Lat: 59.4372, Long: 24.745, Country: 'Estonia', ABR: 'EE', ABR2: 'EST', Capital_Local: 'Harjumaa', City_Pop: '438341', Country_Pop: '1233260021', Primary: 'Primary' },
    { Capital: 'Addis Ababa', Lat: 9.0272, Long: 38.7369, Country: 'Ethiopia', ABR: 'ET', ABR2: 'ETH', Capital_Local: 'Ādīs Ābeba', City_Pop: '3041002', Country_Pop: '1231824991', Primary: 'Primary' },
    { Capital: 'Stanley', Lat: -51.7, Long: -57.85, Country: 'Falkland Islands (Islas Malvinas)', ABR: 'FK', ABR2: 'FLK', Capital_Local: 'Stanley', City_Pop: '2213', Country_Pop: '1238780509', Primary: 'Primary' },
    { Capital: 'Tórshavn', Lat: 62, Long: -6.7833, Country: 'Faroe Islands', ABR: 'FO', ABR2: 'FRO', Capital_Local: 'Tórshavn', City_Pop: '13326', Country_Pop: '1234904517', Primary: 'Primary' },
    { Capital: 'Suva', Lat: -18.1333, Long: 178.4333, Country: 'Fiji', ABR: 'FJ', ABR2: 'FJI', Capital_Local: 'Rewa', City_Pop: '88271', Country_Pop: '1242615095', Primary: 'Primary' },
    { Capital: 'Helsinki', Lat: 60.1756, Long: 24.9342, Country: 'Finland', ABR: 'FI', ABR2: 'FIN', Capital_Local: 'Uusimaa', City_Pop: '642045', Country_Pop: '1246177997', Primary: 'Primary' },
    { Capital: 'Paris', Lat: 48.8566, Long: 2.3522, Country: 'France', ABR: 'FR', ABR2: 'FRA', Capital_Local: 'Île-de-France', City_Pop: '11020000', Country_Pop: '1250015082', Primary: 'Primary' },
    { Capital: 'Cayenne', Lat: 4.933, Long: -52.33, Country: 'French Guiana', ABR: 'GF', ABR2: 'GUF', Capital_Local: 'Cayenne', City_Pop: '61550', Country_Pop: '1254304969', Primary: 'Primary' },
    { Capital: 'Papeete', Lat: -17.5334, Long: -149.5667, Country: 'French Polynesia', ABR: 'PF', ABR2: 'PYF', Capital_Local: 'Îles du Vent', City_Pop: '131695', Country_Pop: '1258907380', Primary: 'Primary' },
    { Capital: 'Libreville', Lat: 0.3901, Long: 9.4544, Country: 'Gabon', ABR: 'GA', ABR2: 'GAB', Capital_Local: 'Estuaire', City_Pop: '797003', Country_Pop: '1266952885', Primary: 'Primary' },
    { Capital: 'Banjul', Lat: 13.4531, Long: -16.5775, Country: 'Gambia, The', ABR: 'GM', ABR2: 'GMB', Capital_Local: 'Banjul', City_Pop: '31356', Country_Pop: '1270723713', Primary: 'Primary' },
    { Capital: 'Gaza', Lat: 31.5069, Long: 34.456, Country: 'Gaza Strip', ABR: 'XG', ABR2: 'XGZ', Capital_Local: 'Gaza', City_Pop: 'N/A', Country_Pop: '1916116052', Primary: 'Primary' },
    { Capital: 'Tbilisi', Lat: 41.7225, Long: 44.7925, Country: 'Georgia', ABR: 'GE', ABR2: 'GEO', Capital_Local: 'Tbilisi', City_Pop: '1118035', Country_Pop: '1268203191', Primary: 'Primary' },
    { Capital: 'Berlin', Lat: 52.5167, Long: 13.3833, Country: 'Germany', ABR: 'DE', ABR2: 'DEU', Capital_Local: 'Berlin', City_Pop: '3644826', Country_Pop: '1276451290', Primary: 'Primary' },
    { Capital: 'Accra', Lat: 5.6037, Long: -0.187, Country: 'Ghana', ABR: 'GH', ABR2: 'GHA', Capital_Local: 'Greater Accra', City_Pop: '2291352', Country_Pop: '1288299415', Primary: 'Primary' },
    { Capital: 'Gibraltar', Lat: 36.1324, Long: -5.3781, Country: 'Gibraltar', ABR: 'GI', ABR2: 'GIB', Capital_Local: 'Gibraltar', City_Pop: '187083', Country_Pop: '1292385245', Primary: 'Primary' },
    { Capital: 'Athens', Lat: 37.9842, Long: 23.7281, Country: 'Greece', ABR: 'GR', ABR2: 'GRC', Capital_Local: 'Attikí', City_Pop: '664046', Country_Pop: '1300715560', Primary: 'Primary' },
    { Capital: 'Nuuk', Lat: 64.175, Long: -51.7333, Country: 'Greenland', ABR: 'GL', ABR2: 'GRL', Capital_Local: 'Sermersooq', City_Pop: '18326', Country_Pop: '1304028354', Primary: 'Primary' },
    { Capital: 'Saint George’s', Lat: 12.0444, Long: -61.7417, Country: 'Grenada', ABR: 'GD', ABR2: 'GRD', Capital_Local: 'Saint George', City_Pop: '4315', Country_Pop: '1308891766', Primary: 'Primary' },
    { Capital: 'Basse-Terre', Lat: 16, Long: -61.7167, Country: 'Guadeloupe', ABR: 'GP', ABR2: 'GLP', Capital_Local: 'Basse-Terre', City_Pop: 'N/A', Country_Pop: '1312938008', Primary: 'Primary' },
    { Capital: 'Hagåtña', Lat: 13.4745, Long: 144.7504, Country: 'Guam', ABR: 'GU', ABR2: 'GUM', Capital_Local: 'Hagåtña', City_Pop: '1051', Country_Pop: '1316937540', Primary: 'Primary' },
    { Capital: 'Guatemala City', Lat: 14.6099, Long: -90.5252, Country: 'Guatemala', ABR: 'GT', ABR2: 'GTM', Capital_Local: 'Guatemala', City_Pop: '2450212', Country_Pop: '1320197916', Primary: 'Primary' },
    { Capital: 'Conakry', Lat: 9.5092, Long: -13.7122, Country: 'Guinea', ABR: 'GN', ABR2: 'GIN', Capital_Local: 'Conakry', City_Pop: '1667864', Country_Pop: '1324568159', Primary: 'Primary' },
    { Capital: 'Bissau', Lat: 11.8592, Long: -15.5956, Country: 'Guinea-Bissau', ABR: 'GW', ABR2: 'GNB', Capital_Local: 'Bissau', City_Pop: '395954', Country_Pop: '1624168850', Primary: 'Primary' },
    { Capital: 'Georgetown', Lat: 6.7833, Long: -58.1667, Country: 'Guyana', ABR: 'GY', ABR2: 'GUY', Capital_Local: 'Demerara-Mahaica', City_Pop: '200500', Country_Pop: '1328160906', Primary: 'Primary' },
    { Capital: 'Port-au-Prince', Lat: 18.5425, Long: -72.3386, Country: 'Haiti', ABR: 'HT', ABR2: 'HTI', Capital_Local: 'Ouest', City_Pop: '987310', Country_Pop: '1332401940', Primary: 'Primary' },
    { Capital: 'Tegucigalpa', Lat: 14.0942, Long: -87.2067, Country: 'Honduras', ABR: 'HN', ABR2: 'HND', Capital_Local: 'Francisco Morazán', City_Pop: '1126534', Country_Pop: '1340344059', Primary: 'Primary' },
    { Capital: 'Hong Kong', Lat: 22.305, Long: 114.185, Country: 'Hong Kong', ABR: 'HK', ABR2: 'HKG', Capital_Local: 'Hong Kong', City_Pop: '7347000', Country_Pop: '1344982653', Primary: 'Primary' },
    { Capital: 'Budapest', Lat: 47.4983, Long: 19.0408, Country: 'Hungary', ABR: 'HU', ABR2: 'HUN', Capital_Local: 'Budapest', City_Pop: '1752286', Country_Pop: '1348611435', Primary: 'Primary' },
    { Capital: 'Reykjavík', Lat: 64.1475, Long: -21.935, Country: 'Iceland', ABR: 'IS', ABR2: 'ISL', Capital_Local: 'Reykjavík', City_Pop: '128793', Country_Pop: '1352327190', Primary: 'Primary' },
    { Capital: 'New Delhi', Lat: 28.7, Long: 77.2, Country: 'India', ABR: 'IN', ABR2: 'IND', Capital_Local: 'Delhi', City_Pop: '142004', Country_Pop: '1356215164', Primary: 'Primary' },
    { Capital: 'Jakarta', Lat: -6.2146, Long: 106.8451, Country: 'Indonesia', ABR: 'ID', ABR2: 'IDN', Capital_Local: 'Jakarta', City_Pop: '34540000', Country_Pop: '1360771077', Primary: 'Primary' },
    { Capital: 'Tehran', Lat: 35.7, Long: 51.4167, Country: 'Iran', ABR: 'IR', ABR2: 'IRN', Capital_Local: 'Tehrān', City_Pop: '13633000', Country_Pop: '1364305026', Primary: 'Primary' },
    { Capital: 'Baghdad', Lat: 33.35, Long: 44.4167, Country: 'Iraq', ABR: 'IQ', ABR2: 'IRQ', Capital_Local: 'Baghdād', City_Pop: '5796000', Country_Pop: '1368596238', Primary: 'Primary' },
    { Capital: 'Dublin', Lat: 53.3497, Long: -6.2603, Country: 'Ireland', ABR: 'IE', ABR2: 'IRL', Capital_Local: 'Dublin', City_Pop: '1173179', Country_Pop: '1372595407', Primary: 'Primary' },
    { Capital: 'Douglas', Lat: 54.15, Long: -4.4819, Country: 'Isle Of Man', ABR: 'IM', ABR2: 'IMN', Capital_Local: 'Douglas', City_Pop: '35854', Country_Pop: '1833688345', Primary: 'Primary' },
    { Capital: 'Jerusalem', Lat: 31.7833, Long: 35.2167, Country: 'Israel', ABR: 'IL', ABR2: 'ISR', Capital_Local: 'Southern', City_Pop: '919438', Country_Pop: '1376261644', Primary: 'Primary' },
    { Capital: 'Rome', Lat: 41.8931, Long: 12.4828, Country: 'Italy', ABR: 'IT', ABR2: 'ITA', Capital_Local: 'Lazio', City_Pop: '2872800', Country_Pop: '1380382862', Primary: 'Primary' },
    { Capital: 'Kingston', Lat: 17.9714, Long: -76.7931, Country: 'Jamaica', ABR: 'JM', ABR2: 'JAM', Capital_Local: 'Kingston', City_Pop: '580000', Country_Pop: '1388709177', Primary: 'Primary' },
    { Capital: 'Tokyo', Lat: 35.6897, Long: 139.6922, Country: 'Japan', ABR: 'JP', ABR2: 'JPN', Capital_Local: 'Tōkyō', City_Pop: '37977000', Country_Pop: '1392685764', Primary: 'Primary' },
    { Capital: 'Saint Helier', Lat: 49.1833, Long: -2.1167, Country: 'Jersey', ABR: 'JE', ABR2: 'JEY', Capital_Local: 'Saint Helier', City_Pop: '33522', Country_Pop: '1832490253', Primary: 'Primary' },
    { Capital: 'Amman', Lat: 31.95, Long: 35.9333, Country: 'Jordan', ABR: 'JO', ABR2: 'JOR', Capital_Local: 'Al ‘Āşimah', City_Pop: '4007526', Country_Pop: '1400522593', Primary: 'Primary' },
    { Capital: 'Nur-Sultan', Lat: 51.1333, Long: 71.4333, Country: 'Kazakhstan', ABR: 'KZ', ABR2: 'KAZ', Capital_Local: 'Astana', City_Pop: '1078362', Country_Pop: '1398516045', Primary: 'Primary' },
    { Capital: 'Nairobi', Lat: -1.2864, Long: 36.8172, Country: 'Kenya', ABR: 'KE', ABR2: 'KEN', Capital_Local: 'Nairobi City', City_Pop: '5545000', Country_Pop: '1404000661', Primary: 'Primary' },
    { Capital: 'Tarawa', Lat: 1.3382, Long: 173.0176, Country: 'Kiribati', ABR: 'KI', ABR2: 'KIR', Capital_Local: 'Tarawa', City_Pop: '28802', Country_Pop: '1296152641', Primary: 'Primary' },
    { Capital: 'Pyongyang', Lat: 39.03, Long: 125.73, Country: 'Korea, North', ABR: 'KP', ABR2: 'PRK', Capital_Local: 'P’yŏngyang', City_Pop: '2863000', Country_Pop: '1408738594', Primary: 'Primary' },
    { Capital: 'Seoul', Lat: 37.56, Long: 126.99, Country: 'Korea, South', ABR: 'KR', ABR2: 'KOR', Capital_Local: 'Seoul', City_Pop: '21794000', Country_Pop: '1410836482', Primary: 'Primary' },
    { Capital: 'Pristina', Lat: 42.6667, Long: 21.1667, Country: 'Kosovo', ABR: 'XK', ABR2: 'XKS', Capital_Local: 'Prishtinë', City_Pop: '204725', Country_Pop: '1901760068', Primary: 'Primary' },
    { Capital: 'Kuwait City', Lat: 29.375, Long: 47.98, Country: 'Kuwait', ABR: 'KW', ABR2: 'KWT', Capital_Local: 'Al ‘Āşimah', City_Pop: '2989000', Country_Pop: '1414102075', Primary: 'Primary' },
    { Capital: 'Bishkek', Lat: 42.8667, Long: 74.5667, Country: 'Kyrgyzstan', ABR: 'KG', ABR2: 'KGZ', Capital_Local: 'Bishkek', City_Pop: '1027200', Country_Pop: '1417191971', Primary: 'Primary' },
    { Capital: 'Vientiane', Lat: 17.9667, Long: 102.6, Country: 'Laos', ABR: 'LA', ABR2: 'LAO', Capital_Local: 'Viangchan', City_Pop: '760000', Country_Pop: '1418732714', Primary: 'Primary' },
    { Capital: 'Riga', Lat: 56.9475, Long: 24.1069, Country: 'Latvia', ABR: 'LV', ABR2: 'LVA', Capital_Local: 'Rīga', City_Pop: '614618', Country_Pop: '1428586192', Primary: 'Primary' },
    { Capital: 'Beirut', Lat: 33.8869, Long: 35.5131, Country: 'Lebanon', ABR: 'LB', ABR2: 'LBN', Capital_Local: 'Beyrouth', City_Pop: '361366', Country_Pop: '1422847713', Primary: 'Primary' },
    { Capital: 'Maseru', Lat: -29.31, Long: 27.48, Country: 'Lesotho', ABR: 'LS', ABR2: 'LSO', Capital_Local: 'Maseru', City_Pop: '330790', Country_Pop: '1426977668', Primary: 'Primary' },
    { Capital: 'Monrovia', Lat: 6.3106, Long: -10.8047, Country: 'Liberia', ABR: 'LR', ABR2: 'LBR', Capital_Local: 'Montserrado', City_Pop: '1021762', Country_Pop: '1430477826', Primary: 'Primary' },
    { Capital: 'Tripoli', Lat: 32.8752, Long: 13.1875, Country: 'Libya', ABR: 'LY', ABR2: 'LBY', Capital_Local: 'Ţarābulus', City_Pop: '1126000', Country_Pop: '1434201852', Primary: 'Primary' },
    { Capital: 'Vaduz', Lat: 47.1415, Long: 9.5215, Country: 'Liechtenstein', ABR: 'LI', ABR2: 'LIE', Capital_Local: 'Vaduz', City_Pop: '36281', Country_Pop: '1438317747', Primary: 'Primary' },
    { Capital: 'Vilnius', Lat: 54.6833, Long: 25.2833, Country: 'Lithuania', ABR: 'LT', ABR2: 'LTU', Capital_Local: 'Vilniaus Miestas', City_Pop: '574147', Country_Pop: '1440887149', Primary: 'Primary' },
    { Capital: 'Luxembourg', Lat: 49.6106, Long: 6.1328, Country: 'Luxembourg', ABR: 'LU', ABR2: 'LUX', Capital_Local: 'Luxembourg', City_Pop: '124509', Country_Pop: '1442262731', Primary: 'Primary' },
    { Capital: 'Skopje', Lat: 41.9833, Long: 21.4333, Country: 'Macedonia', ABR: 'MK', ABR2: 'MKD', Capital_Local: 'Skopje', City_Pop: '640000', Country_Pop: '1807600615', Primary: 'Primary' },
    { Capital: 'Antananarivo', Lat: -18.9386, Long: 47.5214, Country: 'Madagascar', ABR: 'MG', ABR2: 'MDG', Capital_Local: 'Antananarivo', City_Pop: '2610000', Country_Pop: '1450978461', Primary: 'Primary' },
    { Capital: 'Lilongwe', Lat: -13.9833, Long: 33.7833, Country: 'Malawi', ABR: 'MW', ABR2: 'MWI', Capital_Local: 'Lilongwe', City_Pop: '781538', Country_Pop: '1454688499', Primary: 'Primary' },
    { Capital: 'Kuala Lumpur', Lat: 3.1478, Long: 101.6953, Country: 'Malaysia', ABR: 'MY', ABR2: 'MYS', Capital_Local: 'Kuala Lumpur', City_Pop: '8285000', Country_Pop: '1458988644', Primary: 'Primary' },
    { Capital: 'Male', Lat: 4.175, Long: 73.5083, Country: 'Maldives', ABR: 'MV', ABR2: 'MDV', Capital_Local: 'Maale', City_Pop: '133019', Country_Pop: '1462441685', Primary: 'Primary' },
    { Capital: 'Bamako', Lat: 12.6458, Long: -7.9922, Country: 'Mali', ABR: 'ML', ABR2: 'MLI', Capital_Local: 'Bamako', City_Pop: '2009109', Country_Pop: '1466965925', Primary: 'Primary' },
    { Capital: 'Valletta', Lat: 35.8978, Long: 14.5125, Country: 'Malta', ABR: 'MT', ABR2: 'MLT', Capital_Local: 'Valletta', City_Pop: '6444', Country_Pop: '1470574399', Primary: 'Primary' },
    { Capital: 'Majuro', Lat: 7.0918, Long: 171.3802, Country: 'Marshall Islands', ABR: 'MH', ABR2: 'MHL', Capital_Local: 'Majuro', City_Pop: '30000', Country_Pop: '1584000000', Primary: 'Primary' },
    { Capital: 'Fort-de-France', Lat: 14.6104, Long: -61.08, Country: 'Martinique', ABR: 'MQ', ABR2: 'MTQ', Capital_Local: 'Fort-de-France', City_Pop: '253995', Country_Pop: '1474969110', Primary: 'Primary' },
    { Capital: 'Nouakchott', Lat: 18.0858, Long: -15.9785, Country: 'Mauritania', ABR: 'MR', ABR2: 'MRT', Capital_Local: 'Nouakchott', City_Pop: '1077169', Country_Pop: '1478414984', Primary: 'Primary' },
    { Capital: 'Port Louis', Lat: -20.1667, Long: 57.5, Country: 'Mauritius', ABR: 'MU', ABR2: 'MUS', Capital_Local: 'Port Louis', City_Pop: '149194', Country_Pop: '1480131261', Primary: 'Primary' },
    { Capital: 'Mamoudzou', Lat: -12.7871, Long: 45.275, Country: 'Mayotte', ABR: 'YT', ABR2: 'MYT', Capital_Local: 'Mamoudzou', City_Pop: '32057', Country_Pop: '1175099654', Primary: 'Primary' },
    { Capital: 'Mexico City', Lat: 19.4333, Long: -99.1333, Country: 'Mexico', ABR: 'MX', ABR2: 'MEX', Capital_Local: 'Ciudad de México', City_Pop: '20996000', Country_Pop: '1484247881', Primary: 'Primary' },
    { Capital: 'Palikir', Lat: 6.9178, Long: 158.185, Country: 'Micronesia, Federated States Of', ABR: 'FM', ABR2: 'FSM', Capital_Local: 'Pohnpei', City_Pop: '6227', Country_Pop: '1583008885', Primary: 'Primary' },
    { Capital: 'Chisinau', Lat: 47.0228, Long: 28.8353, Country: 'Moldova', ABR: 'MD', ABR2: 'MDA', Capital_Local: 'Chişinău', City_Pop: '639000', Country_Pop: '1498011437', Primary: 'Primary' },
    { Capital: 'Monaco', Lat: 43.7396, Long: 7.4069, Country: 'Monaco', ABR: 'MC', ABR2: 'MCO', Capital_Local: 'Monaco', City_Pop: '36371', Country_Pop: '1492854256', Primary: 'Primary' },
    { Capital: 'Ulaanbaatar', Lat: 47.9203, Long: 106.9172, Country: 'Mongolia', ABR: 'MN', ABR2: 'MNG', Capital_Local: 'Ulaanbaatar', City_Pop: '1396288', Country_Pop: '1496024767', Primary: 'Primary' },
    { Capital: 'Podgorica', Lat: 42.4397, Long: 19.2661, Country: 'Montenegro', ABR: 'ME', ABR2: 'MNE', Capital_Local: 'Podgorica', City_Pop: '174515', Country_Pop: '1499454516', Primary: 'Primary' },
    { Capital: 'Rabat', Lat: 34.0253, Long: -6.8361, Country: 'Morocco', ABR: 'MA', ABR2: 'MAR', Capital_Local: 'Rabat-Salé-Kénitra', City_Pop: '572717', Country_Pop: '1504023252', Primary: 'Primary' },
    { Capital: 'Tifariti', Lat: 26.0928, Long: -10.6089, Country: 'Morocco', ABR: 'MA', ABR2: 'MAR', Capital_Local: 'Tifariti', City_Pop: 'N/A', Country_Pop: '1504999990', Primary: 'Secondary' },
    { Capital: 'Maputo', Lat: -25.9153, Long: 32.5764, Country: 'Mozambique', ABR: 'MZ', ABR2: 'MOZ', Capital_Local: 'Maputo', City_Pop: '1191613', Country_Pop: '1508074843', Primary: 'Primary' },
    { Capital: 'Rangoon', Lat: 16.8, Long: 96.15, Country: 'Myanmar', ABR: 'MM', ABR2: 'MMR', Capital_Local: 'Yangon', City_Pop: '5430000', Country_Pop: '1104616656', Primary: 'Primary' },
    { Capital: 'Nay Pyi Taw', Lat: 19.7475, Long: 96.115, Country: 'Myanmar', ABR: 'MM', ABR2: 'MMR', Capital_Local: 'Nay Pyi Taw', City_Pop: '1160242', Country_Pop: '1104838105', Primary: 'Secondary' },
    { Capital: 'Windhoek', Lat: -22.57, Long: 17.0836, Country: 'Namibia', ABR: 'NA', ABR2: 'NAM', Capital_Local: 'Khomas', City_Pop: '322500', Country_Pop: '1516802003', Primary: 'Primary' },
    { Capital: 'Kathmandu', Lat: 27.7167, Long: 85.3667, Country: 'Nepal', ABR: 'NP', ABR2: 'NPL', Capital_Local: 'Bāgmatī', City_Pop: '975453', Country_Pop: '1524589448', Primary: 'Primary' },
    { Capital: 'The Hague', Lat: 52.0767, Long: 4.2986, Country: 'Netherlands', ABR: 'NL', ABR2: 'NLD', Capital_Local: 'Zuid-Holland', City_Pop: '1406000', Country_Pop: '1528799905', Primary: 'Primary' },
    { Capital: 'Amsterdam', Lat: 52.3667, Long: 4.8833, Country: 'Netherlands', ABR: 'NL', ABR2: 'NLD', Capital_Local: 'Noord-Holland', City_Pop: '862965', Country_Pop: '1528355309', Primary: 'Secondary' },
    { Capital: 'Nouméa', Lat: -22.2625, Long: 166.4443, Country: 'New Caledonia', ABR: 'NC', ABR2: 'NCL', Capital_Local: 'Province Sud', City_Pop: '93060', Country_Pop: '1540958092', Primary: 'Primary' },
    { Capital: 'Wellington', Lat: -41.2889, Long: 174.7772, Country: 'New Zealand', ABR: 'NZ', ABR2: 'NZL', Capital_Local: 'Wellington', City_Pop: '418500', Country_Pop: '1554772152', Primary: 'Primary' },
    { Capital: 'Managua', Lat: 12.15, Long: -86.2667, Country: 'Nicaragua', ABR: 'NI', ABR2: 'NIC', Capital_Local: 'Managua', City_Pop: '1028808', Country_Pop: '1558296252', Primary: 'Primary' },
    { Capital: 'Niamey', Lat: 13.5086, Long: 2.1111, Country: 'Niger', ABR: 'NE', ABR2: 'NER', Capital_Local: 'Niamey', City_Pop: '1026848', Country_Pop: '1562932886', Primary: 'Primary' },
    { Capital: 'Abuja', Lat: 9.0556, Long: 7.4914, Country: 'Nigeria', ABR: 'NG', ABR2: 'NGA', Capital_Local: 'Federal Capital Territory', City_Pop: '1235880', Country_Pop: '1566342270', Primary: 'Primary' },
    { Capital: 'Alofi', Lat: -19.056, Long: -169.921, Country: 'Niue', ABR: 'NU', ABR2: 'NIU', Capital_Local: 'Alofi', City_Pop: '1611', Country_Pop: '1570882835', Primary: 'Primary' },
    { Capital: 'Kingston', Lat: -29.0569, Long: 167.9617, Country: 'Norfolk Island', ABR: 'NF', ABR2: 'NFK', Capital_Local: 'Kingston', City_Pop: 'N/A', Country_Pop: '1574121434', Primary: 'Primary' },
    { Capital: 'Capitol Hill', Lat: 15.2137, Long: 145.7546, Country: 'Northern Mariana Islands', ABR: 'MP', ABR2: 'MNP', Capital_Local: 'Capitol Hill', City_Pop: '2500', Country_Pop: '1580556972', Primary: 'Primary' },
    { Capital: 'Oslo', Lat: 59.9111, Long: 10.7528, Country: 'Norway', ABR: 'NO', ABR2: 'NOR', Capital_Local: 'Oslo', City_Pop: '693494', Country_Pop: '1578324706', Primary: 'Primary' },
    { Capital: 'Muscat', Lat: 23.6139, Long: 58.5922, Country: 'Oman', ABR: 'OM', ABR2: 'OMN', Capital_Local: 'Masqaţ', City_Pop: '1421409', Country_Pop: '1512035506', Primary: 'Primary' },
    { Capital: 'Islamabad', Lat: 33.6989, Long: 73.0369, Country: 'Pakistan', ABR: 'PK', ABR2: 'PAK', Capital_Local: 'Islāmābād', City_Pop: '1014825', Country_Pop: '1586306717', Primary: 'Primary' },
    { Capital: 'Ngerulmud', Lat: 7.5006, Long: 134.6242, Country: 'Palau', ABR: 'PW', ABR2: 'PLW', Capital_Local: 'Melekeok', City_Pop: 'N/A', Country_Pop: '1585525081', Primary: 'Primary' },
    { Capital: 'Panama City', Lat: 9, Long: -79.5, Country: 'Panama', ABR: 'PA', ABR2: 'PAN', Capital_Local: 'Panamá', City_Pop: '880691', Country_Pop: '1591672475', Primary: 'Primary' },
    { Capital: 'Port Moresby', Lat: -9.4789, Long: 147.1494, Country: 'Papua New Guinea', ABR: 'PG', ABR2: 'PNG', Capital_Local: 'National Capital', City_Pop: '364125', Country_Pop: '1598685395', Primary: 'Primary' },
    { Capital: 'Asunción', Lat: -25.3, Long: -57.6333, Country: 'Paraguay', ABR: 'PY', ABR2: 'PRY', Capital_Local: 'Asunción', City_Pop: '1870000', Country_Pop: '1600057911', Primary: 'Primary' },
    { Capital: 'Lima', Lat: -12.05, Long: -77.0333, Country: 'Peru', ABR: 'PE', ABR2: 'PER', Capital_Local: 'Lima', City_Pop: '9848000', Country_Pop: '1604728603', Primary: 'Primary' },
    { Capital: 'Manila', Lat: 14.6, Long: 120.9833, Country: 'Philippines', ABR: 'PH', ABR2: 'PHL', Capital_Local: 'Manila', City_Pop: '23088000', Country_Pop: '1608618140', Primary: 'Primary' },
    { Capital: 'Adamstown', Lat: -25.0667, Long: -130.0833, Country: 'Pitcairn Islands', ABR: 'PN', ABR2: 'PCN', Capital_Local: 'Adamstown', City_Pop: 'N/A', Country_Pop: '1612000000', Primary: 'Primary' },
    { Capital: 'Warsaw', Lat: 52.2167, Long: 21.0333, Country: 'Poland', ABR: 'PL', ABR2: 'POL', Capital_Local: 'Mazowieckie', City_Pop: '1790658', Country_Pop: '1616024847', Primary: 'Primary' },
    { Capital: 'Lisbon', Lat: 38.7452, Long: -9.1604, Country: 'Portugal', ABR: 'PT', ABR2: 'PRT', Capital_Local: 'Lisboa', City_Pop: '506654', Country_Pop: '1620619017', Primary: 'Primary' },
    { Capital: 'Doha', Lat: 25.3, Long: 51.5333, Country: 'Qatar', ABR: 'QA', ABR2: 'QAT', Capital_Local: 'Ad Dawḩah', City_Pop: '1312947', Country_Pop: '1634459660', Primary: 'Primary' },
    { Capital: 'Saint-Denis', Lat: -20.8789, Long: 55.4481, Country: 'Reunion', ABR: 'RE', ABR2: 'REU', Capital_Local: 'Saint-Denis', City_Pop: '190047', Country_Pop: '1638024662', Primary: 'Primary' },
    { Capital: 'Bucharest', Lat: 44.4, Long: 26.0833, Country: 'Romania', ABR: 'RO', ABR2: 'ROU', Capital_Local: 'Bucureşti', City_Pop: '1883425', Country_Pop: '1642414442', Primary: 'Primary' },
    { Capital: 'Moscow', Lat: 55.7558, Long: 37.6178, Country: 'Russia', ABR: 'RU', ABR2: 'RUS', Capital_Local: 'Moskva', City_Pop: '17125000', Country_Pop: '1643318494', Primary: 'Primary' },
    { Capital: 'Kigali', Lat: -1.9536, Long: 30.0606, Country: 'Rwanda', ABR: 'RW', ABR2: 'RWA', Capital_Local: 'Kigali', City_Pop: '1156663', Country_Pop: '1646923541', Primary: 'Primary' },
    { Capital: 'Gustavia', Lat: 17.8958, Long: -62.8508, Country: 'Saint Barthelemy', ABR: 'BL', ABR2: 'BLM', Capital_Local: 'Gustavia', City_Pop: 'N/A', Country_Pop: '1652681565', Primary: 'Primary' },
    { Capital: 'Jamestown', Lat: -15.9251, Long: -5.7179, Country: 'Saint Helena, Ascension, And Tristan Da Cunha', ABR: 'SH', ABR2: 'SHN', Capital_Local: 'Saint Helena', City_Pop: '714', Country_Pop: '1654761576', Primary: 'Primary' },
    { Capital: 'Basseterre', Lat: 17.2983, Long: -62.7342, Country: 'Saint Kitts And Nevis', ABR: 'KN', ABR2: 'KNA', Capital_Local: 'Saint George Basseterre', City_Pop: '13220', Country_Pop: '1659198919', Primary: 'Primary' },
    { Capital: 'Castries', Lat: 14.0167, Long: -60.9833, Country: 'Saint Lucia', ABR: 'LC', ABR2: 'LCA', Capital_Local: 'Castries', City_Pop: '70000', Country_Pop: '1662922505', Primary: 'Primary' },
    { Capital: 'Marigot', Lat: 18.0706, Long: -63.0847, Country: 'Saint Martin', ABR: 'MF', ABR2: 'MAF', Capital_Local: 'Marigot', City_Pop: 'N/A', Country_Pop: '1663133172', Primary: 'Primary' },
    { Capital: 'Saint-Pierre', Lat: 46.7811, Long: -56.1764, Country: 'Saint Pierre And Miquelon', ABR: 'PM', ABR2: 'SPM', Capital_Local: 'Saint-Pierre', City_Pop: 'N/A', Country_Pop: '1666340272', Primary: 'Primary' },
    { Capital: 'Kingstown', Lat: 13.1667, Long: -61.2333, Country: 'Saint Vincent And The Grenadines', ABR: 'VC', ABR2: 'VCT', Capital_Local: 'Saint George', City_Pop: '25000', Country_Pop: '1670376659', Primary: 'Primary' },
    { Capital: 'Apia', Lat: -13.8333, Long: -171.8333, Country: 'Samoa', ABR: 'WS', ABR2: 'WSM', Capital_Local: 'Tuamasaga', City_Pop: '37708', Country_Pop: '1882489296', Primary: 'Primary' },
    { Capital: 'San Marino', Lat: 43.932, Long: 12.4484, Country: 'San Marino', ABR: 'SM', ABR2: 'SMR', Capital_Local: 'San Marino Città', City_Pop: '4040', Country_Pop: '1674741947', Primary: 'Primary' },
    { Capital: 'São Tomé', Lat: 0.3333, Long: 6.7333, Country: 'Sao Tome And Principe', ABR: 'ST', ABR2: 'STP', Capital_Local: 'São Tomé', City_Pop: '56166', Country_Pop: '1678301324', Primary: 'Primary' },
    { Capital: 'Riyadh', Lat: 24.65, Long: 46.71, Country: 'Saudi Arabia', ABR: 'SA', ABR2: 'SAU', Capital_Local: 'Ar Riyāḑ', City_Pop: '6881000', Country_Pop: '1682999334', Primary: 'Primary' },
    { Capital: 'Dakar', Lat: 14.7319, Long: -17.4572, Country: 'Senegal', ABR: 'SN', ABR2: 'SEN', Capital_Local: 'Dakar', City_Pop: '1146053', Country_Pop: '1686604760', Primary: 'Primary' },
    { Capital: 'Belgrade', Lat: 44.8167, Long: 20.4667, Country: 'Serbia', ABR: 'RS', ABR2: 'SRB', Capital_Local: 'Beograd', City_Pop: '1378682', Country_Pop: '1688374696', Primary: 'Primary' },
    { Capital: 'Victoria', Lat: -4.6236, Long: 55.4544, Country: 'Seychelles', ABR: 'SC', ABR2: 'SYC', Capital_Local: 'English River', City_Pop: '26450', Country_Pop: '1690193579', Primary: 'Primary' },
    { Capital: 'Freetown', Lat: 8.4833, Long: -13.2331, Country: 'Sierra Leone', ABR: 'SL', ABR2: 'SLE', Capital_Local: 'Western Area', City_Pop: '951000', Country_Pop: '1694085071', Primary: 'Primary' },
    { Capital: 'Singapore', Lat: 1.3, Long: 103.8, Country: 'Singapore', ABR: 'SG', ABR2: 'SGP', Capital_Local: 'Central Singapore', City_Pop: '5745000', Country_Pop: '1702341327', Primary: 'Primary' },
    { Capital: 'Philipsburg', Lat: 18.0256, Long: -63.0492, Country: 'Sint Maarten', ABR: 'SX', ABR2: 'SXM', Capital_Local: 'Philipsburg', City_Pop: 'N/A', Country_Pop: '1534859858', Primary: 'Primary' },
    { Capital: 'Bratislava', Lat: 48.1447, Long: 17.1128, Country: 'Slovakia', ABR: 'SK', ABR2: 'SVK', Capital_Local: 'Bratislavský', City_Pop: '429564', Country_Pop: '1703195001', Primary: 'Primary' },
    { Capital: 'Ljubljana', Lat: 46.05, Long: 14.5167, Country: 'Slovenia', ABR: 'SI', ABR2: 'SVN', Capital_Local: 'Ljubljana', City_Pop: '286745', Country_Pop: '1705917455', Primary: 'Primary' },
    { Capital: 'Honiara', Lat: -9.4333, Long: 159.95, Country: 'Solomon Islands', ABR: 'SB', ABR2: 'SLB', Capital_Local: 'Honiara', City_Pop: '84520', Country_Pop: '1090737486', Primary: 'Primary' },
    { Capital: 'Mogadishu', Lat: 2.0408, Long: 45.3425, Country: 'Somalia', ABR: 'SO', ABR2: 'SOM', Capital_Local: 'Banaadir', City_Pop: '2120000', Country_Pop: '1706893395', Primary: 'Primary' },
    { Capital: 'Pretoria', Lat: -25.7464, Long: 28.1881, Country: 'South Africa', ABR: 'ZA', ABR2: 'ZAF', Capital_Local: 'Gauteng', City_Pop: '741651', Country_Pop: '1710176249', Primary: 'Primary' },
    { Capital: 'Cape Town', Lat: -33.925, Long: 18.425, Country: 'South Africa', ABR: 'ZA', ABR2: 'ZAF', Capital_Local: 'Western Cape', City_Pop: '433688', Country_Pop: '1710680650', Primary: 'Secondary' },
    { Capital: 'Bloemfontein', Lat: -29.1, Long: 26.2167, Country: 'South Africa', ABR: 'ZA', ABR2: 'ZAF', Capital_Local: 'Free State', City_Pop: '256185', Country_Pop: '1710495933', Primary: 'Secondary' },
    { Capital: 'Juba', Lat: 4.85, Long: 31.6, Country: 'South Sudan', ABR: 'SS', ABR2: 'SSD', Capital_Local: 'Central Equatoria', City_Pop: '372410', Country_Pop: '1728444337', Primary: 'Primary' },
    { Capital: 'Madrid', Lat: 40.4167, Long: -3.7167, Country: 'Spain', ABR: 'ES', ABR2: 'ESP', Capital_Local: 'Madrid', City_Pop: '6026000', Country_Pop: '1724616994', Primary: 'Primary' },
    { Capital: 'Colombo', Lat: 6.9167, Long: 79.8333, Country: 'Sri Lanka', ABR: 'LK', ABR2: 'LKA', Capital_Local: 'Western', City_Pop: '752993', Country_Pop: '1144251314', Primary: 'Primary' },
    { Capital: 'Sri Jayewardenepura Kotte', Lat: 6.9, Long: 79.9164, Country: 'Sri Lanka', ABR: 'LK', ABR2: 'LKA', Capital_Local: 'Western', City_Pop: '115826', Country_Pop: '1144239330', Primary: 'Secondary' },
    { Capital: 'Khartoum', Lat: 15.6031, Long: 32.5265, Country: 'Sudan', ABR: 'SD', ABR2: 'SDN', Capital_Local: 'Khartoum', City_Pop: '7282000', Country_Pop: '1729268475', Primary: 'Primary' },
    { Capital: 'Paramaribo', Lat: 5.8667, Long: -55.1667, Country: 'Suriname', ABR: 'SR', ABR2: 'SUR', Capital_Local: 'Paramaribo', City_Pop: '223757', Country_Pop: '1740518660', Primary: 'Primary' },
    { Capital: 'Longyearbyen', Lat: 78.2167, Long: 15.6333, Country: 'Svalbard', ABR: 'XR', ABR2: 'XSV', Capital_Local: 'Longyearbyen', City_Pop: 'N/A', Country_Pop: '1930654114', Primary: 'Primary' },
    { Capital: 'Mbabane', Lat: -26.3208, Long: 31.1617, Country: 'Swaziland', ABR: 'SZ', ABR2: 'SWZ', Capital_Local: 'Hhohho', City_Pop: '94874', Country_Pop: '1748811945', Primary: 'Primary' },
    { Capital: 'Lobamba', Lat: -26.4465, Long: 31.2064, Country: 'Swaziland', ABR: 'SZ', ABR2: 'SWZ', Capital_Local: 'Hhohho', City_Pop: '5800', Country_Pop: '1748963140', Primary: 'Secondary' },
    { Capital: 'Stockholm', Lat: 59.3294, Long: 18.0686, Country: 'Sweden', ABR: 'SE', ABR2: 'SWE', Capital_Local: 'Stockholm', City_Pop: '972647', Country_Pop: '1752425602', Primary: 'Primary' },
    { Capital: 'Bern', Lat: 46.948, Long: 7.4474, Country: 'Switzerland', ABR: 'CH', ABR2: 'CHE', Capital_Local: 'Bern', City_Pop: '133798', Country_Pop: '1756374318', Primary: 'Primary' },
    { Capital: 'Damascus', Lat: 33.5131, Long: 36.2919, Country: 'Syria', ABR: 'SY', ABR2: 'SYR', Capital_Local: 'Dimashq', City_Pop: '1754000', Country_Pop: '1760685964', Primary: 'Primary' },
    { Capital: 'Taipei', Lat: 25.0478, Long: 121.5319, Country: 'Taiwan', ABR: 'TW', ABR2: 'TWN', Capital_Local: 'Taipei', City_Pop: '2684567', Country_Pop: '1158881289', Primary: 'Primary' },
    { Capital: 'Dushanbe', Lat: 38.5731, Long: 68.7864, Country: 'Tajikistan', ABR: 'TJ', ABR2: 'TJK', Capital_Local: 'Dushanbe', City_Pop: '778500', Country_Pop: '1762930616', Primary: 'Primary' },
    { Capital: 'Dar es Salaam', Lat: -6.8, Long: 39.2833, Country: 'Tanzania', ABR: 'TZ', ABR2: 'TZA', Capital_Local: 'Dar es Salaam', City_Pop: '6698000', Country_Pop: '1834843853', Primary: 'Primary' },
    { Capital: 'Dodoma', Lat: -6.1835, Long: 35.746, Country: 'Tanzania', ABR: 'TZ', ABR2: 'TZA', Capital_Local: 'Dodoma', City_Pop: '410956', Country_Pop: '1834288497', Primary: 'Secondary' },
    { Capital: 'Bangkok', Lat: 13.75, Long: 100.5167, Country: 'Thailand', ABR: 'TH', ABR2: 'THA', Capital_Local: 'Krung Thep Maha Nakhon', City_Pop: '17066000', Country_Pop: '1764068610', Primary: 'Primary' },
    { Capital: 'Dili', Lat: -8.5586, Long: 125.5736, Country: 'Timor-Leste', ABR: 'TL', ABR2: 'TLS', Capital_Local: 'Díli', City_Pop: '222323', Country_Pop: '1626308942', Primary: 'Primary' },
    { Capital: 'Lomé', Lat: 6.1319, Long: 1.2228, Country: 'Togo', ABR: 'TG', ABR2: 'TGO', Capital_Local: 'Maritime', City_Pop: '837437', Country_Pop: '1768409132', Primary: 'Primary' },
    { Capital: 'Nuku‘alofa', Lat: -21.1347, Long: -175.2083, Country: 'Tonga', ABR: 'TO', ABR2: 'TON', Capital_Local: 'Tongatapu', City_Pop: '23221', Country_Pop: '1776737461', Primary: 'Primary' },
    { Capital: 'Port of Spain', Lat: 10.6667, Long: -61.5167, Country: 'Trinidad And Tobago', ABR: 'TT', ABR2: 'TTO', Capital_Local: 'Port of Spain', City_Pop: '37074', Country_Pop: '1780670676', Primary: 'Primary' },
    { Capital: 'Tunis', Lat: 36.8008, Long: 10.18, Country: 'Tunisia', ABR: 'TN', ABR2: 'TUN', Capital_Local: 'Tunis', City_Pop: '1056247', Country_Pop: '1788742103', Primary: 'Primary' },
    { Capital: 'Ankara', Lat: 39.93, Long: 32.85, Country: 'Turkey', ABR: 'TR', ABR2: 'TUR', Capital_Local: 'Ankara', City_Pop: '5503985', Country_Pop: '1792572891', Primary: 'Primary' },
    { Capital: 'Ashgabat', Lat: 37.95, Long: 58.3833, Country: 'Turkmenistan', ABR: 'TM', ABR2: 'TKM', Capital_Local: 'Ahal', City_Pop: '1031992', Country_Pop: '1795049992', Primary: 'Primary' },
    { Capital: 'Grand Turk', Lat: 21.4664, Long: -71.136, Country: 'Turks And Caicos Islands', ABR: 'TC', ABR2: 'TCA', Capital_Local: 'Grand Turk', City_Pop: '5801', Country_Pop: '1796965313', Primary: 'Primary' },
    { Capital: 'Funafuti', Lat: -8.5167, Long: 179.2167, Country: 'Tuvalu', ABR: 'TV', ABR2: 'TUV', Capital_Local: 'Funafuti', City_Pop: '6025', Country_Pop: '1798251391', Primary: 'Primary' },
    { Capital: 'Kampala', Lat: 0.3136, Long: 32.5811, Country: 'Uganda', ABR: 'UG', ABR2: 'UGA', Capital_Local: 'Kampala', City_Pop: '1659600', Country_Pop: '1800406299', Primary: 'Primary' },
    { Capital: 'Kyiv', Lat: 50.45, Long: 30.5236, Country: 'Ukraine', ABR: 'UA', ABR2: 'UKR', Capital_Local: 'Kyyiv, Misto', City_Pop: '2963199', Country_Pop: '1804382913', Primary: 'Primary' },
    { Capital: 'Abu Dhabi', Lat: 24.4781, Long: 54.3686, Country: 'United Arab Emirates', ABR: 'AE', ABR2: 'ARE', Capital_Local: 'Abū Z̧aby', City_Pop: '1000000', Country_Pop: '1784176710', Primary: 'Primary' },
    { Capital: 'London', Lat: 51.5072, Long: -0.1275, Country: 'United Kingdom', ABR: 'GB', ABR2: 'GBR', Capital_Local: 'London, City of', City_Pop: '10979000', Country_Pop: '1826645935', Primary: 'Primary' },
    { Capital: 'Washington', Lat: 38.9047, Long: -77.0163, Country: 'United States', ABR: 'US', ABR2: 'USA', Capital_Local: 'District of Columbia', City_Pop: '5379184', Country_Pop: '1840006060', Primary: 'Primary' },
    { Capital: 'Montevideo', Lat: -34.8667, Long: -56.1667, Country: 'Uruguay', ABR: 'UY', ABR2: 'URY', Capital_Local: 'Montevideo', City_Pop: '1319108', Country_Pop: '1858107000', Primary: 'Primary' },
    { Capital: 'Tashkent', Lat: 41.3, Long: 69.2667, Country: 'Uzbekistan', ABR: 'UZ', ABR2: 'UZB', Capital_Local: 'Toshkent', City_Pop: '2424100', Country_Pop: '1860331871', Primary: 'Primary' },
    { Capital: 'Port-Vila', Lat: -17.7333, Long: 168.3167, Country: 'Vanuatu', ABR: 'VU', ABR2: 'VUT', Capital_Local: 'Shefa', City_Pop: '51437', Country_Pop: '1548805075', Primary: 'Primary' },
    { Capital: 'Vatican City', Lat: 41.9, Long: 12.4478, Country: 'Vatican City', ABR: 'VA', ABR2: 'VAT', Capital_Local: 'Vatican City', City_Pop: '825', Country_Pop: '1336000000', Primary: 'Primary' },
    { Capital: 'Caracas', Lat: 10.5, Long: -66.9333, Country: 'Venezuela', ABR: 'VE', ABR2: 'VEN', Capital_Local: 'Distrito Capital', City_Pop: '1943901', Country_Pop: '1862748204', Primary: 'Primary' },
    { Capital: 'Hanoi', Lat: 21.0245, Long: 105.8412, Country: 'Vietnam', ABR: 'VN', ABR2: 'VNM', Capital_Local: 'Hà Nội', City_Pop: '7785000', Country_Pop: '1704413791', Primary: 'Primary' },
    { Capital: 'Road Town', Lat: 18.4167, Long: -64.6167, Country: 'Virgin Islands, British', ABR: 'VG', ABR2: 'VGB', Capital_Local: 'Road Town', City_Pop: 'N/A', Country_Pop: '1092732412', Primary: 'Primary' },
    { Capital: 'Mata-Utu', Lat: -13.2825, Long: -176.1736, Country: 'Wallis And Futuna', ABR: 'WF', ABR2: 'WLF', Capital_Local: 'Uvea', City_Pop: 'N/A', Country_Pop: '1876784844', Primary: 'Primary' },
    { Capital: 'Al Quds', Lat: 31.7764, Long: 35.2269, Country: 'West Bank', ABR: 'XW', ABR2: 'XWB', Capital_Local: 'Al Quds', City_Pop: 'N/A', Country_Pop: '1934000006', Primary: 'Primary' },
    { Capital: 'Tifariti', Lat: 26.0928, Long: -10.6089, Country: 'Western Sahara', ABR: 'EH', ABR2: 'ESH', Capital_Local: 'Tifariti', City_Pop: 'N/A', Country_Pop: '1732006359', Primary: 'Primary' },
    { Capital: 'Sanaa', Lat: 15.35, Long: 44.2, Country: 'Yemen', ABR: 'YE', ABR2: 'YEM', Capital_Local: 'Amānat al ‘Āşimah', City_Pop: '2957000', Country_Pop: '1887750814', Primary: 'Primary' },
    { Capital: 'Lusaka', Lat: -15.4167, Long: 28.2833, Country: 'Zambia', ABR: 'ZM', ABR2: 'ZMB', Capital_Local: 'Lusaka', City_Pop: '1742979', Country_Pop: '1894157390', Primary: 'Primary' },
    { Capital: 'Harare', Lat: -17.8292, Long: 31.0522, Country: 'Zimbabwe', ABR: 'ZW', ABR2: 'ZWE', Capital_Local: 'Harare', City_Pop: '2150000', Country_Pop: '1716196799', Primary: 'Primary' }];


function checkABR(value) {
    if (typeof value != 'string') return null;
    value = value.toUpperCase();
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].ABR == value) {
            return { lat: countries[i].Lat, lng: countries[i].Long };
        }
    }
    return null;
}
function checkABR2(value) {
    if (typeof value != 'string') return null;
    value = value.toUpperCase();
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].ABR2 == value) {
            return { lat: countries[i].Lat, lng: countries[i].Long };
        }
    }
    return null;
}
function checkCountries(value) {
    if (typeof value != 'string') return null;
    value = value.toLowerCase();
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].Country.toLowerCase() == value) {
            return { lat: countries[i].Lat, lng: countries[i].Long };
        }
    }
    return null;
}


function checkABRFirst(value) {
    let country = checkABR(value)
    if (country != null) return country;
    country = checkABR2(value)
    if (country != null) return country;
    country = checkCountries(value)
    if (country != null) return country;
    return null;
}
function checkABR2First(value) {
    let country = checkABR2(value)
    if (country != null) return country;
    country = checkABR(value)
    if (country != null) return country;
    country = checkCountries(value)
    if (country != null) return country;
    return null;
}
function checkCountryNameFirst(value) {
    let country = checkCountries(value)
    if (country != null) return country;
    country = checkABR2(value)
    if (country != null) return country;
    country = checkABR(value)
    if (country != null) return country;
    return null;
}

function setLatLongCoords() {
    for (let i = content.length - 1; i >= 0; i--) {
        let coords = null;
        let location = content[i].location;
        switch (typeof location) {
            case 'object':
                //validate lat long
                if (!isNaN(location.lat) && !isNaN(location.lng)) {
                    coords = true;
                    break;
                }
                break;
            case 'string':
                //validate abr or coords name
                //Start with most likely
                if (location.length == 2) {
                    coords = checkABRFirst(location);
                } else if (location.length == 3) {
                    coords = checkABR2First(location);
                } else {
                    coords = checkCountryNameFirst(location);
                }
                if (coords != null) {
                    content[i].location = coords;
                }
                break;
        }
        if (coords == null) {
            console.log('An item was not displayed due to not being in the country list:')
            console.log(content[i]);
            content.splice(i, 1);
        }
    }
}

