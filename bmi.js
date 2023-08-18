
let SaveButton = document.getElementById("save-btn");
let weightValue = document.getElementById("weight");
let heightValue = document.getElementById("height");
const outputElement = document.getElementById("output");

SaveButton.addEventListener('click', () => { 
    const genderValue = document.querySelector('input[name="gender"]:checked').value;
    const weightModifier = (genderValue === 'MALE') ? 3 : 0;

        const userweight = parseFloat(weightValue.value-weightModifier);
        const userheight = parseFloat(heightValue.value);
    
    const divHeight = (userheight * userheight) / 10000;
    
    const bmi = userweight / divHeight;
        let category;
        let weightToNormal;
    
        if (bmi < 18.5) {
            category = 'Underweight';
            weightToNormal = (18.5 * divHeight) - userweight;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'You are healthy';
            weightToNormal = 0;
        } else if (bmi > 24.9 && bmi <= 29.9) {
            category = 'Overweight';
            weightToNormal = userweight - (24.9 * divHeight);
        } else if (bmi > 29.9 && bmi <= 34.9) {
            category = 'Class I (Moderate obesity)';
            weightToNormal = userweight - (24.9 * divHeight);
        } else if (bmi > 34.9 && bmi <= 39.9) {
            category = 'Class II (Severe obesity)';
            weightToNormal = userweight - (24.9 * divHeight);
        } else {
            category = 'Class III (Very severe or morbid obesity)';
            weightToNormal = 0; // Set a suitable value here
        }
     const outputText = `Your BMI: ${bmi.toFixed(2)}<br> ${category}<br>You need to reduce ${weightToNormal.toFixed(2)} kg to reach normal weight`;
     outputElement.innerHTML = outputText;
    });




