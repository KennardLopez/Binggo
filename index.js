console.log("Hello World!");
let B = false, 
I = false,
N = false, 
G = false,
O = false;

let BNum, INum, NNum, GNum, ONum;

let B1 = 0,
B2 = 0;
B3 = 0,
B4 = 0,
B5 = 0;

let I1 = 0,
I2 = 0;
I3 = 0,
I4 = 0,
I5 = 0;

let N1 = 0,
N2 = 0;
N3 = 0,
N4 = 0,
N5 = 0;

let G1 = 0,
G2 = 0;
G3 = 0,
G4 = 0,
G5 = 0;

let O1 = 0,
O2 = 0;
O3 = 0,
O4 = 0,
O5 = 0;

function newNumber1 (maxNumber) {
 

   let x = Math.floor(Math.random() * maxNumber) + 1;

    if (x <= 15) {
        if (x != B2 && x != B3 && x != B4 && x != B5) {
        console.log(`New randomnum is ${x} belongs to "B"`);
        B = true;
        document.querySelector("#td1").textContent = x;
        BNum = x;
        B1 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I2 && x != I3 && x != I4 && x != I5) {
        console.log(`New number is ${x} belongs to "I"`);
        I = true;
        document.querySelector("#td2").textContent = x;
        INum = x;
        I1 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N2 && x != N3 && x != N4 && x != N5) {
        console.log(`New num is ${x} belongs to "N"`);
        N = true;
        document.querySelector("#td3").textContent = x;
        NNum = x;
        N1 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G2 && x != G3 && x != G4 && x != G5) {
        console.log(`New number is ${x} belongs to "G"`);
        G = true;
        document.querySelector("#td4").textContent = x;
        GNum = x;
        G1 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O2 && x != O3 && x != O4 && x != O5) {
        console.log(`New number is ${x} belongs to "O"`);
        O = true;
        document.querySelector("#td5").textContent = x;
        ONum = x;
        O1 = x;
        }
    } else {
        console.log(`New number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log("BINGOOOOOOO!!!!");   
     console.table({
        B: BNum,
        I: INum,
        N: NNum,
        G: GNum,
        O: ONum,
     });
    }
}

function newNumber2 (maxNumber) {


   let x = Math.floor(Math.random() * maxNumber) + 1;


    if (x <= 15) {
        if (x != B1 && x != B3 && x != B4 && x != B5) {
        console.log(`New number is ${x} belongs to "B"`);
        B = true;
        document.querySelector("#td6").textContent = x;
        BNum = x;
        B2 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I3 && x != I4 && x != I5) {
        console.log(`New number is ${x} belongs to "I"`);
        I = true;
        document.querySelector("#td7").textContent = x;
        INum = x;
        I2 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N3 && x != N4 && x != N5) {
        console.log(`New number is ${x} belongs to "N"`);
        N = true;
        document.querySelector("#td8").textContent = x;
        NNum = x;
        N2 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G3 && x != G4 && x != G5) {
        console.log(`New number is ${x} belongs to "G"`);
        G = true;
        document.querySelector("#td9").textContent = x;
        GNum = x;
        G2 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O3 && x != O4 && x != O5) {
        console.log(`New number is ${x} belongs to "O"`);
        O = true;
        document.querySelector("#td10").textContent = x;
        ONum = x;
        O2 = x;
        }
    } else {
        console.log(`New number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log("BINGOOOOOOO!!!!");   
     console.table({
        B: BNum,
        I: INum,
        N: NNum,
        G: GNum,
        O: ONum,
     });
    }
}
function newNumber3 (maxNumber) {


   let x = Math.floor(Math.random() * maxNumber) + 1;


    if (x <= 15) {
        if (x != B1 && x != B2 && x != B4 && x != B5) {
        console.log(`New number is ${x} belongs to "B"`);
        B = true;
        document.querySelector("#td11").textContent = x;
        BNum = x;
        B3 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I2 && x != I4 && x != I5) {
        console.log(`New number is ${x} belongs to "I"`);
        I = true;
        document.querySelector("#td12").textContent = x;
        INum = x;
        I3 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N2 && x != N4 && x != N5) {
        console.log(`New number is ${x} belongs to "N"`);
        N = true;
        document.querySelector("#td13").textContent = x;
        NNum = x;
        N3 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G2 && x != G4 && x != G5) {
        console.log(`New number is ${x} belongs to "G"`);
        G = true;
        document.querySelector("#td14").textContent = x;
        GNum = x;
        G3 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O2 && x != O4 && x != O5) {
        console.log(`New number is ${x} belongs to "O"`);
        O = true;
        document.querySelector("#td15").textContent = x;
        ONum = x;
        O3 = x;
        }
    } else {
        console.log(`New number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log("BINGOOOOOOO!!!!");   
     console.table({
        B: BNum,
        I: INum,
        N: NNum,
        G: GNum,
        O: ONum,
     });
    }
}
function newNumber4 (maxNumber) {
   let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x <= 15) {
        if (x != B1 && x != B2 && x != B3 && x != B5) {
        console.log(`New number is ${x} belongs to "B"`);
        B = true;
        document.querySelector("#td16").textContent = x;
        BNum = x;
        B4 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I2 && x != I3 && x != I5) {
        console.log(`New number is ${x} belongs to "I"`);
        I = true;
        document.querySelector("#td17").textContent = x;
        INum = x;
        I4 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N2 && x != N3 && x != N5) {
        console.log(`New number is ${x} belongs to "N"`);
        N = true;
        document.querySelector("#td18").textContent = x;
        NNum = x;
        N4 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G2 && x != G3 && x != G5) {
        console.log(`New number is ${x} belongs to "G"`);
        G = true;
        document.querySelector("#td19").textContent = x;
        GNum = x;
        G4 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O2 && x != O3 && x != O5) {
        console.log(`New number is ${x} belongs to "O"`);
        O = true;
        document.querySelector("#td20").textContent = x;
        ONum = x;
        O4 = x;
        }
    } else {
        console.log(`New number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log("BINGOOOOOOO!!!!");   
     console.table({
        B: BNum,
        I: INum,
        N: NNum,
        G: GNum,
        O: ONum,
     });
    }
}
function newNumber5 (maxNumber) {
 

   let x = Math.floor(Math.random() * maxNumber) + 1;

    if (x <= 15) {
        if (x != B1 && x != B2 && x != B3 && x != B4) {
        console.log(`New number is ${x} belongs to "B"`);
        B = true;
        document.querySelector("#td21").textContent = x;
        BNum = x;
        B5 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I2 && x != I3 && x != I4) { 
        console.log(`New number is ${x} belongs to "I"`);
        I = true;
        document.querySelector("#td22").textContent = x;
        INum = x;
        I5 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N2 && x != N3 && x != N4) {
        console.log(`New number is ${x} belongs to "N"`);
        N = true;
        document.querySelector("#td23").textContent = x;
        NNum = x;
        N5 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G2 && x != G3 && x != G4) {
        console.log(`New number is ${x} belongs to "G"`);
        G = true;
        document.querySelector("#td24").textContent = x;
        GNum = x;
        G5 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O2 && x != O3 && x != O4) {
        console.log(`New number is ${x} belongs to "O"`);
        O = true;
        document.querySelector("#td25").textContent = x;
        ONum = x;
        O5 =x;
        }
    } else {
        console.log(`New number ${x} is invalid.` );
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log("BINGOOOOOOO!!!!");   
     console.table({
        B: BNum,
        I: INum,
        N: NNum,
        G: GNum,
        O: ONum,
     });
    }
}

let counter = 5;
while(!B || !I || !N || !G || !O ) {
   
    newNumber1(75);
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber2(75);
    
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber3(75);
    
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber4(75);
    
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber5(75);
    
}
let cellValues = [];
document.querySelectorAll("td").forEach(cell => {
    cellValues.push(parseInt(cell.textContent));
});

let numColumns = document.querySelectorAll("tr")[0].childElementCount;

cellValues.sort((a, b) => a - b);

let index = 0;
for (let col = 0; col < numColumns; col++) {
    for (let row = 0; row < cellValues.length / numColumns; row++) {
        document.querySelectorAll("td")[row * numColumns + col].textContent = cellValues[index++];
    }
}