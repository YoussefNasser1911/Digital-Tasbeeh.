let cnts = {
    akbar:0,
    hamd:0,
    subhan:0
};


// Allah Akbar Counter (1);

document.getElementById('btn1').onclick = () =>{
    cnts.akbar++;
    document.getElementById('akbarCounter').textContent = cnts.akbar;
}

// Hamd Counter (2);

document.getElementById('btn2').onclick = () =>{
    cnts.hamd++;
    document.getElementById('hamdCounter').textContent = cnts.hamd;
}

// Subhan Counter (2);

document.getElementById('btn3').onclick = () =>{
    cnts.subhan++;
    document.getElementById('subhanCounter').textContent = cnts.subhan;
}


// All Variables Counters;

let c1 = document.getElementById('akbarCounter');
let c2 = document.getElementById('hamdCounter');
let c3 = document.getElementById('subhanCounter');


// Function to reset any button when reach 33 ;

// 1- function Akbar Counter Reset;

let c = 0;
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    c++;
    if (c > 33) {   
        c = 0;      
    }
    c1.textContent = c;
    showImg(c);   
});


// 2- function Hamd Counter Reset;

let cc = 0;
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function() {
    cc++;
    if (cc > 33) {   
        cc = 0;      
    }
    c2.textContent = cc;
    showImg(cc);   
});


// 3- function Subhan Counter Reset;

let ccc = 0;
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
    ccc++;
    if (ccc > 33) {   
        ccc = 0;      
    }
    c3.textContent = ccc;
    showImg(ccc);   
});

// اية الكرسي بعد م المستخدم يوصل ل 33 لكل تسبيحة ;

let ayah = document.getElementById('Kr');
let container = document.getElementById('container');  

function showImg (count) {
    if(count === 33){
        ayah.style.display = 'block';
        container.style.display = 'none';
    
        setTimeout(() => {
            ayah.style.display = "none"; 
            container.style.display = "block"; 
        }, 30000); 
    }
}


// Made By Youssef Nasser // 
