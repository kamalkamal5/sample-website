// JavaScript functionality for the sample website

function displayCurrentDateTime() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    console.log(`Current Date and Time (UTC): ${formattedDate}`);
}

displayCurrentDateTime();