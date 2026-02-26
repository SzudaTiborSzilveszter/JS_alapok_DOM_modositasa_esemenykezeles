window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazas1();
    esemenyKezeles1();
    esemenyKezeles2();
});

function elemekElerese1() {
    let h2Elem = document.querySelectorAll("section h2")[0];
    console.log(h2Elem.innerHTML);
}
function elemekElerese2() {
    const pELEM=document.querySelectorAll("#ide")[0];
    pELEM.innerHTML="<p>Jó reggelt!</p>";
}

function elemekElerese3(){
    const pELEM=document.getElementsByClassName("ide")[0];
    pELEM.innerHTML="<p>Jó reggelt!</p>";
}

function elemekElerese4(){
    const lista=document.getElementsByClassName("lista")[0];
    lista.innerHTML="<ul>";
    for (let index = 0; index < 5; index++) {
        let sorsolt = Math.floor(Math.random() * 31)+10;
        lista.innerHTML+="<li>"+sorsolt+"</li>";
    }
    lista.innerHTML+="</ul>";
}

function elemekFormazas1(){
    const lista=document.getElementsByClassName("lista")[0];
    lista.classList.add("formazott");
}

function esemenyKezeles1(){
    let listaElem = document.getElementsByClassName("lista")[0];
    let kattintasUtan = document.getElementsByClassName("kattintasutan")[0];

    listaElem.addEventListener("click",function(){
        kattintasUtan.innerHTML+=listaElem.innerHTML;
    })
}
    
function esemenyKezeles2(){
    let feladatElem = document.getElementsByClassName("feladat")[0];
    feladatElem.innerHTML += "<button>OK</button>";
    let gombElem = document.querySelectorAll(".feladat button")[0];
    gombElem.addEventListener("click",function(){
        feladatElem.innerHTML+=`<div>
                                    <img src="OIP.png" alt="biden">
                                </div>`;
        esemenyKezeles3();
    })
}   

function esemenyKezeles3(){
    let kepElem = document.querySelectorAll(".feladat img")[0];
    kepElem.addEventListener("mouseover",function(){
        kepElem.style.width="50%";
    })
    kepElem.addEventListener("mouseleave",function(){
        kepElem.style.width="100%";
    })
}