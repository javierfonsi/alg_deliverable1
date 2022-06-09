function romanize(num) { 
    let lookup = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    },
    roman = '',
    i;

    // in  Key
    // of  value

    for ( i in lookup ){
        // console.log(i) 
               //23 > = 10
               //13     10
               //3      1
               //2      1
               //1      1
               //0      1

               //40 >= 40
               //0 >= 40
               //0 >= 10
               //0 >= 9
        while ( num >= lookup[i] ) { 
            // console.log(lookup[i])
            roman += i; //XL
            // console.log(roman) 
            num -= lookup[i]; 
            console.log(num)
        } 
        // console.log(i)
    } 
return roman; 
}

let decimal = romanize(98)
console.log(decimal)