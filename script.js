"use strict";

// ===========================================================
// DEVELOPER CONFIGURATION — edit this section only.
// ===========================================================
const CONFIG = {
  siteName: "Best Product Hub",
  amazonStoreId: "gopikamages0d-21", // Change this in ONE place.
  productsPerPage: 15,
};

// Categories are displayed in this order, including empty ones.
const CATEGORIES = [
  "Books",
  "Toys & Games",
  "Baby Products",
  "Computers & Accessories",
  "Mobile Phones",
  "Home Appliances",
  "Car & Motorbike",
  "Pet Supplies",
  "Health & Personal Care",
  "Office Products & Stationery",
  "Garden & Outdoors",
  "Tools & Home Improvement",
  "Video Games",
  "Musical Instruments",
  "Watches",
  "Jewelry",
  "Shoes & Handbags",
  "Luggage & Travel Accessories",
  "Industrial & Scientific",
  "Software",
  "Furniture",
  "Gift Cards"
];

// Product data (JSON-compatible JavaScript objects).
// Add products as: { category, name, description, amazonLink, score }
// score: 0–100, or null if you have not assigned a score.
// amazonLink: actual Amazon product URL; affiliate tag added automatically.
const PRODUCTS = [
  {
    "category": "Books",
    "name": "Next Toppers CBSE Class 10 Sample Papers 2026-27 (3 Books Combo)",
    "description": "Three-book CBSE Class 10 sample paper combo by Prashant Kirad, Shobhit Nirwan and Digraj Singh Rajput.",
    "amazonLink": "https://www.amazon.in/dp/816888888X",
    "score": null
  },
  {
    "category": "Books",
    "name": "Next Toppers CBSE Class 10 English Language and Literature Sample Papers 2026-27",
    "description": "English Language and Literature sample papers for CBSE Class 10.",
    "amazonLink": "https://www.amazon.in/dp/8168888871",
    "score": null
  },
  {
    "category": "Books",
    "name": "NCERT Understanding Society – India and Beyond (Social Science Part 2, Grade 9, 2026-2027 Edition)",
    "description": "NCERT Grade 9 Social Science Part 2 textbook.",
    "amazonLink": "https://www.amazon.in/dp/9357292799",
    "score": null
  },
  {
    "category": "Books",
    "name": "NCERT Ganita Manjari, Part 2 for Class 9 (English Medium, 2026-2027)",
    "description": "Class 9 English-medium mathematics textbook, Studyupindia edition.",
    "amazonLink": "https://www.amazon.in/dp/9357292365",
    "score": null
  },
  {
    "category": "Books",
    "name": "My First Library Boxset for Kids (10 Board Books)",
    "description": "Wonder House Books boxed set of ten early-learning board books.",
    "amazonLink": "https://www.amazon.in/dp/9387779262",
    "score": null
  },
  {
    "category": "Books",
    "name": "PARMAR SSC Fatman | GK/GS Theory Book (English Medium, 2nd Edition, 2026)",
    "description": "Parmar Sir general knowledge and general studies theory book for SSC preparation.",
    "amazonLink": "https://www.amazon.in/dp/935886592X",
    "score": null
  },
  {
    "category": "Books",
    "name": "SUPERTET SUPERGUIDE | TWA | SUPER TET BOOK",
    "description": "Teaching eligibility exam preparation guide by Gargi Ma’am and Ankit Sir.",
    "amazonLink": "https://www.amazon.in/dp/9358861002",
    "score": null
  },
  {
    "category": "Books",
    "name": "White Nights – Fyodor Dostoyevsky",
    "description": "Classic short fiction by Fyodor Dostoyevsky.",
    "amazonLink": "https://www.amazon.in/dp/0241252083",
    "score": null
  },
  {
    "category": "Books",
    "name": "UP Super TET | Best Super Book",
    "description": "UP Super TET exam preparation book by Sachin Academy and Sachin Choudhary.",
    "amazonLink": "https://www.amazon.in/dp/9358860545",
    "score": null
  },
  {
    "category": "Books",
    "name": "Aditya Ranjan Sir | SSC MATHS 6500+ (Hindi Medium, 3rd Edition)",
    "description": "Hindi-medium SSC mathematics practice and explanations.",
    "amazonLink": "https://www.amazon.in/dp/B0GVL1M5TF",
    "score": null
  },
  {
    "category": "Books",
    "name": "My First Book of Patterns: Pencil Control",
    "description": "Wonder House Books early handwriting and pencil-control activity book.",
    "amazonLink": "https://www.amazon.in/dp/9387779319",
    "score": null
  },
  {
    "category": "Books",
    "name": "Stop Letting Everything Affect You – Daniel Chidiac",
    "description": "Self-help book about emotional resilience and self-sabotage.",
    "amazonLink": "https://www.amazon.in/dp/9373171984",
    "score": null
  },
  {
    "category": "Books",
    "name": "The Psychology of Money – Morgan Housel",
    "description": "Essays on the behavior and psychology behind money decisions.",
    "amazonLink": "https://www.amazon.in/dp/9390166268",
    "score": null
  },
  {
    "category": "Books",
    "name": "30 Days to Better English – Norman Lewis",
    "description": "Practical English-language learning book by Norman Lewis.",
    "amazonLink": "https://www.amazon.in/dp/014344798X",
    "score": null
  },
  {
    "category": "Books",
    "name": "Psycho-Cybernetics (Updated and Expanded) – Maxwell Maltz",
    "description": "Updated edition of Maxwell Maltz’s book on self-image and personal development.",
    "amazonLink": "https://www.amazon.in/dp/1800812922",
    "score": null
  },
  {
    "category": "Books",
    "name": "You Can – George Matthew Adams",
    "description": "Motivational classic about self-belief and personal growth.",
    "amazonLink": "https://www.amazon.in/dp/9389931843",
    "score": null
  },
  {
    "category": "Books",
    "name": "Colouring Books (Pack of 12 Copy Colour Books for Children)",
    "description": "Wonder House Books set of 12 colouring activity books for children.",
    "amazonLink": "https://www.amazon.in/dp/9388369785",
    "score": null
  },
  {
    "category": "Books",
    "name": "The Courage to Be Disliked – Ichiro Kishimi and Fumitake Koga",
    "description": "A dialogue-driven book exploring Adlerian psychology and personal freedom.",
    "amazonLink": "https://www.amazon.in/dp/1760630721",
    "score": null
  },
  {
    "category": "Books",
    "name": "BRAHMASTRA Complete Maths Multicolored Formula Book (English Medium, 3rd Edition)",
    "description": "Aditya Ranjan mathematics formula reference for competitive examinations.",
    "amazonLink": "https://www.amazon.in/dp/B0FRFMCFB3",
    "score": null
  },
  {
    "category": "Books",
    "name": "The Very Hungry Caterpillar – Eric Carle",
    "description": "Illustrated children’s picture book by Eric Carle.",
    "amazonLink": "https://www.amazon.in/dp/0241003008",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Lifelong LLKS03 Foldable Kick Skating Scooter for Kids",
    "description": "Foldable kids scooter in pink and blue with a maximum weight capacity of 50 kg.",
    "amazonLink": "https://www.amazon.in/dp/B0C862R9VF",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "LEGO Speed Champions Ferrari SF-24 F1 Race Car Set 77242",
    "description": "Ferrari Formula 1 racing car building blocks set for children aged 10 years and above.",
    "amazonLink": "https://www.amazon.in/dp/B0DHSBBV6R",
    "score": 20
  },
  {
    "category": "Toys & Games",
    "name": "Kidsmate Zoom Trike Cycle for Kids 2–5 Years",
    "description": "Blue tricycle with anti-skid EVA wheels, bell, front and rear baskets, comfortable seat and 30 kg capacity.",
    "amazonLink": "https://www.amazon.in/dp/B0H7WYLTX6",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Babique Ball Rattle Sound Soft Toy",
    "description": "10 cm soft rattle ball toy for babies and young children.",
    "amazonLink": "https://www.amazon.in/dp/B08PVYDSX1",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Frendo Remote Control Drift Stunt Car 4WD",
    "description": "Rechargeable remote control stunt car with 360-degree rotation, dual-sided climbing and USB-C charging.",
    "amazonLink": "https://www.amazon.in/dp/B0FYWTYXNW",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Storio Baby Rattle Set with Teethers – 7 Pieces",
    "description": "Seven-piece non-toxic baby rattle and teether toy set suitable for newborn gifts.",
    "amazonLink": "https://www.amazon.in/dp/B0CBV1WDM1",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Kidsmate Cruiser 3-Wheel Kick Scooter for Kids",
    "description": "Three-wheel kick scooter for children aged 2–12 years with broad wheels, adjustable height and foldable design.",
    "amazonLink": "https://www.amazon.in/dp/B0D4DZ7WL2",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Toy Imagine Kids Stationery Return Gift Kit – Pack of 12",
    "description": "Stationery return gift set containing pencils, erasers, rulers and sharpeners for school and birthday parties.",
    "amazonLink": "https://www.amazon.in/dp/B0GBYWWVLG",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Wembley Rechargeable Karaoke Microphone with Speaker",
    "description": "Portable wireless karaoke microphone with Bluetooth speaker and LED lights for kids and adults.",
    "amazonLink": "https://www.amazon.in/dp/B0DRPCR5VK",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Kids Rechargeable Learning Toy Phone with 24 Modes",
    "description": "Educational toy mobile phone with 24 learning modes, music, games and flash card activities.",
    "amazonLink": "https://www.amazon.in/dp/B0GSZ14C55",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Toy Imagine Wooden Color Memory Chess Game",
    "description": "Wooden Montessori memory matching board game designed to encourage concentration and visual memory skills.",
    "amazonLink": "https://www.amazon.in/dp/B0FC692YW3",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Wembley Educational Kids Learning Laptop",
    "description": "Educational laptop toy for children with alphabet, words, mathematics, music, games and memory activities.",
    "amazonLink": "https://www.amazon.in/dp/B0CM9MHFQP",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Gooyo GY-2029 Voice Control Dancing Monkey Toy",
    "description": "Battery-operated dancing monkey toy with spinning, rolling, tumbling, LED lights and sound effects.",
    "amazonLink": "https://www.amazon.in/dp/B0C77VNZ5D",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Lifelong Trike Cycle for Kids 2–5 Years",
    "description": "Kids tricycle with three EVA wheels, bell, basket, parental control and 30 kg weight capacity.",
    "amazonLink": "https://www.amazon.in/dp/B0CQRDQ6TS",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Storio Montessori Talking Flash Cards for Kids",
    "description": "Rechargeable educational flash card toy for toddlers designed to support language and cognitive learning.",
    "amazonLink": "https://www.amazon.in/dp/B0FBJPY4C7",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Novo Baby Smart Activity Geometric Learning Blocks",
    "description": "Colorful geometric stacking and shape sorting blocks for children aged 1 year and above.",
    "amazonLink": "https://www.amazon.in/dp/B0DRVKV1W6",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Lifelong Bunny Manual Push Ride-On Toy Car",
    "description": "Manual push ride-on toy car for children aged 1–4 years with back support, steering wheel and 50 kg capacity.",
    "amazonLink": "https://www.amazon.in/dp/B0FPCJ25SR",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Storio Reversible Octopus Plush Soft Toy",
    "description": "Blue and pink reversible octopus plush toy suitable for children's gifts.",
    "amazonLink": "https://www.amazon.in/dp/B0D6Z1YPTZ",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Mattel UNO Classic Family Card Game",
    "description": "Classic UNO card game for family game nights, parties and players of different ages.",
    "amazonLink": "https://www.amazon.in/dp/B00004TZY8",
    "score": null
  },
  {
    "category": "Toys & Games",
    "name": "Storio Magnetic Tiles Building Blocks – 16 Pieces",
    "description": "Sixteen-piece magnetic building blocks set for creative construction and educational play.",
    "amazonLink": "https://www.amazon.in/dp/B0G1CHDVSC",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Pampers Complete Skin Comfort Pants XL – 56 Count",
    "description": "Extra-large baby diaper pants for 12–17 kg babies with an anti-rash blanket and lotion containing Vitamin E and Aloe Vera.",
    "amazonLink": "https://www.amazon.in/dp/B07CXGJKXL",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "MamyPoko Pants Premium All Night Absorb L – 62 Count",
    "description": "Large-size baby diaper pants for 9–14 kg babies with crisscross absorbent sheets, Coco Care and up to 12-hour leakage protection.",
    "amazonLink": "https://www.amazon.in/dp/B07Y8S56RW",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Pampers Premium Care Pant Style Diapers M – 54 Count",
    "description": "Medium-size baby diaper pants with a no-marks design and 360-degree cottony softness.",
    "amazonLink": "https://www.amazon.in/dp/B07F2X8BHM",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Huggies Complete Comfort Wonder Pants XL – 56 Count",
    "description": "Extra-large pant-style baby diapers for 12–17 kg babies, designed for fast absorption and leakage protection.",
    "amazonLink": "https://www.amazon.in/dp/B07M92GK39",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "LuvLap Pant Style Baby Diapers L – 62 Count",
    "description": "Large-size diaper pants for babies weighing 9–14 kg with Aloe Vera lotion and up to 12 hours of protection.",
    "amazonLink": "https://www.amazon.in/dp/B09MVWHJ9J",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Pampers Active Baby Tape Style Diapers NB/XS – 72 Count",
    "description": "Newborn and extra-small tape-style baby diapers for babies up to 5 kg, featuring an adjustable fit and skin protection.",
    "amazonLink": "https://www.amazon.in/dp/B0781Z3BW6",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "TEDDYY Easy Baby Diaper Pants M – 74 Count",
    "description": "Medium-size baby diaper pants for 7–12 kg babies with breathable material, rapid absorption channels and a wetness indicator.",
    "amazonLink": "https://www.amazon.in/dp/B09ZHTRS6N",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "MamyPoko Pants Extra Absorb Baby Diapers L – 64 Count",
    "description": "Large-size baby diapers for 9–14 kg babies with a soft fit, crisscross absorbent sheet and coconut oil.",
    "amazonLink": "https://www.amazon.in/dp/B07Y8RXN65",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Mother Sparsh 99% Pure Water Baby Wipes – 144 Wipes",
    "description": "Unscented baby wipes made with plant-based cloth and 99% water, supplied in two packs of 72 wipes with lids.",
    "amazonLink": "https://www.amazon.in/dp/B07JPGWH5R",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Little's Soft Cleansing Baby Wipes – 240 Wipes",
    "description": "Three packs of 80 thick and moist baby wipes containing Aloe Vera, Vitamin E and Jojoba Oil.",
    "amazonLink": "https://www.amazon.in/dp/B088TZC4B6",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Mee Mee Baby Wet Wipes with Aloe Vera – 216 Wipes",
    "description": "Three packs of 72 pH-balanced baby wipes with Aloe Vera, a gentle fragrance and a paraben-free formulation.",
    "amazonLink": "https://www.amazon.in/dp/B07X34F9MF",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Little Angel Easy Dry Diaper Pants M – 72 Count",
    "description": "Medium-size baby diaper pants for babies weighing 7–12 kg, designed to provide up to 12 hours of absorption.",
    "amazonLink": "https://www.amazon.in/dp/B0CNK3PRMF",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Himalaya Gentle Baby Shampoo – 400 ml",
    "description": "Gentle baby shampoo with phyto-proteins, a no-tears formulation and pH 5.5 for cleansing baby's scalp and hair.",
    "amazonLink": "https://www.amazon.in/dp/B00H5NMNXC",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Novel Baby Wet Wipes – 480 Wipes",
    "description": "Six packs of 80 baby wipes enriched with Aloe Vera, Chamomile and Vitamin E, featuring a pH-balanced, paraben-free formulation.",
    "amazonLink": "https://www.amazon.in/dp/B09GP8BLSM",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Little's Premium Baby Diaper Pants XL – 54 Count",
    "description": "Extra-large baby diaper pants for 12–17 kg babies with a leakage guard, wetness indicator and up to 12 hours of absorption.",
    "amazonLink": "https://www.amazon.in/dp/B0B4S3JDHN",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "LuvLap Moisturising Baby Wipes with Aloe Vera – 216 Wipes",
    "description": "Three packs of 72 moisturising baby wipes with Aloe Vera and resealable flip-top lids.",
    "amazonLink": "https://www.amazon.in/dp/B0817S14MZ",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Himalaya Gentle Baby Powder – 700 g",
    "description": "Gentle baby powder formulated with Olive Oil, Almond Oil and Yashad Bhasma to help keep baby's skin smooth and dry.",
    "amazonLink": "https://www.amazon.in/dp/B0G1MYB7SX",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Pampers Premium Care Pant Style Baby Diapers M – 4 Count",
    "description": "Small pack of medium-size premium baby diaper pants with a no-marks design and 360-degree cottony softness.",
    "amazonLink": "https://www.amazon.in/dp/B0FGJH3WC2",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Amazon Brand Supples Premium Diaper Pants M – 72 Count",
    "description": "Medium-size baby diaper pants for 7–12 kg babies with cotton-soft fabric, triple leak guards and up to 12-hour absorption.",
    "amazonLink": "https://www.amazon.in/dp/B07Q2F37JN",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Himalaya Gentle Baby Lotion – 400 ml",
    "description": "Baby moisturising lotion with Almond Oil, Olive Oil and Country Mallow, featuring a pH 5.5 formulation.",
    "amazonLink": "https://www.amazon.in/dp/B0G1MWWPTF",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Pampers Happy Sleep Pant Style Baby Diapers L – 40 Count",
    "description": "Large-size baby diaper pants for 9–14 kg babies with an anti-rash shield, designed for overnight use.",
    "amazonLink": "https://www.amazon.in/dp/B0DWNG2WRL",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "R for Rabbit Feather Diaper Pants XL – 46 Count",
    "description": "Extra-large premium pant-style baby diapers designed for babies weighing 12–17 kg.",
    "amazonLink": "https://www.amazon.in/dp/B09QQQHKRP",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Mee Mee Baby Liquid Laundry Detergent – 1.5 L",
    "description": "pH-balanced liquid detergent for washing baby clothes, formulated to remove stains and odours with a mild fragrance.",
    "amazonLink": "https://www.amazon.in/dp/B0789HXX16",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Amazon Brand Supples Premium Diaper Pants L – 62 Count",
    "description": "Large-size baby diaper pants for 9–14 kg babies with cushiony cotton-soft fabric, triple leak guards and up to 12-hour absorption.",
    "amazonLink": "https://www.amazon.in/dp/B07Q2BRTV7",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Himalaya Gentle Baby Wash – 400 ml",
    "description": "Gentle baby body wash with Chickpea and Green Gram, featuring a no-tears formulation.",
    "amazonLink": "https://www.amazon.in/dp/B01N32GD33",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Cetaphil Baby Daily Lotion with Shea Butter – 400 ml",
    "description": "Daily moisturising baby lotion with Shea Butter designed for gentle baby skincare.",
    "amazonLink": "https://www.amazon.in/dp/B07TWXLK1P",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Himalaya Gentle Baby Soap – 125 g, Buy 3 Get 1 Free",
    "description": "Gentle baby soap for newborns with Almond and Olive Oils, offered in a promotional multipack.",
    "amazonLink": "https://www.amazon.in/dp/B0GXVZF9DL",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Amazon Brand Supples Premium Diaper Pants XL – 54 Count",
    "description": "Extra-large baby diaper pants for 12–17 kg babies with cotton-soft fabric, triple leak guards and up to 12-hour absorption.",
    "amazonLink": "https://www.amazon.in/dp/B07Q2CS1BC",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Himalaya Happy Baby Gift Pack – 7 Pieces",
    "description": "Seven-piece newborn baby care gift set containing essential baby-care products.",
    "amazonLink": "https://www.amazon.in/dp/B008YD53KC",
    "score": null
  },
  {
    "category": "Baby Products",
    "name": "Mee Mee Baby Liquid Cleanser – 1 L",
    "description": "Liquid cleanser for baby feeding bottles, nipples, toys and accessories, also marketed for cleaning fruits and vegetables.",
    "amazonLink": "https://www.amazon.in/dp/B0799G72T4",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Ambrane Unbreakable 3A Fast Charging Type-C Cable – 1.5m",
    "description": "Durable braided USB Type-C charging cable with 3A fast charging, Quick Charge 3.0 and 480Mbps data transfer.",
    "amazonLink": "https://www.amazon.in/dp/B098NS6PVG",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Lenovo Idea Tab 11-inch 5G Tablet with Tab Pen – 6GB/128GB",
    "description": "11-inch 2.5K IPS tablet with 5G connectivity, MediaTek Dimensity 6300, 7040mAh battery, four speakers and included Tab Pen.",
    "amazonLink": "https://www.amazon.in/dp/B0HBBGL6C2",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Samsung Original USB Type-C to Type-C Cable – 1m",
    "description": "Original Samsung USB-C to USB-C charging and data cable measuring one metre in white.",
    "amazonLink": "https://www.amazon.in/dp/B008FWZGSG",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Seagate Expansion 1TB External Hard Drive USB 3.0",
    "description": "Portable 1TB external HDD for Windows and Mac with USB 3.0 connectivity and three-year data recovery services.",
    "amazonLink": "https://www.amazon.in/dp/B08ZJDWTJ1",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "American Tourister Valex 28L Laptop Backpack",
    "description": "28-litre backpack with a 17-inch laptop compartment, two storage sections and a one-year global warranty.",
    "amazonLink": "https://www.amazon.in/dp/B0BTD4S4XF",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Safari Omega 30L Laptop Backpack with Rain Cover",
    "description": "Spacious 30-litre laptop backpack with a rain cover, suitable for college, office and travel.",
    "amazonLink": "https://www.amazon.in/dp/B097JJ2CK6",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "ZEBRONICS Blanc Slim Rechargeable Wireless Mouse",
    "description": "Slim rechargeable wireless mouse with Bluetooth and 2.4GHz connectivity, four buttons, adjustable DPI and silent operation.",
    "amazonLink": "https://www.amazon.in/dp/B0CQRNWJM2",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Apple MacBook Neo 13-inch A18 Pro Laptop – 8GB/256GB",
    "description": "13-inch MacBook with A18 Pro chip, Liquid Retina display, 8GB unified memory, 256GB SSD and 1080p FaceTime camera.",
    "amazonLink": "https://www.amazon.in/dp/B0GR64G4H6",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Dyazo Water-Resistant Laptop Sleeve with Handle – 15.6-inch",
    "description": "Water-resistant laptop carrying sleeve with handle, designed for laptops measuring 15 to 15.6 inches.",
    "amazonLink": "https://www.amazon.in/dp/B09BFV96TS",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Skybags Brat Pro Max 35L Laptop Backpack",
    "description": "35-litre laptop backpack with three compartments, rain cover, padded straps and support for laptops up to 15.6 inches.",
    "amazonLink": "https://www.amazon.in/dp/B0H6JP1SM4",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Ant Esports Prism Gaming Mouse Pad",
    "description": "Waterproof gaming mouse pad with anti-fray stitched edges and a non-slip rubber base, compatible with optical and laser mice.",
    "amazonLink": "https://www.amazon.in/dp/B0DSHZLRQB",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "SanDisk Ultra Dual Drive Go Type-C 128GB Pendrive",
    "description": "128GB dual-interface USB flash drive with USB-C OTG support, advertised speeds up to 400MB/s and a five-year warranty.",
    "amazonLink": "https://www.amazon.in/dp/B0DNFSSF3F",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Dyazo Adjustable Aluminium Laptop Stand – 6 Angles",
    "description": "Foldable aluminium laptop riser with six adjustable angles, designed for ergonomic desktop use.",
    "amazonLink": "https://www.amazon.in/dp/B08LHTJTBB",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "STRIFF World Map Extended Gaming Mouse Pad – 800x300mm",
    "description": "Extended desk mat with a world map design, stitched edges and non-slip rubber base for keyboards and mice.",
    "amazonLink": "https://www.amazon.in/dp/B0CXDN7V9N",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "FUR JADEN Anti-Theft Laptop Backpack with Number Lock",
    "description": "Laptop backpack with a 15.6-inch compartment, anti-theft number lock, USB charging port and organiser pockets.",
    "amazonLink": "https://www.amazon.in/dp/B09VTDMRY7",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Portronics Konnect X USB-A to Type-C Cable – 1m",
    "description": "One-metre nylon-braided charging cable with 3A output, data transfer support and aluminium alloy connectors.",
    "amazonLink": "https://www.amazon.in/dp/B0CR6JQT6F",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "ZEBRONICS NS1000 Foldable Laptop Stand",
    "description": "Portable laptop stand with six adjustable height levels, anti-slip silicone pads and support for weights up to 5kg.",
    "amazonLink": "https://www.amazon.in/dp/B0C376RWQP",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Gesto Rechargeable Foldable Mini Fan with LED Light",
    "description": "Portable USB rechargeable mini fan with a 1200mAh battery, LED light and three speed settings.",
    "amazonLink": "https://www.amazon.in/dp/B0DV5C5FR2",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "TECHNOVIBES Foldable Wooden Study Table",
    "description": "Portable foldable wooden study and writing table with black legs, suitable for home, office or school use.",
    "amazonLink": "https://www.amazon.in/dp/B0GP83XVS5",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Oakter Mini UPS Basic for Wi-Fi Router – Up to 3 Hours",
    "description": "Mini UPS backup unit for compatible 12V/2A Wi-Fi routers, with surge and deep-discharge protection.",
    "amazonLink": "https://www.amazon.in/dp/B0DXQFRQZP",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Dell MS116 Wired Optical USB Mouse",
    "description": "Plug-and-play wired USB optical mouse with 1000 DPI tracking, two buttons and a scroll wheel.",
    "amazonLink": "https://www.amazon.in/dp/B01HJI0FS2",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Tommy Hilfiger Joshua 21L Laptop Backpack",
    "description": "Water-resistant 21-litre polyester backpack with a 15-inch laptop compartment, three sections and padded adjustable straps.",
    "amazonLink": "https://www.amazon.in/dp/B07N8GRWTZ",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "FEDUS Cat6 Ethernet LAN Cable – 10m",
    "description": "Ten-metre Cat6 RJ45 Ethernet cable advertised for high-speed networking with 550MHz bandwidth and 10Gbps support.",
    "amazonLink": "https://www.amazon.in/dp/B01DGVKBC6",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "STRIFF 2-in-1 Adjustable Laptop and Mobile Stand",
    "description": "Portable laptop and mobile stand with adjustable height, anti-slip base and support for laptops up to 15.6 inches.",
    "amazonLink": "https://www.amazon.in/dp/B08PFSZ7FH",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Samsung Galaxy Tab S10 Lite 5G – 6GB/128GB",
    "description": "10.9-inch Samsung tablet with LCD display, 5G connectivity, 6GB RAM, 128GB storage, dual speakers and S Pen.",
    "amazonLink": "https://www.amazon.in/dp/B0FNWRZSC5",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "boAt USB Type-C to Type-C 65W Fast Charging Cable",
    "description": "Nylon-braided USB-C cable supporting up to 65W charging and 480Mbps data transfer, in Martian Red.",
    "amazonLink": "https://www.amazon.in/dp/B0FMRLJ9LF",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Xiaomi Mi 33W USB Type-C Fast Charging Cable",
    "description": "USB-C charging cable advertised for 33W fast charging and compatibility with supported Xiaomi, Redmi and other USB-C devices.",
    "amazonLink": "https://www.amazon.in/dp/B0C4PVS224",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Portronics Konnect X 60W Type-C to Type-C Cable – 1m",
    "description": "One-metre nylon-braided USB-C to USB-C cable with 60W charging support for compatible smartphones and tablets.",
    "amazonLink": "https://www.amazon.in/dp/B0CV42PXQN",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "APFEN 27W USB-C to Lightning Fast Charging Cable",
    "description": "USB-C to Lightning charging cable for compatible iPhones, supporting up to 27W charging and 480Mbps data transfer.",
    "amazonLink": "https://www.amazon.in/dp/B0DFCGB2D6",
    "score": null
  },
  {
    "category": "Computers & Accessories",
    "name": "Redmi Pad 2 11-inch Wi-Fi Tablet – 4GB/128GB",
    "description": "11-inch Redmi tablet with 2.5K LCD display, 4GB RAM, 128GB storage, quad speakers and Dolby Atmos.",
    "amazonLink": "https://www.amazon.in/dp/B0FBRS76BR",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Samsung Galaxy S25 Ultra 5G AI Smartphone – 12GB/256GB",
    "description": "Samsung Galaxy S25 Ultra 5G flagship smartphone in Titanium Silverblue with 12GB RAM, 256GB storage and Galaxy AI features.",
    "amazonLink": "https://www.amazon.in/dp/B0DSKNKCYX",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "iQOO Z11 Lite 44W 5G Smartphone – 4GB/64GB",
    "description": "iQOO Z11 Lite 5G smartphone in Solar Flame with 4GB RAM, 64GB storage and 44W fast charging.",
    "amazonLink": "https://www.amazon.in/dp/B07WYMJPVS",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Samsung Original 25W USB Type-C Travel Adapter",
    "description": "Samsung 25W USB Type-C wall charger for compatible devices, supplied without a charging cable.",
    "amazonLink": "https://www.amazon.in/dp/B0D2R2MXXJ",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus Nord Buds 3r True Wireless Earbuds",
    "description": "OnePlus TWS Bluetooth earbuds with up to 54 hours of advertised playback and dual-device connectivity.",
    "amazonLink": "https://www.amazon.in/dp/B0FMDL81GS",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Ambrane Unbreakable 3A Braided Type-C Cable – 1.5m",
    "description": "Durable 1.5-metre braided USB Type-C cable with 3A fast charging and 480Mbps data transfer support.",
    "amazonLink": "https://www.amazon.in/dp/B098NS6PVG",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Redmi 15C 5G Prime Edition – 6GB/128GB",
    "description": "Redmi 15C 5G Prime Edition smartphone in Dusk Purple with 6GB RAM, 128GB storage and MediaTek Dimensity processor.",
    "amazonLink": "https://www.amazon.in/dp/B0G2B2QVLL",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Samsung Galaxy A56 5G Smartphone – 8GB/256GB",
    "description": "Samsung Galaxy A56 5G smartphone in Awesome Midnight Blue with 8GB RAM, 256GB storage and Samsung security features.",
    "amazonLink": "https://www.amazon.in/dp/B0H1X9D2VG",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "boAt Rockerz 113 Wireless Neckband Earphones",
    "description": "Bluetooth neckband earphones with up to 40 hours of advertised battery life, dual pairing and fast charging.",
    "amazonLink": "https://www.amazon.in/dp/B0F7Y54PJX",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "iQOO Z11xa 5G Smartphone – 8GB/128GB",
    "description": "iQOO Z11xa 5G smartphone in Prismatic Green with 8GB RAM, 128GB storage and MediaTek Dimensity processor.",
    "amazonLink": "https://www.amazon.in/dp/B0HG96MZ9P",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus Bullets Wireless Z3 Bluetooth Neckband",
    "description": "OnePlus wireless in-ear neckband earphones designed for extended playback and enhanced audio performance.",
    "amazonLink": "https://www.amazon.in/dp/B0FBRGKXHG",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Xiaomi Power Bank 4i 20000mAh 33W",
    "description": "20000mAh portable power bank with 33W fast charging and USB Power Delivery support for compatible devices.",
    "amazonLink": "https://www.amazon.in/dp/B0DCZ3WDTB",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Samsung Galaxy 45W Travel Adapter – Black",
    "description": "Samsung 45W USB-C fast charging travel adapter for compatible Galaxy devices, supplied without a cable.",
    "amazonLink": "https://www.amazon.in/dp/B0DSFTRX77",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Apple EarPods with USB-C Connector",
    "description": "Original Apple wired EarPods with USB-C connection for compatible iPhone, iPad and other USB-C devices.",
    "amazonLink": "https://www.amazon.in/dp/B0DCNWN8NZ",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Portronics Conch Theta C Type-C Wired Earphones",
    "description": "USB Type-C wired in-ear earphones with integrated controls and sound drivers for compatible devices.",
    "amazonLink": "https://www.amazon.in/dp/B0DDHM6D3L",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus Nord CE6 Smartphone – 8GB/256GB",
    "description": "OnePlus Nord CE6 smartphone in Pitch Black with 8GB RAM, 256GB storage and Snapdragon processor.",
    "amazonLink": "https://www.amazon.in/dp/B0GWLJL55D",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus N6 Smartphone – 6GB/128GB",
    "description": "OnePlus N6 smartphone in Midnight Green with 6GB RAM, 128GB storage and a durability-focused design.",
    "amazonLink": "https://www.amazon.in/dp/B0H3LKPC2K",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "realme Buds T310 True Wireless Earbuds",
    "description": "realme T310 Bluetooth true wireless earbuds with spatial audio features and charging case.",
    "amazonLink": "https://www.amazon.in/dp/B0DBGP48NW",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus Nord 6 Smartphone – 8GB/256GB",
    "description": "OnePlus Nord 6 smartphone in Pitch Black with 8GB RAM, 256GB storage and Snapdragon processor.",
    "amazonLink": "https://www.amazon.in/dp/B0GRB3FBBB",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "boAt Airdopes 219 True Wireless Earbuds",
    "description": "Bluetooth true wireless earbuds with four microphones, ENx calling technology and up to 40 hours of advertised battery life.",
    "amazonLink": "https://www.amazon.in/dp/B0FC2Y3XGV",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "boAt BassHeads 300C Type-C Wired Earphones",
    "description": "USB Type-C wired in-ear earphones with boAt Signature Sound, built-in microphone and integrated controls.",
    "amazonLink": "https://www.amazon.in/dp/B0FM38916Y",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Fujifilm Instax Mini Instant Film – 20 Sheets",
    "description": "Pack of 20 instant photo film sheets for compatible Fujifilm Instax Mini cameras and printers.",
    "amazonLink": "https://www.amazon.in/dp/B0000C73CQ",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OpenTech Tempered Glass Screen Protector for iPhone 17",
    "description": "Military-grade tempered glass screen protector designed for Apple iPhone 17.",
    "amazonLink": "https://www.amazon.in/dp/B0FP22HBH9",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "boAt Rockerz 255 Pro+ Wireless Neckband",
    "description": "Bluetooth wireless neckband earphones with up to 60 hours of advertised battery life and fast charging.",
    "amazonLink": "https://www.amazon.in/dp/B08TV2P1N8",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Ambrane MiniCharge 20 20000mAh Power Bank",
    "description": "Compact 20000mAh portable power bank designed for charging smartphones and other compatible USB devices.",
    "amazonLink": "https://www.amazon.in/dp/B0DSC4YJRD",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Portronics 80W Dual Output Fast Car Charger",
    "description": "Dual-output car charging adapter with up to 80W advertised charging power for compatible mobile devices.",
    "amazonLink": "https://www.amazon.in/dp/B0DJBZJM15",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus Nord CE6 Lite Smartphone – 8GB/128GB",
    "description": "OnePlus Nord CE6 Lite smartphone in Hyper Black with 8GB RAM, 128GB storage and MediaTek Dimensity processor.",
    "amazonLink": "https://www.amazon.in/dp/B0GVYXPZBS",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "OnePlus N6x Smartphone – 4GB/128GB",
    "description": "OnePlus N6x smartphone in Burgundy Red with 4GB RAM, 128GB storage and a durability-focused design.",
    "amazonLink": "https://www.amazon.in/dp/B0H7S6LT9P",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Xiaomi 32-inch Smartchoice F Series HD Ready Fire TV",
    "description": "32-inch Xiaomi HD Ready smart LED television with built-in Fire TV entertainment platform.",
    "amazonLink": "https://www.amazon.in/dp/B0F3JM1YP5",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Samsung Galaxy M17e 5G Smartphone – 4GB/128GB",
    "description": "Samsung Galaxy M17e 5G smartphone in Vibe Violet with 4GB RAM, 128GB storage and a high-refresh-rate display.",
    "amazonLink": "https://www.amazon.in/dp/B0GN1P5CSY",
    "score": null
  },
  {
    "category": "Mobile Phones",
    "name": "Apple 20W USB-C Power Adapter – White",
    "description": "Original Apple 20W USB-C wall charger for compatible iPhone, iPad and AirPods models.",
    "amazonLink": "https://www.amazon.in/dp/B09794YHBS",
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "SOFTSPUN Microfiber Cleaning Cloth 340 GSM – Pack of 4",
    "description": "Pack of four 340 GSM microfiber cloths for car cleaning, detailing, polishing and general-purpose cleaning.",
    "amazonLink": "https://www.amazon.in/dp/B077BFH786",
    "price": 199,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Godrej aer O Hanging Car Air Freshener – Pack of 3",
    "description": "Pack of three assorted hanging car air fresheners designed to keep vehicle interiors smelling fresh.",
    "amazonLink": "https://www.amazon.in/dp/B0CXDQWYQP",
    "price": 223,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Motul C2 Chain Lube and C1 Chain Cleaner Combo",
    "description": "Motorcycle chain maintenance combo containing chain lubricant and cleaner for regular bike maintenance.",
    "amazonLink": "https://www.amazon.in/dp/B01ESPB2WM",
    "price": 328,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "WD-40 Multipurpose Lubricant Spray – 420ml",
    "description": "Multipurpose maintenance spray for lubricating moving parts, loosening stuck components and protecting metal surfaces.",
    "amazonLink": "https://www.amazon.in/dp/B07FCHCQCW",
    "price": 325,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Boldfit Full Face Balaclava Mask for Bikers",
    "description": "Full-face balaclava mask designed for motorcycle riding, cycling and outdoor activities.",
    "amazonLink": "https://www.amazon.in/dp/B0BRY84H2H",
    "price": 172,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "ShineXPro Car Duster with Long Handle",
    "description": "Long-handle car cleaning duster designed for removing dust from vehicle exterior surfaces.",
    "amazonLink": "https://www.amazon.in/dp/B0FR94CZKJ",
    "price": 740,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "AGARO Atom Cordless Tyre Inflator – 150 PSI",
    "description": "Rechargeable cordless tyre inflator with a maximum pressure of 150 PSI and automatic shut-off functionality.",
    "amazonLink": "https://www.amazon.in/dp/B0FPQSN47V",
    "price": 1224,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Jopasu Car Duster with Wax-Treated Cotton Strands",
    "description": "Reusable vehicle cleaning duster with paraffin wax-treated cotton strands for collecting surface dust.",
    "amazonLink": "https://www.amazon.in/dp/B00RJQ8XHU",
    "price": 745,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Frido Ultimate Ergonomic Car Neck Rest Pillow",
    "description": "Soft ergonomic car neck support pillow designed to improve comfort while travelling.",
    "amazonLink": "https://www.amazon.in/dp/B0CPYSWJV5",
    "price": 899,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "3M Car Wash Shampoo – 1 Litre",
    "description": "One-litre car wash shampoo formulated for cleaning vehicle exteriors and removing everyday dirt.",
    "amazonLink": "https://www.amazon.in/dp/B00S5SA04U",
    "price": 590.40,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Vega Crux Dual Visor Flip-Up Motorcycle Helmet",
    "description": "Flip-up motorcycle helmet with dual visor, ventilation and an impact-absorbing construction.",
    "amazonLink": "https://www.amazon.in/dp/B0D2NBCP81",
    "price": 1121,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "WD-40 Multipurpose Maintenance Spray – 170g",
    "description": "Compact multipurpose maintenance spray for lubrication, moisture displacement and loosening stuck parts.",
    "amazonLink": "https://www.amazon.in/dp/B07MDKM7DZ",
    "price": 207,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Involve Your Senses One Musk Organic Car Perfume",
    "description": "Musk-scented car air freshener designed to provide fragrance inside the vehicle.",
    "amazonLink": "https://www.amazon.in/dp/B00PPY2NB0",
    "price": 388,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Motul C2 Chain Lubricant – 400ml",
    "description": "400ml motorcycle chain lubricant designed to protect and lubricate chains under various riding conditions.",
    "amazonLink": "https://www.amazon.in/dp/B0077AUCYK",
    "price": 420,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "ShineXPro Windshield Washer Fluid Concentrate – 200ml",
    "description": "Concentrated windshield washer fluid for cleaning vehicle windscreens when diluted according to the product instructions.",
    "amazonLink": "https://www.amazon.in/dp/B09R819BZS",
    "price": 240,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "UN1QUE Portable Car Tyre Inflator – 150 PSI",
    "description": "Portable electric tyre inflator with a maximum advertised pressure of 150 PSI for vehicle tyres and inflatables.",
    "amazonLink": "https://www.amazon.in/dp/B0F6MLBYNF",
    "price": 819,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "ShineXPro Microfiber Car Cleaning Cloth 500 GSM – Pack of 2",
    "description": "Two 500 GSM microfiber cloths designed for vehicle cleaning, drying and detailing.",
    "amazonLink": "https://www.amazon.in/dp/B09RWTYMCF",
    "price": 474,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "SOFTSPUN Twisted Loop Microfiber Drying Cloth 1600 GSM",
    "description": "High-density 1600 GSM twisted-loop microfiber cloth designed for absorbing water while drying vehicle surfaces.",
    "amazonLink": "https://www.amazon.in/dp/B0C4NQSQH9",
    "price": 415,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Bombay Musk Icy Breeze Luxury Car Perfume",
    "description": "Car fragrance with an Icy Breeze scent, designed for use inside vehicle cabins.",
    "amazonLink": "https://www.amazon.in/dp/B0GRG1R25P",
    "price": 844,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Car Cleaning Duster Kit – 5 Pieces",
    "description": "Five-piece car cleaning kit with dusting and microfiber accessories for maintaining vehicle interiors and exteriors.",
    "amazonLink": "https://www.amazon.in/dp/B0H3FMXKYH",
    "price": 284,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Godrej aer O Hanging Car Air Freshener – Musk After Smoke",
    "description": "Hanging gel-based car air freshener with a Musk After Smoke fragrance.",
    "amazonLink": "https://www.amazon.in/dp/B0CCY38RGC",
    "price": 92,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "FABTEC Waterproof Car Body Cover",
    "description": "Protective waterproof car body cover. Check the Amazon listing for the exact compatible vehicle model before purchasing.",
    "amazonLink": "https://www.amazon.in/dp/B07WLYG7GT",
    "price": 853,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Portronics Vayu 9.0 Rechargeable Tyre Inflator",
    "description": "Portable cordless rechargeable tyre inflator designed for convenient tyre inflation.",
    "amazonLink": "https://www.amazon.in/dp/B0FW4WKL5X",
    "price": 2099,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "IFTEX Clean System G Petrol Additive – 400ml",
    "description": "400ml petrol fuel-system additive intended for fuel-system cleaning when used according to the manufacturer's instructions.",
    "amazonLink": "https://www.amazon.in/dp/B0CPYJPBM3",
    "price": 581,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "SOFTSPUN Microfiber Cleaning Cloth 340 GSM – Pack of 5",
    "description": "Pack of five multicolour 340 GSM microfiber cloths for car cleaning, detailing and polishing.",
    "amazonLink": "https://www.amazon.in/dp/B01LZ3TGL2",
    "price": 225,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "OLKINO 12-in-1 Tubeless Tyre Puncture Repair Kit",
    "description": "Tubeless tyre puncture repair kit with tools including heavy-duty T-handles for repairing compatible tyre punctures.",
    "amazonLink": "https://www.amazon.in/dp/B0FS7N1DX1",
    "price": 289,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Vega Edge ISI Certified Full Face Helmet",
    "description": "Full-face motorcycle helmet with a gloss finish, listed as ISI certified. Select an appropriate fit and size.",
    "amazonLink": "https://www.amazon.in/dp/B07FCKZ4KM",
    "price": null,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "AllExtreme Multi-Purpose Motorcycle Chain Cleaner Brush",
    "description": "Multi-purpose motorcycle chain cleaning brush with bristles designed for chain maintenance.",
    "amazonLink": "https://www.amazon.in/dp/B076DC73XF",
    "price": 116,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "Amazon Basics Portable DC Digital Tyre Inflator",
    "description": "Portable DC-powered digital tyre inflator with a built-in light for inflating vehicle tyres.",
    "amazonLink": "https://www.amazon.in/dp/B0BTDDVB67",
    "price": 999,
    "score": null
  },
  {
    "category": "Car & Motorbike",
    "name": "CX2 Microfiber Car Wash Duster with Expandable Handle",
    "description": "Microfiber vehicle cleaning duster with an expandable handle for reaching different exterior surfaces.",
    "amazonLink": "https://www.amazon.in/dp/B0GTWGB962",
    "price": 199,
    "score": null
  }, {
    "category": "Pet Supplies",
    "name": "Purepet Adult Dry Cat Food – Ocean Fish",
    "description": "Ocean fish flavoured dry cat food formulated for everyday feeding of adult cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Amazon Basics Smart White Bentonite Scented Cat Litter",
    "description": "Scented bentonite cat litter designed for clumping and managing odours in litter trays.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Pedigree Adult Wet Dog Food – Chicken & Liver Chunks in Gravy",
    "description": "Wet dog food for adult dogs featuring chicken and liver chunks served in gravy.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Meat Up Dog Treat Biscuits – Real Chicken Flavour",
    "description": "Chicken-flavoured dog biscuit treats suitable for rewarding and training dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Drools Adult Wet Dog Food – Chicken and Liver Chunks",
    "description": "Wet food for adult dogs containing chicken and liver chunks in a gravy-style meal.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Purepet Adult Dry Cat Food – Mackerel Flavour",
    "description": "Mackerel-flavoured dry food formulated for adult cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Pedigree Adult Dry Dog Food – Chicken & Vegetables",
    "description": "Chicken and vegetable dry dog food designed for the everyday nutritional needs of adult dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Agirav Tails Interactive Moving Cat Toy Ball",
    "description": "Interactive moving toy ball designed to encourage chasing and active play in cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Whiskas Junior Kitten Dry Cat Food – Ocean Fish",
    "description": "Ocean fish-flavoured dry food formulated for growing kittens.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Whiskas Adult Dry Cat Food – Ocean Fish",
    "description": "Ocean fish-flavoured dry food developed for adult cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Whiskas Adult Wet Cat Food – Tuna in Jelly",
    "description": "Wet cat food featuring tuna served in jelly, formulated for adult cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Drools Adult Dry Dog Food – Chicken & Egg",
    "description": "Chicken and egg-based dry dog food designed for daily feeding of adult dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Whiskas Adult Wet Cat Food – Chicken in Gravy",
    "description": "Wet cat food with chicken pieces in gravy, designed for adult cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Himalaya Erina-EP Tick & Flea Control Shampoo",
    "description": "Pet grooming shampoo marketed for helping manage ticks and fleas in dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Foodie Puppies Natural Bentonite Cat Litter Sand",
    "description": "Natural bentonite-based cat litter sand for litter box maintenance and waste clumping.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Purepet Adult Dry Cat Food – Tuna & Salmon",
    "description": "Tuna and salmon-flavoured dry cat food formulated for adult cats.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Hipkoo Exclusive Unscented Bentonite Cat Litter",
    "description": "Unscented bentonite cat litter designed for clumping and litter box odour management.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Drools Puppy Wet Dog Food – Chicken Chunks in Gravy",
    "description": "Wet puppy food containing chicken chunks in gravy for growing dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Pedigree Dentastix Oral Care Dog Treat – Medium Breed",
    "description": "Dental chew treats developed for medium-breed dogs to support routine oral care.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Amazon Basics Pet Pee Pads for Potty Training",
    "description": "Absorbent disposable pet training pads designed for puppy potty training and indoor pet hygiene.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Petoska Lavender Clumping Cat Litter",
    "description": "Lavender-scented clumping cat litter designed for moisture absorption and odour management.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Whiskas Kitten Wet Cat Food – Chicken in Gravy",
    "description": "Chicken in gravy wet food formulated for kittens during their growth stage.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Purepet Lavender Fragrance Cat Litter",
    "description": "Lavender-fragranced cat litter intended for litter box hygiene and odour control.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Pedigree Adult Dry Dog Food – Meat & Rice",
    "description": "Meat and rice-based dry food formulated for daily feeding of adult dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Drools Optimum Performance Adult Dry Dog Food",
    "description": "Dry dog food formulated for adult dogs, marketed to support their everyday nutritional requirements.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Meat Up Adult Dry Dog Food – Chicken Flavour",
    "description": "Chicken-flavoured dry dog food designed for regular adult dog feeding.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Purepet Adult Dry Dog Food – Meat & Rice",
    "description": "Meat and rice-flavoured dry dog food formulated for adult dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Absolut Pet Probiotic Gut Health Chews for Dogs",
    "description": "Probiotic chew supplement marketed to support digestive and gut health in dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Pedigree Puppy Wet Dog Food – Chicken Chunks in Gravy",
    "description": "Wet puppy food featuring chicken chunks in gravy, formulated for growing dogs.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Pet Supplies",
    "name": "Whiskas Junior Kitten Wet Cat Food – Tuna in Jelly",
    "description": "Tuna in jelly wet food developed for kittens.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/pet-supplies",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Google Play recharge code – Digital Voucher",
    "description": "Digital gift card or voucher for Google Play recharge code – Digital Voucher. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B085J5Y9CR",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Gift Card (Digital)",
    "description": "Digital gift card or voucher for Amazon Pay Gift Card (Digital). Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B018TV95KW",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | Thanks & Appreciation",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0C1LC51C9",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Google Play Gift Card | Flat 2% discount",
    "description": "Digital gift card or voucher for Google Play Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DNHZSQTW",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Reliance Smart Super Store| E-Gift Card",
    "description": "Digital gift card or voucher for Reliance Smart Super Store. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CPJL4S57",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | Birthday",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0C58R247K",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "App Store Codes",
    "description": "Digital gift card or voucher for App Store Codes. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CSYSQVC1",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | For workplace and colleagues",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0C8SZJ4DR",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Myntra | E-Gift Card",
    "description": "Digital gift card or voucher for Myntra. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0FNR6Z9PN",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | Wedding, Engagement & Anniversary",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0D91RGYQ8",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | Congratulations & Celebrations",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0D9W89W1W",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Shopping Voucher",
    "description": "Digital gift card or voucher for Amazon Shopping Voucher. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CH8S67DF",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | Diwali & Dussehra",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DJ9KMF73",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Uber | E-Gift Card",
    "description": "Digital gift card or voucher for Uber. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B07GBT1RVH",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Steam Wallet Code",
    "description": "Digital gift card or voucher for Steam Wallet Code. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0FBKJ5P7X",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "App Store Codes (₹3,000)",
    "description": "Digital gift card or voucher for App Store Codes (₹3,000). Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CSYJHSK9",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay eGift Card - Design with AI",
    "description": "Digital gift card or voucher for Amazon Pay eGift Card - Design with AI. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DSWL8SGM",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Physical Gift Card | Royal Blue",
    "description": "Physical gift card; check the available denominations and delivery terms on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0H5WSSN17",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "BigBasket | E-Gift Card",
    "description": "Digital gift card or voucher for BigBasket. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DNJFTJXR",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Dominos | Flat 12% off | E-Gift Card",
    "description": "Digital gift card or voucher for Dominos. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DNN4SWPL",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "AJIO | E-Gift Card",
    "description": "Digital gift card or voucher for AJIO. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0B97VTH58",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Digital Gift Card | For your parents",
    "description": "Digital gift card or voucher for Amazon Pay Digital Gift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0725YH658",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Blinkit | Flat 2% off | E-Gift Card",
    "description": "Digital gift card or voucher for Blinkit. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DX72QLQ4",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "BGMI UC Official Voucher | E-Gift Card",
    "description": "Digital gift card or voucher for BGMI UC Official Voucher. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0H4Z77ZPZ",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Cinepolis | Flat 26% discount | E-Gift Card",
    "description": "Digital gift card or voucher for Cinepolis. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0FGWJMWWQ",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Zomato | E-Gift Card",
    "description": "Digital gift card or voucher for Zomato. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0BLGPWKYS",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Amazon Pay Customizable eGift Card",
    "description": "Digital gift card or voucher for Amazon Pay Customizable eGift Card. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0D7W2D1NC",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Tanishq - Gold Jewellery | E-Gift Card",
    "description": "Digital gift card or voucher for Tanishq - Gold Jewellery. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B07QC7J7PF",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "Tira beauty | E-Gift Card",
    "description": "Digital gift card or voucher for Tira beauty. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0F7RHM6KJ",
    "score": null
  },
  {
    "category": "Gift Cards",
    "name": "BookMyShow | Flat 2% off | E-Gift Card",
    "description": "Digital gift card or voucher for BookMyShow. Check value, redemption terms and eligibility on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B01ARPKYD0",
    "score": null
  },

  {
    "category": "Health & Personal Care",
    "name": "Tide Plus Detergent Washing Powder - 10kg Mega Saver Pack",
    "description": "Tide Plus Detergent Washing Powder - 10kg Mega Saver Pack. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Surf Excel Matic Liquid Detergent 5 kg for Top Load",
    "description": "Surf Excel Matic Liquid Detergent 5 kg for Top Load. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Surf Excel Matic Front Load Liquid Detergent 5Kg Refill Pouch",
    "description": "Surf Excel Matic Front Load Liquid Detergent 5Kg Refill Pouch. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Amazon Brand - Presto! Active Wash Detergent Powder | 8 Kg",
    "description": "Amazon Brand - Presto! Active Wash Detergent Powder | 8 Kg. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Comfort Morning Fresh Fabric Conditioner 2 L Refill Pack",
    "description": "Comfort Morning Fresh Fabric Conditioner 2 L Refill Pack. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Dettol Liquid Handwash Refill – Skincare Hand Wash- 1350ml",
    "description": "Dettol Liquid Handwash Refill – Skincare Hand Wash- 1350ml. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Godrej Fab Liquid Detergent Refill Pouch for Machine & Hand Wash - 5L/5kg",
    "description": "Godrej Fab Liquid Detergent Refill Pouch for Machine & Hand Wash - 5L/5kg. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Philips India's No.1 Men's Trimmer | All-in-One Grooming Kit - MG3927",
    "description": "Philips India's No.1 Men's Trimmer | All-in-One Grooming Kit - MG3927. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Philips India's No.1 Men's Trimmer | Lift & Trim Technology - BT3325",
    "description": "Philips India's No.1 Men's Trimmer | Lift & Trim Technology - BT3325. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Ariel Power Gel Liquid Detergent for Top Load & Semi Auto – 4kg",
    "description": "Ariel Power Gel Liquid Detergent for Top Load & Semi Auto – 4kg. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Amazon Brand - Presto! 2 Ply Kitchen Tissue Rolls | 360 Pulls",
    "description": "Amazon Brand - Presto! 2 Ply Kitchen Tissue Rolls | 360 Pulls. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Roff Cera Clean All Purpose Tile, Floor & Wall Cleaner 1 liter",
    "description": "Roff Cera Clean All Purpose Tile, Floor & Wall Cleaner 1 liter. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Ariel Power Gel Liquid Detergent for Front Load – 4kg",
    "description": "Ariel Power Gel Liquid Detergent for Front Load – 4kg. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Sofy AntiBacteria XL - 290mm | 51 Count pads",
    "description": "Sofy AntiBacteria XL - 290mm | 51 Count pads. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Ariel Power Gel Liquid Detergent for Top Load & Semi Auto – 6kg",
    "description": "Ariel Power Gel Liquid Detergent for Top Load & Semi Auto – 6kg. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "RIN Matic Liquid Detergent, 2Kg",
    "description": "RIN Matic Liquid Detergent, 2Kg. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Vim Dishwash Liquid 3 L pouch",
    "description": "Vim Dishwash Liquid 3 L pouch. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Beco Matic-Top Load Natural Laundry Liquid Detergent | 2 Litre",
    "description": "Beco Matic-Top Load Natural Laundry Liquid Detergent | 2 Litre. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Dettol Liquid Handwash Refill - Original Hand Wash- 1350ml",
    "description": "Dettol Liquid Handwash Refill - Original Hand Wash- 1350ml. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Exo Dishwash Bar, 360gm (90gm x 4)",
    "description": "Exo Dishwash Bar, 360gm (90gm x 4). Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Happi Planet | Washing Machine Cleaner & Descaler Tablets | 8 Tablets",
    "description": "Happi Planet | Washing Machine Cleaner & Descaler Tablets | 8 Tablets. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Amazon Brand - Presto! Disinfectant Surface & Floor Cleaner | Citrus | 5 Litre",
    "description": "Amazon Brand - Presto! Disinfectant Surface & Floor Cleaner | Citrus | 5 Litre. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Beco Natural Dishwasher Liquid Refill | 2L Pack",
    "description": "Beco Natural Dishwasher Liquid Refill | 2L Pack. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Colgate Total 300gm Advanced Health Anti-Germ Toothpaste with Toothbrush",
    "description": "Colgate Total 300gm Advanced Health Anti-Germ Toothpaste with Toothbrush. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Colgate Strong Teeth Calcium-Boost Toothpaste, 700g (175g X 4)",
    "description": "Colgate Strong Teeth Calcium-Boost Toothpaste, 700g (175g X 4). Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Boldfit Digital Weighing Machine for Human Body with LCD Display",
    "description": "Boldfit Digital Weighing Machine for Human Body with LCD Display. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Dettol Antiseptic Liquid for First Aid, Surface Disinfection and Personal Hygiene, 750ml",
    "description": "Dettol Antiseptic Liquid for First Aid, Surface Disinfection and Personal Hygiene, 750ml. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Colgate Visible White Purple Toothpaste for Teeth Whitening (200g + 40g)",
    "description": "Colgate Visible White Purple Toothpaste for Teeth Whitening (200g + 40g). Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Amazon Brand - Presto! Phenyl Floor Cleaner | 5 Litre",
    "description": "Amazon Brand - Presto! Phenyl Floor Cleaner | 5 Litre. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },
  {
    "category": "Health & Personal Care",
    "name": "Origami Online Facial Tissues | Soft Pack | Pack of 6",
    "description": "Origami Online Facial Tissues | Soft Pack | Pack of 6. Check product size and usage details on Amazon.",
    "amazonLink": "https://www.amazon.in/gp/bestsellers/hpc",
    "score": null
  },

  {
    "category": "Video Games",
    "name": "Sony DualSense Wireless Controller White (PlayStation 5)",
    "description": "Sony DualSense Wireless Controller White (PlayStation 5). Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B08GZ6QNTC",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Sony PlayStation5 Gaming Console (Slim) | Disc Edition - 1TB",
    "description": "Sony PlayStation5 Gaming Console (Slim) | Disc Edition - 1TB. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GNMKL3VP",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Sounce 8 Pair / 16 Pcs Controller Thumb Grips PS5/PS4/Xbox One/360/Switch, Anti-Slip Joystick Caps for PS5 Remote Controller & Gamepads, Soft Silicone Thumb Stick Covers for Enhanced Grip & Protection",
    "description": "Sounce 8 Pair / 16 Pcs Controller Thumb Grips PS5/PS4/Xbox One/360/Switch, Anti-Slip Joystick Caps for PS5 Remote Controller & Gamepads, Soft Silicone Thumb Stick Covers for Enhanced Grip & Protection. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0F8N3LJC2",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Rockstar Games PS5 Video Game ConsoleGrand Theft Auto V",
    "description": "Rockstar Games PS5 Video Game ConsoleGrand Theft Auto V. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B09XJ8FGVP",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Meyaar Silicone Cover for PS5 Controller, Bloodline Black (1 Pack) | 2 Thumb Grip Caps and a Touchpad Sticker Included, Anti-Slip Textured Finish, Full Button Access, for DualSense",
    "description": "Meyaar Silicone Cover for PS5 Controller, Bloodline Black (1 Pack) | 2 Thumb Grip Caps and a Touchpad Sticker Included, Anti-Slip Textured Finish, Full Button Access, for DualSense. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GN2F3JFY",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Sony PlayStation®5 Digital Edition (slim) Console Video Game",
    "description": "Sony PlayStation®5 Digital Edition (slim) Console Video Game. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CY5QW186",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Cranique Waterproof Dust cover for PS5 Gaming Console Digital Edition & Disc Edition Playstation 5",
    "description": "Cranique Waterproof Dust cover for PS5 Gaming Console Digital Edition & Disc Edition Playstation 5. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CHMXVCGH",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Cricket 26 | Standard Edition | Playstation 5",
    "description": "Cricket 26 | Standard Edition | Playstation 5. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0FV8P4993",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Ant Esports Dock5 RGB with Cooling Fan and Dual Controller Charger Station, PS5 Console Disc & Digital Edition, PS5 Cooling Station Accessories with RGB Light/Headset Holder/6 Game Slots/Screw (White)",
    "description": "Ant Esports Dock5 RGB with Cooling Fan and Dual Controller Charger Station, PS5 Console Disc & Digital Edition, PS5 Cooling Station Accessories with RGB Light/Headset Holder/6 Game Slots/Screw (White). Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0BRZZCRPW",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "EA SPORTS FC 27 | Standard Edition | PlayStation 5",
    "description": "EA SPORTS FC 27 | Standard Edition | PlayStation 5. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0HBC91DXW",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Sounce Premium Polyester Dual Controller Hard Carry Case for PS5, PS4, Xbox, and iPega Controllers – Shockproof Travel Storage Bag with 3-Layer Protection, Accessory Pocket & Handle",
    "description": "Sounce Premium Polyester Dual Controller Hard Carry Case for PS5, PS4, Xbox, and iPega Controllers – Shockproof Travel Storage Bag with 3-Layer Protection, Accessory Pocket & Handle. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0F91N6WQK",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Meyaar Thumb Grips Joystick Caps for PS4 PS5 Xbox Controller Pack of 10 | Silicone joystick caps with anti-slip anti-stick and anti-fingerprint grip for better control comfort and gaming accuracy",
    "description": "Meyaar Thumb Grips Joystick Caps for PS4 PS5 Xbox Controller Pack of 10 | Silicone joystick caps with anti-slip anti-stick and anti-fingerprint grip for better control comfort and gaming accuracy. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GG5GYL25",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Roblox 50K IDR (250+ Robux) Gift Card Code Prepaid Voucher (Email Delivery) | Digital voucher For In-Game Currency. Robux conversion depends on Roblox's IDR/INR rate and may fluctuate.",
    "description": "Roblox 50K IDR (250+ Robux) Gift Card Code Prepaid Voucher (Email Delivery) | Digital voucher For In-Game Currency. Robux conversion depends on Roblox's IDR/INR rate and may fluctuate. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CLMFNBJS",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "EvoFox Play 2 PS4 Controller & PS5 (PS4 Games only), Playstation 4 Controller Bluetooth & Wired with HallSense™ Magnetic Joysticks & Triggers, 1000Hz Polling, Touchpad, Built-in Speaker & 3.5mm Jack",
    "description": "EvoFox Play 2 PS4 Controller & PS5 (PS4 Games only), Playstation 4 Controller Bluetooth & Wired with HallSense™ Magnetic Joysticks & Triggers, 1000Hz Polling, Touchpad, Built-in Speaker & 3.5mm Jack. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GJ6N8ZW3",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Sony DualSense Charging Station for Game Consoles,Multicolor,USB",
    "description": "Sony DualSense Charging Station for Game Consoles,Multicolor,USB. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B08FVMT8QN",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Grand Theft Auto VI | Standard Edition | PlayStation 5",
    "description": "Grand Theft Auto VI | Standard Edition | PlayStation 5. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0H6X8VNQC",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Xbox Game Pass Ultimate – 1 Month Membership",
    "description": "Xbox Game Pass Ultimate – 1 Month Membership. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GHKLKC4R",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "HMD Gaming Outfit for HMD Fusion | Gamepad with 18 Buttons, Turbo Mode, 3.5mm Audio Jack, Smart Pins Connection for Ultra Low Latency | Compatible with Android TV & Android smartphones with OTG Support via USB-C | No Software Needed",
    "description": "HMD Gaming Outfit for HMD Fusion | Gamepad with 18 Buttons, Turbo Mode, 3.5mm Audio Jack, Smart Pins Connection for Ultra Low Latency | Compatible with Android TV & Android smartphones with OTG Support via USB-C | No Software Needed. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DJR4FJZ4",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "ZEBRONICS PS5C, PS5 Controller Charging Dock, 3H Rapid Charging, Supports Dualsense & Edge Controllers, Dual Pogo Pin, Charging Indicators, Anti-Slip Silicone Base",
    "description": "ZEBRONICS PS5C, PS5 Controller Charging Dock, 3H Rapid Charging, Supports Dualsense & Edge Controllers, Dual Pogo Pin, Charging Indicators, Anti-Slip Silicone Base. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0F8MZV8PK",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "ZORBES® Desk Stand for PS5 Slim/Pro Console, Horizontal Stand for PS5 | Anti-Slip Base Stand Accessories for Playstation 5 Slim/Pro Digital Ultra-HD Edition Console",
    "description": "ZORBES® Desk Stand for PS5 Slim/Pro Console, Horizontal Stand for PS5 | Anti-Slip Base Stand Accessories for Playstation 5 Slim/Pro Digital Ultra-HD Edition Console. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CWH7FCFX",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "ZORBES Dust Cover Oxford Cloth Sleeve Compatible with PS5 Slim Console | Durable Oxford Cloth Shield Protects PS5 Slim from Dust, Scratches and Pet Hair While Maintaining Easy Access",
    "description": "ZORBES Dust Cover Oxford Cloth Sleeve Compatible with PS5 Slim Console | Durable Oxford Cloth Shield Protects PS5 Slim from Dust, Scratches and Pet Hair While Maintaining Easy Access. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0D1CJYYV3",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "PowerA Twin Charging Station for PS5 DualSense and DualSense Edge Wireless Controllers, AC Adaptor Included, with LED Indicator, Vertical Dual Controller Fast Charging Dock (Officially Licensed)",
    "description": "PowerA Twin Charging Station for PS5 DualSense and DualSense Edge Wireless Controllers, AC Adaptor Included, with LED Indicator, Vertical Dual Controller Fast Charging Dock (Officially Licensed). Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DP6N7ZCF",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Rs.2000 Sony PlayStation Store Gift Card (Email Delivery in 1 hour- Digital Voucher Code)",
    "description": "Rs.2000 Sony PlayStation Store Gift Card (Email Delivery in 1 hour- Digital Voucher Code). Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B093QF35KZ",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Black Myth: Wukong for Playstation 5",
    "description": "Black Myth: Wukong for Playstation 5. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0DKFX8THB",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Minecraft Java & Bedrock Edition Bundle PC Code (No CD/DVD)",
    "description": "Minecraft Java & Bedrock Edition Bundle PC Code (No CD/DVD). Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0D4N2934T",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Joystick Replacement Cap Thumb Grips for PS5/PS4 Controller, IINE PS5/PS4 Controller Button Stick Covers, 3D Analog Cap Skin Replacement Part Repair Accessories, 6 PCS",
    "description": "Joystick Replacement Cap Thumb Grips for PS5/PS4 Controller, IINE PS5/PS4 Controller Button Stick Covers, 3D Analog Cap Skin Replacement Part Repair Accessories, 6 PCS. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0F1KL383Z",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Sounce Dust Plug for PS5, 9 Pcs Dust Plug Kit, Slim Console, PS5 Silicone Plug Protector, Antidust Cover, Dustproof PlayStation 5 Disk/Digital Console Slim Game Accessories (Black)",
    "description": "Sounce Dust Plug for PS5, 9 Pcs Dust Plug Kit, Slim Console, PS5 Silicone Plug Protector, Antidust Cover, Dustproof PlayStation 5 Disk/Digital Console Slim Game Accessories (Black). Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0FNDDJ1LV",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Xbox Game Pass Premium – 1 Month Membership",
    "description": "Xbox Game Pass Premium – 1 Month Membership. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GHJZ9QSN",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "Meyaar Silicone Cover for PS5 Controller, Camo Black | 2 Thumb Grip Caps, 1 Touchpad Sticker and 2 Medium Density Precision Rings Included, Anti-Slip Finish, for DualSense",
    "description": "Meyaar Silicone Cover for PS5 Controller, Camo Black | 2 Thumb Grip Caps, 1 Touchpad Sticker and 2 Medium Density Precision Rings Included, Anti-Slip Finish, for DualSense. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0GFPLJM63",
    "score": null
  },
  {
    "category": "Video Games",
    "name": "BAERFIT 10 Pcs Controller Thumb Grips Joy Stick Replacement Ps 5c Console Thumb Grip Caps Compatible with ps5 Remote Controller Thumb Grips Ps4 Accessories Xbox One/360 Game Controller Joystick caps",
    "description": "BAERFIT 10 Pcs Controller Thumb Grips Joy Stick Replacement Ps 5c Console Thumb Grip Caps Compatible with ps5 Remote Controller Thumb Grips Ps4 Accessories Xbox One/360 Game Controller Joystick caps. Check compatibility, edition and included accessories on Amazon.",
    "amazonLink": "https://www.amazon.in/dp/B0CMZWW78K",
    "score": null
  }
];

// ===========================================================
// WEBSITE LOGIC — no requests, external libraries, or backend.
// ===========================================================
const $ = (id) => document.getElementById(id);
const state = { query: "", category: "All categories", page: 1, orderedProducts: [] };

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function affiliateUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    if (url.protocol !== "https:" || !["amazon.in", "www.amazon.in"].includes(url.hostname)) return null;
    url.searchParams.set("tag", CONFIG.amazonStoreId);
    return url.toString();
  } catch { return null; }
}

