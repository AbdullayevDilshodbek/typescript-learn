function shakl(length) {
    if (length.tomon = 0) // aylana bo'lsa
        return 2 * length.radius;
    return Math.pow(length.tomon, 2);
}
var dimmer = shakl({ radius: 2, tomon: 0 });
console.log("diamert", dimmer);
var kvYuza = shakl({ radius: 0, tomon: 3 });
console.log('kvYuza', kvYuza);
