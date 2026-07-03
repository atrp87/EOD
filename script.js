
let baseCash = 0;
let totalAdded = 0;
let totalRemoved = 0;
let declaredTotal = 0;

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

/* POST */

submitBtn.addEventListener("click", function () {

    const morningFloat =
        parseFloat(document.getElementById("morningFloat").value) || 0;

    const removeFloat =
        parseFloat(document.getElementById("removeFloat").value) || 0;



const declareTender =
    parseFloat(document.getElementById("declareTender").value) || 0;

  
  declaredTotal += declareTender;

    totalAdded += morningFloat;
    totalRemoved += removeFloat;

    const remainingFloat = totalAdded - totalRemoved;
  
  

const floatMessage =
    document.getElementById("floatMessage");

if (totalAdded === 0 && totalRemoved === 0) {

    floatMessage.textContent = "";
    floatMessage.className = "";

}
else if (remainingFloat === 0) {

    floatMessage.textContent =
        "✅ Float is balanced";

    floatMessage.className =
        "msg-good";

}
else if (remainingFloat > 0) {

    floatMessage.textContent =
        `⚠️ Remove £${remainingFloat.toFixed(2)} float from the till`;

    floatMessage.className =
        "msg-low";

}
else {

    floatMessage.textContent =
        `⚠️ Add £${Math.abs(remainingFloat).toFixed(2)} float to the till`;

    floatMessage.className =
        "msg-high";

}


    const floatLine = totalRemoved - totalAdded;


/* FLOAT ROW - Business Central  */

document.getElementById("countedAmount").textContent =
    floatLine.toFixed(2);

document.getElementById("transAmount").textContent =
    floatLine.toFixed(2);

document.getElementById("addedDrawer").textContent =
    (-totalAdded).toFixed(2);

document.getElementById("removedDrawer").textContent =
    totalRemoved.toFixed(2);



/* CASH DRAWER - Physical Till View */

document.getElementById("cashAddedDrawer").textContent =
    totalAdded.toFixed(2);

document.getElementById("cashRemovedDrawer").textContent =
    (-totalRemoved).toFixed(2);



/* CASH ROW */

const cashTotal = baseCash + remainingFloat;

document.getElementById("cashCounted").textContent =
    cashTotal.toFixed(2);

document.getElementById("cashTrans").textContent =
    cashTotal.toFixed(2);



let difference = 0;

if (declaredTotal > 0) {
    difference = baseCash - declaredTotal;
}

document.getElementById("cashDifference").textContent =
    difference.toFixed(2);



const message = document.getElementById("differenceMessage");

if (declaredTotal === 0) {

    message.textContent = "";
    message.className = "";

} else if (difference === 0) {

    message.textContent = "✅ Cash matches expected amount";
    message.className = "msg-good";

} else if (difference > 0) {

    message.textContent =
        `⚠️ £${difference.toFixed(2)} still to declare`;
    message.className = "msg-low";

} else {

    message.textContent =
        `⚠️ £${Math.abs(difference).toFixed(2)} over declared`;
    message.className = "msg-high";

}



/* CLEAR INPUTS */

document.getElementById("morningFloat").value = "";
document.getElementById("removeFloat").value = "";
document.getElementById("cashCountedInput").value = "";
document.getElementById("declareTender").value = "";

document.getElementById("morningFloat").focus();


});


/* RESET */


resetBtn.addEventListener("click", function () {

    baseCash = Math.floor(Math.random() * (900 - 80 + 1)) + 80;

    totalAdded = 0;
    totalRemoved = 0;
    declaredTotal = 0;

    document.getElementById("cashCounted").textContent =
        baseCash.toFixed(2);

    document.getElementById("cashTrans").textContent =
        baseCash.toFixed(2);

    document.getElementById("cashDifference").textContent =
        "0.00";


  
document.getElementById("differenceMessage").textContent = "";
document.getElementById("differenceMessage").className = "";


    document.getElementById("countedAmount").textContent = "0.00";
    document.getElementById("transAmount").textContent = "0.00";
    document.getElementById("addedDrawer").textContent = "0.00";
    document.getElementById("removedDrawer").textContent = "0.00";
    document.getElementById("cashDifference").textContent = "0.00";
    document.getElementById("cashAddedDrawer").textContent = "0.00";
    document.getElementById("cashRemovedDrawer").textContent = "0.00";
    document.getElementById("morningFloat").value = "";
    document.getElementById("removeFloat").value = "";
    document.getElementById("declareTender").value = "";
    document.getElementById("topTills").innerHTML = "";
    document.getElementById("bottomTills").innerHTML = "";
  
  
document.getElementById("floatMessage").textContent = "";
document.getElementById("floatMessage").className = "";


    tillMode = 0;

});


