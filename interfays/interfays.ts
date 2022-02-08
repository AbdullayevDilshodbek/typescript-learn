// 7- dars
interface Shakl {
    radius: number;
    tomon: number;
}

function shakl(length: Shakl) {
    if (length.tomon = 0) // aylana bo'lsa
        return 2 * length.radius;
    return Math.pow(length.tomon, 2)
}
let dimmer: number = shakl({ radius: 2, tomon: 0 });
console.log("diamert", dimmer);
let kvYuza: number = shakl({ radius: 0, tomon: 3 });
console.log('kvYuza', kvYuza);




