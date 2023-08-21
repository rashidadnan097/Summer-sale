let total = 0.00;

function token(target){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    
    total = parseFloat(total) + parseFloat(price);
    total = total.toFixed(2);
     document.getElementById("totals").innerText = total;

     if(total >= 200 ){
        const totalDiscount = total % 20;
        document.getElementById("discount").innerText = totalDiscount;
        const thenTk = total - totalDiscount ;
        document.getElementById("porerTk").innerText = thenTk;
     }
}

