function changeimg(btn) {
  const img = btn.querySelector("img");
  if (img.src.endsWith("notclicked.svg")) {
    img.src = "clicked.svg";
    console.log(btn.parentNode);
    if(btn.parentNode.childNodes.length==2){
        console.log(btn.parentNode.childNodes[1].style.textDecoration="line-through");
    }
    else{
        btn.parentNode.childNodes[3].style.textDecoration="line-through";
        console.log("clicked");
    }
    
  }
  else {
    img.src="notclicked.svg";
    if(btn.parentNode.childNodes.length==2){
        console.log(btn.parentNode.childNodes[1].style.textDecoration="none");
    }
    else{
        btn.parentNode.childNodes[3].style.textDecoration="none";
        console.log("clicked");
    }
  } 
}
addlist.onclick=() =>  {
    let item=document.getElementById("item");
    const list=document.getElementsByClassName("list")[0];
    let div=document.createElement("div");
    div.className="content";
    let li=document.createElement("li");
    li.textContent=item.value;
    list.appendChild(div);
    let img=document.createElement("img");
    img.src="notclicked.svg";
    let btn2=document.createElement("button");
    btn2.type="button";
    btn2.onclick=()=> {changeimg(btn2)};
    div.appendChild(btn2);
    btn2.appendChild(img);      
    div.appendChild(li);
    item.value="";
}