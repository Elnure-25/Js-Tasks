// 1)Log da “Hello world” yazısını çıxarın
// 2)Adınızın mənimsədildiyi sabit dıyişən təyin edin bunun dəyərini log da göstərin
// 3)Bu adlardan hansının hansı səbəbdən istifadə oluna biləcəyini göstərin.Birdən çox variant seçin.
// 2user
// c@rt
// person
// title color
// console
// $add
// 4)İstifadəçidən ad,soyadını alıb log-a verin

// console.log("Hello world");
// const name = "Elnure";
// console.log(name);

// let names = "Elnure";
// let lastName= "Necefova";
// console.log("Adiniz: "+names+" Soyadiniz: "+lastName);

// 1)
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

// let bookPrice = 750; 
// let bookAmount = 14;
// let totalPrice= bookPrice*bookAmount;
// console.log("Umumi mebleg: "+totalPrice)


// 2)Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;

// let kmhSpeed = 75;
// let msSpeed = kmhSpeed / 3.6;
// console.log(msSpeed);

// 3)İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığıgünlərin sayını göstərən proqram yazın.

// let date=2026;
// let userDate=2002;
// console.log("Istifadecinin dogum ili: "+(date-userDate));


// 4)Ədədlər üzərində əməliyyatları yerinə yetirin.num dəyişənində iki rəqəmli ədəd saxlanılır.
// Konsola çıxaran belə proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// let num = 25;
// console.log("Num: "+num**5)
// console.log("Num: "+num%3);



// 5) Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

// let firstName = "Elnure ";
// let lastName= "Necefova\n";
// console.log("Sizin adiniz: "+ firstName+lastName+ "Tanışlığımıza çox şadam!");

// 6)

// Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

// let firstName = "Elnure ";
// let lastName= "Necefova\n";
// console.log( "Sizi bir daha görməyimizə şadıq,"+ firstName+lastName);

// 7)

// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.

// let fullName = "Murad Orucov"
// let fullName = "Murad Orucov";
// console.log(fullName.length);


// 8)

// İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

// let firstName = "Elnure ";
// let lastName= "Necefova";
// console.log(firstName.charAt(0)+"\n" + lastName.charAt(0));
// let fullName= firstName.split(" ")+ lastName.split(" ");
// console.log(fullName);


// 9)

// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,


// 10)

// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// 11)

// İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın.

// 12) +

// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın


// let a = 12345;
// let b = 98765;
// let result = a*b;
// result=result.toString();
// console.log(result[2]);

// 13) +

// Əməliyyatların nəticəsini müəyyənləşdirin.

//     "" + 1 + 0 = "10"

//     "" - 1 + 0 = -1

//     "true" - false = NaN

//     6 / "3" = 2

//     4 + 5 + "px" = 9px

//     "$" + 4 +5 =   $45

//     "4" - 2 =2

//     "4px" - 2 + "px" = NaNpx

//     7 / 0 = infinity

//     "-9" + 5 = =95

//     "-9" - 5 = -14

//     null + 1 = 1

//     undefined + 1 = NaN

// 14) +

// Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let number = prompt("4 reqemli eded daxil edin: ");
// let newNumber = number.split("");

// let result = Number(newNumber[0])+Number(newNumber[1])+Number(newNumber[2])+Number(newNumber[3]);
// console.log(result)



// 15)+
// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.


// let fullName =prompt("Adinizi ve soyadinizi daxil edin");
// let  name = fullName.split(" ");
// console.log("Salam "+name[0] + "!");


// 16) +

// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.


// let number = "530.90";
// let text = number.split(".");
// console.log(text[0]+ " manat "+ text[1]+ " qepik")








// 17) +

// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.


// let salary = prompt("Emek haqqini daxil edin: ")
// salary1=salary*0.13;
// console.log(salary-salary1);





// 18) +

// İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let fullName = "Necefova Elnure Necef";
// let char = fullName.split(" ");
// let result = char[0] + " " + char[1][0] + "." + char[2][0] + ".";
// console.log(result);




// 19) +

// Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.

// let value = 50;
// value>20;
// value<6;
// value==10;
// value!=60;
// value>=50;




// 20)+

// İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın.

// let age=prompt("Yasinizi daxil edin: ")
// if(age<18){
//     console.log("Access denied");
// }
// else{
//     console.log("Access granted");
// }


// 21)+
// Üç ədədin ortancılını tapmaq üçün proqram yazın.İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
// İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.
// "45 46 47"
// "47 46 45"
// "46 45 47"
// "46 47 45"

// let array = prompt("3 ferqli ikireqemli eded daxil edin:");
// array = array.split(" ");
// let a = Number(array[0]);
// let b = Number(array[1]);
// let c = Number(array[2]);

// if(a.length!= 2 || b.length!=2 || c.length!=2){
//     console.log("Xeta")
// }
// else if (a == b || b == c || a == c) {
//     console.log("Xeta" );
// }
// else if (a > b && a < c || a < b && a > c) {
//     console.log(a);
// }
// else if (b > a && b < c || b < a && b > c) {
//     console.log(b);
// }
// else{
// console.log(c);
// }





// 22)+

// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir»mesajını çıxarın.
// let il = prompt("Ili daxil edin: ") ;
// if(il%4==0){
//     console.log("Il uzundur");
// }
// else{
//     console.log("Il uzun il deyil");
// }


// 23)+

// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// let gender =prompt("Genderi daxil edin: ");
// if(gender==="M"){
//     gender ="male";
// }
// else if(gender==="F"){
// gender="female";
// }
// else{
//     gender = "Yanlis secim";
// }
// console.log(gender)