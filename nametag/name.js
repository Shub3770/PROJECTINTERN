const name= document.getElementById("name");
const tags = document.querySelector(".tags")
const addname=()=>{
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");

    tag.innerText=`hey , i am ${name.value}`;
    tags.append(tag);
}