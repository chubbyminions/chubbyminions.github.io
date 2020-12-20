const finalNum = document.getElementById("final-num");
const numBox = document.getElementById("num-box");
const operations = document.getElementById("operations");
const form = document.getElementById("answer");
const answerBox = document.getElementById("answer-box");
const submitBtn = document.getElementById("submit-btn");

let final = 0;
let nums = [];

const init = () => {
    nums = [];
    answerBox.value = "";
    const bigNums = Math.ceil(Math.random() * 3);
    for (i = 0; i < 6; i++) {
        i < bigNums ? nums.push(25 * Math.ceil(Math.random() * 5)) : nums.push(Math.ceil(Math.random() * 19));
    }
    nums = nums.sort((a, b) => b - a);
    for (i in numBox.children) {
        numBox.children[i].textContent = nums[i];
    }
    final = Math.floor(Math.random() * 899) + 100;
    finalNum.textContent = final;
}

init();

numBox.addEventListener("click", clickEvent => {
    const target = clickEvent.target;
    if (target.tagName === "BUTTON") {
        const value = nums[[...numBox.children].indexOf(target)]
        target.blur();
        answerBox.value += value;
    }
})

operations.addEventListener("click", clickEvent => {
    const target = clickEvent.target;
    if (target.tagName === "BUTTON") {
        const op = target.getAttribute("id");
        target.blur();
        op === "ac" ? answerBox.value = "" : answerBox.value += op;
    }
    
})

const fail = () => {
    finalNum.style.color = "#9C433E";
    setTimeout(function() {
        finalNum.style.color = "#FFFFFF";
    }, 500);
}

const success = () => {
    init();
}

const validateEquation = eq => {
    let par = eq.replace(/[^\(|\)]/g,"");
    while (par.length > 0) {
        const open = par.indexOf("(");
        const close = par.indexOf(")");
        if (open > close || open === -1 || close === -1) {
            return false;
        }
        par = par.slice(0, open) + par.slice(open + 1, close) + par.slice(close + 1)
    }

    const validEquation = /^(\d+[+\-*/])+\d+$/;
    if (!validEquation.test(eq.replace(/\(|\)/g, ""))) {
        return false;
    }

    const eqNums = eq.match(/\d+/g).sort((a, b) => b - a).map(x => parseInt(x));
    if (!(eqNums.every((x, i) => x === nums[i]) && (nums.every((x, i) => x === eqNums[i])))) {
        return false;
    }
    
    return true;
}

const submit = () => {
    let ans = answerBox.value;
    ans = ans.replace(/(?<=\d)\(/g, "*(");
    ans = ans.replace(/\)(?=\d)/g, ")*");
    ans = ans.replace(/\)\(/g, ")*(");
    if (validateEquation(ans)) {
        eval(ans) === final ? success() : fail();
    } else {
        fail();
    }
}

submitBtn.onclick = () => {
    submit();
} 

form.onsubmit = () => {
    submit();
    return false;
}