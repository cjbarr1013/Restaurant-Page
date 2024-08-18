import myImage from '../assets/images/big-jim.jpg';

export function loadHome() {
    const content = document.querySelector("#content");
    content.removeAttribute("class");
    content.classList.add("lp");

    const newDiv = document.createElement("div");
    newDiv.id = "lp-content";
    content.appendChild(newDiv);

    const newHeading = document.createElement("h1");
    newHeading.textContent = "Welcome to Big Jim's Creamery!";

    const newPara1 = document.createElement("p");
    newPara1.textContent = "Come visit our shop in Seattle, Washington and order our world famous Triple Chocolate Fudge Stuffed Banana Split Ice Cream Sandwich Milkshake! It has literally killed 7 women and children in the past 5 years alone!";
    
    const newPara2 = document.createElement("p");
    newPara2.textContent = "With more than 50 flavors and endless toppings, you're bound to discover something that you and the whole family can enjoy!";

    newDiv.appendChild(newHeading);
    newDiv.appendChild(newPara1);
    newDiv.appendChild(newPara2);
};

export const fullScreenStyling = (function() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    const load = () => {
        html.style.height = "100%";
        body.style.height = "100%";
        body.style.display = "flex";
        body.style.flexDirection = "column";
        header.style.flex = "0 1 auto";
    };
    
    const remove = () => {
        html.style.height = "";
        body.style.height = "";
        body.style.display = "";
        body.style.flexDirection = "";
        header.style.flex = "";
    };

    return {load, remove};
})();

