function Search() {
    let table = document.getElementById("myTable");
    table.style.visibility = "visible"
    let location = document.getElementById('location')
    if (location.value) {
        let gender = document.getElementById('gender')
        if (!gender.value) {
            let table = document.getElementById("myTable");
            table.innerText = ""
            let thead = document.createElement("thead");

            let th1 = document.createElement("th");
            th1.innerHTML = "MALE";
            let th2 = document.createElement("th");
            th2.innerHTML = "FEMALE";
            let th3 = document.createElement("th");
            th3.innerHTML = "SUR-NAMES";

            thead.appendChild(th1);
            thead.appendChild(th2);
            thead.appendChild(th3);

            table.appendChild(thead);

            fetch("./names.json")
                .then(response => response.json())
                .then(data => {
                    data.map((items) => {
                        if (items.region == `${location.value}`) {
                            console.log(items.surnames)
                            let table = document.getElementById("myTable");
                            for (let i = 0; i < Math.max(items.male.length, items.female.length, items.surnames.length); i++) {
                                let tbody = document.createElement("tbody");
                                let newRow = document.createElement("tr");
                                let cell1 = document.createElement("td");
                                let cell2 = document.createElement("td");
                                let cell3 = document.createElement("td");
                                cell1.innerHTML = `${items.male[i]}`;
                                cell2.innerHTML = `${items.female[i]}`;
                                cell3.innerHTML = `${items.surnames[i]}`;
                                newRow.appendChild(cell1);
                                newRow.appendChild(cell2);
                                newRow.appendChild(cell3);
                                tbody.appendChild(newRow);
                                table.appendChild(tbody);
                            }
                        }
                    })
                })
        }
        else if ((gender.value).toLowerCase() == "male") {
            let table = document.getElementById("myTable");
            table.innerText = ""
            let thead = document.createElement("thead");
            let th1 = document.createElement("th");
            th1.innerHTML = "MALE List";
            thead.appendChild(th1);
            table.appendChild(thead);
            fetch("./names.json")
                .then(response => response.json())
                .then(data => {
                    data.map((items) => {
                        if (items.region == `${location.value}`) {
                            console.log(items.surnames)

                            let table = document.getElementById("myTable");


                            for (let i = 0; i < items.male.length; i++) {
                                let tbody = document.createElement("tbody");
                                let newRow = document.createElement("tr");
                                let cell1 = document.createElement("td");

                                cell1.innerHTML = `${items.male[i]}`;


                                newRow.appendChild(cell1);

                                tbody.appendChild(newRow);
                                table.appendChild(tbody);

                            }
                        }
                    })
                })

        }
        else if ((gender.value).toLowerCase() == "female") {
            let table = document.getElementById("myTable");
            table.innerText = ""
            let thead = document.createElement("thead");
            let th1 = document.createElement("th");
            th1.innerHTML = "FEMALE List";
            thead.appendChild(th1);
            table.appendChild(thead);
            fetch("./names.json")
                .then(response => response.json())
                .then(data => {
                    data.map((items) => {
                        if (items.region == `${location.value}`) {
                            console.log(items.surnames)
                            let table = document.getElementById("myTable");

                            for (let i = 0; i < items.female.length; i++) {
                                let tbody = document.createElement("tbody");
                                let newRow = document.createElement("tr");
                                let cell2 = document.createElement("td");

                                cell2.innerHTML = `${items.female[i]}`;

                                newRow.appendChild(cell2
                                );

                                tbody.appendChild(newRow);
                                table.appendChild(tbody);
                            }
                        }
                    })
                })
        }
    } else {
        window.alert("Please Enter Some Value First")
    }
}
