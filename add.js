function productinput(product, price, incresing) {
    const caseinput = document.getElementById(product + '-number')
    let casenumber = caseinput.value;
    if (incresing) {
        casenumber = parseInt(casenumber) + 1;
    }
    else if (casenumber > 0) {
        casenumber = parseInt(casenumber) - 1;
    }

    caseinput.value = casenumber;
    const casetotal = document.getElementById(product + '-total')
    casetotal.innerText = casenumber * price;
    update();
}
function updateinput(product) {
    const phonenumberinput = document.getElementById(product + '-number')
    const phonenumber = parseInt(phonenumberinput.value);
    return phonenumber;
}
function update() {
    const phonetotal = updateinput('phone') * 1219;
    const casetotall = updateinput('case') * 59;
    const subtotal = phonetotal + casetotall
    const tax = subtotal / 10;
    const totalmoney = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalmoney;

}
//phone er jonno
document.getElementById('phone-plus').addEventListener('click', function () {
    productinput('phone', 1219, true);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    productinput('phone', 1219, false);

})
//case er jonno
document.getElementById('case-plus').addEventListener('click', function () {
    productinput('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    productinput('case', 59, false);

})