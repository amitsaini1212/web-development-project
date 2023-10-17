document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        alert('You clicked the Google Search button!');
    });

    const feelingLuckyButton = document.getElementById('feelingLuckyButton');
    feelingLuckyButton.addEventListener('click', function() {
        alert("You're feeling lucky!");
    });
});
