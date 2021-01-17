const { v4: uuidv4 } = require('uuid');
const validator = require('validator');

const Helpers = {
    /**
* generate uuid
* @returns: {string} uuid
*/
    generateUUID: () => {
        const uuid = uuidv4();
        return uuid;
    },
    /**
* get a list of all countries
* @returns: {Object[]} countries - coountries with name (country) and code (country_id)
*/
    getCountries: () => {
        // https://gist.github.com/Keeguon/2310008
        return [{
            "country": "Afghanistan",
            "country_id": "AF"
        },
        {
            "country": "Åland Islands",
            "country_id": "AX"
        },
        {
            "country": "Albania",
            "country_id": "AL"
        },
        {
            "country": "Algeria",
            "country_id": "DZ"
        },
        {
            "country": "American Samoa",
            "country_id": "AS"
        },
        {
            "country": "AndorrA",
            "country_id": "AD"
        },
        {
            "country": "Angola",
            "country_id": "AO"
        },
        {
            "country": "Anguilla",
            "country_id": "AI"
        },
        {
            "country": "Antarctica",
            "country_id": "AQ"
        },
        {
            "country": "Antigua and Barbuda",
            "country_id": "AG"
        },
        {
            "country": "Argentina",
            "country_id": "AR"
        },
        {
            "country": "Armenia",
            "country_id": "AM"
        },
        {
            "country": "Aruba",
            "country_id": "AW"
        },
        {
            "country": "Australia",
            "country_id": "AU"
        },
        {
            "country": "Austria",
            "country_id": "AT"
        },
        {
            "country": "Azerbaijan",
            "country_id": "AZ"
        },
        {
            "country": "Bahamas",
            "country_id": "BS"
        },
        {
            "country": "Bahrain",
            "country_id": "BH"
        },
        {
            "country": "Bangladesh",
            "country_id": "BD"
        },
        {
            "country": "Barbados",
            "country_id": "BB"
        },
        {
            "country": "Belarus",
            "country_id": "BY"
        },
        {
            "country": "Belgium",
            "country_id": "BE"
        },
        {
            "country": "Belize",
            "country_id": "BZ"
        },
        {
            "country": "Benin",
            "country_id": "BJ"
        },
        {
            "country": "Bermuda",
            "country_id": "BM"
        },
        {
            "country": "Bhutan",
            "country_id": "BT"
        },
        {
            "country": "Bolivia",
            "country_id": "BO"
        },
        {
            "country": "Bosnia and Herzegovina",
            "country_id": "BA"
        },
        {
            "country": "Botswana",
            "country_id": "BW"
        },
        {
            "country": "Bouvet Island",
            "country_id": "BV"
        },
        {
            "country": "Brazil",
            "country_id": "BR"
        },
        {
            "country": "British Indian Ocean Territory",
            "country_id": "IO"
        },
        {
            "country": "Brunei Darussalam",
            "country_id": "BN"
        },
        {
            "country": "Bulgaria",
            "country_id": "BG"
        },
        {
            "country": "Burkina Faso",
            "country_id": "BF"
        },
        {
            "country": "Burundi",
            "country_id": "BI"
        },
        {
            "country": "Cambodia",
            "country_id": "KH"
        },
        {
            "country": "Cameroon",
            "country_id": "CM"
        },
        {
            "country": "Canada",
            "country_id": "CA"
        },
        {
            "country": "Cape Verde",
            "country_id": "CV"
        },
        {
            "country": "Cayman Islands",
            "country_id": "KY"
        },
        {
            "country": "Central African Republic",
            "country_id": "CF"
        },
        {
            "country": "Chad",
            "country_id": "TD"
        },
        {
            "country": "Chile",
            "country_id": "CL"
        },
        {
            "country": "China",
            "country_id": "CN"
        },
        {
            "country": "Christmas Island",
            "country_id": "CX"
        },
        {
            "country": "Cocos (Keeling) Islands",
            "country_id": "CC"
        },
        {
            "country": "Colombia",
            "country_id": "CO"
        },
        {
            "country": "Comoros",
            "country_id": "KM"
        },
        {
            "country": "Congo",
            "country_id": "CG"
        },
        {
            "country": "Congo, The Democratic Republic of the",
            "country_id": "CD"
        },
        {
            "country": "Cook Islands",
            "country_id": "CK"
        },
        {
            "country": "Costa Rica",
            "country_id": "CR"
        },
        {
            "country": "Cote D'Ivoire",
            "country_id": "CI"
        },
        {
            "country": "Croatia",
            "country_id": "HR"
        },
        {
            "country": "Cuba",
            "country_id": "CU"
        },
        {
            "country": "Cyprus",
            "country_id": "CY"
        },
        {
            "country": "Czech Republic",
            "country_id": "CZ"
        },
        {
            "country": "Denmark",
            "country_id": "DK"
        },
        {
            "country": "Djibouti",
            "country_id": "DJ"
        },
        {
            "country": "Dominica",
            "country_id": "DM"
        },
        {
            "country": "Dominican Republic",
            "country_id": "DO"
        },
        {
            "country": "Ecuador",
            "country_id": "EC"
        },
        {
            "country": "Egypt",
            "country_id": "EG"
        },
        {
            "country": "El Salvador",
            "country_id": "SV"
        },
        {
            "country": "Equatorial Guinea",
            "country_id": "GQ"
        },
        {
            "country": "Eritrea",
            "country_id": "ER"
        },
        {
            "country": "Estonia",
            "country_id": "EE"
        },
        {
            "country": "Ethiopia",
            "country_id": "ET"
        },
        {
            "country": "Falkland Islands (Malvinas)",
            "country_id": "FK"
        },
        {
            "country": "Faroe Islands",
            "country_id": "FO"
        },
        {
            "country": "Fiji",
            "country_id": "FJ"
        },
        {
            "country": "Finland",
            "country_id": "FI"
        },
        {
            "country": "France",
            "country_id": "FR"
        },
        {
            "country": "French Guiana",
            "country_id": "GF"
        },
        {
            "country": "French Polynesia",
            "country_id": "PF"
        },
        {
            "country": "French Southern Territories",
            "country_id": "TF"
        },
        {
            "country": "Gabon",
            "country_id": "GA"
        },
        {
            "country": "Gambia",
            "country_id": "GM"
        },
        {
            "country": "Georgia",
            "country_id": "GE"
        },
        {
            "country": "Germany",
            "country_id": "DE"
        },
        {
            "country": "Ghana",
            "country_id": "GH"
        },
        {
            "country": "Gibraltar",
            "country_id": "GI"
        },
        {
            "country": "Greece",
            "country_id": "GR"
        },
        {
            "country": "Greenland",
            "country_id": "GL"
        },
        {
            "country": "Grenada",
            "country_id": "GD"
        },
        {
            "country": "Guadeloupe",
            "country_id": "GP"
        },
        {
            "country": "Guam",
            "country_id": "GU"
        },
        {
            "country": "Guatemala",
            "country_id": "GT"
        },
        {
            "country": "Guernsey",
            "country_id": "GG"
        },
        {
            "country": "Guinea",
            "country_id": "GN"
        },
        {
            "country": "Guinea-Bissau",
            "country_id": "GW"
        },
        {
            "country": "Guyana",
            "country_id": "GY"
        },
        {
            "country": "Haiti",
            "country_id": "HT"
        },
        {
            "country": "Heard Island and Mcdonald Islands",
            "country_id": "HM"
        },
        {
            "country": "Holy See (Vatican City State)",
            "country_id": "VA"
        },
        {
            "country": "Honduras",
            "country_id": "HN"
        },
        {
            "country": "Hong Kong",
            "country_id": "HK"
        },
        {
            "country": "Hungary",
            "country_id": "HU"
        },
        {
            "country": "Iceland",
            "country_id": "IS"
        },
        {
            "country": "India",
            "country_id": "IN"
        },
        {
            "country": "Indonesia",
            "country_id": "ID"
        },
        {
            "country": "Iran, Islamic Republic Of",
            "country_id": "IR"
        },
        {
            "country": "Iraq",
            "country_id": "IQ"
        },
        {
            "country": "Ireland",
            "country_id": "IE"
        },
        {
            "country": "Isle of Man",
            "country_id": "IM"
        },
        {
            "country": "Israel",
            "country_id": "IL"
        },
        {
            "country": "Italy",
            "country_id": "IT"
        },
        {
            "country": "Jamaica",
            "country_id": "JM"
        },
        {
            "country": "Japan",
            "country_id": "JP"
        },
        {
            "country": "Jersey",
            "country_id": "JE"
        },
        {
            "country": "Jordan",
            "country_id": "JO"
        },
        {
            "country": "Kazakhstan",
            "country_id": "KZ"
        },
        {
            "country": "Kenya",
            "country_id": "KE"
        },
        {
            "country": "Kiribati",
            "country_id": "KI"
        },
        {
            "country": "Korea, Democratic People's Republic of",
            "country_id": "KP"
        },
        {
            "country": "Korea, Republic of",
            "country_id": "KR"
        },
        {
            "country": "Kuwait",
            "country_id": "KW"
        },
        {
            "country": "Kyrgyzstan",
            "country_id": "KG"
        },
        {
            "country": "Lao People's Democratic Republic",
            "country_id": "LA"
        },
        {
            "country": "Latvia",
            "country_id": "LV"
        },
        {
            "country": "Lebanon",
            "country_id": "LB"
        },
        {
            "country": "Lesotho",
            "country_id": "LS"
        },
        {
            "country": "Liberia",
            "country_id": "LR"
        },
        {
            "country": "Libyan Arab Jamahiriya",
            "country_id": "LY"
        },
        {
            "country": "Liechtenstein",
            "country_id": "LI"
        },
        {
            "country": "Lithuania",
            "country_id": "LT"
        },
        {
            "country": "Luxembourg",
            "country_id": "LU"
        },
        {
            "country": "Macao",
            "country_id": "MO"
        },
        {
            "country": "Macedonia, The Former Yugoslav Republic of",
            "country_id": "MK"
        },
        {
            "country": "Madagascar",
            "country_id": "MG"
        },
        {
            "country": "Malawi",
            "country_id": "MW"
        },
        {
            "country": "Malaysia",
            "country_id": "MY"
        },
        {
            "country": "Maldives",
            "country_id": "MV"
        },
        {
            "country": "Mali",
            "country_id": "ML"
        },
        {
            "country": "Malta",
            "country_id": "MT"
        },
        {
            "country": "Marshall Islands",
            "country_id": "MH"
        },
        {
            "country": "Martinique",
            "country_id": "MQ"
        },
        {
            "country": "Mauritania",
            "country_id": "MR"
        },
        {
            "country": "Mauritius",
            "country_id": "MU"
        },
        {
            "country": "Mayotte",
            "country_id": "YT"
        },
        {
            "country": "Mexico",
            "country_id": "MX"
        },
        {
            "country": "Micronesia, Federated States of",
            "country_id": "FM"
        },
        {
            "country": "Moldova, Republic of",
            "country_id": "MD"
        },
        {
            "country": "Monaco",
            "country_id": "MC"
        },
        {
            "country": "Mongolia",
            "country_id": "MN"
        },
        {
            "country": "Montserrat",
            "country_id": "MS"
        },
        {
            "country": "Morocco",
            "country_id": "MA"
        },
        {
            "country": "Mozambique",
            "country_id": "MZ"
        },
        {
            "country": "Myanmar",
            "country_id": "MM"
        },
        {
            "country": "Namibia",
            "country_id": "NA"
        },
        {
            "country": "Nauru",
            "country_id": "NR"
        },
        {
            "country": "Nepal",
            "country_id": "NP"
        },
        {
            "country": "Netherlands",
            "country_id": "NL"
        },
        {
            "country": "Netherlands Antilles",
            "country_id": "AN"
        },
        {
            "country": "New Caledonia",
            "country_id": "NC"
        },
        {
            "country": "New Zealand",
            "country_id": "NZ"
        },
        {
            "country": "Nicaragua",
            "country_id": "NI"
        },
        {
            "country": "Niger",
            "country_id": "NE"
        },
        {
            "country": "Nigeria",
            "country_id": "NG"
        },
        {
            "country": "Niue",
            "country_id": "NU"
        },
        {
            "country": "Norfolk Island",
            "country_id": "NF"
        },
        {
            "country": "Northern Mariana Islands",
            "country_id": "MP"
        },
        {
            "country": "Norway",
            "country_id": "NO"
        },
        {
            "country": "Oman",
            "country_id": "OM"
        },
        {
            "country": "Pakistan",
            "country_id": "PK"
        },
        {
            "country": "Palau",
            "country_id": "PW"
        },
        {
            "country": "Palestinian Territory, Occupied",
            "country_id": "PS"
        },
        {
            "country": "Panama",
            "country_id": "PA"
        },
        {
            "country": "Papua New Guinea",
            "country_id": "PG"
        },
        {
            "country": "Paraguay",
            "country_id": "PY"
        },
        {
            "country": "Peru",
            "country_id": "PE"
        },
        {
            "country": "Philippines",
            "country_id": "PH"
        },
        {
            "country": "Pitcairn",
            "country_id": "PN"
        },
        {
            "country": "Poland",
            "country_id": "PL"
        },
        {
            "country": "Portugal",
            "country_id": "PT"
        },
        {
            "country": "Puerto Rico",
            "country_id": "PR"
        },
        {
            "country": "Qatar",
            "country_id": "QA"
        },
        {
            "country": "Reunion",
            "country_id": "RE"
        },
        {
            "country": "Romania",
            "country_id": "RO"
        },
        {
            "country": "Russian Federation",
            "country_id": "RU"
        },
        {
            "country": "RWANDA",
            "country_id": "RW"
        },
        {
            "country": "Saint Helena",
            "country_id": "SH"
        },
        {
            "country": "Saint Kitts and Nevis",
            "country_id": "KN"
        },
        {
            "country": "Saint Lucia",
            "country_id": "LC"
        },
        {
            "country": "Saint Pierre and Miquelon",
            "country_id": "PM"
        },
        {
            "country": "Saint Vincent and the Grenadines",
            "country_id": "VC"
        },
        {
            "country": "Samoa",
            "country_id": "WS"
        },
        {
            "country": "San Marino",
            "country_id": "SM"
        },
        {
            "country": "Sao Tome and Principe",
            "country_id": "ST"
        },
        {
            "country": "Saudi Arabia",
            "country_id": "SA"
        },
        {
            "country": "Senegal",
            "country_id": "SN"
        },
        {
            "country": "Serbia and Montenegro",
            "country_id": "CS"
        },
        {
            "country": "Seychelles",
            "country_id": "SC"
        },
        {
            "country": "Sierra Leone",
            "country_id": "SL"
        },
        {
            "country": "Singapore",
            "country_id": "SG"
        },
        {
            "country": "Slovakia",
            "country_id": "SK"
        },
        {
            "country": "Slovenia",
            "country_id": "SI"
        },
        {
            "country": "Solomon Islands",
            "country_id": "SB"
        },
        {
            "country": "Somalia",
            "country_id": "SO"
        },
        {
            "country": "South Africa",
            "country_id": "ZA"
        },
        {
            "country": "South Georgia and the South Sandwich Islands",
            "country_id": "GS"
        },
        {
            "country": "Spain",
            "country_id": "ES"
        },
        {
            "country": "Sri Lanka",
            "country_id": "LK"
        },
        {
            "country": "Sudan",
            "country_id": "SD"
        },
        {
            "country": "Suricountry",
            "country_id": "SR"
        },
        {
            "country": "Svalbard and Jan Mayen",
            "country_id": "SJ"
        },
        {
            "country": "Swaziland",
            "country_id": "SZ"
        },
        {
            "country": "Sweden",
            "country_id": "SE"
        },
        {
            "country": "Switzerland",
            "country_id": "CH"
        },
        {
            "country": "Syrian Arab Republic",
            "country_id": "SY"
        },
        {
            "country": "Taiwan, Province of China",
            "country_id": "TW"
        },
        {
            "country": "Tajikistan",
            "country_id": "TJ"
        },
        {
            "country": "Tanzania, United Republic of",
            "country_id": "TZ"
        },
        {
            "country": "Thailand",
            "country_id": "TH"
        },
        {
            "country": "Timor-Leste",
            "country_id": "TL"
        },
        {
            "country": "Togo",
            "country_id": "TG"
        },
        {
            "country": "Tokelau",
            "country_id": "TK"
        },
        {
            "country": "Tonga",
            "country_id": "TO"
        },
        {
            "country": "Trinidad and Tobago",
            "country_id": "TT"
        },
        {
            "country": "Tunisia",
            "country_id": "TN"
        },
        {
            "country": "Turkey",
            "country_id": "TR"
        },
        {
            "country": "Turkmenistan",
            "country_id": "TM"
        },
        {
            "country": "Turks and Caicos Islands",
            "country_id": "TC"
        },
        {
            "country": "Tuvalu",
            "country_id": "TV"
        },
        {
            "country": "Uganda",
            "country_id": "UG"
        },
        {
            "country": "Ukraine",
            "country_id": "UA"
        },
        {
            "country": "United Arab Emirates",
            "country_id": "AE"
        },
        {
            "country": "United Kingdom",
            "country_id": "GB"
        },
        {
            "country": "United States",
            "country_id": "US"
        },
        {
            "country": "United States Minor Outlying Islands",
            "country_id": "UM"
        },
        {
            "country": "Uruguay",
            "country_id": "UY"
        },
        {
            "country": "Uzbekistan",
            "country_id": "UZ"
        },
        {
            "country": "Vanuatu",
            "country_id": "VU"
        },
        {
            "country": "Venezuela",
            "country_id": "VE"
        },
        {
            "country": "Viet Nam",
            "country_id": "VN"
        },
        {
            "country": "Virgin Islands, British",
            "country_id": "VG"
        },
        {
            "country": "Virgin Islands, U.S.",
            "country_id": "VI"
        },
        {
            "country": "Wallis and Futuna",
            "country_id": "WF"
        },
        {
            "country": "Western Sahara",
            "country_id": "EH"
        },
        {
            "country": "Yemen",
            "country_id": "YE"
        },
        {
            "country": "Zambia",
            "country_id": "ZM"
        },
        {
            "country": "Zimbabwe",
            "country_id": "ZW"
        }
        ]
    },
    /**
* Validate source object
* @params: {Object} [publication] 
* @params: {string} [publication.name]
* @params: {string} [publication.country_id]
* @params: {string} [publication.website_url]
* @returns: {boolean} 
*/
    isValidSourceObject: (source) => {
        if (Object.prototype.toString.call(source) != '[object Object]') {
            return false
        }
        const hasName = source.hasOwnProperty('name');
        const hasCountryId = source.hasOwnProperty('country_id');
        const hasUrl = source.hasOwnProperty('website_url');

        if (hasName && hasCountryId && hasUrl) {
            return Helpers.isValidCountryId(source.country_id)
        } else {
            return false
        }
    },
    /**
    * Validate country id
    * @params: {string} [uuid] 
    * @returns: {boolean}
    */
    isValidCountryId: (id) => {
        const countries = Helpers.getCountries();
        let validCountry_id = false;
        countries.forEach(country => {
            if (country.country_id == id.toUpperCase()) {
                validCountry_id = true;
            }
        });
        return validCountry_id;
    },
    /**
* Validate publication name object
* @params: {Object} [publication] 
* @params: {string} [publication.name]
* @returns: {object} message with uuid 
*/
    isValidPublicationNameObject: (req) => {
        if (Object.prototype.toString.call(req) != '[object Object]') {
            return false
        }
        if (req.hasOwnProperty('name')) {
            return true
        } else {
            return false
        }
    },
    isUuid: (uuid) => {
        return validator.isUUID(uuid)
    },
    isValidPropertyNames: (object) => {
        if (object.hasOwnProperty('name') || object.hasOwnProperty('website_url') || object.hasOwnProperty('country_id')) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Helpers