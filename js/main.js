let btn = document.querySelector("#btn");
let URI = "http://localhost/SpUkM01-097/projects/prueba";
btn.addEventListener("click", async(e)=>{ 
    let res = await(await fetch(`${URI}/api.php`)).json();
    console.log(res);
})