export function loadMenu() {
    const content = document.querySelector("#content");
    content.removeAttribute("class");

    // Menu Heading
    const heading = document.createElement("div");
    heading.id = "menu-heading";
    const h1 = document.createElement("h1");
    h1.textContent = "Choose from one of our many specialty treats, or build your own creation!"
    heading.appendChild(h1);
    content.appendChild(heading);

    // Menu Content
    const menuContent = document.createElement("div");
    menuContent.id = "menu-content";

    // Left
    const menuLeft = document.createElement("div");
    menuLeft.id = "menu-left";

    // Heading
    const h2Left = document.createElement("h2");
    h2Left.textContent = "Build Your Own";
    menuLeft.appendChild(h2Left);

    // Item 1
    const menuItemLeft1 = document.createElement("div");
    menuItemLeft1.classList.add("menu-left-item");
    const h3Left1 = document.createElement("h3");
    h3Left1.textContent = "Step 1: Choose Your Cup or Cone";
    menuItemLeft1.appendChild(h3Left1);

    const menuItemLeft1Content1 = document.createElement("p");
    const menuItemLeft1Content1Span1 = document.createElement("span");
    menuItemLeft1Content1Span1.textContent = "Cup : $1.49";
    const menuItemLeft1Content1Span2 = document.createElement("span");
    menuItemLeft1Content1Span2.textContent = "Sugar Cone : $1.99";
    const menuItemLeft1Content1Span3 = document.createElement("span");
    menuItemLeft1Content1Span3.textContent = "Waffle Cone : $2.49";
    menuItemLeft1Content1.appendChild(menuItemLeft1Content1Span1);
    menuItemLeft1Content1.appendChild(menuItemLeft1Content1Span2);
    menuItemLeft1Content1.appendChild(menuItemLeft1Content1Span3);
    menuItemLeft1.appendChild(menuItemLeft1Content1);

    menuLeft.appendChild(menuItemLeft1);

    // Item 2
    const menuItemLeft2 = document.createElement("div");
    menuItemLeft2.classList.add("menu-left-item");
    const h3Left2 = document.createElement("h3");
    h3Left2.textContent = "Step 2: Choose the Number of Scoops";
    menuItemLeft2.appendChild(h3Left2);

    const menuItemLeft2Content1 = document.createElement("p");
    menuItemLeft2Content1.textContent = "One Scoop: $1.49";
    menuItemLeft2.appendChild(menuItemLeft2Content1);

    const menuItemLeft2Content2 = document.createElement("p");
    menuItemLeft2Content2.textContent = "Each Additional Scoop: $0.99";
    menuItemLeft2.appendChild(menuItemLeft2Content2);

    menuLeft.appendChild(menuItemLeft2);

    // Item 3
    const menuItemLeft3 = document.createElement("div");
    menuItemLeft3.classList.add("menu-left-item");
    const h3Left3 = document.createElement("h3");
    h3Left3.textContent = "Step 3: Choose your Flavor(s)";
    menuItemLeft3.appendChild(h3Left3);

    const menuItemLeft3Content1 = document.createElement("div");
    menuItemLeft3Content1.classList.add("flavors-and-toppings");
    const menuItemLeft3Content1P1 = document.createElement("p");
    const flavorsCol1 = [
        "Vanilla",
        "Chocolate",
        "Strawberry",
        "Mint Chocolate Chip",
        "Cookies and Cream",
        "Rocky Road",
        "Butter Pecan",
        "Pistachio",
        "Coffee",
        "Salted Caramel",
        "Mango",
        "Raspberry Ripple",
        "Coconut",
        "Peanut Butter Cup",
        "Chocolate Fudge Brownie",
        "Lemon Sorbet",
        "Green Tea"
    ];
    for (const item of flavorsCol1) {
        const span = document.createElement("span");
        span.textContent = item;
        menuItemLeft3Content1P1.appendChild(span);
    }
    menuItemLeft3Content1.appendChild(menuItemLeft3Content1P1);

    const menuItemLeft3Content1P2 = document.createElement("p");
    const flavorsCol2 = [
        "Cookie Dough",
        "Black Cherry",
        "Tiramisu",
        "Cotton Candy",
        "Rum Raisin",
        "Honeycomb",
        "Blueberry Cheesecake",
        "Neapolitan",
        "Caramel Swirl",
        "Banana Split",
        "White Chocolate Raspberry",
        "Chocolate Chip",
        "Maple Walnut",
        "Apple Pie",
        "Chocolate Peanut Butter",
        "Birthday Cake",
        "Red Velvet"
    ];
    for (const item of flavorsCol2) {
        const span = document.createElement("span");
        span.textContent = item;
        menuItemLeft3Content1P2.appendChild(span);
    }
    menuItemLeft3Content1.appendChild(menuItemLeft3Content1P2);

    const menuItemLeft3Content1P3 = document.createElement("p");
    const flavorsCol3 = [
        "Mocha Almond Fudge",
        "Dulce de Leche",
        "Pralines and Cream",
        "Blackberry",
        "Chocolate Hazelnut",
        "S’mores",
        "Espresso",
        "Pumpkin Spice",
        "Blue Moon",
        "Rose",
        "Mango Chili",
        "Lavender Honey",
        "Matcha Mint",
        "Pineapple Coconut",
        "Churro",
        "Spumoni"
    ];
    for (const item of flavorsCol3) {
        const span = document.createElement("span");
        span.textContent = item;
        menuItemLeft3Content1P3.appendChild(span);
    }
    menuItemLeft3Content1.appendChild(menuItemLeft3Content1P3);

    menuItemLeft3.appendChild(menuItemLeft3Content1);
    menuLeft.appendChild(menuItemLeft3);

    // Item 4
    const menuItemLeft4 = document.createElement("div");
    menuItemLeft4.classList.add("menu-left-item");
    const h3Left4 = document.createElement("h3");
    h3Left4.textContent = "Step 4: Choose your Topping(s)";
    menuItemLeft4.appendChild(h3Left4);

    const menuItemLeft4Content1 = document.createElement("div");
    menuItemLeft4Content1.classList.add("flavors-and-toppings");
    const menuItemLeft4Content1P1 = document.createElement("p");
    const toppingsCol1 = [
        "Sprinkles",
        "Chocolate Syrup",
        "Caramel Sauce",
        "Whipped Cream",
        "Chopped Nuts",
        "Maraschino Cherries",
        "Crushed Oreos",
        "Hot Fudge",
        "Marshmallows",
        "Gummy Bears",
        "Cookie Dough Bites",
        "Chocolate Chips"
    ];
    for (const item of toppingsCol1) {
        const span = document.createElement("span");
        span.textContent = item;
        menuItemLeft4Content1P1.appendChild(span);
    }
    menuItemLeft4Content1.append(menuItemLeft4Content1P1);

    const menuItemLeft4Content1P2 = document.createElement("p");
    const toppingsCol2 = [
        "Shredded Coconut",
        "Fresh Strawberries",
        "Banana Slices",
        "Crushed Graham Crackers",
        "Brownie Bits",
        "M&Ms",
        "Peanut Butter Sauce",
        "Toffee Bits",
        "Candied Pecans",
        "Chocolate Shavings",
        "Blueberries",
        "Waffle Cone Pieces",
        "Butterscotch Sauce"
    ];
    for (const item of toppingsCol2) {
        const span = document.createElement("span");
        span.textContent = item;
        menuItemLeft4Content1P2.appendChild(span);
    }
    menuItemLeft4Content1.append(menuItemLeft4Content1P2);

    menuItemLeft4.appendChild(menuItemLeft4Content1);
    menuLeft.appendChild(menuItemLeft4);

    // Item 5
    const menuItemLeft5 = document.createElement("div");
    menuItemLeft5.classList.add("menu-left-item");
    const h3Left5 = document.createElement("h3");
    h3Left5.textContent = "Step 5: Give Big Jim His Cheddar";
    menuItemLeft5.appendChild(h3Left5);

    const menuItemLeft5Content1 = document.createElement("p");
    menuItemLeft5Content1.textContent = "Big Jim needs it bad. He wants to treat his lady to something real nice.";
    menuItemLeft5.appendChild(menuItemLeft5Content1);

    menuLeft.appendChild(menuItemLeft5);

    menuContent.append(menuLeft);


    // Right
    const menuRight = document.createElement("div");
    menuRight.id = "menu-right";

    const h2Right = document.createElement("h2");
    h2Right.textContent = "Specialty Treats";
    menuRight.appendChild(h2Right);

    // Item 1
    const menuItemRight1 = document.createElement("div");
    menuItemRight1.classList.add("menu-right-item");
    const h3Right1 = document.createElement("h3");
    h3Right1.textContent = "Extra-Thick Milkshakes";
    menuItemRight1.appendChild(h3Right1);

    const menuItemRight1Content1 = document.createElement("p");
    menuItemRight1Content1.textContent = "These milkshakes are hand-made by Big Jim himself. Flavors include Chocolate, Vanilla, Strawberry, Blueberry and Pistachio.";
    menuItemRight1.appendChild(menuItemRight1Content1);

    const menuItemRight1Content2 = document.createElement("p");
    const menuItemRight1Content2Span1 = document.createElement("span");
    menuItemRight1Content2Span1.textContent = "S: $3.99";
    const menuItemRight1Content2Span2 = document.createElement("span");
    menuItemRight1Content2Span2.textContent = "M: $4.99";
    const menuItemRight1Content2Span3 = document.createElement("span");
    menuItemRight1Content2Span3.textContent = "L: $5.99";
    menuItemRight1Content2.appendChild(menuItemRight1Content2Span1);
    menuItemRight1Content2.appendChild(menuItemRight1Content2Span2);
    menuItemRight1Content2.appendChild(menuItemRight1Content2Span3);
    menuItemRight1.appendChild(menuItemRight1Content2);

    menuRight.appendChild(menuItemRight1);

    // Item 2
    const menuItemRight2 = document.createElement("div");
    menuItemRight2.classList.add("menu-right-item");
    const h3Right2 = document.createElement("h3");
    h3Right2.textContent = "Floats";
    menuItemRight2.appendChild(h3Right2);

    const menuItemRight2Content1 = document.createElement("p");
    menuItemRight2Content1.textContent = "Include 3 scoops of vanilla ice cream topped with your choice of soda. Sodas include Root Beer, Orange Creamsicle, Mango, Ginger Ale, and Sprite.";
    menuItemRight2.appendChild(menuItemRight2Content1);

    const menuItemRight2Content2 = document.createElement("p");
    const menuItemRight2Content2Span1 = document.createElement("span");
    menuItemRight2Content2Span1.textContent = "S: $4.99";
    const menuItemRight2Content2Span2 = document.createElement("span");
    menuItemRight2Content2Span2.textContent = "M: $5.99";
    const menuItemRight2Content2Span3 = document.createElement("span");
    menuItemRight2Content2Span3.textContent = "L: $6.99";
    menuItemRight2Content2.appendChild(menuItemRight2Content2Span1);
    menuItemRight2Content2.appendChild(menuItemRight2Content2Span2);
    menuItemRight2Content2.appendChild(menuItemRight2Content2Span3);
    menuItemRight2.appendChild(menuItemRight2Content2);

    menuRight.appendChild(menuItemRight2);

    // Item 3
    const menuItemRight3 = document.createElement("div");
    menuItemRight3.classList.add("menu-right-item");
    const h3Right3 = document.createElement("h3");
    h3Right3.textContent = "Blizzzzzzzzards";
    menuItemRight3.appendChild(h3Right3);

    const menuItemRight3Content1 = document.createElement("p");
    menuItemRight3Content1.textContent = "It's spelled different so we don't get sued. Flavors include Cookie Dough, Oreo, Frosted Animal Cracker, and Chocolate Chunk.";
    menuItemRight3.appendChild(menuItemRight3Content1);

    const menuItemRight3Content2 = document.createElement("p");
    const menuItemRight3Content2Span1 = document.createElement("span");
    menuItemRight3Content2Span1.textContent = "S: $4.49";
    const menuItemRight3Content2Span2 = document.createElement("span");
    menuItemRight3Content2Span2.textContent = "M: $5.49";
    const menuItemRight3Content2Span3 = document.createElement("span");
    menuItemRight3Content2Span3.textContent = "L: $6.49";
    menuItemRight3Content2.appendChild(menuItemRight3Content2Span1);
    menuItemRight3Content2.appendChild(menuItemRight3Content2Span2);
    menuItemRight3Content2.appendChild(menuItemRight3Content2Span3);
    menuItemRight3.appendChild(menuItemRight3Content2);

    menuRight.appendChild(menuItemRight3);

    // Item 4
    const menuItemRight4 = document.createElement("div");
    menuItemRight4.classList.add("menu-right-item");
    const h3Right4 = document.createElement("h3");
    h3Right4.textContent = "Triple Chocolate Fudge Stuffed Banana Split Ice Cream Sandwich Milkshake";
    menuItemRight4.appendChild(h3Right4);

    const menuItemRight4Content1 = document.createElement("p");
    menuItemRight4Content1.textContent = "Order this for a chance to reach the afterlife.";
    menuItemRight4.appendChild(menuItemRight4Content1);

    const menuItemRight4Content2 = document.createElement("p");
    menuItemRight4Content2.textContent = "$7.99";
    menuItemRight4.appendChild(menuItemRight4Content2);

    menuRight.appendChild(menuItemRight4);

    // Item 5
    const menuItemRight5 = document.createElement("div");
    menuItemRight5.classList.add("menu-right-item");
    const h3Right5 = document.createElement("h3");
    h3Right5.textContent = "Tub of Great Value Chocolate Swirl";
    menuItemRight5.appendChild(h3Right5);

    const menuItemRight5Content1 = document.createElement("p");
    menuItemRight5Content1.textContent = "Literally just a gallon tub of ice cream from Walmart.";
    menuItemRight5.appendChild(menuItemRight5Content1);

    const menuItemRight5Content2 = document.createElement("p");
    menuItemRight5Content2.textContent = "$5.99";
    menuItemRight5.appendChild(menuItemRight5Content2);

    menuRight.appendChild(menuItemRight5);

    // Item 6
    const menuItemRight6 = document.createElement("div");
    menuItemRight6.classList.add("menu-right-item");
    const h3Right6 = document.createElement("h3");
    h3Right6.textContent = "The Old Meat Tornado";
    menuItemRight6.appendChild(h3Right6);

    const menuItemRight6Content1 = document.createElement("p");
    menuItemRight6Content1.textContent = "Yes, we also sell meat in the form of a tornado. Guests have called it 'The most disgusting thing they have ever seen' and 'Why?'.";
    menuItemRight6.appendChild(menuItemRight6Content1);

    const menuItemRight6Content2 = document.createElement("p");
    menuItemRight6Content2.textContent = "$7.99";
    menuItemRight6.appendChild(menuItemRight6Content2);

    menuRight.appendChild(menuItemRight6);

    // Item 7
    const menuItemRight7 = document.createElement("div");
    menuItemRight7.classList.add("menu-right-item");
    const h3Right7 = document.createElement("h3");
    h3Right7.textContent = "Whipped Cream Squirted Directly Into the Mouth";
    menuItemRight7.appendChild(h3Right7);

    const menuItemRight7Content1 = document.createElement("p");
    menuItemRight7Content1.textContent = "This is self explanatory.";
    menuItemRight7.appendChild(menuItemRight7Content1);

    const menuItemRight7Content2 = document.createElement("p");
    menuItemRight7Content2.textContent = "$0.01";
    menuItemRight7.appendChild(menuItemRight7Content2);

    menuRight.appendChild(menuItemRight7);

    menuContent.appendChild(menuRight);

    content.appendChild(menuContent);
};

