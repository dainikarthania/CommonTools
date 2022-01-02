let _=require('lodash')
let fs=require('fs')
let topics=`/Adult
/Arts & Entertainment
/Arts & Entertainment/Celebrities & Entertainment News
/Arts & Entertainment/Comics & Animation
/Arts & Entertainment/Comics & Animation/Anime & Manga
/Arts & Entertainment/Comics & Animation/Cartoons
/Arts & Entertainment/Comics & Animation/Comics
/Arts & Entertainment/Entertainment Industry
/Arts & Entertainment/Entertainment Industry/Film & TV Industry
/Arts & Entertainment/Entertainment Industry/Recording Industry
/Arts & Entertainment/Events & Listings
/Arts & Entertainment/Events & Listings/Bars, Clubs & Nightlife
/Arts & Entertainment/Events & Listings/Concerts & Music Festivals
/Arts & Entertainment/Events & Listings/Expos & Conventions
/Arts & Entertainment/Events & Listings/Film Festivals
/Arts & Entertainment/Events & Listings/Movie Listings & Theater Showtimes
/Arts & Entertainment/Fun & Trivia
/Arts & Entertainment/Fun & Trivia/Flash-Based Entertainment
/Arts & Entertainment/Fun & Trivia/Fun Tests & Silly Surveys
/Arts & Entertainment/Humor
/Arts & Entertainment/Humor/Funny Pictures & Videos
/Arts & Entertainment/Humor/Political Humor
/Arts & Entertainment/Movies
/Arts & Entertainment/Music & Audio
/Arts & Entertainment/Music & Audio/CD & Audio Shopping
/Arts & Entertainment/Music & Audio/Classical Music
/Arts & Entertainment/Music & Audio/Country Music
/Arts & Entertainment/Music & Audio/Dance & Electronic Music
/Arts & Entertainment/Music & Audio/Experimental & Industrial Music
/Arts & Entertainment/Music & Audio/Jazz & Blues
/Arts & Entertainment/Music & Audio/Music Education & Instruction
/Arts & Entertainment/Music & Audio/Music Equipment & Technology
/Arts & Entertainment/Music & Audio/Music Reference
/Arts & Entertainment/Music & Audio/Music Streams & Downloads
/Arts & Entertainment/Music & Audio/Music Videos
/Arts & Entertainment/Music & Audio/Pop Music
/Arts & Entertainment/Music & Audio/Radio
/Arts & Entertainment/Music & Audio/Religious Music
/Arts & Entertainment/Music & Audio/Rock Music
/Arts & Entertainment/Music & Audio/Soundtracks
/Arts & Entertainment/Music & Audio/Urban & Hip-Hop
/Arts & Entertainment/Music & Audio/World Music
/Arts & Entertainment/Offbeat
/Arts & Entertainment/Offbeat/Occult & Paranormal
/Arts & Entertainment/Online Media
/Arts & Entertainment/Online Media/Online Image Galleries
/Arts & Entertainment/Performing Arts
/Arts & Entertainment/Performing Arts/Acting & Theater
/Arts & Entertainment/Performing Arts/Circus
/Arts & Entertainment/Performing Arts/Dance
/Arts & Entertainment/Performing Arts/Magic
/Arts & Entertainment/Performing Arts/Opera
/Arts & Entertainment/TV & Video
/Arts & Entertainment/TV & Video/Online Video
/Arts & Entertainment/TV & Video/TV Commercials
/Arts & Entertainment/TV & Video/TV Shows & Programs
/Arts & Entertainment/Visual Art & Design
/Arts & Entertainment/Visual Art & Design/Architecture
/Arts & Entertainment/Visual Art & Design/Art Museums & Galleries
/Arts & Entertainment/Visual Art & Design/Design
/Arts & Entertainment/Visual Art & Design/Painting
/Arts & Entertainment/Visual Art & Design/Photographic & Digital Arts
/Autos & Vehicles
/Autos & Vehicles/Bicycles & Accessories
/Autos & Vehicles/Bicycles & Accessories/Bike Parts & Repair
/Autos & Vehicles/Bicycles & Accessories/BMX Bikes
/Autos & Vehicles/Boats & Watercraft
/Autos & Vehicles/Campers & RVs
/Autos & Vehicles/Classic Vehicles
/Autos & Vehicles/Commercial Vehicles/Cargo Trucks & Trailers
/Autos & Vehicles/Motor Vehicles (By Type)
/Autos & Vehicles/Motor Vehicles (By Type)/Hybrid & Alternative Vehicles
/Autos & Vehicles/Motor Vehicles (By Type)/Motorcycles
/Autos & Vehicles/Motor Vehicles (By Type)/Off-Road Vehicles
/Autos & Vehicles/Motor Vehicles (By Type)/Trucks & SUVs
/Autos & Vehicles/Vehicle Codes & Driving Laws
/Autos & Vehicles/Vehicle Codes & Driving Laws/Vehicle Licensing & Registration
/Autos & Vehicles/Vehicle Parts & Services
/Autos & Vehicles/Vehicle Parts & Services/Gas Prices & Vehicle Fueling
/Autos & Vehicles/Vehicle Parts & Services/Vehicle Parts & Accessories
/Autos & Vehicles/Vehicle Parts & Services/Vehicle Repair & Maintenance
/Autos & Vehicles/Vehicle Shopping
/Autos & Vehicles/Vehicle Shopping/Used Vehicles
/Autos & Vehicles/Vehicle Shows
/Beauty & Fitness
/Beauty & Fitness/Beauty Pageants
/Beauty & Fitness/Body Art
/Beauty & Fitness/Cosmetic Procedures
/Beauty & Fitness/Cosmetic Procedures/Cosmetic Surgery
/Beauty & Fitness/Cosmetology & Beauty Professionals
/Beauty & Fitness/Face & Body Care
/Beauty & Fitness/Face & Body Care/Hygiene & Toiletries
/Beauty & Fitness/Face & Body Care/Make-Up & Cosmetics
/Beauty & Fitness/Face & Body Care/Perfumes & Fragrances
/Beauty & Fitness/Face & Body Care/Skin & Nail Care
/Beauty & Fitness/Face & Body Care/Unwanted Body & Facial Hair Removal
/Beauty & Fitness/Fashion & Style
/Beauty & Fitness/Fashion & Style/Fashion Designers & Collections
/Beauty & Fitness/Fitness
/Beauty & Fitness/Hair Care
/Beauty & Fitness/Hair Care/Hair Loss
/Beauty & Fitness/Spas & Beauty Services
/Beauty & Fitness/Spas & Beauty Services/Massage Therapy
/Beauty & Fitness/Weight Loss
/Books & Literature
/Books & Literature/Children's Literature
/Books & Literature/E-Books
/Books & Literature/Fan Fiction
/Books & Literature/Literary Classics
/Books & Literature/Poetry
/Books & Literature/Writers Resources
/Business & Industrial
/Business & Industrial/Advertising & Marketing/Public Relations
/Business & Industrial/Aerospace & Defense/Space Technology
/Business & Industrial/Agriculture & Forestry
/Business & Industrial/Agriculture & Forestry/Agricultural Equipment
/Business & Industrial/Agriculture & Forestry/Forestry
/Business & Industrial/Agriculture & Forestry/Livestock
/Business & Industrial/Automotive Industry
/Business & Industrial/Business Education
/Business & Industrial/Business Finance
/Business & Industrial/Business Finance/Venture Capital
/Business & Industrial/Business Operations
/Business & Industrial/Business Operations/Business Plans & Presentations
/Business & Industrial/Business Operations/Management
/Business & Industrial/Business Services
/Business & Industrial/Business Services/Consulting
/Business & Industrial/Business Services/Corporate Events
/Business & Industrial/Business Services/E-Commerce Services
/Business & Industrial/Business Services/Fire & Security Services
/Business & Industrial/Business Services/Office Services
/Business & Industrial/Business Services/Office Supplies
/Business & Industrial/Business Services/Writing & Editing Services
/Business & Industrial/Chemicals Industry
/Business & Industrial/Chemicals Industry/Cleaning Agents
/Business & Industrial/Chemicals Industry/Plastics & Polymers
/Business & Industrial/Construction & Maintenance
/Business & Industrial/Construction & Maintenance/Building Materials & Supplies
/Business & Industrial/Energy & Utilities
/Business & Industrial/Energy & Utilities/Electricity
/Business & Industrial/Energy & Utilities/Oil & Gas
/Business & Industrial/Energy & Utilities/Renewable & Alternative Energy
/Business & Industrial/Hospitality Industry
/Business & Industrial/Hospitality Industry/Event Planning
/Business & Industrial/Hospitality Industry/Food Service
/Business & Industrial/Industrial Materials & Equipment
/Business & Industrial/Industrial Materials & Equipment/Heavy Machinery
/Business & Industrial/Manufacturing
/Business & Industrial/Metals & Mining
/Business & Industrial/Metals & Mining/Precious Metals
/Business & Industrial/Pharmaceuticals & Biotech
/Business & Industrial/Printing & Publishing
/Business & Industrial/Retail Trade
/Business & Industrial/Retail Trade/Retail Equipment & Technology
/Business & Industrial/Small Business/MLM & Business Opportunities
/Business & Industrial/Textiles & Nonwovens
/Business & Industrial/Transportation & Logistics
/Business & Industrial/Transportation & Logistics/Freight & Trucking
/Business & Industrial/Transportation & Logistics/Mail & Package Delivery
/Business & Industrial/Transportation & Logistics/Maritime Transport
/Business & Industrial/Transportation & Logistics/Moving & Relocation
/Business & Industrial/Transportation & Logistics/Packaging
/Business & Industrial/Transportation & Logistics/Parking
/Business & Industrial/Transportation & Logistics/Rail Transport
/Business & Industrial/Transportation & Logistics/Urban Transport
/Computers & Electronics
/Computers & Electronics/CAD & CAM
/Computers & Electronics/Computer Hardware
/Computers & Electronics/Computer Hardware/Computer Components
/Computers & Electronics/Computer Hardware/Computer Drives & Storage
/Computers & Electronics/Computer Hardware/Computer Peripherals
/Computers & Electronics/Computer Hardware/Desktop Computers
/Computers & Electronics/Computer Hardware/Laptops & Notebooks
/Computers & Electronics/Computer Security
/Computers & Electronics/Computer Security/Hacking & Cracking
/Computers & Electronics/Consumer Electronics
/Computers & Electronics/Consumer Electronics/Audio Equipment
/Computers & Electronics/Consumer Electronics/Camera & Photo Equipment
/Computers & Electronics/Consumer Electronics/Car Electronics
/Computers & Electronics/Consumer Electronics/Drones & RC Aircraft
/Computers & Electronics/Consumer Electronics/Game Systems & Consoles
/Computers & Electronics/Consumer Electronics/GPS & Navigation
/Computers & Electronics/Consumer Electronics/TV & Video Equipment
/Computers & Electronics/Electronics & Electrical
/Computers & Electronics/Electronics & Electrical/Electronic Components
/Computers & Electronics/Electronics & Electrical/Power Supplies
/Computers & Electronics/Enterprise Technology
/Computers & Electronics/Enterprise Technology/Data Management
/Computers & Electronics/Networking
/Computers & Electronics/Networking/Data Formats & Protocols
/Computers & Electronics/Networking/Network Monitoring & Management
/Computers & Electronics/Networking/VPN & Remote Access
/Computers & Electronics/Programming
/Computers & Electronics/Programming/Java (Programming Language)
/Computers & Electronics/Software
/Computers & Electronics/Software/Business & Productivity Software
/Computers & Electronics/Software/Device Drivers
/Computers & Electronics/Software/Internet Software
/Computers & Electronics/Software/Multimedia Software
/Computers & Electronics/Software/Operating Systems
/Computers & Electronics/Software/Software Utilities
/Finance
/Finance/Accounting & Auditing
/Finance/Accounting & Auditing/Billing & Invoicing
/Finance/Accounting & Auditing/Tax Preparation & Planning
/Finance/Banking
/Finance/Credit & Lending
/Finance/Credit & Lending/Credit Cards
/Finance/Credit & Lending/Credit Reporting & Monitoring
/Finance/Credit & Lending/Loans
/Finance/Financial Planning & Management
/Finance/Financial Planning & Management/Retirement & Pension
/Finance/Grants, Scholarships & Financial Aid
/Finance/Grants, Scholarships & Financial Aid/Study Grants & Scholarships
/Finance/Insurance
/Finance/Insurance/Health Insurance
/Finance/Investing
/Finance/Investing/Commodities & Futures Trading
/Finance/Investing/Currencies & Foreign Exchange
/Finance/Investing/Stocks & Bonds
/Food & Drink
/Food & Drink/Beverages
/Food & Drink/Beverages/Alcoholic Beverages
/Food & Drink/Beverages/Coffee & Tea
/Food & Drink/Beverages/Juice
/Food & Drink/Beverages/Soft Drinks
/Food & Drink/Cooking & Recipes
/Food & Drink/Cooking & Recipes/BBQ & Grilling
/Food & Drink/Cooking & Recipes/Desserts
/Food & Drink/Cooking & Recipes/Soups & Stews
/Food & Drink/Food
/Food & Drink/Food & Grocery Retailers
/Food & Drink/Food/Baked Goods
/Food & Drink/Food/Breakfast Foods
/Food & Drink/Food/Candy & Sweets
/Food & Drink/Food/Grains & Pasta
/Food & Drink/Food/Meat & Seafood
/Food & Drink/Food/Snack Foods
/Food & Drink/Restaurants
/Food & Drink/Restaurants/Fast Food
/Food & Drink/Restaurants/Pizzerias
/Food & Drink/Restaurants/Restaurant Reviews & Reservations
/Games
/Games/Arcade & Coin-Op Games
/Games/Board Games
/Games/Board Games/Chess & Abstract Strategy Games
/Games/Board Games/Miniatures & Wargaming
/Games/Card Games
/Games/Card Games/Collectible Card Games
/Games/Card Games/Poker & Casino Games
/Games/Computer & Video Games
/Games/Computer & Video Games/Casual Games
/Games/Computer & Video Games/Driving & Racing Games
/Games/Computer & Video Games/Fighting Games
/Games/Computer & Video Games/Music & Dance Games
/Games/Computer & Video Games/Sandbox Games
/Games/Computer & Video Games/Shooter Games
/Games/Computer & Video Games/Simulation Games
/Games/Computer & Video Games/Sports Games
/Games/Computer & Video Games/Strategy Games
/Games/Computer & Video Games/Video Game Emulation
/Games/Family-Oriented Games & Activities
/Games/Family-Oriented Games & Activities/Drawing & Coloring
/Games/Family-Oriented Games & Activities/Dress-Up & Fashion Games
/Games/Gambling
/Games/Gambling/Lottery
/Games/Online Games/Massively Multiplayer Games
/Games/Puzzles & Brainteasers
/Games/Roleplaying Games
/Games/Table Games
/Games/Table Games/Billiards
/Games/Word Games
/Health
/Health/Aging & Geriatrics
/Health/Health Conditions
/Health/Health Conditions/AIDS & HIV
/Health/Health Conditions/Allergies
/Health/Health Conditions/Arthritis
/Health/Health Conditions/Cancer
/Health/Health Conditions/Diabetes
/Health/Health Conditions/Ear Nose & Throat
/Health/Health Conditions/Eating Disorders
/Health/Health Conditions/Endocrine Conditions
/Health/Health Conditions/Genetic Disorders
/Health/Health Conditions/Heart & Hypertension
/Health/Health Conditions/Infectious Diseases
/Health/Health Conditions/Neurological Conditions
/Health/Health Conditions/Obesity
/Health/Health Conditions/Pain Management
/Health/Health Conditions/Respiratory Conditions
/Health/Health Conditions/Skin Conditions
/Health/Health Conditions/Sleep Disorders
/Health/Health Education & Medical Training
/Health/Health Foundations & Medical Research
/Health/Medical Devices & Equipment
/Health/Medical Facilities & Services
/Health/Medical Facilities & Services/Doctors' Offices
/Health/Medical Facilities & Services/Hospitals & Treatment Centers
/Health/Medical Facilities & Services/Medical Procedures
/Health/Medical Facilities & Services/Physical Therapy
/Health/Men's Health
/Health/Mental Health
/Health/Mental Health/Anxiety & Stress
/Health/Mental Health/Depression
/Health/Nursing
/Health/Nursing/Assisted Living & Long Term Care
/Health/Nutrition
/Health/Nutrition/Special & Restricted Diets
/Health/Nutrition/Vitamins & Supplements
/Health/Oral & Dental Care
/Health/Pharmacy
/Health/Pharmacy/Drugs & Medications
/Health/Public Health
/Health/Public Health/Occupational Health & Safety
/Health/Reproductive Health
/Health/Substance Abuse
/Health/Substance Abuse/Drug & Alcohol Testing
/Health/Substance Abuse/Drug & Alcohol Treatment
/Health/Substance Abuse/Smoking & Smoking Cessation
/Health/Substance Abuse/Steroids & Performance-Enhancing Drugs
/Health/Vision Care
/Health/Vision Care/Eyeglasses & Contacts
/Health/Women's Health
/Hobbies & Leisure
/Hobbies & Leisure/Clubs & Organizations
/Hobbies & Leisure/Clubs & Organizations/Youth Organizations & Resources
/Hobbies & Leisure/Crafts
/Hobbies & Leisure/Crafts/Fiber & Textile Arts
/Hobbies & Leisure/Merit Prizes & Contests
/Hobbies & Leisure/Outdoors
/Hobbies & Leisure/Outdoors/Fishing
/Hobbies & Leisure/Outdoors/Hiking & Camping
/Hobbies & Leisure/Paintball
/Hobbies & Leisure/Radio Control & Modeling
/Hobbies & Leisure/Radio Control & Modeling/Model Trains & Railroads
/Hobbies & Leisure/Special Occasions
/Hobbies & Leisure/Special Occasions/Holidays & Seasonal Events
/Hobbies & Leisure/Special Occasions/Weddings
/Hobbies & Leisure/Water Activities
/Hobbies & Leisure/Water Activities/Boating
/Hobbies & Leisure/Water Activities/Surf & Swim
/Home & Garden
/Home & Garden/Bed & Bath
/Home & Garden/Bed & Bath/Bathroom
/Home & Garden/Domestic Services
/Home & Garden/Domestic Services/Cleaning Services
/Home & Garden/Gardening & Landscaping
/Home & Garden/Home & Interior Decor
/Home & Garden/Home Appliances
/Home & Garden/Home Furnishings
/Home & Garden/Home Furnishings/Curtains & Window Treatments
/Home & Garden/Home Furnishings/Kitchen & Dining Furniture
/Home & Garden/Home Furnishings/Lamps & Lighting
/Home & Garden/Home Furnishings/Living Room Furniture
/Home & Garden/Home Furnishings/Rugs & Carpets
/Home & Garden/Home Improvement
/Home & Garden/Home Improvement/Construction & Power Tools
/Home & Garden/Home Improvement/Doors & Windows
/Home & Garden/Home Improvement/Flooring
/Home & Garden/Home Improvement/House Painting & Finishing
/Home & Garden/Home Improvement/Plumbing
/Home & Garden/Home Safety & Security
/Home & Garden/Home Storage & Shelving
/Home & Garden/Home Swimming Pools, Saunas & Spas
/Home & Garden/HVAC & Climate Control
/Home & Garden/HVAC & Climate Control/Fireplaces & Stoves
/Home & Garden/Kitchen & Dining
/Home & Garden/Kitchen & Dining/Cookware & Diningware
/Home & Garden/Kitchen & Dining/Major Kitchen Appliances
/Home & Garden/Kitchen & Dining/Small Kitchen Appliances
/Home & Garden/Laundry
/Home & Garden/Laundry/Washers & Dryers
/Home & Garden/Nursery & Playroom
/Home & Garden/Pest Control
/Home & Garden/Yard & Patio
/Home & Garden/Yard & Patio/Lawn Mowers
/Internet & Telecom
/Internet & Telecom/Communications Equipment
/Internet & Telecom/Communications Equipment/Radio Equipment
/Internet & Telecom/Email & Messaging
/Internet & Telecom/Email & Messaging/Text & Instant Messaging
/Internet & Telecom/Email & Messaging/Voice & Video Chat
/Internet & Telecom/Mobile & Wireless
/Internet & Telecom/Mobile & Wireless/Mobile & Wireless Accessories
/Internet & Telecom/Mobile & Wireless/Mobile Apps & Add-Ons
/Internet & Telecom/Mobile & Wireless/Mobile Phones
/Internet & Telecom/Service Providers
/Internet & Telecom/Service Providers/Cable & Satellite Providers
/Internet & Telecom/Web Services
/Internet & Telecom/Web Services/Affiliate Programs
/Internet & Telecom/Web Services/Web Design & Development
/Jobs & Education
/Jobs & Education/Education
/Jobs & Education/Education/Colleges & Universities
/Jobs & Education/Education/Distance Learning
/Jobs & Education/Education/Homeschooling
/Jobs & Education/Education/Primary & Secondary Schooling (K-12)
/Jobs & Education/Education/Standardized & Admissions Tests
/Jobs & Education/Education/Teaching & Classroom Resources
/Jobs & Education/Education/Training & Certification
/Jobs & Education/Education/Vocational & Continuing Education
/Jobs & Education/Jobs
/Jobs & Education/Jobs/Career Resources & Planning
/Jobs & Education/Jobs/Job Listings
/Jobs & Education/Jobs/Resumes & Portfolios
/Law & Government
/Law & Government/Government
/Law & Government/Government/Courts & Judiciary
/Law & Government/Government/Visa & Immigration
/Law & Government/Legal
/Law & Government/Legal/Bankruptcy
/Law & Government/Legal/Legal Education
/Law & Government/Legal/Legal Services
/Law & Government/Military
/Law & Government/Public Safety
/Law & Government/Public Safety/Crime & Justice
/Law & Government/Public Safety/Emergency Services
/Law & Government/Public Safety/Law Enforcement
/Law & Government/Public Safety/Security Products & Services
/Law & Government/Social Services
/News
/News/Business News
/News/Business News/Company News
/News/Business News/Financial Markets News
/News/Gossip & Tabloid News/Scandals & Investigations
/News/Health News
/News/Politics
/News/Sports News
/News/Weather
/Online Communities
/Online Communities/Blogging Resources & Services
/Online Communities/Dating & Personals
/Online Communities/Dating & Personals/Matrimonial Services
/Online Communities/Dating & Personals/Personals
/Online Communities/Dating & Personals/Photo Rating Sites
/Online Communities/File Sharing & Hosting
/Online Communities/Online Goodies
/Online Communities/Online Goodies/Clip Art & Animated GIFs
/Online Communities/Online Goodies/Skins, Themes & Wallpapers
/Online Communities/Online Goodies/Social Network Apps & Add-Ons
/Online Communities/Photo & Video Sharing
/Online Communities/Photo & Video Sharing/Photo & Image Sharing
/Online Communities/Social Networks
/Online Communities/Virtual Worlds
/People & Society
/People & Society/Family & Relationships
/People & Society/Family & Relationships/Family
/People & Society/Family & Relationships/Marriage
/People & Society/Family & Relationships/Troubled Relationships
/People & Society/Kids & Teens
/People & Society/Kids & Teens/Children's Interests
/People & Society/Kids & Teens/Teen Interests
/People & Society/Religion & Belief
/People & Society/Seniors & Retirement
/People & Society/Social Issues & Advocacy
/People & Society/Social Issues & Advocacy/Charity & Philanthropy
/People & Society/Social Issues & Advocacy/Discrimination & Identity Relations
/People & Society/Social Issues & Advocacy/Green Living & Environmental Issues
/People & Society/Social Issues & Advocacy/Human Rights & Liberties
/People & Society/Social Issues & Advocacy/Poverty & Hunger
/People & Society/Social Issues & Advocacy/Work & Labor Issues
/People & Society/Social Sciences
/People & Society/Social Sciences/Economics
/People & Society/Social Sciences/Political Science
/People & Society/Social Sciences/Psychology
/People & Society/Subcultures & Niche Interests
/Pets & Animals
/Pets & Animals/Animal Products & Services/Pet Food & Supplies
/Pets & Animals/Animal Products & Services/Veterinarians
/Pets & Animals/Pets
/Pets & Animals/Pets/Birds
/Pets & Animals/Pets/Cats
/Pets & Animals/Pets/Dogs
/Pets & Animals/Pets/Exotic Pets
/Pets & Animals/Pets/Fish & Aquaria
/Pets & Animals/Pets/Horses
/Pets & Animals/Pets/Rabbits & Rodents
/Pets & Animals/Pets/Reptiles & Amphibians
/Pets & Animals/Wildlife
/Real Estate
/Real Estate/Real Estate Listings
/Real Estate/Real Estate Listings/Bank-Owned & Foreclosed Properties
/Real Estate/Real Estate Listings/Commercial Properties
/Real Estate/Real Estate Listings/Lots & Land
/Real Estate/Real Estate Listings/Residential Rentals
/Real Estate/Real Estate Listings/Residential Sales
/Real Estate/Real Estate Listings/Timeshares & Vacation Properties
/Real Estate/Real Estate Services
/Reference
/Reference/Directories & Listings
/Reference/Directories & Listings/Business & Personal Listings
/Reference/General Reference
/Reference/General Reference/Biographies & Quotations
/Reference/General Reference/Calculators & Reference Tools
/Reference/General Reference/Dictionaries & Encyclopedias
/Reference/General Reference/Forms Guides & Templates
/Reference/General Reference/Public Records
/Reference/General Reference/Time & Calendars
/Reference/Geographic Reference
/Reference/Geographic Reference/Maps
/Reference/Humanities
/Reference/Humanities/History
/Reference/Humanities/Myth & Folklore
/Reference/Humanities/Philosophy
/Reference/Language Resources
/Reference/Language Resources/Foreign Language Resources
/Reference/Libraries & Museums
/Reference/Libraries & Museums/Museums
/Science
/Science/Astronomy
/Science/Biological Sciences
/Science/Biological Sciences/Neuroscience
/Science/Chemistry
/Science/Computer Science
/Science/Earth Sciences
/Science/Earth Sciences/Atmospheric Science
/Science/Earth Sciences/Geology
/Science/Ecology & Environment
/Science/Ecology & Environment/Climate Change & Global Warming
/Science/Engineering & Technology
/Science/Engineering & Technology/Robotics
/Science/Mathematics
/Science/Mathematics/Statistics
/Science/Physics
/Science/Scientific Institutions
/Sensitive Subjects
/Shopping
/Shopping/Antiques & Collectibles
/Shopping/Apparel
/Shopping/Apparel/Athletic Apparel
/Shopping/Apparel/Casual Apparel
/Shopping/Apparel/Children's Clothing
/Shopping/Apparel/Clothing Accessories
/Shopping/Apparel/Costumes
/Shopping/Apparel/Eyewear
/Shopping/Apparel/Footwear
/Shopping/Apparel/Formal Wear
/Shopping/Apparel/Headwear
/Shopping/Apparel/Men's Clothing
/Shopping/Apparel/Swimwear
/Shopping/Apparel/Undergarments
/Shopping/Apparel/Women's Clothing
/Shopping/Auctions
/Shopping/Classifieds
/Shopping/Consumer Resources
/Shopping/Consumer Resources/Consumer Advocacy & Protection
/Shopping/Consumer Resources/Coupons & Discount Offers
/Shopping/Consumer Resources/Product Reviews & Price Comparisons
/Shopping/Entertainment Media
/Shopping/Entertainment Media/Entertainment Media Rentals
/Shopping/Gifts & Special Event Items
/Shopping/Gifts & Special Event Items/Cards & Greetings
/Shopping/Gifts & Special Event Items/Flowers
/Shopping/Gifts & Special Event Items/Gifts
/Shopping/Luxury Goods
/Shopping/Mass Merchants & Department Stores
/Shopping/Photo & Video Services
/Shopping/Tobacco Products
/Shopping/Toys
/Shopping/Toys/Building Toys
/Shopping/Toys/Die-cast & Toy Vehicles
/Shopping/Toys/Dolls & Accessories
/Shopping/Toys/Ride-On Toys & Wagons
/Shopping/Toys/Stuffed Toys
/Sports
/Sports/Animal Sports
/Sports/College Sports
/Sports/Combat Sports
/Sports/Combat Sports/Boxing
/Sports/Combat Sports/Martial Arts
/Sports/Combat Sports/Wrestling
/Sports/Extreme Sports
/Sports/Extreme Sports/Drag & Street Racing
/Sports/Fantasy Sports
/Sports/Individual Sports
/Sports/Individual Sports/Cycling
/Sports/Individual Sports/Golf
/Sports/Individual Sports/Gymnastics
/Sports/Individual Sports/Racquet Sports
/Sports/Individual Sports/Skate Sports
/Sports/Individual Sports/Track & Field
/Sports/International Sports Competitions
/Sports/International Sports Competitions/Olympics
/Sports/Motor Sports
/Sports/Sporting Goods
/Sports/Sporting Goods/Sports Memorabilia
/Sports/Sporting Goods/Winter Sports Equipment
/Sports/Sports Coaching & Training
/Sports/Team Sports
/Sports/Team Sports/American Football
/Sports/Team Sports/Australian Football
/Sports/Team Sports/Baseball
/Sports/Team Sports/Basketball
/Sports/Team Sports/Cheerleading
/Sports/Team Sports/Cricket
/Sports/Team Sports/Hockey
/Sports/Team Sports/Rugby
/Sports/Team Sports/Soccer
/Sports/Team Sports/Volleyball
/Sports/Water Sports
/Sports/Water Sports/Surfing
/Sports/Water Sports/Swimming
/Sports/Winter Sports
/Sports/Winter Sports/Ice Skating
/Sports/Winter Sports/Skiing & Snowboarding
/Travel
/Travel/Air Travel
/Travel/Air Travel/Airport Parking & Transportation
/Travel/Bus & Rail
/Travel/Car Rental & Taxi Services
/Travel/Cruises & Charters
/Travel/Hotels & Accommodations
/Travel/Hotels & Accommodations/Vacation Rentals & Short-Term Stays
/Travel/Specialty Travel
/Travel/Tourist Destinations
/Travel/Tourist Destinations/Beaches & Islands
/Travel/Tourist Destinations/Mountain & Ski Resorts
/Travel/Tourist Destinations/Regional Parks & Gardens
/Travel/Tourist Destinations/Theme Parks
/Travel/Tourist Destinations/Zoos-Aquariums-Preserves`



