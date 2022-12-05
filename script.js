//1)Asia continent /region using the Filter function
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var result=JSON.parse(data)
//     var res=result.filter((ele)=>ele.region=="Asia")
//     var res1=res.map((ele)=>` ${ele.name.common}`)
    

//     console.log(res);
// }

//===================================================================================
//2) countries with a population of less than 2 lakhs using Filter function
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//      var res = result.filter((ele)=>ele.population<200000)
//     
//      var res1 = res.map((ele)=>`${ele.population}: ${ele.name.common}`)
//      console.log(res1)
// }
//===================================================================================================
    //3) details name, capital, flag using forEach function
    // var request = new XMLHttpRequest();
    // request.open("GET","https://restcountries.com/v3.1/all",true)
    // request.send()
    //  request.onload=function(){
    //     var data = request.response
    //     var result = JSON.parse(data)
    //     var res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flag}`)})
    //     }
//====================================================================================================

//4) total population 
//     var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//     var res = result.reduce((acc,cv)=>acc+cv.population,0)
//     console.log(res)
//     }
//=======================================================================================================

//5)US Dollars as currency
//     var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//     var res = result.filter((ele)=>{
//         for(let key in ele.currencies)
//         {
//             if(ele.currencies[key].code==="USD")
//             {
//                 console.log(ele.name)
//             }
//         }

//     })
// }
//========================================================================
    

