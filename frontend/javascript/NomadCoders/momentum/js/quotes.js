const quotes = [
    {
        quote: "최대 다수의 최대 행복을 얻는 행동이 최선이다",
        author: "허치슨"
    },
    {
        quote: "햇빛은 하나의 초점에 모아질 때만 불꽃을 피우는 법이다",
        author: "벨"
    },
    {
        quote: "인간은 의욕하는 것, 그리고 창조하는 것에 의해서만이 행복하다.",
        author: "작자 미상"
    },
    {
        quote: "겉으로 보기에 무척 연약해 보이는 모든 것이 바로 힘이다",
        author: "파스칼"
    },
    {
        quote: "확실한 일을 실행할 힘은 누구나 가지고 있다",
        author: "괴테"
    },
    {
        quote: "생각이야말로 진정한 힘이다. 생각은 에너지인 것이다",
        author: "엔드류메터스"
    },
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = quotes[getRandom(quotes.length)].quote;
author.innerText = quotes[getRandom(quotes.length)].author;

function getRandom(num) {
    return Math.floor(Math.random() * num);
}