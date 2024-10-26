const eventsData = [
  {
    id: 1,
    name: "Music Festival",
    date: "2024-10-30",
    location: "Mumbai, Jio World Convention Centre",
    description: "Experience an incredible music festival featuring top artists from India and around the world, held in the heart of Mumbai at the state-of-the-art Jio World Convention Centre.",
    image: "https://cdn.pixabay.com/photo/2021/01/01/12/44/concert-5878452_1280.jpg"
  },
  {
    id: 2,
    name: "Art Exhibition",
    date: "2024-11-02",
    location: "Delhi, National Gallery of Modern Art",
    description: "Explore a curated collection of modern art at the prestigious National Gallery of Modern Art in Delhi, showcasing the works of renowned artists and emerging talents.",
    image: "https://cdn.pixabay.com/photo/2016/02/03/13/35/museum-1177081_1280.jpg"
  },
  {
    id: 3,
    name: "Tech Conference",
    date: "2024-11-15",
    location: "Bangalore, NASSCOM Centre of Excellence",
    description: "Join an annual gathering of tech enthusiasts and professionals at the NASSCOM Centre of Excellence in Bangalore, where innovation meets collaboration.",
    image: "https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.jpg?s=612x612&w=0&k=20&c=R6-SufHacJ6bCnviq37kik2Jl6RMdECybcUpEoRuMLs="
  },
  {
    id: 4,
    name: "Food & Wine Festival",
    date: "2024-11-20",
    location: "Delhi, Dilli Haat",
    description: "Savor the flavors of India at the Food & Wine Festival in Dilli Haat, featuring gourmet food and fine wines from across the country, along with live cooking demonstrations.",
    image: "https://media.istockphoto.com/id/922562780/photo/people-eating-pulpo-a-la-gallega-with-potatoes-galician-octopus-dishes-famous-dishes-from.jpg?s=612x612&w=0&k=20&c=AsOexwwkNovjib8ps9kQX5xu8BlU7hc1jHRUYwUE6R0="
  },
  {
    id: 5,
    name: "Film Premiere",
    date: "2024-12-01",
    location: "Mumbai, PVR Cinemas",
    description: "Be part of the exclusive premiere of a highly anticipated Bollywood movie at PVR Cinemas, Mumbai, and enjoy a star-studded red carpet event.",
    image: "https://media.istockphoto.com/id/1412207019/photo/red-carpet-and-podium-with-confetti.jpg?s=612x612&w=0&k=20&c=Ai0Z3oyEjTlWrVu_3Dk9OsUTRQd95E7GQYzIMhRlgog="
  },
  {
    id: 6,
    name: "Charity Run",
    date: "2024-12-10",
    location: "Bangalore, Cubbon Park",
    description: "Join us for a 10K charity run through the lush greenery of Cubbon Park, Bangalore, to support local causes and promote health and fitness in the community.",
    image: "https://media.istockphoto.com/id/1036386224/photo/adorable-little-girl-attends-charity-race-to-raise-funds-for-breast-cancer-research.jpg?s=612x612&w=0&k=20&c=tmhAjD4AzTowP66RAV9wbiyGIV7Uv5vu_61L_o4k_GI="
  },
  {
    id: 7,
    name: "Book Fair",
    date: "2025-01-15",
    location: "Kolkata, Kolkata Book Fair Grounds",
    description: "Dive into the world of literature at the Kolkata Book Fair, held at the iconic fairgrounds, featuring author signings, book launches, and cultural performances.",
    image: "https://media.istockphoto.com/id/864805140/photo/people-choose-books-at-the-indoor-book-market.jpg?s=612x612&w=0&k=20&c=6qWiCIBC7qb7nE0CEIK-PuY2xT7M_Z4uk48pzIDLZfY="
  },
  {
    id: 8,
    name: "Winter Wonderland",
    date: "2024-12-24",
    location: "Shimla, Mall Road",
    description: "Celebrate the holiday season in Shimla's Winter Wonderland, featuring snow activities, festive decorations, and local crafts along the scenic Mall Road.",
    image: "https://media.istockphoto.com/id/1318300697/photo/latest-views-of-snowfall-in-shimla.jpg?s=1024x1024&w=is&k=20&c=tn3kzIWg2OPcRkDN1LE45ysIcli0vCKj20D2ZjKqQng="
  },
  {
    id: 9,
    name: "Jazz Night",
    date: "2024-11-30",
    location: "Mumbai, The Jazz Cafe",
    description: "Enjoy an evening of live jazz performances at The Jazz Cafe in Mumbai, where talented musicians create a mesmerizing atmosphere filled with soulful melodies.",
    image: "https://media.istockphoto.com/id/1469309096/photo/jazz-night.jpg?s=612x612&w=0&k=20&c=KOmpQOlZv2hS6I8Eu3Rsgbh7PE9Jz9t1P7YEiB9UU6Y="
  },
  {
    id: 10,
    name: "Photography Workshop",
    date: "2025-02-05",
    location: "Delhi, India Gate",
    description: "Join a photography workshop at the iconic India Gate in Delhi, where expert photographers will guide you in capturing stunning images of this historic monument.",
    image: "https://media.istockphoto.com/id/1224226446/photo/recording-educational-video-tutorial-for-vlog.jpg?s=612x612&w=0&k=20&c=3pE1WxG72LzVTGQLW7CXNM_TiUL0flRvjCS1UOkjFm0="
  },
  {
    id: 11,
    name: "Startup Pitch",
    date: "2025-01-22",
    location: "Gurgaon, Innov8 Workspace",
    description: "Pitch your innovative ideas at the Startup Pitch event in Innov8 Workspace, Gurgaon, where entrepreneurs meet investors to shape the future of business.",
    image: "https://media.istockphoto.com/id/1367819964/photo/people-waiting.jpg?s=612x612&w=0&k=20&c=GB-FNVf9cz8zWW95V4kxMBxUxBxTY2iwE9LIhvStX9k="
  },
  {
    id: 12,
    name: "Comic Convention",
    date: "2025-03-10",
    location: "Hyderabad, HICC",
    description: "Join fellow comic and pop culture enthusiasts at the Comic Convention in Hyderabad International Convention Centre (HICC), featuring cosplay, panels, and exclusive merchandise.",
    image: "https://media.istockphoto.com/id/857511468/photo/merchandise-stalls-at-sci-fi-scarborough.jpg?s=612x612&w=0&k=20&c=_z4R_y0cBFDxVZMR6CXrUAwtLi4D32sJQ16ExtNU03Q="
  },
  {
    id: 13,
    name: "Yoga Retreat",
    date: "2025-04-12",
    location: "Rishikesh, Ganga Kinare",
    description: "Experience tranquility at a yoga retreat in Rishikesh, along the banks of the Ganges, where expert instructors guide you through meditation and yoga practices.",
    image: "https://media.istockphoto.com/id/1028900652/photo/man-meditating-yoga-at-sunset-mountains-travel-lifestyle-relaxation-emotional-concept.jpg?s=612x612&w=0&k=20&c=96TlYdSI8POnOrcqH10GlPgOeWFjEIoY-7G_yMV4Eco="
  },
  {
    id: 14,
    name: "Science Expo",
    date: "2025-02-20",
    location: "Pune, Balewadi Sports Complex",
    description: "Discover the latest innovations in science at the Science Expo held at Balewadi Sports Complex in Pune, featuring interactive exhibits and engaging workshops.",
    image: "https://media.istockphoto.com/id/973292338/photo/two-kids-looking-at-a-science-exhibit-back-view.jpg?s=612x612&w=0&k=20&c=ZWTu_JS-AUdJQV4sWi_IS8PjLKg6JiNFbvisRN0_Q_k="
  },
  {
    id: 15,
    name: "Fashion Show",
    date: "2025-03-25",
    location: "Mumbai, JW Marriott",
    description: "Witness a dazzling display of the latest fashion trends at the JW Marriott in Mumbai, featuring top designers and stunning runway presentations.",
    image: "https://media.istockphoto.com/id/1401689014/photo/what-to-wear-in-metaverse.jpg?s=612x612&w=0&k=20&c=NyOZii59R26cscNEfPPb7XttpmkHxVTzB1H-NO6o3RI="
  },
  {
    id: 16,
    name: "Cultural Festival",
    date: "2025-04-30",
    location: "Varanasi, Assi Ghat",
    description: "Celebrate diverse cultures at the Cultural Festival along the scenic Assi Ghat in Varanasi, featuring traditional performances, food stalls, and art displays.",
    image: "https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.jpg?s=612x612&w=0&k=20&c=5_yqVtsM5O6Vc9dhenmWU5eB3E5j0DDsiJhjhwV7hN4="
  },
  {
    id: 17,
    name: "Golf Tournament",
    date: "2025-05-10",
    location: "Chennai, KGA Golf Course",
    description: "Join top players at the exciting Golf Tournament held at KGA Golf Course in Chennai, where enthusiasts can enjoy a day of competition and camaraderie.",
    image: "https://media.istockphoto.com/id/1400734388/photo/closeup-old-golf-bags-on-green.jpg?s=612x612&w=0&k=20&c=-cG23sAADX0zarebtuyKNMxK9KaTK9NiwqPTcSEuXBQ="
  },
  {
    id: 18,
    name: "Robotics Competition",
    date: "2025-05-18",
    location: "Noida, Noida Expo Mart",
    description: "Showcase your skills at the Robotics Competition in Noida, held at Noida Expo Mart, featuring innovative designs and thrilling challenges.",
    image: "https://media.istockphoto.com/id/1404749040/photo/human-vs-robot.jpg?s=612x612&w=0&k=20&c=IjlGSvSqq8-G-Mzc6CFxwIFzjAk6coClu7SRZQ2XgeU="
  },
];

export default eventsData;
