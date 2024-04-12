print("Seeding the collection 'locations' in the 'foodlist' db");

db.locations.insert([
    {
        address: "Yliopistonkatu 23",
        zipcode: "40100",
        borough: "Jyväskylä",
        cuisine: "Ravintola",
        grade: "A",
        name: "Ravintola Pöllöwaari",
        on_wishlist: [],
        location_id: "56018",
    },
    {
        address: "Kauppakatu 24",
        zipcode: "40100",
        borough: "Jyväskylä",
        cuisine: "Sushi",
        grade: "A",
        name: "Itsudemo Jyväskylä",
        on_wishlist: [],
        location_id: "62432",
    },
    {
        address: "Testi 123",
        zipcode: "12345",
        borough: "Testi",
        cuisine: "Testi",
        grade: "A",
        name: "Testi",
        on_wishlist: [],
        location_id: "12340",
    },
]);

print("Completed seeding MongoDB!");