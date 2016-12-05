/**
 * Created by SC_Dev on 28/11/2016.
 */
//
// let car = {Model:"Toyota", Yeare: 2012, Color:'red', Fuel:31.4, consumptionrat: 12,IsMarried: true,
//     Owner:{
//     Firstname : 'Omer',
//     Lastname : 'Cohen',
//     },
//     Addres: {
//         City: "Tel Aviv",
//         Street: "Dizingof",
//         Number: 56,
//     },
//        };
//
//
// var OpjectPrint = function (objName)
// {
// // How to calculate the Object size------
//     Object.size = function (objName) {
//         var size = 0, key;
//         for (key in objName) {
//             if (objName.hasOwnProperty(key)) size++;
//         }
//         return size;
//     };
//
//     var Msize = Object.size(objName);
//     document.write('<br>', Msize, '<br>');
//
// // How to print Object keys & Values
//     for (var i = 0; i < Msize; i++) {
//         document.write('<br>', Object.keys(objName)[i], ': ');
//         var str1 = objName[Object.keys(objName)[i]];
//         if (typeof str1 === 'object' && str1 !== null)
//         {
//             OpjectPrint(str1);
//         }
//         else
//         {
//             document.write(str1, '<br>');
//         }
//     }
// }
//
// OpjectPrint(car);

//---------- Targil Kita-------------------------

let car = {
    Model: "Toyota", Yeare: 2012, Color: 'red', Fuel: 31.4, consumptionrat: 12,
    Owner: {
        Firstname: 'Omer',
        Lastname: 'Cohen',
        IsMarried: true,
        Addres: {
            City: "Tel Aviv",
            Street: "Dizingof",
            Number: 771,
        },
        chkifadressiseven: function () {
            let n = this.Addres.Number; //this means in this Object
            if ((n % 2) === 0) { //chk if n is even
                return 'East';
            }
            else return 'West';
        }
    }
}

console.log(car.Owner.Firstname);
console.log(car.Owner.IsMarried);
console.log(car.Owner.Addres.City);
console.log(car.Owner.Addres.Number);

car.Owner.Addres.City = 'Bat Yam'
console.log(car.Owner.Addres.City);

console.log(car.Owner.chkifadressiseven());

let isBoomHouse = (myObj) => {

    let A = myObj.Owner.Addres.Number;
    let N = A.toString();
    let L = A.lenngth;
    return L
    // console.log(L);

//     if ((A % 7) === 0 || (A % 10 === 7))
//     {
//         return 'Boom'
//     }
//     else return 'No Boom';
}

console.log(isBoomHouse(car));