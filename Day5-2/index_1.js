const zipcodeInput = document.getElementById("zipcode");
const submitBtn = document.getElementById("submit");
const output = document.getElementById("output");

submitBtn.addEventListener("click", function() {
  // Get the value of the zip code input
  const zipcode = zipcodeInput.value;

  // Make a GET request to the location API using the Fetch API
  fetch(`https://zip-code-master.p.rapidapi.com/detail/${zipcode}`, {
    method: "GET",
	headers: {
		'X-RapidAPI-Key': 'dbd6138886msh8398014a095167cp18a45cjsnf7583d654c0e',
		'X-RapidAPI-Host': 'zip-code-master.p.rapidapi.com'
	}
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Extract the city, state, longitude, and latitude from the API response
    let cor = data.summary.coordinates.split(",")
    const ZipCode = data.summary.zip_code
    const city = data.summary.name;
    const state = data.summary.state;
    const longitude = cor[0];
    const latitude = cor[1];
    const Country = data.summary.county;
    const TimeZone = data.summary.time_zone;
    


    // Display the location details in the output element
    output.innerHTML = `
      <p><strong>Zip-Code:</strong> ${ZipCode}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Longitude:</strong> ${longitude}</p>
      <p><strong>Latitude:</strong> ${latitude}</p>
      <p><strong>Country:</strong> ${Country}</p>
      <p><strong>Time-Zone:</strong> ${TimeZone}</p>
    `;
  })
  .catch(error => {
    console.error("Error:", error);
    alert(error.message)
  });
});
