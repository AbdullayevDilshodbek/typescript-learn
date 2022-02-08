var a;
var boolean;
var ar = [1, 2, 3];
var same = [true, "google", { a: 1996 }];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 0] = "Female";
})(Gender || (Gender = {}));
var man = Gender.Male;
a = "Google";
boolean = true;
console.log(man);
