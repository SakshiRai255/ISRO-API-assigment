
let spacecraftsList = document.getElementById("spacecrafts-list");
// spacecraftsListContainer.onclick(result)


// Spacecrafts List from ISRO API

const spacecraftsResponse = fetch("https://isro.vercel.app/api/spacecrafts")
.then((response) => response.json())
.then((data) => {
  data.spacecrafts.forEach((element) => {
    const spacecraftItem = document.createElement("li");
    spacecraftItem.style.listStyle = 'number'
    spacecraftItem.textContent = element.name;
    spacecraftsList.appendChild(spacecraftItem);
  });
  console.log(data);
})
.catch((error) => {
  console.error(error.message);
});


  let spacecrafts = document.getElementById('spacecrafts');
  spacecrafts.addEventListener("click",function(e){
    console.log("Clicked")
  });



// Rockets List from ISRO API

const launchersList = document.getElementById("launchers-list")

const rocketsResponse = fetch("https://isro.vercel.app/api/launchers")
.then((response)=>response.json())
.then((data)=>{
  data.launchers.forEach((element)=>{
    const launchersItem = document.createElement("li");
    launchersItem.style.listStyle = 'number'
    launchersItem.textContent = element.id;
    launchersList.appendChild(launchersItem);
  })
  console.log(data);
}).catch((error) => {
  console.error(error.message);
});

let launchers = document.getElementById('launchers');
launchers.addEventListener('click',function(e){
  console.log("launchers Click");
})