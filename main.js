function calculImpozit(capacitateCilindrica) {
    let impozit;

    if (capacitateCilindrica <= 200) {
        impozit = 0;
    } else if (capacitateCilindrica <= 1400) {
        impozit = 56;
    } else if (capacitateCilindrica <= 1650) {
        impozit = 162;
    } else {
      
        const multiplicator = Math.ceil(capacitateCilindrica / 200); 
        impozit = multiplicator * 290;
    }

    return impozit;
}


console.log(`Impozitul pentru o mașină cu capacitatea cilindrică de 1400 cmc este: ${calculImpozit(1400)} lei.`);
console.log(`Impozitul pentru o mașină cu capacitatea cilindrică de 1650 cmc este: ${calculImpozit(1650)} lei.`);
console.log(`Impozitul pentru o mașină cu capacitatea cilindrică de 3590 cmc este: ${calculImpozit(2999)} lei.`);
console.log(`Impozitul pentru o mașină cu capacitatea cilindrică de 3590 cmc este: ${calculImpozit(3590)} lei.`);