function validProducts() {
  return PRODUCTS.filter((product) =>
    CATEGORIES.includes(product.category) &&
    typeof product.name === "string" && product.name.trim() &&
    typeof product.description === "string" &&
    affiliateUrl(product.amazonLink) !== null &&
    (product.score === null || (Number.isFinite(product.score) && product.score >= 0 && product.score <= 100))
  );
}

function filteredProducts() {
  const query = state.query.trim().toLocaleLowerCase();
  return state.orderedProducts.filter((product) =>
    (state.category === "All categories" || product.category === state.category) &&
    (!query || `${product.name} ${product.description}`.toLocaleLowerCase().includes(query))
  );
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const top = document.createElement("div");
  top.className = "card-top";
  const category = document.createElement("span");
  category.className = "category-tag";
  category.textContent = product.category;
  const score = document.createElement("span");
  score.className = "score" + (product.score === null ? " no-score" : "");
  score.textContent = product.score === null ? "Unrated" : `${product.score}/100`;
  score.title = product.score === null ? "Score not provided" : "Editorial score provided by the website owner";
  top.append(category, score);

  const heading = document.createElement("h3");
  heading.textContent = product.name;
  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;
  const link = document.createElement("a");
  link.className = "amazon-button";
  link.href = affiliateUrl(product.amazonLink);
  link.target = "_blank";
  link.rel = "sponsored noopener noreferrer";
  link.textContent = "View on Amazon ↗";
  link.setAttribute("aria-label", `View ${product.name} on Amazon`);
  card.append(top, heading, description, link);
  return card;
}

