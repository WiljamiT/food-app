Local env w Docker

docker-composessa 1 service bäkkärille jossa MongoDB ja 1 service frontille jossa Next.js ja middleware.
Kansiossa "code" on docker-compose jossa servicet ympäristölle ja jossa tallennetaan data joka tarvitaan kontin luomiseen.

Bäkkäri kontti

MongoDB instanssi. Official image ilman että tarvitsee luoda kustomoitua Dockerfileä.

Seeding the MongoDB

DB aloittaa esitäytetyllä tietokannalla.
Kopioidaan seeding skrtipti "seed-mongodb.js" kontin "docker-entrypoint-initdb.d/" kansioon käynnistyessä.
MongoDB image suorittaa tässä kansiossa olevat skriptit envissä määriteltyä DB:tä vastaan,
jos konttien "X" hakemistossa ei ole filuja käynnistyksen yhteydessä.
