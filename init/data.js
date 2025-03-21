const sampleListings = [
  {
    title: "Beachfront Villa in Goa",
    description: "Luxurious beachfront villa with private access to Anjuna Beach. Wake up to stunning ocean views and enjoy the sunset from your terrace.",
    image: {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Anjuna",
    country: "India",
    category: "beaches"
  },
  {
    title: "Mountain Cottage in Manali",
    description: "Cozy mountain cottage surrounded by pine forests and stunning Himalayan views. Perfect basecamp for hiking and skiing adventures.",
    image: {
      url: "https://images.unsplash.com/photo-1640528777895-63c45efdfa1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91bnRhaW4lMjBDb3R0YWdlJTIwaW4lMjBNYW5hbGl8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000,
    location: "Manali",
    country: "India",
    category: "mountains"
  },
  {
    title: "Heritage Haveli in Jaipur",
    description: "Experience royal Rajasthani hospitality in this carefully restored 150-year-old haveli with traditional architecture and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1667849357658-16bfaec30885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhlcml0YWdlJTIwSGF2ZWxpJTIwaW4lMjBKYWlwdXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 8500,
    location: "Jaipur",
    country: "India",
    category: "heritage"
  },
  {
    title: "Luxury Houseboat in Kerala",
    description: "Float through the serene backwaters of Kerala in this premium houseboat with traditional design and luxury amenities.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8THV4dXJ5JTIwSG91c2Vib2F0JTIwaW4lMjBLZXJhbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 15000,
    location: "Alleppey",
    country: "India",
    category: "luxury resorts"
  },
  {
    title: "Treehouse Retreat in Wayanad",
    description: "Elevated eco-friendly treehouse in the midst of a coffee plantation with panoramic views of the Western Ghats.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Wayanad",
    country: "India",
    category: "treehouse"
  },
  {
    title: "Beachside Cottage in Pondicherry",
    description: "Charming Indo-French style cottage just steps from the promenade beach. Enjoy the unique cultural blend and serene atmosphere.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 7500,
    location: "Pondicherry",
    country: "India",
    category: "beaches"
  },
  {
    title: "Organic Farm Stay in Punjab",
    description: "Authentic farm experience in the heartland of Punjab. Help with harvesting, enjoy home-cooked meals, and connect with rural life.",
    image: {
      url: "https://images.unsplash.com/photo-1600252016254-f3edb5f3ae95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 3500,
    location: "Amritsar",
    country: "India",
    category: "farms"
  },
  {
    title: "Modern Apartment in Mumbai",
    description: "Contemporary high-rise apartment with stunning sea views, located in the heart of Mumbai with easy access to major attractions.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1674676471417-07f613528a94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwQXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 9000,
    location: "Mumbai",
    country: "India",
    category: "rooms"
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description: "Peaceful cottage on the banks of the Ganges. Fall asleep to the sound of flowing water and wake up to mountain views.",
    image: {
      url: "https://www.campingale.com/img/ris22-01.jpg",
    },
    price: 4500,
    location: "Rishikesh",
    country: "India",
    category: "rivers"
  },
  {
    title: "Luxury Villa in Udaipur",
    description: "Opulent lakeside villa with private pool and views of the City Palace. Experience the Venice of the East in style.",
    image: {
      url: "https://ivtpl.in/cdn-cgi/image/width=720,h=600,quality=20,format=webp/https://d4b28jbnqso5g.cloudfront.net/1_H7_A6784_HDR_a4c3156666.webp",
    },
    price: 18000,
    location: "Udaipur",
    country: "India",
    category: "trending"
  },
  {
    title: "Royal Palace Stay in Jodhpur",
    description: "Experience royal heritage in this section of a historic palace converted into a luxury hotel with authentic Rajasthani decor.",
    image: {
      url: "https://cdn.sanity.io/images/ocl5w36p/prod3/4f83c00c11343d610015df35a9e2e58c0909b711-1720x1112.jpg?w=1600&auto=format&dpr=2",
    },
    price: 25000,
    location: "Jodhpur",
    country: "India",
    category: "castles"
  },
  {
    title: "Desert Camp in Jaisalmer",
    description: "Luxury tent camp in the Thar Desert. Enjoy camel rides, cultural performances, and stargazing in the clear desert sky.",
    image: {
      url: "https://images.unsplash.com/photo-1527419105721-af1f23c86dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 6500,
    location: "Jaisalmer",
    country: "India",
    category: "trending"
  },
  {
    title: "Alpine Cottage in Auli",
    description: "Snow-covered cottage with ski-in/ski-out access in India's premier ski destination. Cozy fireplace and mountain panoramas.",
    image: {
      url: "https://images.unsplash.com/photo-1515496281361-241a540151a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Auli",
    country: "India",
    category: "snow places"
  },
  {
    title: "Backwater Retreat in Kumarakom",
    description: "Serene villa on the shore of Vembanad Lake. Explore the backwaters by canoe and enjoy fresh seafood prepared by local chefs.",
    image: {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/246622174.jpg?k=0be9d5c1063620c3a244ecab69a7af20bf9b75af116879886babcf4c01bc69cc&o=&hp=1",
    },
    price: 7500,
    location: "Kumarakom",
    country: "India",
    category: "rivers"
  },
  {
    title: "Luxury Safari Tents in Ranthambore",
    description: "Safari-style luxury tents near Ranthambore National Park. Guided tiger safaris and nature walks included in your stay.",
    image: {
      url: "https://bushtecsafari.com/wp-content/uploads/2024/07/Bushtec-Safari-Gerogia-Safari-5.webp",
    },
    price: 12000,
    location: "Ranthambore",
    country: "India",
    category: "camping"
  },
  {
    title: "Luxury Resort in Coorg",
    description: "Private villa in a coffee plantation with infinity pool and panoramic views of the misty hills of Coorg.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/57/37/vivanta-coorg-exterior.jpg?w=1400&h=-1&s=1",
    },
    price: 14000,
    location: "Coorg",
    country: "India",
    category: "luxury resorts"
  },
  {
    title: "Colonial Bungalow in Shimla",
    description: "Historic British-era bungalow with original features and antique furnishings. Surrounded by pine forests with views of the Himalayas.",
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/ab/2a/a9/welcomheritage-elysium.jpg?w=1400&h=-1&s=1",
    },
    price: 9500,
    location: "Shimla",
    country: "India",
    category: "heritage"
  },
  {
    title: "Mountain Lodge in Nainital",
    description: "Cozy lodge overlooking Naini Lake with private balcony and spectacular sunrise views. Perfect for families and nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1626867245452-bdc8f7e865cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fE1vdW50YWluJTIwTG9kZ2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 5500,
    location: "Nainital",
    country: "India",
    category: "mountains"
  },
  {
    title: "Forest Cabin in Matheran",
    description: "Secluded cabin in Maharashtra's greenest hill station. No vehicles allowed in Matheran - enjoy the peaceful, unpolluted environment.",
    image: {
      url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Matheran",
    country: "India",
    category: "forests"
  },
  {
    title: "Adventure Base Camp in Rishikesh",
    description: "Riverside glamping with easy access to whitewater rafting, trekking, and bungee jumping. Equipment and guides available.",
    image: {
      url: "https://www.aspencamp.in/img/gallery/safari-tents01.jpg",
    },
    price: 3000,
    location: "Rishikesh",
    country: "India",
    category: "adventure"
  },
  {
    title: "Hill Station Cottage in Munnar",
    description: "Classic hill station bungalow surrounded by tea plantations. Enjoy cool weather, morning mist, and spectacular valley views.",
    image: {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/486176088.jpg?k=46f3eb102a196aea2c053f1b6a47f41a3076388b2d7b46137f682fb6c5819496&o=&hp=1",
    },
    price: 5500,
    location: "Munnar",
    country: "India",
    category: "hill stations"
  }
];

module.exports = { data: sampleListings };