/* ADD EXTRA TILLS */

let tillMode = 0;

document.getElementById("toggleTillsBtn")
.addEventListener("click", function () {

    tillMode++;

    if (tillMode > 2) {
        tillMode = 0;
    }

    const topTills = document.getElementById("topTills");
    const bottomTills = document.getElementById("bottomTills");

    topTills.innerHTML = "";
    bottomTills.innerHTML = "";

    /* CLICK 1 */

    if (tillMode === 1) {

        bottomTills.innerHTML = `
            <tr>
                <td>9</td>
                <td></td>
                <td>3NEH02</td>
                <td></td>
                <td></td>
                <td>Tender Remove/Float</td>
                <td class="num">-100.00</td>
                <td class="num">-100.00</td>
                <td>0.00</td>
                <td>1</td>
                <td>-100.00</td>
                <td>100.00</td>
            </tr>

            <tr>
                <td>1</td>
                <td></td>
                <td>3NEH02</td>
                <td></td>
                <td></td>
                <td>Cash</td>
                <td class="num">245.82</td>
                <td class="num">245.82</td>
                <td>0.00</td>
                <td>1</td>
                <td>100.00</td>
                <td>-100.00</td>
            </tr>

            <tr>
                <td>3</td>
                <td></td>
                <td>3NEH02</td>
                <td></td>
                <td></td>
                <td>Credit Card</td>
                <td class="num">1648.42</td>
                <td class="num">1648.42</td>
                <td>0.00</td>
                <td>1</td>
                <td>0.00</td>
                <td>0.00</td>
            </tr>
        `;
    }

    /* CLICK 2 */

    if (tillMode === 2) {


topTills.innerHTML = `
<tr>
    <td>9</td>
    <td></td>
    <td>3NEH01</td>
    <td></td>
    <td></td>
    <td>Tender Remove/Float</td>
    <td class="num">0.00</td>
    <td class="num">0.00</td>
    <td>0.00</td>
    <td>1</td>
    <td>-100.00</td>
    <td>100.00</td>
</tr>

<tr>
    <td>1</td>
    <td></td>
    <td>3NEH01</td>
    <td></td>
    <td></td>
    <td>Cash</td>
    <td class="num">376.94</td>
    <td class="num">376.94</td>
    <td>0.00</td>
    <td>1</td>
    <td>100.00</td>
    <td>-100.00</td>
</tr>

<tr>
    <td>3</td>
    <td></td>
    <td>3NEH01</td>
    <td></td>
    <td></td>
    <td>Credit Card</td>
    <td class="num">2841.63</td>
    <td class="num">2841.63</td>
    <td>0.00</td>
    <td>1</td>
    <td>0.00</td>
    <td>0.00</td>
</tr>
`;



bottomTills.innerHTML = `
<tr>
    <td>9</td>
    <td></td>
    <td>3NEH03</td>
    <td></td>
    <td></td>
    <td>Tender Remove/Float</td>
    <td class="num">0.00</td>
    <td class="num">0.00</td>
    <td>0.00</td>
    <td>1</td>
    <td>-100.00</td>
    <td>100.00</td>
</tr>

<tr>
    <td>1</td>
    <td></td>
    <td>3NEH03</td>
    <td></td>
    <td></td>
    <td>Cash</td>
    <td class="num">245.82</td>
    <td class="num">245.82</td>
    <td>0.00</td>
    <td>1</td>
    <td>100.00</td>
    <td>-100.00</td>
</tr>

<tr>
    <td>3</td>
    <td></td>
    <td>3NEH03</td>
    <td></td>
    <td></td>
    <td>Credit Card</td>
    <td class="num">1648.42</td>
    <td class="num">1648.42</td>
    <td>0.00</td>
    <td>1</td>
    <td>0.00</td>
    <td>0.00</td>
</tr>

        `;
    }

});

resetBtn.click();
