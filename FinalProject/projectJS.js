let mealPlanHTML = "";

function generateMealPlan() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const mealData = {
        mondayBreakfast: document.getElementById("mondayBreakfast").value,
        mondaySnack1: document.getElementById("mondaySnack1").value,
        mondayLunch: document.getElementById("mondayLunch").value,
        mondaySnack2: document.getElementById("mondaySnack2").value,
        mondayDinner: document.getElementById("mondayDinner").value,

        tuesdayBreakfast: document.getElementById("tuesdayBreakfast").value,
        tuesdaySnack1: document.getElementById("tuesdaySnack1").value,
        tuesdayLunch: document.getElementById("tuesdayLunch").value,
        tuesdaySnack2: document.getElementById("tuesdaySnack2").value,
        tuesdayDinner: document.getElementById("tuesdayDinner").value,

        wednesdayBreakfast: document.getElementById("wednesdayBreakfast").value,
        wednesdaySnack1: document.getElementById("wednesdaySnack1").value,
        wednesdayLunch: document.getElementById("wednesdayLunch").value,
        wednesdaySnack2: document.getElementById("wednesdaySnack2").value,
        wednesdayDinner: document.getElementById("wednesdayDinner").value,

        thursdayBreakfast: document.getElementById("thursdayBreakfast").value,
        thursdaySnack1: document.getElementById("thursdaySnack1").value,
        thursdayLunch: document.getElementById("thursdayLunch").value,
        thursdaySnack2: document.getElementById("thursdaySnack2").value,
        thursdayDinner: document.getElementById("thursdayDinner").value,

        fridayBreakfast: document.getElementById("fridayBreakfast").value,
        fridaySnack1: document.getElementById("fridaySnack1").value,
        fridayLunch: document.getElementById("fridayLunch").value,
        fridaySnack2: document.getElementById("fridaySnack2").value,
        fridayDinner: document.getElementById("fridayDinner").value,

        saturdayBreakfast: document.getElementById("saturdayBreakfast").value,
        saturdaySnack1: document.getElementById("saturdaySnack1").value,
        saturdayLunch: document.getElementById("saturdayLunch").value,
        saturdaySnack2: document.getElementById("saturdaySnack2").value,
        saturdayDinner: document.getElementById("saturdayDinner").value,

        sundayBreakfast: document.getElementById("sundayBreakfast").value,
        sundaySnack1: document.getElementById("sundaySnack1").value,
        sundayLunch: document.getElementById("sundayLunch").value,
        sundaySnack2: document.getElementById("sundaySnack2").value,
        sundayDinner: document.getElementById("sundayDinner").value,
    };

    mealPlanHTML = `
    <!DOCTYPE HTML>
    <html>
    <head>
        <title>${name}'s Meal Plan</title>
    </head>
    <body>
        <h1>${name}'s Meal Plan for the Week</h1>
        <p>Email: ${email}</p>
        <p>Goal: ${goal}</p>

    <h2>Monday</h2>
    <ul>
        <li>Breakfast: ${mealData.mondayBreakfast}</li>
        <li>Snack 1: ${mealData.mondaySnack1}</li>
        <li>Lunch: ${mealData.mondayLunch}</li>
        <li>Snack 2: ${mealData.mondaySnack2}</li>
        <li>Dinner: ${mealData.mondayDinner}</li>
    </ul>

    <h2>Tuesday</h2>
    <ul>
        <li>Breakfast: ${mealData.tuesdayBreakfast}</li>
        <li>Snack 1: ${mealData.tuesdaySnack1}</li>
        <li>Lunch: ${mealData.tuesdayLunch}</li>
        <li>Snack 2: ${mealData.tuesdaySnack2}</li>
        <li>Dinner: ${mealData.tuesdayDinner}</li>
    </ul>

    <h2>Wednesday</h2>
    <ul>
        <li>Breakfast: ${mealData.wednesdayBreakfast}</li>
        <li>Snack 1: ${mealData.wednesdaySnack1}</li>
        <li>Lunch: ${mealData.wednesdayLunch}</li>
        <li>Snack 2: ${mealData.wednesdaySnack2}</li>
        <li>Dinner: ${mealData.wednesdayDinner}</li>
    </ul>

    <h2>Thursday</h2>
    <ul>
        <li>Breakfast: ${mealData.thursdayBreakfast}</li>
        <li>Snack 1: ${mealData.thursdaySnack1}</li>
        <li>Lunch: ${mealData.thursdayLunch}</li>
        <li>Snack 2: ${mealData.thursdaySnack2}</li>
        <li>Dinner: ${mealData.thursdayDinner}</li>
    </ul>

    <h2>Friday</h2>
    <ul>
        <li>Breakfast: ${mealData.fridayBreakfast}</li>
        <li>Snack 1: ${mealData.fridaySnack1}</li>
        <li>Lunch: ${mealData.fridayLunch}</li>
        <li>Snack 2: ${mealData.fridaySnack2}</li>
        <li>Dinner: ${mealData.fridayDinner}</li>
    </ul>

    <h2>Saturday</h2>
    <ul>
        <li>Breakfast: ${mealData.saturdayBreakfast}</li>
        <li>Snack 1: ${mealData.saturdaySnack1}</li>
        <li>Lunch: ${mealData.saturdayLunch}</li>
        <li>Snack 2: ${mealData.saturdaySnack2}</li>
        <li>Dinner: ${mealData.saturdayDinner}</li>
    </ul>

    <h2>Sunday</h2>
    <ul>
        <li>Breakfast: ${mealData.sundayBreakfast}</li>
        <li>Snack 1: ${mealData.sundaySnack1}</li>
        <li>Lunch: ${mealData.sundayLunch}</li>
        <li>Snack 2: ${mealData.sundaySnack2}</li>
        <li>Dinner: ${mealData.sundayDinner}</li>
    </ul>

<button onclick="window.print()">Print Plan</button>
<button onclick="downloadMealPlan()">Download Plan</button>
   
    <script>
        function downloadMealPlan() {
            const blob = new Blob([document.documentElement.outerHTML], { type: "text/html" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "${name}-meal-plan.html";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    }
    </script>
    </body>
    </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(mealPlanHTML);
    newWindow.document.close();
}
    
        
   
