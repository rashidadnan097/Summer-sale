let total = 0.00;

function token(target){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(" ")[0];
    
    total = parseFloat(total) + parseFloat(price);
    total = total.toFixed(2);
     document.getElementById("totals").innerText = total;
   
}

