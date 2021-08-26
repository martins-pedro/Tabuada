function tabuada () {
    let num = document.getElementById("num")
    let tab = document.getElementById("seltab")
    let res = document.getElementById("res")
    if (num.value.length == 0) {
        res.innerHTML = "<br>Por favor, digite um número."
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}