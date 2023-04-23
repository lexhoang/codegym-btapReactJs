const animals = [
    { id: 1001, MKH: "DV8", Name: "Eurasian Collared-Dove", Type: "Dove" },
    { id: 1002, MKH: "HK12", Name: "Bald Eagle", Type: "Hawk" },
    { id: 1003, MKH: "HK6", Name: "Cooper's Hawk", Type: "Hawk" },
    { id: 1004, MKH: "SP11", Name: "Bell's Sparrow", Type: "Sparrow" },
    { id: 1005, MKH: "DV2", Name: "Mourning Dove", Type: "Dove" }
];

function renderListAnimals(animals) {
    let listAnimals = ""
    animals.map((element, index) => {
        return (
            listAnimals += `
            <tr key=${index}>
                <td>${element.MKH}</td>
                <td>${element.Name}</td>
                <td>${element.Type}</td>
                <td>
                    <button onclick="deleteAnimal(${element.id})">Xóa</button>
                </td>
            </tr>
            `
        )
    })


    document.querySelector('tbody').innerHTML = listAnimals
}
renderListAnimals(animals);

function searchNameAnimal() {
    let searchArray = [];
    const dataSearch = document.querySelector('#name-animal');
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].Name.toLowerCase().includes(dataSearch.value.toLowerCase()) == true) {
            searchArray.push(animals[i])
        }
    }
    renderListAnimals(searchArray)
}

function addAnimal() {
    const newIdAnimal = document.querySelector('#inp-add_IdAnimal');
    const newNameAnimal = document.querySelector('#inp-add_NameAnimal');
    const newTypeAnimal = document.querySelector('#inp-add_TypeAnimal');

    let newAnimal = {
        "ID": newIdAnimal.value,
        "Name": newNameAnimal.value,
        "Type": newTypeAnimal.value
    }
    animals.push(newAnimal);
    renderListAnimals(animals);
}

function deleteAnimal(paramId) {
    console.log(paramId);
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].id === paramId) {
            animals.splice(i, 1);
            renderListAnimals(animals);
        }
    }
}