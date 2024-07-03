const input= document.getElementById("nameplate");
const main= document.querySelector(".main");

const wordgenerator=(n)=>{
    let text = "";
    const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<n;i++){
         text += letter[( Math.random()*25).toFixed(0)];
    }
    return text;
};

let numofword;
const generatepara=()=>{
    numofword=Number(input.value);
    let data = " ";
    for (let i = 0; i < numofword; i++) {
        const randomword=(Math.random()*15).toFixed(0);
    data += wordgenerator(randomword);
    data += " ";
 }
 console.log(data);
     const para=document.createElement("p");
    para.innerText=data;
    para.setAttribute("class","paras");
    main.append(para);
};

