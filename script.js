function plusButton(id,prix,ctn){
    let inp=document.getElementById(id);
    let val=inp.value;
    val++;
    inp.value=val;

    let much=document.getElementById(prix);
    much.innerHTML=ctn*val
    
}

function moinsButton(id,prix,ctn){

    let inp=document.getElementById(id);
    let val = inp.value;
    if (val>0){
        val--;
        inp.value=val;

    }
    let much=document.getElementById(prix);
    if(val>0){much.innerHTML=ctn*val};
    
    
}
function change(id){
    let coleur=document.getElementById(id)
    if (coleur.style.color == "black"){
        coleur.style.color = "red"
       
    }
    else {coleur.style.color = "black"}
}

function supp(id){
    let myobj=document.getElementById(id)
    myobj.remove();

}

