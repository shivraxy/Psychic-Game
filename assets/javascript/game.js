var var_loss = 0;
var var_win = 0;
var var_guess_left = 5;
var all_possible_chars = "abcdefghijklmnopqrstuvwxyz0123456789";

assign_values();

document.onkeyup = function(event) {
    usertext.textContent = usertext.textContent + event.key + ",";
    random_char_position = Math.floor(Math.random() * all_possible_chars.length);
    random_char = all_possible_chars.charAt(random_char_position).toLowerCase();
    console.log(random_char_position + " " + random_char);

    if (random_char == event.key) {
        var_win = var_win + 1;
        alert("Winner Winner !!!!");
    } else {
        var_loss = var_loss + 1;
        var_guess_left = var_guess_left - 1;
        if (var_guess_left == 0) {
            alert("Game Over");
            var_loss = 0;
            var_win = 0;
            var_guess_left = 10;
            usertext.textContent = "";
        }
    }

    assign_values();
};

function assign_values() {
    win.textContent = var_win;
    loss.textContent = var_loss;
    guess_left.textContent = var_guess_left;
}