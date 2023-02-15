
function calculate() {
    let sharesInhand = Number(document.getElementById("Shares inhand").value);
    let valueofsharesInhand = Number(document.getElementById("value of per share inhand").value);
    let currentShareValue = Number(document.getElementById("Current share value").value);
    let countofShares = Number(document.getElementById("count of Shares you want to buy").value);
    let Averaged = Number(document.getElementById("Averaged").value);
    
    if(sharesInhand === 0 || valueofsharesInhand === 0){
        alert("Enter non zero value to 'Shares inhand' and 'value of per share inhand' fields");
        return;
    }
    if((currentShareValue === 0 && countofShares === 0) || (countofShares === 0 && Averaged === 0) || (currentShareValue === 0 && Averaged === 0)){
        alert("Enter non zero values for any of the 2 following fields to calculate the other 'Current share value' 'count of Shares you want to buy' 'Averaged' ");
        return;
    }
    if(Averaged === 0){
        let totalshares = (sharesInhand + countofShares);
        Averaged = (sharesInhand*valueofsharesInhand + countofShares*currentShareValue)/totalshares;
        document.getElementById("Averaged").value = Averaged;
        document.getElementById("output").innerHTML = "Calculated Averaged value !!!";
    }
    else if(currentShareValue ===0){
        let totalshares = (sharesInhand + countofShares);
        currentShareValue = (Averaged*totalshares - sharesInhand*valueofsharesInhand )/countofShares;
        document.getElementById("Current share value").value = currentShareValue;
        document.getElementById("output").innerHTML = "Calculated Current share value !!!";
    }
    else if(countofShares ===0){
        countofShares = (sharesInhand*(valueofsharesInhand - Averaged))/(Averaged - currentShareValue);
        document.getElementById("count of Shares you want to buy").value = countofShares ;
        document.getElementById("output").innerHTML = "Calculated count of Shares you want to buy !!!";
    }
    else{
        alert("leave out the field to be calculated empty ")
        document.getElementById("output").innerHTML = "leave out the field to be calculated empty !!!";
    }
    
    // console.log(sharesInhand,valueofsharesInhand,currentShareValue,countofShares)
    // clear();
}
function clearBox(){
    document.getElementById("Current share value").value = "";
    document.getElementById("count of Shares you want to buy").value = "";
    document.getElementById("Averaged").value = "";
}