let words=``,slash=0,topicsArr=[];
_.map(topics,t=>{
    if(t!=='\n'){
        words=words+t;
    }
    else{
        let data=words.split("/")
        data=_.compact(data)
        if(data.length==1){
        topicsArr.push({[data[0]]:{}})
        }
        else if(data.length==2){
            topicsArr.push({[data[0]]:data[1]})
        }
        else if(data.length==3){
            topicsArr.push({[data[0]]:{[data[1]]:data[2]}})
        }
        words=``
        slash=slash+1
    }
})

// let topicss=topics.split("/")

// let uniq=_.uniq(topicss)

// uniq=uniq.map(u=>{
// return u.replace(/\n/g,'')
// })

// fs.writeFileSync("topics.txt",JSON.stringify(topicsArr))

// console.log(uniq)

let arr=[{comedy radio,urban adult contemporary music,darts,non profit organizations,travel accessories,hobbies and interests,oldies/adult standards,augmented reality,participant sports,business accounting and finance,non alcoholic beverages,fitness and exercise,childrens health,digital arts,resume writing and advice,computer peripherals,computer networking,web conferencing,antivirus software,auto body styles,van,microcar,minivan,budget cars,certified pre-owned cars,green vehicles,motorcycles,auto parts,auto recalls,auto technology,art and photography books,fiction,sales,small and medium-sized business,blues,religious (music and audio),australia and oceania travel,career advice,remote working,financial reform,financial regulation,gasoline prices,housing market,interest rates,job market,industries,advertising industry,education industry,entertainment industry,environmental services industry,financial industry,food industry,healthcare industry,hospitality industry,information services industry,legal services industry,logistics and transportation industry,agriculture,management consulting industry,manufacturing industry,mechanical and industrial engineering industry,media industry,metals industry,non-profit organizations,pharmaceutical industry,power and energy industry,publishing industry,real estate industry,apparel industry,retail industry,technology industry,telecommunications industry,automotive industry,aviation industry,biotech and biomedical industry,civil engineering industry,construction industry,defense industry,apprenticeships,career planning,job search,vocational training,adult education,private school,secondary education,special education,college education,college planning,postgraduate education,professional school,undergraduate education,early childhood education,educational assessment,standardized testing,homeschooling,homework and study,language learning,online education,primary education,private equity,consumer issues,business utilities,commodities,amusement and theme parks,fashion events,randb/soul/funk,museums and galleries,musicals,national and civic holidays,nightclubs,outdoor activities,parks and nature,music tv,awards shows,personal celebrations and life events,anniversary,wedding,baby shower,bachelorette party,birth,birthday,funeral,graduation,political event,religious events,sporting events,zoos and aquariums,bars and restaurants,casinos and gambling,cinemas and events,comedy events,concerts and music events,fan conventions,dating,divorce,eldercare,marriage and civil unions,parenting,adoption and fostering,daycare and pre-school,internet safety,parenting babies and toddlers,parenting children aged 4-11,parenting teens,special needs kids,single life,costume,sale and lease back,theater,alcoholic beverages,vegan diets,vegetarian diets,world cuisines,barbecues and grilling,cooking,desserts and baking,dining out,food allergies,food movements,healthy cooking and eating,non-alcoholic beverages,style and fashion,model toys,dance,weight loss,wellness,alternative medicine,herbs and supplements,holistic health,physical therapy,smoking cessation,womens health,senior health,business expos and conferences,antiquing and antiques,theater venues and events,bereavement,prom,fine art photography,nutrition,mens health,magic and illusion,running and jogging,day trips,beadwork,candle and soap making,drawing and sketching,jewelry making,needlework,painting,photography,scrapbooking,woodworking,beekeeping,birdwatching,cigars,collecting,comic books,stamps and coins,content production,audio production,freelance writing,screenwriting,video production,games and puzzles,board games and puzzles,card games,roleplaying games,genealogy and ancestry,gardening,remodeling and construction,smart home,home appliances,home entertaining,home improvement,home security,indoor environmental quality,interior decorating,landscaping,outdoor decorating,ear, nose and throat conditions,endocrine and metabolic diseases,hormonal disorders,menopause,thyroid disorders,eye and vision conditions,foot health,heart and cardiovascular diseases,infectious diseases,injuries,first aid,lung and respiratory health,mental health,reproductive health,birth control,infertility,pregnancy,blood disorders,sexual health,sexual conditions,skin and dermatology,sleep disorders,substance abuse,bone and joint conditions,brain and nervous system disorders,cancer,cold and flu,dental health,diabetes,digestive disorders,medical tests,pharmaceutical drugs,surgery,vaccines,cosmetic medical services,education podcasts,animation movies,diseases and conditions,allergies,paranormal phenomena,crime and mystery movies,documentary movies,comedy movies,sci-fi and fantasy,radio control,workshops and classes,arts and crafts,gospel music,alternative music,parenting children aged 4 11,news radio,country music,automotive,songwriters/folk,hard rock,comedy (music and audio),adult album alternative,soundtracks, tv and showtunes,public radio,classic rock,soft rock,world movies,crime,disasters,international news,law,local news,national news,politics,elections,political issues,war and conflicts,weather,consumer banking,financial assistance,government support and welfare,student financial aid,financial planning,frugal living,insurance,health insurance,home insurance,life insurance,motor insurance,pet insurance,travel insurance,personal debt,credit cards,home financing,personal loans,student loans,personal investing,hedge funds,mutual funds,options,stocks and bonds,personal taxes,retirement planning,home utilities,gas and electric,internet service providers,phone services,water services,birds,urban ac music,drama movies,classical music,college radio,family and children movies,business news radio,variety (music and audio),soft ac music,tablets and e readers,reggae,hip hop music,alternative rock,fantasy movies,horror movies,talk radio,educational radio,childrens music,world/international music,news/talk radio,inspirational/new age music,sci fi and fantasy,rock music,chemistry,apartments,cheerleading,geology,retail property,vacation properties,developmental sites,hotel properties,houses,industrial property,land and farms,office property,real estate buying and selling,real estate renting and leasing,agnosticism,spirituality,astrology,atheism,buddhism,christianity,hinduism,islam,judaism,sikhism,physics,coupons and discounts,flower shopping,gifts and greetings cards,grocery shopping,household supplies,lotteries and scratchcards,sales and promotions,childrens games and toys,pet adoptions,disabled sports,diving,equine sports,horse racing,extreme sports,canoeing and kayaking,climbing,paintball,scuba diving,skateboarding,cats,surfing and bodyboarding,waterskiing and wakeboarding,australian rules football,fantasy sports,field hockey,figure skating,fishing sports,golf,gymnastics,hunting and shooting,ice hockey,inline skating,lacrosse,celebrity homes,environment,space and astronomy,genetics,geography,biological sciences,humor and satire,technology and computing,cricket,large animals,college basketball,fish and aquariums,boxing,veterinary medicine,college football,american football,holiday shopping,dogs,reptiles,college baseball,cycling,auto racing,motorcycle sports,martial arts,olympic sports,summer olympic sports,winter olympic sports,poker and professional gambling,rodeo,rowing,rugby,rugby league,rugby union,sailing,skiing,snooker/pool/billiards,soccer,badminton,squash,swimming,table tennis,tennis,track and field,volleyball,walking,water polo,weightlifting,baseball,wrestling,basketball,beach volleyball,bodybuilding,bowling,sports equipment,beauty,hair care,makeup and accessories,nail care,natural and organic beauty,perfume and fragrance,skin care,womens fashion,womens accessories,womens glasses,womens handbags and wallets,womens hats and scarves,womens jewelry and watches,womens clothing,womens business wear,womens casual wear,womens formal wear,womens intimates and sleepwear,womens outerwear,womens sportswear,womens shoes and footwear,body art,childrens clothing,health podcasts,fashion trends,high fashion,mens fashion,mens accessories,mens jewelry and watches,mens clothing,mens business wear,mens casual wear,mens formal wear,mens outerwear,mens sportswear,mens underwear and sleepwear,mens shoes and footwear,personal care,bath and shower,deodorant and antiperspirant,oral care,shaving,street style,design,computer software and applications,photo editing software,shareware and freeware,video software,romance movies,europe travel,travel type,special interest movies,opera,web hosting,email,internet for beginners,internet of things,it and internet support,search,social networking,web design and html,laptops,programming languages,consumer electronics,cameras and camcorders,home entertainment systems,smartphones,tablets and e-readers,wearable technology,robotics,virtual reality,childrens tv,north america travel,reality tv,travel preparation and advice,africa travel,console games,esports,mobile games,pc games,action video games,role-playing video games,simulation video games,sports video games,strategy video games,action-adventure video games,adventure video games,casual games,educational video games,exercise and fitness video games,video game genres,science fiction tv,adventure travel,honeymoons and getaways,spas,family travel,business travel,comedy tv,animation tv,drama tv,factual tv,bed and breakfasts,south america travel,cruises,beach travel,camping,soap opera tv,hotels and motels,road trips,holiday tv,special interest tv,sports tv,travel locations,science and medicine podcasts,polar travel,desktop publishing,digital audio,graphics software,operating systems,data storage and warehousing,desktops,information and network security,internet,mmos,music and party video games,puzzle video games,modern art,books and literature,shopping,home and garden,careers,education,religion and spirituality,food and drink,personal finance,news and politics,action and adventure movies,real estate,science fiction movies,medical health,pets,news and talk,science,events and attractions,healthy living,business and finance,pet supplies,commercial trucks,sedan,station wagon,suv,convertible,coupe,crossover,hatchback,off-road vehicles,pickup trucks,auto type,classic cars,concept cars,driverless cars,luxury cars,performance cars,car culture,video gaming,television,travel preparation,album-oriented rock,dash cam videos,road-side assistance,scooters,auto buying and selling,auto insurance,auto repair,auto safety,auto shows,auto infotainment technologies,auto navigation systems,auto safety technologies,auto rentals,biographies,childrens literature,comics and graphic novels,cookbooks,poetry,travel books,young adult literature,business,human resources,large business,logistics,marketing and advertising,startups,business administration,business banking and finance,angel investment,bankruptcy,business loans,debt factoring and invoice discounting,mergers and acquisitions,venture capital,business i.t.,business operations,recalls,executive leadership and management,government business,green solutions,economy,currencies,financial crisis,certified pre owned cars,celebrity deaths,celebrity relationships,celebrity pregnancy,oldies music,celebrity style,adult contemporary music,news and politics podcasts,celebrity scandal,celebrity families,musical instruments,snowboarding,kids and family podcasts,designer clothing,web development,bachelor party,party supplies and decorations,malls and shopping centers,historic site and landmark tours,family and relationships,college sports,contemporary hits/pop/top 40,softball,dance and electronic music,soundtracks,classic hits,jazz,travel,sports radio,air travel,budget travel,road side assistance,job fairs,cloud computing,artificial intelligence,browsers,computing,3-d graphics,computer animation,databases,sports talk radio,rail travel,asia travel,urban contemporary music,music and audio,snooker and pool and billiards,sports,ear nose and throat conditions,movies,society and culture podcasts,fine art,pop culture}]
let parent=[]
topicsArr.map(t=>{
    let op=Object.values(t)
    if(_.isEmpty(op[0])){
        parent.push(t)
    }
})

console.log(parent)