let criminals = [
  {
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice",
  },
  {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice",
  },
  {
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice",
  },
];

// Uložíme data z políčka
let filters = {
  searchText: "",
};

// Filtr
const renderCriminals = function (ourCriminals, tryToFind) {
  let arrayResult = ourCriminals.filter(function (oneSuspect) {
    return oneSuspect.licencePlate
      .toLowerCase()
      .includes(tryToFind.searchText.toLowerCase());
  });

  //console.log(arrayResult);

  // promazání
  document.querySelector("#idCriminal").innerHTML = "";

  arrayResult.forEach(function (oneSuspect) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `Jméno: ${oneSuspect.firstName} , <br> Příjmení: ${oneSuspect.secondName}, <br> Narozen/a ${oneSuspect.birth}, <br> Adresa: ${oneSuspect.address}, <br> Město: ${oneSuspect.city}, <br> Registrační značka ${oneSuspect.licencePlate}`;

    document.querySelector("#idCriminal").appendChild(paragraph);
  });
};

// Načteme data z políčka
let licencePlate = document.querySelector("#licence-plate");

licencePlate.addEventListener("input", function (event) {
  filters.searchText = event.target.value;
  renderCriminals(criminals, filters);
});