export function loadAbout() {
    const content = document.querySelector("#content");
    content.removeAttribute("class");
    content.classList.add("about");

    const aboutContent = document.createElement("div");
    aboutContent.id = "about-content";

    // Left
    const aboutLeft = document.createElement("div");
    aboutLeft.id = "about-left";

    const h1 = document.createElement("h1");
    h1.textContent = "About Big Jim's Creamery";
    aboutLeft.appendChild(h1);

    const para1 = document.createElement("p");
    para1.textContent = "Welcome to Big Jim’s Creamery, where the scoops are big, and the smiles are even bigger! " +
                        "Founded by Big Jim himself—a man with a heart as soft as our ice cream and an appetite to " +
                        "match—our little creamery has been churning out happiness one cone at a time since the days " + 
                        "when double scoops were considered a light snack.";
    aboutLeft.appendChild(para1);

    const para2 = document.createElement("p");
    para2.textContent = "Our secret? We mix a heaping dose of fun into every batch, whether it's our wacky flavor " +
                        "combinations or the occasional ice cream social that turns into an all-out sundae showdown. " +
                        "And if you can’t decide between toppings, why not go for them all? Big Jim didn’t earn his " +
                        "name by skimping on the good stuff!";
    aboutLeft.appendChild(para2);

    const para3 = document.createElement("p");
    para3.textContent = "At Big Jim’s, we believe that life is too short to settle for plain vanilla (unless, of " +
                        "course, it’s our rich, creamy vanilla bean—then by all means, indulge!). Whether you’re here " +
                        "for a quick scoop, a towering sundae, or just to see if Jim really is as big as they say " +
                        "(spoiler: he is), we’ve got something to satisfy every sweet tooth.";
    aboutLeft.appendChild(para3);

    aboutContent.appendChild(aboutLeft);

    // Right
    const aboutRight = document.createElement("div");
    aboutRight.id = "about-right";

    const image = document.createElement("img");
    image.src = myImage;
    image.alt = "man looking awkwardly at camera"
    aboutRight.appendChild(image);

    const caption = document.createElement("figcaption");
    caption.textContent = "Big Jim giving his signature look."
    aboutRight.appendChild(caption);

    aboutContent.appendChild(aboutRight);

    content.appendChild(aboutContent);
};

