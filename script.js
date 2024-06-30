const str = document.getElementById("cats");

str.addEventListener('click',async (e)=>{
    e.preventDefault();
    try{
        let res = await fetch('https://cat-fact.herokuapp.com/facts/random',{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })
    
        let data = await res.json();
        console.log(data.text)
        document.querySelector(".root").innerText = data.text;
    }
    catch(err){
        console.log(err)
    }

    
})

// str.addEventListener('click', ()=>{
//     fetch('https://cat-fact.herokuapp.com/facts/random')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// })