let URL = "https://catfact.ninja/fact";
const getFacts = document.getElementById("fact");
const getBTN = document.getElementById("btn");

let promise = fetch(URL);

const getAPI = async () =>{
    console.log("fetching data..");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    getFacts.innerHTML = data.fact;
};

getBTN.addEventListener("click", getAPI);