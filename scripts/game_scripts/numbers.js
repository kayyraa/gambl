document.addEventListener("DOMContentLoaded", function() {
    const number = document.getElementById("number");
    const feedback = document.getElementById("number_numbers");
    const check = document.getElementById("check");
    const convention = document.getElementById("convention");

    let convented = localStorage.getItem("money") * 30 + "₺";
    convention.innerHTML = convented;

    let random_number = Math.floor(Math.random() * 9)
    let get = 120;
    let give = 5;

    let showed = false;

    function show(stat) {
        showed = true;

        number.innerHTML = random_number;
        number.style.left = number.style.left + 45 + "%";

        if (stat == true) {
            feedback.innerHTML = "WIN";
            feedback.style.left = feedback.style.left + 43.75 + "%";

            localStorage.setItem("money", parseInt(localStorage.getItem("money")) + get)
        } else {
            feedback.innerHTML = "LOST";
            feedback.style.left = feedback.style.left + 42 + "%";
        }
    }

    check.addEventListener("click", function() {
        if (showed == false) {
            localStorage.setItem("money", parseInt(localStorage.getItem("money")) - give)

            const player_input = document.getElementById("player_input_number");

            if (player_input.value == random_number) {
                show(player_input.value == random_number);
            } else {
                show(player_input.value == random_number);
            }
        }
    })

    function refresh() {
        document.getElementById("money").innerHTML = localStorage.getItem("money") + "$";
        convented = localStorage.getItem("money") * 30 + "₺";
        convention.innerHTML = convented;
        setTimeout(() => {
            refresh();
        }, 50);
    }

    refresh();
})