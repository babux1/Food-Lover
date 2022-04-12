User.destroy_all
Favorite.destroy_all
Food.destroy_all

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding'

10.times do
    User.create(
        username: Faker::Twitter.screen_name, 
        password: 'password', 
        email: Faker::Internet.email
     )
end

Food.create(title: "Bibimbap", category: "Korean", description: "Bibimbap is served as a bowl of warm white rice topped with namul or kimchi and gochujang, soy sauce, or doenjang.", image_url: "https://cdn.asiastreetfood.com/uploads/Bibimbap-einfach-korea-rezept1.jpg?strip=all&lossy=1&quality=80&ssl=1")
Food.create(title: "Bibimbap", category: "Korean", description: "Bulgogi, literally fire meat, is a gui made of thin, marinated slices of beef or pork grilled on a barbecue or on a stove-top griddle", image_url: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270594.jpg")
Food.create(title: "Galbi tang", category: "Korean", description: "Galbi-tang or short rib soup is a variety of guk, or Korean soup, made primarily from beef short ribs along with stewing beef, radish, onions, and other ingredients.", image_url: "https://www.koreanbapsang.com/wp-content/uploads/2020/12/DSC5529-2.jpg")


Food.create(title: "Chimicanga", category: "Mexican", description: "deep-fried burrito that is common in Tex-Mex and other Southwestern U.S. cuisine.", image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Chimichangas.jpg")
Food.create(title: "Fajita", category: "Mexican", description: "is any stripped grilled meat with stripped peppers and onions that is usually served on a flour or corn tortilla.", image_url: "http://images.ctfassets.net/lufu0clouua1/1pqgIrTf2skUK60wOGyCqu/601b39c86f8fa7439cb992bf2c80f086/fajitas-hero.jpg")
Food.create(title: "Burrito", category: "Mexican", description: "consisting of a flour tortilla wrapped into a sealed cylindrical shape around various ingredients.", image_url: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/D17CF0E1-E0C1-465F-899A-EA24A362392D/Derivates/dbb1e5eb-fcf1-44e0-9d1b-c573608c1ad4.jpg")

Food.create(title: "Pizza", category: "Italian", description: "round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients ", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pizza_Diavolo.jpg/640px-Pizza_Diavolo.jpg")
Food.create(title: "Lasagne", category: "Italian", description: "type of pasta, possibly one of the oldest types,[2] made of very wide, flat sheets.", image_url: "https://www.tegut.com/fileadmin/tegut_upload/Rezepte/Lasagne-al-Forno-1920x1080.png")
Food.create(title: "Ravioli", category: "Italian", description: "type of pasta, possibly one of the oldest types,[2] made of very wide, flat sheets.", image_url: "Ravioli are a type of pasta comprising a filling enveloped in thin pasta dough")


10.times do
    Favorite.create(
        user: User.all.sample,
        food: Food.all.sample,
        content: 'example'
    )
end

puts "seeding done!"