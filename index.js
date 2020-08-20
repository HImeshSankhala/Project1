"use strict";

var data = [{
    "name": "John",
    "id": "121",
    "skills": "Java",
    "project": "JavaScript",
    "hcm": "Alex",
    "sex":"male"
    },
    {
    "name": "Johana",
    "id": "122",
    "skills": "JavaScript",
    "project": "React",
    "hcm": "Alex",
    "sex":"female"
    },
    {
    "name": "Jacob",
    "id": "123",
    "skills": "Spring",
    "project": "Form",
    "hcm": "Alex",
    "sex":"male"
    },
    {
    "name": "Max",
    "id": "124",
    "skills": "Java",
    "project": "JavaScript",
    "hcm": "Alex",
    "sex":"male"
    },
    {
    "name": "Martha",
    "id": "125",
    "skills": "JavaScript",
    "project": "React",
    "hcm": "Alex",
    "sex":"female"
    },
    {
    "name": "Phoebe",
    "id": "126",
    "skills": "Spring",
    "project": "Form",
    "hcm": "Alex",
    "sex":"female"
    },
    {
    "name": "Marco",
    "id": "127",
    "skills": "Java",
    "project": "JavaScript",
    "hcm": "Alex",
    "sex":"male"
    },
    {
    "name": "Alexis",
    "id": "128",
    "skills": "JavaScript",
    "project": "React",
    "hcm": "Alex",
    "sex":"female"
    },
    {
    "name": "Idris",
    "id": "129",
    "skills": "Spring",
    "project": "Form",
    "hcm": "Alex",
    "sex":"male"
    },
    {
        "name": "April",
        "id": "130",
        "skills": "Spring",
        "project": "Form",
        "hcm": "Alex",
        "sex":"male"
    }
];


const len = data.length;
console.log(len);
let arrCard =[];
let arrList =[];

let htmlCard="";
let htmlList="";


function closeCardFunction(index){
    arrCard[index]=null;
    
    document.getElementById('column'+index).style.display='none';
    if(arrList.length>0){ document.getElementById('row'+index).style.display='none';arrList[index]=null;}
    data[index]=null;
    console.log(arrCard);
}
function closeTableFunction(index){
    arrList[index]=null;
    
    document.getElementById('row'+index).style.display='none';
    if(arrCard.length>0){ document.getElementById('column'+index).style.display='none';arrCard[index]=null;}
    data[index]=null;
    console.log(arrList);
}
function HTMLCard(i){

    return `<div id="column${i}" class="col-4">
    <div class="card bg-light text-black text-center">
    <div style="padding:0px;height:220px;width:100%;position:relative;" class="container">
        <img style="width:100%;height:100%;" class="card-img-top" src="${data[i].sex == "female" ? "female1.jpg" : "male1.jpg"}"/>
        <button id="close" 
        onclick="closeCardFunction(${i});" style="border-radius:1000px;position:absolute;top:1%;right:1%;" 
        class="btn btn-danger"><b>&times;</b></button>
    </div>          
        <table style="margin-top:20px;margin-left:10px;margin-right:10px;font-size:18px;" 
        id="card${i}" class="card-body text-left">
            <tr>
                <th>Name :-</th>
                <td><b>${data[i].name}</b></td>
            </tr>
            <tr>
                <th>ID :-</th>
                <td>${data[i].id}</td>
            </tr>
            <tr>
                <th>Skills :-</th>
                <td>${data[i].skills}</td>
            </tr>
            <tr>
                <th>Projects :-</th>
                <td>${data[i].project}</td>
            </tr>
            <tr>
                <th>HCM :-</th>
                <td>${data[i].hcm}</td>
            </tr>
        </table>
        <div>
        <button id="CardEditSave${i}" onclick="clickCardEditSave(${i});" 
        style="margin-top:20px;float:right;width:fit-content;" class="btn btn-primary">
        Edit
        </button>
        <button id="CardSave${i}" style="margin-top:20px;float:right;width:fit-content;display:none;" onclick="clickCardSave(${i});" class="btn btn-primary">
        Save
        </button>
        </div>             
    </div>
    </div>`;
}
function displayCard(){
    
    console.log(len);
    document.getElementById("card-container").style.display="block";
    htmlCard = "";
    document.getElementById("card-row").innerHTML="";
    for(let i=0; i<len; i++){
        if(arrCard[i]===null || arrList[i]===null) arrCard[i]=null;
        else{
            if(arrCard.length < len) arrCard.push(i);
            htmlCard = HTMLCard(i);
            document.getElementById("card-row").innerHTML += htmlCard;
           }
        }
        console.log(arrCard);
}
function HTMLList(i){

    console.log(data)
    return `<tr id="row${i}">
            <td scope="row">${data[i].name}</td>
            <td>${data[i].id}</td>
            <td>${data[i].skills}</td>
            <td>${data[i].project}</td>
            <td>${data[i].hcm}</td>
            <td>
            <input type="button" value="Edit" id="editsave${i}" onclick="clickEditSave(${i});" 
            style="width:fit-content;" id="button1" class="btn btn-primary"/>
            <input type="button" value="Save" id="save${i}" onclick="clickSave(${i});" 
            style="width:fit-content;display:none;" class="btn btn-primary"/>
            </td>
            <td><button id="close" 
            onclick="closeTableFunction(${i});" style="border-radius:1000px;" 
            class="btn btn-danger"><b>&times;</b></button></td>
            </tr>`;
}
function displayList(){

    document.getElementById("table-container").style.display="block";
    htmlList = "";
    document.getElementById("list-body").innerHTML="";
    for(let i=0;i<len;i++){
        if(arrList[i]===null || arrCard[i]===null) arrList[i]=null;
        else{
            if(arrList.length < len) arrList.push(i);
            htmlList = HTMLList(i);
            document.getElementById("list-body").innerHTML+= htmlList;
        }
    }
    console.log(arrList);
}

