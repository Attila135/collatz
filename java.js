function saa() {
    let x = document.getElementById("x").value;
    while (x != 1 & x != 0) {
        if (x % 2 == 1) {
            x = 3 * x + 1;
        } else {
            x = x / 2;
        }
        console.log(x);
        document.getElementById("y").innerHTML = x.innerHTML;
    }

}