function renderPagination(totalPages) {
  const pagination = $("pagination");
  pagination.replaceChildren();
  if (totalPages <= 1) return;
  const button = (label, page, disabled, active = false) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "page-button" + (active ? " is-active" : "");
    el.textContent = label;
    el.disabled = disabled;
    if (active) el.setAttribute("aria-current", "page");
    el.addEventListener("click", () => {
      state.page = page;
      render();
      $("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return el;
  };
  pagination.append(button("← Prev", Math.max(1, state.page - 1), state.page === 1));
  for (let page = 1; page <= totalPages; page++) {
    if (totalPages > 8 && page !== 1 && page !== totalPages && Math.abs(page - state.page) > 1) {
      if ((page === 2 && state.page > 3) || (page === totalPages - 1 && state.page < totalPages - 2)) {
        const dots = document.createElement("span"); dots.className = "ellipsis"; dots.textContent = "…"; pagination.append(dots);
      }
      continue;
    }
    pagination.append(button(String(page), page, false, page === state.page));
  }
  pagination.append(button("Next →", Math.min(totalPages, state.page + 1), state.page === totalPages));
}

function render() {
  const list = filteredProducts();
  const totalPages = Math.max(1, Math.ceil(list.length / CONFIG.productsPerPage));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * CONFIG.productsPerPage;
  const visible = list.slice(start, start + CONFIG.productsPerPage);
  const grid = $("productGrid");
  grid.replaceChildren(...visible.map(createProductCard));
  $("emptyState").hidden = list.length !== 0;
  $("resultCount").textContent = `${list.length} product${list.length === 1 ? "" : "s"} found`;
  $("rangeCount").textContent = list.length ? `Showing ${start + 1}–${start + visible.length} of ${list.length}` : "No matches";
  $("productTotal").textContent = String(validProducts().length);
  renderPagination(totalPages);
}

function initialize() {
  document.title = `${CONFIG.siteName} | Curated picks`;
  $("brandName").textContent = CONFIG.siteName;
  $("year").textContent = String(new Date().getFullYear());
  const select = $("categoryFilter");
  for (const category of CATEGORIES) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    select.append(option);
  }
  state.orderedProducts = shuffle(validProducts());
  $("searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    state.page = 1;
    render();
  });
  select.addEventListener("change", (event) => {
    state.category = event.target.value;
    state.page = 1;
    render();
  });
  $("resetButton").addEventListener("click", () => {
    $("searchInput").value = "";
    select.value = "All categories";
    state.query = "";
    state.category = "All categories";
    state.page = 1;
    render();
  });
  render();
}

document.addEventListener("DOMContentLoaded", initialize);
