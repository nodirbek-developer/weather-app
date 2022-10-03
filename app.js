// Inputni qiymatini olish funksiyasi
const input=document.querySelector(".input");
input.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        console.log(e.target.value);
        getData(e.target.value);
    }
})
//APIdan ma'lumotlarni olish funksiyasi
const YourKey="294e9a6c9d185185aa1d5daad3f0e84b"
async function getData(value){
    const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${YourKey}`)
    const data=await response.json();
    UI(data);
}
//APIdan kelgan ma'lumotlarni saytimizni UI ya'ni "User Inter face" qisminida ishlatish funksiyasi.
const country=document.querySelector(".country");
const date=document.querySelector(".date");
const temp=document.querySelector(".temp");
const condition=document.querySelector(".condition");
const min=document.querySelector(".min");
const max=document.querySelector(".max");
const modal_block=document.querySelector(".modal_block")
const body=document.body
const day=new Date();
const currentDate=`${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`
const UI=function(data){
    console.log(data);
    if(data.cod==200){
        country.innerHTML=data.name;
        temp.innerHTML=data.main.temp;
        condition.innerHTML=data.weather[0].main;
        min.innerHTML=data.main.temp_min;
        max.innerHTML=data.main.temp_max;
        switch(data.weather[0].main){
            case "Clouds":
            body.style.backgroundImage='url("./wolves-1341881_960_720 (1).webp")'
            break;
            case "Clear":
            body.style.backgroundImage='url("./death-valley-3133502_960_720.webp")'
            break;
            case "Rain":
            body.style.backgroundImage='url("./girl-1438138_960_720.jpg")'
            break;
            case "Snow":
                body.style.backgroundImage='url("./snow-3193865_960_720.jpg")'
            break;
            case "Mist":
            body.style.backgroundImage='url("./fog-571786_960_720.jpg")'
        }
    }else{
        const div=document.createElement("div");
        div.classList.add("modal");
        div.innerHTML="Afsuski, bunaqa mamlakat yo'q."
        modal_block.appendChild(div);
        setTimeout(()=>div.classList.add("fade"),2000);
        setTimeout(()=>div.classList.add("none"),2000)
    }

}
date.innerHTML=currentDate;