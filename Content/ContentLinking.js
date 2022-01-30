/*
 * This file is for choosing which content is added to the globe, and where it is added
 * 
 * -------------------VARIABLES---------------------
 * TYPE: this is either 'photo' or 'video' and dictates the type of content block that appears on click, along with colors and styling of all associated aspects
 * LOCATION: this dictates where on the globe the content marker should appear.
 *      There are multiple location values you can give:
 *      -an object in the form of { lat: [number of latitude], lng: [number of longitude] }
 *      -a string of the country name. ex: 'Nepal'    THE LOCATION WILL GO TO TEH CAPITAL
 *      -a string of the country abbreveation. ex: 'JP'    THE LOCATION WILL GO TO THE CAPITAL
 * TITLE: The text that appears at the top of each content block
 * SRC: The url for the content that is to be viewed in detail
 * THUMBNAIL: The url for the content that will populate the content preview block
 *      For a photo, if no thumbnail is given, the source will be used
 *      For a video, a default placeholder will be used
 * */


var content = [
    //CANADA
    { location: 'Canada', title: 'Ontario, Canada', src: 'wvTuhYDNFss', startAt: 0 },
    //AMERICA
    { location: 'USA', title: 'Washington DC, USA', src: 'jYs9YXNukLQ', startAt: 0 },
    //MEXICO
    { location: 'Mexico', title: 'Mexico City, Mexico', src: 'fMPG-2vXi-s', startAt: 0 },
    //HAITI
    { location: 'Haiti', title: 'Haiti', src: 'sfhMSfKw4-o', startAt: 0 },
    //DOMINICAN REPUBLIC
    { location: 'Dominican Republic', title: 'Dominican Republic', src: '29n6Y9u2pGA', startAt: 0 },
    //PUERTO RICO
    { location: 'Puerto Rico', title: 'Puerto Rico', src: '-29yOUnUaV8', startAt: 0 },
    //PANAMA

    //EL SALVADOR
    { location: 'El Salvador', title: 'El Salvador', src: 'BhRyWthukzc', startAt: 0 },
    //GUATEMALA
    { location: 'Guatemala', title: 'Guatemala', src: 'KyUzJBxOH8c', startAt: 0 },
    //CUBA
    { location: 'Cuba', title: 'Cuba', src: 'SH4Pq04p6Ks', startAt: 0 },
    //BRAZIL
    { location: 'Brazil', title: 'Brazil', src: 'K0bEjfWGXH4', startAt: 0 },
    //PERU
    { location: 'Peru', title: 'Peru', src: 'r9FXrhJ4VbY', startAt: 0 },
    //COLUMBIA
    { location: 'Columbia', title: 'Columbia', src: 'QEw0YGvaYJo', startAt: 0 },
    //VENEZUELA

    //ARGENTINA
    { location: 'Argentina', title: 'Argentina', src: 'UijM1gt0-hM', startAt: 0 },
    //CHILE

    //BOLIVIA

    //ECUADOR
    { location: 'Ecuador', title: 'Ecuador', src: 'GdXTwUTsni0', startAt: 0 },
//EUROPE
    //ENGLAND
    { location: 'England', title: 'England', src: 'T5rhmq3_lew', startAt: 0 },
    //SCOTLAND

    //IRELAND
    { location: 'Ireland', title: 'Ireland', src: 'aQbyVYUob1o', startAt: 0 },
    //SPAIN

    //PORTUGAL

    //FRANCE
    { location: 'France', title: 'France', src: '43s3ElUjScA', startAt: 0 },
    //GERMANY
    { location: 'Germany', title: 'Germany', src: 'x44bYx-vPS4', startAt: 0 },
    //ITALY
    { location: 'Italy', title: 'Italy', src: 'K0fMDXrysC4', startAt: 0 },
    //GREECE
    { location: 'Greece', title: 'Greece', src: 'JWdy2EGjJ9E', startAt: 0 },
    //POLAND
    
    //ICELAND
    { location: 'Iceland', title: 'Iceland', src: 'Qytj-DbXMKQ', startAt: 0 },
    //NORWAY

    //SWEDEN

    //FINLAND

    //HUNGARY
    { location: 'Hungary', title: 'Hungary', src: 'E-nSlaBmk8g', startAt: 0 },
    //NETHERLANDS
    { location: 'Netherlands', title: 'Netherlands', src: 'zXXoouv9jj0', startAt: 0 },
 //ASIA
    //CHINA
    { location: 'China', title: 'China', src: 'eEeeClBoqK0', startAt: 0 },
    //JAPAN
    { location: 'Japan', title: 'Japan', src: 'VixAX2IzaE4', startAt: 0 },
    //TAIWAN

    //THAILAND
    { location: 'Thailand', title: 'Thailand', src: 'pPAlWSp4UE0', startAt: 0 },
    //INDIA
    { location: 'India', title: 'India', src: 'Ne3cJCL2_YA', startAt: 0 },
    //NEPAL
    { location: 'Nepal', title: 'Nepal', src: 'dNMnRkhQvjQ', startAt: 0 },
    //CAMBODIA
    { location: 'Cambodia', title: 'Cambodia', src: 'Ul9ysDvkuLA', startAt: 0 },
    //MALAYSIA

    //SINGAPORE

    //VIETNAM
    { location: 'Vietnam', title: 'Vietnam', src: 'rf7ascNGbcM', startAt: 0 },
    //KOREA
    { location: 'Korea', title: 'Korea', src: '0uYZzDDoYvQ', startAt: 0 },
    //PAKISTAN
    { location: 'Pakistan', title: 'Pakistan', src: 'g_4i5hs_arM', startAt: 0 },
    //IRAN

    //TURKEY

    //PHILIPPINES
    { location: 'Philippines', title: 'Philippines', src: 'xaWUeU2rutE', startAt: 0 },
    //AFGHANISTAN

//RUSSIA
    //RUSSIA
    { location: 'Russia', title: 'Russia', src: 'r7j5mjtDQeo', startAt: 0 },
    //KAZAKHSTAN

    //MONGOLIA

//AFRICA
    //GHANA
    { location: 'Ghana', title: 'Ghana', src: 'MWhSlX66fSw', startAt: 0 },
    //EGYPT
    { location: 'Egypt', title: 'Egypt', src: 'O5dXz1Tq_Yg', startAt: 0 },
    //SOUTH AFRICA

    //SUDAN

    //NIGERIA
    { location: 'Nigeria', title: 'Nigeria', src: 'BO1K4wXy2CI', startAt: 0 },
    //UGANDA

    //CONGO

    //ALGERIA

    //LIBYA

    //CHAD

    //KENYA
    { location: 'Kenya', title: 'Kenya', src: 'vujbTOuzg2Q', startAt: 0 },
    //AFRICA?...

//AUSTRALIA
    //AUSTRALIA
    { location: 'Australia', title: 'Australia', src: 'itszep0duwI', startAt: 0 },
    //NEW ZEALAND
    { location: 'New Zealand', title: 'New Zealand', src: '0P74MJ3CMuU', startAt: 0 },
//PENGUIN LAND!
    //Antarctica
    { location: 'Antarctica', title: 'Antarctica', src: 'KHpsNTlU5kY', startAt: 0 },



    //{ location: { lat: 46.7, lng: 9.8 },    title: 'TEST', src: 'PFkIif0eQBc', startAt: 0 },
    //{ location: { lat: 37.7, lng: -119.5 }, title: 'TEST', src: 'PFkIif0eQBc', startAt: 0 },
    //{ location: { lat: 19.5, lng: -155.6 }, title: 'TEST', src: 'PFkIif0eQBc', startAt: 0 },
    //{ location: { lat: 34.6, lng: 135.4 },  title: 'TEST', src: 'PFkIif0eQBc', startAt: 0 },
    //{ location: { lat: 24.2, lng: -77.8 },  title: 'TEST', src: 'PFkIif0eQBc', startAt: 0 },
    

];

