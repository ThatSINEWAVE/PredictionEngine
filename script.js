document.addEventListener('DOMContentLoaded', () => {
    const predictButton = document.getElementById('predict-button');
    const tryAgainButton = document.getElementById('try-again-button');
    const nameInput = document.getElementById('name-input');
    const inputSection = document.getElementById('input-section');
    const resultSection = document.getElementById('result-section');
    const resultSentence = document.getElementById('result-sentence');
    const famous_personalities = document.getElementById('famous-personalities-sentence');
    const themeToggle = document.getElementById('theme-toggle');

    const countryCodes = {
        "AF": "Afghanistan",
        "AX": "Aland Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "CV": "Cabo Verde",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Congo",
        "CD": "Congo, Democratic Republic of the",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "HR": "Croatia",
        "CU": "Cuba",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Ethiopia",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and McDonald Islands",
        "VA": "Holy See (Vatican City State)",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran, Islamic Republic of",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KP": "Korea, Democratic People's Republic of",
        "KR": "Korea, Republic of",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People's Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MK": "Macedonia, the former Yugoslav Republic of",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia, Federated States of",
        "MD": "Moldova, Republic of",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestine, State of",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Reunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint Barthelemy",
        "SH": "Saint Helena, Ascension and Tristan da Cunha",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin (French part)",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and the Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SX": "Sint Maarten (Dutch part)",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard and Jan Mayen",
        "SZ": "Swaziland",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syrian Arab Republic",
        "TW": "Taiwan, Province of China",
        "TJ": "Tajikistan",
        "TZ": "Tanzania, United Republic of",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "Turkey",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States",
        "UM": "United States Minor Outlying Islands",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela, Bolivarian Republic of",
        "VN": "Viet Nam",
        "VG": "Virgin Islands, British",
        "VI": "Virgin Islands, U.S.",
        "WF": "Wallis and Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    };

    predictButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            fetchPredictions(name);
        }
    });

    tryAgainButton.addEventListener('click', () => {
        fadeOut(resultSection, () => {
            resultSection.classList.add('hidden');
            inputSection.classList.remove('hidden');
            inputSection.classList.add('fade');
        });
    });

    async function fetchPredictions(name) {
        try {
            const [genderData, ageData, nationalityData,celebs] = await Promise.all([
                fetch(`https://api.genderize.io?name=${name}`).then(response => response.json()),
                fetch(`https://api.agify.io?name=${name}`).then(response => response.json()),
                fetch(`https://api.nationalize.io?name=${name}`).then(response => response.json()),
                fetch(`https://api.api-ninjas.com/v1/historicalfigures?name=${name}`, {headers: {'X-Api-Key':'5fEKy/4iO6q+a3r9g9y05g==7pAoJR6AZ2jmo4mW'} }).then(response => response.json()),
            ]);

            const gender = genderData.gender;
            const genderProb = (genderData.probability * 100).toFixed(2) + '%';
            const age = ageData.age;
            const ageCount = ageData.count;
            const countryCode = nationalityData.country[0]?.country_id || 'Unknown';
            const nationality = countryCodes[countryCode] || 'Unknown';
            const nationalityProb = nationalityData.country[0] ? (nationalityData.country[0].probability * 100).toFixed(2) + '%' : 'N/A';
            let celebrityNames = celebs.length > 0 
            ? celebs.map(celeb => `<li>${celeb.name} (${celeb.title})</li>`).join('') 
            : '<li>No famous personalities found.</li>';
        displayResults(name, gender, genderProb, age, ageCount, nationality, nationalityProb, celebrityNames);
        } catch (error) {
            console.error('Error fetching predictions:', error);
        }
    }

    function displayResults(name, gender, genderProb, age, ageCount, nationality, nationalityProb, celebrityNames) {
        resultSentence.innerHTML = `Hello ${name}, based on ${ageCount} occurrences, I'm guessing that you are about ${age} years old. There are ${genderProb} chances that you are a ${gender}, and about ${nationalityProb} chances you live in ${nationality}.`;
        if (!celebrityNames || celebrityNames.length === 0) {
            famous_personalities.innerHTML = `<p>We couldn't find any famous personalities with the same name.</p>`;
        } else {
            famous_personalities.innerHTML = `
                <p>Famous Personalities with the same name:</p>
                <ul class="famous-list">
                     ${celebrityNames}
                </ul>
            `;
        }


        fadeOut(inputSection, () => {
            inputSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
            resultSection.classList.add('fade');
        });
    }

    function fadeOut(element, callback) {
        element.classList.add('fade');
        setTimeout(() => {
            element.classList.add('hidden');
            element.classList.remove('fade');
            callback();
        }, 500);
    }

    function applyTheme(theme) {
        document.body.classList.toggle('dark', theme === 'dark');
        // Set the theme toggle state
        themeToggle.checked = theme === 'dark';
    }

    function saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    }

    themeToggle.addEventListener('change', () => {
        const theme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(theme);
        saveTheme(theme);
    });

    loadTheme(); // Load the theme when the page loads
});