export function loadContact() {
    const content = document.querySelector("#content");
    content.removeAttribute("class");
    content.classList.add("contact");

    const contactContent = document.createElement("div");
    contactContent.id = "contact-content";  
    
    // Location
    const location = document.createElement("div");
    location.id = "location";

    const loactionHeader = document.createElement("h2");
    loactionHeader.textContent = "Location";
    location.appendChild(loactionHeader);

    const locationPara1 = document.createElement("p");
    locationPara1.textContent = "Big Jim's Creamery";
    const locationPara2 = document.createElement("p");
    locationPara2.textContent = "300 W Harrison Street";
    const locationPara3 = document.createElement("p");
    locationPara3.textContent = "Seattle, WA 98119";

    location.appendChild(locationPara1);
    location.appendChild(locationPara2);
    location.appendChild(locationPara3);

    contactContent.appendChild(location);

    // Contact Info
    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Info";
    contactInfo.appendChild(contactHeader);

    const contactPara1 = document.createElement("p");
    contactPara1.textContent = "Headquarters: (206) 284-0604";
    const contactPara2 = document.createElement("p");
    contactPara2.textContent = "Big Jim's Personal: (219) 487-5317";
    const contactPara3 = document.createElement("p");
    contactPara3.textContent = "Complaints: (888) 722-6488";

    contactInfo.appendChild(contactPara1);
    contactInfo.appendChild(contactPara2);
    contactInfo.appendChild(contactPara3);

    contactContent.appendChild(contactInfo);

    // Hours
    const hours = document.createElement("div");
    hours.id = "hours";

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Store Hours";
    hours.appendChild(hoursHeader);

    const hoursPara1 = document.createElement("p");
    hoursPara1.textContent = "Monday: 2am - 10am";
    const hoursPara2 = document.createElement("p");
    hoursPara2.textContent = "Tuesday: 10pm - 11pm";
    const hoursPara3 = document.createElement("p");
    hoursPara3.textContent = "Wednesday: 1am - 11pm";
    const hoursPara4 = document.createElement("p");
    hoursPara4.textContent = "Thursday: 9am - 5pm";
    const hoursPara5 = document.createElement("p");
    hoursPara5.textContent = "Friday: 3am - 3:01am";
    const hoursPara6 = document.createElement("p");
    hoursPara6.textContent = "Saturday: CLOSED";
    const hoursPara7 = document.createElement("p");
    hoursPara7.textContent = "Sunday: CLOSED";

    hours.appendChild(hoursPara1);
    hours.appendChild(hoursPara2);
    hours.appendChild(hoursPara3);
    hours.appendChild(hoursPara4);
    hours.appendChild(hoursPara5);
    hours.appendChild(hoursPara6);
    hours.appendChild(hoursPara7);

    contactContent.appendChild(hours);

    // Map
    const map = document.createElement("div");
    map.id = "map";

    const mapHeader = document.createElement("h2");
    mapHeader.textContent = "Map";
    map.appendChild(mapHeader);

    const mapFrame = document.createElement("iframe");
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21513.57326223371!2d-122.39920522568362!3d47.622308399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015389644fe41%3A0xaca75974b8499e28!2sChurch%20of%20Scientology%20of%20Washington%20State!5e0!3m2!1sen!2sus!4v1723932013392!5m2!1sen!2sus";
    map.appendChild(mapFrame);

    contactContent.appendChild(map);

    content.appendChild(contactContent);
};