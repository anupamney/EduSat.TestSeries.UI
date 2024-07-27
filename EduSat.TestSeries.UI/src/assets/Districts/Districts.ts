export interface Taluka {
  name: string;
}

export interface District {
  name: string;
  talukas: Taluka[];
}

export const districts: District[] = [
  {
    name: "Sindhudurg",
    talukas: [
      {
        name: "Kankavli",
      },
      {
        name: "Vaibhavwadi",
      },
      {
        name: "Devgad",
      },
      {
        name: "Malwan",
      },
      {
        name: "Sawantwadi",
      },
      {
        name: "Kudal",
      },
      {
        name: "Vengurla",
      },
      {
        name: "Dodamarg",
      },
    ],
  },
  {
    name: "Ratnagiri",
    talukas: [
      {
        name: "Ratnagiri",
      },
      {
        name: "Sangameshwar",
      },
      {
        name: "Lanja",
      },
      {
        name: "Rajapur",
      },
      {
        name: "Chiplun",
      },
      {
        name: "Guhagar",
      },
      {
        name: "Dapoli",
      },
      {
        name: "Mandangad",
      },
      {
        name: "Khed",
      },
    ],
  },
  {
    name: "Raigad",
    talukas: [
      {
        name: "Pen",
      },
      {
        name: "Alibag",
      },
      {
        name: "Murud",
      },
      {
        name: "Panvel",
      },
      {
        name: "Uran",
      },
      {
        name: "Karjat",
      },
      {
        name: "Khalapur",
      },
      {
        name: "Mangaon",
      },
      {
        name: "Tala",
      },
      {
        name: "Roha",
      },
      {
        name: "Sudhagad-Pali",
      },
      {
        name: "Mahad",
      },
      {
        name: "Poladpur",
      },
      {
        name: "Shrivardhan",
      },
      {
        name: "Mhasala",
      },
    ],
  },
  {
    name: "Mumbai City District",
    talukas: [],
  },
  {
    name: "Mumbai Suburban District",
    talukas: [
      {
        name: "Kurla",
      },
      {
        name: "Andheri",
      },
      {
        name: "Borivali",
      },
    ],
  },
  {
    name: "Thane",
    talukas: [
      {
        name: "Thane",
      },
      {
        name: "Kalyan",
      },
      {
        name: "Murbad",
      },
      {
        name: "Bhiwandi",
      },
      {
        name: "Shahapur",
      },
      {
        name: "Ulhasnagar",
      },
      {
        name: "Ambarnath",
      },
    ],
  },
  {
    name: "Palghar",
    talukas: [
      {
        name: "Palghar",
      },
      {
        name: "Vasai",
      },
      {
        name: "Dahanu",
      },
      {
        name: "Talasari",
      },
      {
        name: "Jawhar",
      },
      {
        name: "Mokhada",
      },
      {
        name: "Vada",
      },
      {
        name: "Vikramgad",
      },
    ],
  },
  {
    name: "Nashik District",
    talukas: [
      {
        name: "Nashik",
      },
      {
        name: "Igatpuri",
      },
      {
        name: "Dindori",
      },
      {
        name: "Peth",
      },
      {
        name: "Trimbakeshwar",
      },
      {
        name: "Kalwan",
      },
      {
        name: "Deola",
      },
      {
        name: "Surgana",
      },
      {
        name: "Baglan",
      },
      {
        name: "Malegaon",
      },
      {
        name: "Nandgaon",
      },
      {
        name: "Chandwad",
      },
      {
        name: "Niphad",
      },
      {
        name: "Sinnar",
      },
      {
        name: "Yeola",
      },
    ],
  },
  {
    name: "Nandurbar",
    talukas: [
      {
        name: "Nandurbar",
      },
      {
        name: "Navapur",
      },
      {
        name: "Shahada",
      },
      {
        name: "Talode",
      },
      {
        name: "Akkalkuwa",
      },
      {
        name: "Dhadgaon",
      },
    ],
  },
  {
    name: "Dhule",
    talukas: [
      {
        name: "Dhule",
      },
      {
        name: "Sakri",
      },
      {
        name: "Sindkheda",
      },
      {
        name: "Shirpur",
      },
    ],
  },
  {
    name: "Jalgaon",
    talukas: [
      {
        name: "Jalgaon",
      },
      {
        name: "Jamner",
      },
      {
        name: "Erandol",
      },
      {
        name: "Dharangaon",
      },
      {
        name: "Bhusawal",
      },
      {
        name: "Raver",
      },
      {
        name: "Muktainagar",
      },
      {
        name: "Bodwad",
      },
      {
        name: "Yawal",
      },
      {
        name: "Amalner",
      },
      {
        name: "Parola",
      },
      {
        name: "Chopda",
      },
      {
        name: "Pachora",
      },
      {
        name: "Bhadgaon",
      },
      {
        name: "Chalisgaon",
      },
    ],
  },
  {
    name: "Buldhana",
    talukas: [
      {
        name: "Buldhana",
      },
      {
        name: "Chikhli",
      },
      {
        name: "Deulgaon Raja",
      },
      {
        name: "Jalgaon Jamod",
      },
      {
        name: "Sangrampur",
      },
      {
        name: "Malkapur",
      },
      {
        name: "Motala",
      },
      {
        name: "Nandura",
      },
      {
        name: "Khamgaon",
      },
      {
        name: "Shegaon",
      },
      {
        name: "Mehkar",
      },
      {
        name: "Sindkhed Raja",
      },
      {
        name: "Lonar",
      },
    ],
  },
  {
    name: "Akola",
    talukas: [
      {
        name: "Akola",
      },
      {
        name: "Akot",
      },
      {
        name: "Telhara",
      },
      {
        name: "Balapur",
      },
      {
        name: "Patur",
      },
      {
        name: "Murtajapur",
      },
      {
        name: "Barshitakli",
      },
    ],
  },
  {
    name: "Washim",
    talukas: [
      {
        name: "Washim",
      },
      {
        name: "Malegaon",
      },
      {
        name: "Risod",
      },
      {
        name: "Mangrulpir",
      },
      {
        name: "Karanja",
      },
      {
        name: "Manora",
      },
    ],
  },
  {
    name: "Amravati",
    talukas: [
      {
        name: "Amravati",
      },
      {
        name: "Bhatukali",
      },
      {
        name: "Nandgaon Khandeshwar",
      },
      {
        name: "Dharni",
      },
      {
        name: "Chikhaldara",
      },
      {
        name: "Achalpur",
      },
      {
        name: "Chandurbazar",
      },
      {
        name: "Morshi",
      },
      {
        name: "Warud",
      },
      {
        name: "Daryapur",
      },
      {
        name: "Anjangaon-Surji",
      },
      {
        name: "Chandur",
      },
      {
        name: "Dhamangaon",
      },
      {
        name: "Tiosa",
      },
    ],
  },
  {
    name: "Wardha",
    talukas: [
      {
        name: "Wardha",
      },
      {
        name: "Deoli",
      },
      {
        name: "Seloo",
      },
      {
        name: "Arvi",
      },
      {
        name: "Ashti",
      },
      {
        name: "Karanja",
      },
      {
        name: "Hinganghat",
      },
      {
        name: "Samudrapur",
      },
    ],
  },
  {
    name: "Nagpur",
    talukas: [
      {
        name: "Nagpur Urban",
      },
      {
        name: "Nagpur Rural",
      },
      {
        name: "Kamptee",
      },
      {
        name: "Hingna",
      },
      {
        name: "Katol",
      },
      {
        name: "Narkhed",
      },
      {
        name: "Saoner",
      },
      {
        name: "Kalameshwar",
      },
      {
        name: "Ramtek",
      },
      {
        name: "Mouda",
      },
      {
        name: "Parseoni",
      },
      {
        name: "Umred",
      },
      {
        name: "Kuhi",
      },
      {
        name: "Bhiwapur",
      },
    ],
  },
  {
    name: "Bhandara",
    talukas: [
      {
        name: "Bhandara",
      },
      {
        name: "Tumsar",
      },
      {
        name: "Pauni",
      },
      {
        name: "Mohadi",
      },
      {
        name: "Sakoli",
      },
      {
        name: "Lakhani",
      },
      {
        name: "Lakhandur",
      },
    ],
  },
  {
    name: "Gondia",
    talukas: [
      {
        name: "Gondia",
      },
      {
        name: "Goregaon",
      },
      {
        name: "Salekasa",
      },
      {
        name: "Tiroda",
      },
      {
        name: "Deori",
      },
      {
        name: "Amgaon",
      },
      {
        name: "Arjuni Morgaon",
      },
      {
        name: "Sadak Arjuni",
      },
    ],
  },
  {
    name: "Gadchiroli",
    talukas: [
      {
        name: "Gadchiroli",
      },
      {
        name: "Aheri",
      },
      {
        name: "Mulchera",
      },
      {
        name: "Dhanora",
      },
      {
        name: "Chamorshi",
      },
      {
        name: "Etapalli",
      },
      {
        name: "Kurkheda",
      },
      {
        name: "Korchi",
      },
      {
        name: "Desaiganj",
      },
      {
        name: "Armori",
      },
    ],
  },
  {
    name: "Chandrapur",
    talukas: [
      {
        name: "Chandrapur",
      },
      {
        name: "Ballarpur",
      },
      {
        name: "Rajura",
      },
      {
        name: "Bhadravati",
      },
      {
        name: "Warora",
      },
      {
        name: "Nagbhir",
      },
      {
        name: "Brahmapuri",
      },
      {
        name: "Sindewahi",
      },
      {
        name: "Mul",
      },
      {
        name: "Saoli",
      },
      {
        name: "Korpana",
      },
      {
        name: "Jiwati",
      },
      {
        name: "Pombhurna",
      },
      {
        name: "Gondpipri",
      },
    ],
  },
  {
    name: "Yavatmal",
    talukas: [
      {
        name: "Yavatmal",
      },
      {
        name: "Kalamb",
      },
      {
        name: "Babhulgaon",
      },
      {
        name: "Darwha",
      },
      {
        name: "Ner",
      },
      {
        name: "Pusad",
      },
      {
        name: "Digras",
      },
      {
        name: "Maregaon",
      },
      {
        name: "Arni",
      },
      {
        name: "Ghatanji",
      },
      {
        name: "Ralegaon",
      },
      {
        name: "Pandharkawada",
      },
      {
        name: "Zari Jamani",
      },
      {
        name: "Umarkhed",
      },
      {
        name: "Mahagaon",
      },
      {
        name: "Wani",
      },
    ],
  },
  {
    name: "Nanded",
    talukas: [
      {
        name: "Nanded",
      },
      {
        name: "Kandhar",
      },
      {
        name: "Mukhed",
      },
      {
        name: "Loha",
      },
      {
        name: "Hadgaon",
      },
      {
        name: "Kinwat",
      },
      {
        name: "Bhokar",
      },
      {
        name: "Biloli",
      },
      {
        name: "Naigaon",
      },
      {
        name: "Degloor",
      },
      {
        name: "Dharmabad",
      },
      {
        name: "Umri",
      },
      {
        name: "Ardhapur",
      },
      {
        name: "Mudkhed",
      },
      {
        name: "Mahur",
      },
    ],
  },
  {
    name: "Parbhani",
    talukas: [
      {
        name: "Parbhani",
      },
      {
        name: "Gangakhed",
      },
      {
        name: "Sonpeth",
      },
      {
        name: "Jintur",
      },
      {
        name: "Pathri",
      },
      {
        name: "Selu",
      },
      {
        name: "Manwat",
      },
      {
        name: "Purna",
      },
    ],
  },
  {
    name: "Latur",
    talukas: [
      {
        name: "Latur",
      },
      {
        name: "Nilanga",
      },
      {
        name: "Ausa",
      },
      {
        name: "Udgir",
      },
      {
        name: "Renapur",
      },
      {
        name: "Chakur",
      },
      {
        name: "Shirur Anantpal",
      },
      {
        name: "Deoni",
      },
      {
        name: "Jalkot",
      },
    ],
  },
  {
    name: "Osmanabad",
    talukas: [
      {
        name: "Osmanabad",
      },
      {
        name: "Tuljapur",
      },
      {
        name: "Omerga",
      },
      {
        name: "Kalamb",
      },
      {
        name: "Paranda",
      },
      {
        name: "Lohara",
      },
      {
        name: "Bhoom",
      },
      {
        name: "Washi",
      },
    ],
  },
  {
    name: "Beed",
    talukas: [
      {
        name: "Beed",
      },
      {
        name: "Georai",
      },
      {
        name: "Patoda",
      },
      {
        name: "Shirur (Kasar)",
      },
      {
        name: "Ashti",
      },
      {
        name: "Shirur",
      },
      {
        name: "Ambajogai",
      },
      {
        name: "Kaij",
      },
      {
        name: "Majalgaon",
      },
      {
        name: "Parli",
      },
      {
        name: "Wadwani",
      },
      {
        name: "Dharur",
      },
    ],
  },
  {
    name: "Jalna",
    talukas: [
      {
        name: "Jalna",
      },
      {
        name: "Ambad",
      },
      {
        name: "Badnapur",
      },
      {
        name: "Bhokardan",
      },
      {
        name: "Jafrabad",
      },
      {
        name: "Ghansawangi",
      },
      {
        name: "Mantha",
      },
      {
        name: "Partur",
      },
    ],
  },
  {
    name: "Aurangabad",
    talukas: [
      {
        name: "Aurangabad",
      },
      {
        name: "Kannad",
      },
      {
        name: "Sillod",
      },
      {
        name: "Soegaon",
      },
      {
        name: "Phulambri",
      },
      {
        name: "Khuldabad",
      },
      {
        name: "Vaijapur",
      },
      {
        name: "Gangapur",
      },
      {
        name: "Paithan",
      },
    ],
  },
  {
    name: "Ahmednagar",
    talukas: [
      {
        name: "Ahmednagar",
      },
      {
        name: "Pathardi",
      },
      {
        name: "Shevgaon",
      },
      {
        name: "Nevasa",
      },
      {
        name: "Rahuri",
      },
      {
        name: "Shrirampur",
      },
      {
        name: "Kopargaon",
      },
      {
        name: "Sangamner",
      },
      {
        name: "Akole",
      },
      {
        name: "Rahata",
      },
      {
        name: "Parner",
      },
      {
        name: "Shrigonda",
      },
      {
        name: "Karjat",
      },
      {
        name: "Jamkhed",
      },
    ],
  },
  {
    name: "Pune",
    talukas: [
      {
        name: "Pune City",
      },
      {
        name: "Pune",
      },
      {
        name: "Shirur",
      },
      {
        name: "Haveli",
      },
      {
        name: "Khed",
      },
      {
        name: "Junnar",
      },
      {
        name: "Maval",
      },
      {
        name: "Mulshi",
      },
      {
        name: "Daund",
      },
      {
        name: "Baramati",
      },
      {
        name: "Purandar",
      },
      {
        name: "Indapur",
      },
      {
        name: "Bhor",
      },
      {
        name: "Velhe",
      },
    ],
  },
  {
    name: "Satara",
    talukas: [
      {
        name: "Satara",
      },
      {
        name: "Phaltan",
      },
      {
        name: "Karad",
      },
      {
        name: "Wai",
      },
      {
        name: "Khandala",
      },
      {
        name: "Patan",
      },
      {
        name: "Mahabaleshwar",
      },
      {
        name: "Koregaon",
      },
      {
        name: "Jaoli",
      },
      {
        name: "Man",
      },
    ],
  },
  {
    name: "Sangli",
    talukas: [
      {
        name: "Sangli",
      },
      {
        name: "Miraj",
      },
      {
        name: "Kavathemahankal",
      },
      {
        name: "Tasgaon",
      },
      {
        name: "Atpadi",
      },
      {
        name: "Jat",
      },
      {
        name: "Khanapur",
      },
      {
        name: "Walwa",
      },
      {
        name: "Palus",
      },
      {
        name: "Shirala",
      },
    ],
  },
  {
    name: "Kolhapur",
    talukas: [
      {
        name: "Karveer",
      },
      {
        name: "Panhala",
      },
      {
        name: "Shahuwadi",
      },
      {
        name: "Hatkanangale",
      },
      {
        name: "Shirol",
      },
      {
        name: "Kagal",
      },
      {
        name: "Gadhinglaj",
      },
      {
        name: "Chandgad",
      },
      {
        name: "Ajra",
      },
      {
        name: "Bhudargad",
      },
      {
        name: "Radhanagari",
      },
      {
        name: "Gaganbawada",
      },
    ],
  },
  {
    name: "Solapur",
    talukas: [
      {
        name: "Solapur",
      },
      {
        name: "Akkalkot",
      },
      {
        name: "South Solapur",
      },
      {
        name: "North Solapur",
      },
      {
        name: "Barshi",
      },
      {
        name: "Karmala",
      },
      {
        name: "Madha",
      },
      {
        name: "Mangalwedha",
      },
      {
        name: "Malshiras",
      },
      {
        name: "Pandharpur",
      },
      {
        name: "Sangola",
      },
    ],
  },
  {
    name: "Mumbai Suburban",
    talukas: [
      {
        name: "Kurla",
      },
      {
        name: "Andheri",
      },
      {
        name: "Borivali",
      },
    ],
  },
  {
    name: "Mumbai City",
    talukas: [
      {
        name: "Fort",
      },
      {
        name: "Colaba",
      },
      {
        name: "Girgaon",
      },
      {
        name: "Byculla",
      },
      {
        name: "Matunga",
      },
      {
        name: "Mahalaxmi",
      },
    ],
  },
  {
    name: "Nashik",
    talukas: [
      {
        name: "Nashik",
      },
      {
        name: "Igatpuri",
      },
      {
        name: "Peint",
      },
      {
        name: "Dindori",
      },
      {
        name: "Kalwan",
      },
      {
        name: "Chandvad",
      },
      {
        name: "Deola",
      },
      {
        name: "Malegaon",
      },
      {
        name: "Nandgaon",
      },
      {
        name: "Niphad",
      },
      {
        name: "Sinnar",
      },
      {
        name: "Yeola",
      },
      {
        name: "Trimbak",
      },
    ],
  },
];
