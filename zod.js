const zodiac= document.getElementById("zodiac");
const body= document.body;

const changebackground=()=>{
switch (zodiac.value) {
    case "Aries":
        body.style.backgroundColor="rgb(567,455,345)";
        break;
        case "gemini":
        body.style.backgroundColor="rgb(876,675,345)";
        break;
        case "Tarus":
        body.style.backgroundColor="rgb(875,995,345)";
        break;
        case "cancer":
        body.style.backgroundColor="rgb(456,345,111)";
        break;
        case "leo":
        body.style.backgroundColor="rgb(987,745,455)";
        break;
        case "virgo":
        body.style.backgroundColor="rgb(233,745,345)";
        break;
        case "scorpio":
        body.style.backgroundColor="rgb(146,345,345)";
        break;
        case "sagittarius":
        body.style.backgroundColor="rgb(999,378,985)";
        break;
        case "aquarius":
        body.style.backgroundColor="rgb(123,388,345)";
        break;
        case "capricon":
        body.style.backgroundColor="rgb(123,345,345)";
        break;

    default:
        break;
}
}