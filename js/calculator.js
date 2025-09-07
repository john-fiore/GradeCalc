let earnedInp = document.getElementById('earnedPts');
let totalInp = document.getElementById('totalPts');

// If they vote on decimal rather than whole,
// change parseInt to parseFloat
let earnedNum = parseInt(earnedInp.value); // Fixed: added .value
let totalNum = parseInt(totalInp.value);   // Fixed: added .value

let letterTxt = document.getElementById('letter-grade-text');
let percntTxt = document.getElementById('percent-grade-text');

const colors = [
    '#11ff00', // A
    '#2e6e00', // B
    '#fffb00', // C
    '#ffa600', // D
    '#ff0000' // F
];

function checkForErr()
{
    const earnedVal = earnedInp.value.trim();
    const totalVal = totalInp.value.trim();

    if (isNaN(earnedVal) || earnedVal === '' || isNaN(totalVal) || totalVal === '')
    {
        alert("Please input a number.");
        reset();
        return false; // Stop execution
    }

    // Parse to numbers for proper numerical comparison
    if (parseInt(earnedVal) > parseInt(totalVal))
    {
        alert("Earned Points cannot be greater than Total Points.");
        reset();
        return false; // Stop execution
    }
    
    return true; // No errors found
}

function reset()
{
    // Clear the input fields
    earnedInp.value = '';
    totalInp.value = '';
    
    earnedNum = 0;
    totalNum = 0;

    letterTxt.innerHTML = "A";
    letterTxt.style.color = colors[0];
    
    percntTxt.innerHTML = "100.00%";
}

function calculateAndDisplay()
{
    if (!checkForErr())
    {
        return;
    }

    // Get fresh values each time function is called
    earnedNum = parseInt(earnedInp.value);
    totalNum = parseInt(totalInp.value);
    
    let percentage = earnedNum / totalNum * 100; // the main math
    
    if (percentage <= 100 && percentage >= 90)
    {
        letterTxt.innerHTML = 'A';
        letterTxt.style.color = colors[0];
    }
    else if (percentage <= 89 && percentage >= 80)
    {
        letterTxt.innerHTML = 'B';
        letterTxt.style.color = colors[1];
    }
    else if (percentage <= 79 && percentage >= 70)
    {
        letterTxt.innerHTML = 'C';
        letterTxt.style.color = colors[2];
    }
    else if (percentage <= 69 && percentage >= 60)
    {
        letterTxt.innerHTML = 'D';
        letterTxt.style.color = colors[3];
    }
    else if (percentage <= 59)
    {
        letterTxt.innerHTML = 'F';
        letterTxt.style.color = colors[4];
    }

    // Fixed: round percentage to 2 decimal places for cleaner display
    percntTxt.innerHTML = `${percentage.toFixed(2)}%`;
}