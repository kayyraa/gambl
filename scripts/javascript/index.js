document.addEventListener("DOMContentLoaded", function() {
    const games_button = document.getElementById("games_button");
    const games_div = document.getElementById("games");
    const money_span = document.getElementById("money");
    const convention = document.getElementById("convention");

    let convented = localStorage.getItem("money") * 30 + "₺";
    if (convented.length >= 4) {
        convention.style.left = convention.style.left + 90.5 + "%";
    }
    convention.innerHTML = convented;

    let money_count = localStorage.getItem("money");

    if (money_count == null) {
        money_count = localStorage.setItem("money", 0)
    }

    money_span.innerHTML = money_count + "$";

    const numbers_game = document.getElementById("numbers");

    let games_opened = false;

    games_button.addEventListener("click", function() {
        if (games_opened == false) {
            games_div.style.visibility = "visible";
            games_opened = true;
        } else if (games_opened == true) {
            games_div.style.visibility = "hidden";
            games_opened = false;
        }
    })

    numbers_game.addEventListener("click", function() {
        window.location.href = "games/numbers.html";
    })
})