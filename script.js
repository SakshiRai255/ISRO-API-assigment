const form = document.getElementById("form");
const search = document.getElementById("search");
const spacecraftsList = document.getElementById("spacecrafts-list");
const launchersList = document.getElementById("launchers-list");
const cutmrSattllitesList = document.getElementById("cutmrSattllites-list");
const centerSattllitesList = document.getElementById("centerSattllites-list");
let searchCharcters = [];

// Spacecrafts List from ISRO API

async function spacecraftsResponse() {
  fetch("https://isro.vercel.app/api/spacecrafts")
    .then((response) => response.json())
    .then((data) => {
      data.spacecrafts.forEach((element) => {
        const spacecraftItem = document.createElement("li");
        spacecraftItem.style.listStyle = "number";
        spacecraftItem.textContent = element.name;
        spacecraftsList.appendChild(spacecraftItem);
      });
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

let spacecrafts = document.getElementById("spacecrafts");
spacecrafts.addEventListener("click", spacecraftsResponse);

// Rockets List from ISRO API

async function rocketsResponse() {
  fetch("https://isro.vercel.app/api/launchers")
    .then((response) => response.json())
    .then((data) => {
      data.launchers.forEach((element) => {
        const launchersItem = document.createElement("li");
        launchersItem.style.listStyle = "number";
        launchersItem.textContent = element.id;
        launchersList.appendChild(launchersItem);
      });
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

let launchers = document.getElementById("launchers");
launchers.addEventListener("click", rocketsResponse);


// customer satellittes details

async function custSatelitiesResp() {
  try {
    const resp = await fetch("https://isro.vercel.app/api/customer_satellites");
    const respData = await resp.json();
    searchCharcters = respData.customer_satellites;
    displayCharcters(searchCharcters);
    console.log(searchCharcters);
  } catch (error) {
    console.log(error);
  }
}

// Display Charcters of Customer Satellites:

const displayCharcters = (charcters) => {
  const htmlString = charcters
    .map((charcter) => {
      return ` <li class="setlites-lists">
              <p> id : ${charcter.id}</p>            
              <p>country : ${charcter.country}</p>            
              <p>launch_date :  ${charcter.launch_date}</p>            
              <p>launcher :  ${charcter.launcher}</p>            
              <p>mass : ${charcter.mass}</p>            
    </li> `;
    })
    .join("");
  spacecraftsList.innerHTML = htmlString;
};

async function centres() {
  try {
    const resp = await fetch(`https://isro.vercel.app/api/centres`);
    const respData = await resp.json();
    const centresRespData = await respData.centres;
    console.log(centresRespData);
    displayCentresCharcters(centresRespData);
  } catch (error) {
    console.log(error);
  }
}
centres();

// Display Charcters of Centres

const displayCentresCharcters = (elements) => {
  const htmlString = elements.map((element) => {
    return `<li>
            <p> id : ${element.id}</p>            
            <p>country : ${element.Place}</p>            
            <p>launch_date : ${element.State}</p>            
            <p>mass : ${element.name}</p>  
        </li>`;
  })
  .join("")
  centerSattllitesList.innerHTML = htmlString
};

// Search Functionality

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const searchString = search.value;
  const filterCharacters = searchCharcters.filter((character) => {
    return (
      character.country.toLowerCase().includes(searchString) ||
      character.id.toLowerCase().includes(searchString)
    );
  });
  displayCharcters(filterCharacters);
  console.log(filterCharacters);
});

// custSatelitiesResp();
