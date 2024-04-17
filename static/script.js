

function getCountryInfo() {
    const countryInput = document.getElementById('country').value;
    if (!countryInput) {
        alert('Please enter a country name.');
        return;
    }

    fetch(`http://worldinformationapienv.eba-zcmupdkn.us-east-1.elasticbeanstalk.com/country-info?country=${countryInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to retrieve data from server.');
            }
            return response.json();
        })
        .then(data => {
            displayCountryInfo(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to retrieve country information.');
        });
}

function displayCountryInfo(countryInfo) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${countryInfo.name}</h2>
        <p><strong>Capital:</strong> ${countryInfo.capital}</p>
        <p><strong>Area:</strong> ${countryInfo.area} square kilometers</p>
        <p><strong>Region:</strong> ${countryInfo.region}</p>
        <p><strong>Subregion:</strong> ${countryInfo.subregion}</p>
        <p><strong>Languages:</strong> ${countryInfo.languages.join(', ')}</p>
    `;
}