document.getElementById("card").addEventListener('click',function toggleCard(){
    let x = document.getElementById("card-container");
    document.getElementById("table-container").style.display="none";
    if (x.style.display === "none") {
        displayCard();
      } else {
        x.style.display = "none";
      }
})
document.getElementById("list").addEventListener('click',function toggleList(){
    let y = document.getElementById("table-container"); 
    document.getElementById("card-container").style.display="none";   
    if (y.style.display === "none") {
        displayList();
      } else {
        y.style.display = "none";
      }
})
function clickEditSave(index){
    const tds = document.getElementById('row'+index).querySelectorAll("td");
    console.log(tds);
    document.getElementById('editsave'+index).style.display="none";
    document.getElementById('save'+index).style.display="block";
    console.log(index);
    
    for(let i=2;i<3;i++) {
        tds[i].setAttribute("contenteditable", true);
        tds[i].style.border="1.5px dotted red";
    }
}
function clickSave(index){
    document.getElementById('save'+index).style.display="none";
    document.getElementById('editsave'+index).style.display="block";
    const tds = document.getElementById('row'+index).querySelectorAll("td");
    console.log(tds);
    console.log(index);
    for(let i=2;i<3;i++){
        tds[i].setAttribute("contenteditable", false);
        tds[i].style.border="none";
        if(i === 2){
            data[index].skills = tds[i].innerText;
        }
        // else if(i === 3){
        //     data[index].project = tds[i].innerText;
        // }else if(i === 4){
        //     data[index].hcm = tds[i].innerText;
        // }
    }
}
function clickCardEditSave(index){
    const tds = document.getElementById('card'+index).querySelectorAll("td");
    document.getElementById('CardEditSave'+index).style.display="none";
    document.getElementById('CardSave'+index).style.display="block";
    for(let i=2;i<3;i++){
        tds[i].setAttribute("contenteditable", true);
        tds[i].style.border="1px dotted red";
    }
}
function clickCardSave(index){
    const tds = document.getElementById('card'+index).querySelectorAll("td");
    document.getElementById('CardSave'+index).style.display="none";
    document.getElementById('CardEditSave'+index).style.display="block";
    for(let i=2;i<3;i++){
        tds[i].setAttribute("contenteditable", false);
        tds[i].style.border="none";
        if(i === 2){
            data[index].skills = tds[i].innerText;
        }
        // else if(i === 3){
        //     data[index].project = tds[i].innerText;
        // }else if(i === 4){
        //     data[index].hcm = tds[i].innerText;
        // }
    }
}