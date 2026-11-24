// Basic factual leads from https://valpodining.com/valparaiso-free-local-restaurant-directory/ ; categories are editorial, details pending verification.
const restaurants = `El Salto Restaurant|462-0100|Mexican,Seafood
McGowan & Sons|299-2336|Seafood,American
Radius|299-2551|Burgers,American,Pub & Bar
Martinis in Valpo|464-0801|American,Italian,Pub & Bar
Don Quijote|462-7976|Spanish & Tapas,Fine Dining
Maple + Bacon|242-8738|Breakfast & Brunch,American
Veleros Restaurant|615-3915|Mexican,Seafood
Alpen Haus|510-1346|German,Pub & Bar
Helen’s Café / The Breakfast Club|242-8521|Breakfast & Brunch
Benelli’s Pizza|462-2000|Pizza
Bao’s Pastry|299-8693|Bakery & Coffee,Desserts
FLUID Coffee Roasters|510-1000|Bakery & Coffee
Jimmy’s Café|462-9167|Breakfast & Brunch
Mi Querido Pueblito|242-8556|Mexican
King Gyros|464-2010|Greek & Mediterranean,Sandwiches & Subs
Tommy B’s Clubhouse|299-8936|Pub & Bar
China House|462-5788|Chinese & Asian
Viking Chili Bowl|462-0800|Breakfast & Brunch,American
Suzie’s Café & Catering|462-5500|Breakfast & Brunch
Blackbird Café|548-2811|Bakery & Coffee,Breakfast & Brunch,Sandwiches & Subs
Uptown Café|299-2742|Bakery & Coffee,Breakfast & Brunch
Prime Smoked Meats|242-8761|BBQ,American
Picante Mexican Cuisine|242-8419|Mexican
Nextdoor at Birdie’s|312-5512|American,Pub & Bar
Amici Grill & Pizzeria|286-6293|Pizza
Valpo Velvet|464-4141|Desserts,American
Super Submarine|595-7827|Sandwiches & Subs,American
Albano’s Pasta Shop|242-9160|Italian
Beggars Pizza|299-2224|Pizza
Geitonia Greek Grill|286-7183|Greek & Mediterranean
Lenny’s Coal-Fired Pizza|312-7882|Pizza
Northside Tap|465-0885|Pub & Bar,American
Semento’s|548-9046|Italian,Pub & Bar
Furin Japanese Restaurant & Bar|286-6648|Japanese & Sushi,Seafood
Main + Lincoln|510-5548|American,Fine Dining
Blue Point Seafood|286-7166|Seafood,Fine Dining,Steakhouse
Tomato Bar|462-7499|Pizza,Italian
Zao Island|462-1194|American,Family Dining
Blockhead Beerworks|707-5749|Pub & Bar
Franklin House|707-5468|Pub & Bar
Kosmos|548-8400|Breakfast & Brunch,Burgers
Phil-B’s Café|548-3100|Breakfast & Brunch
Aurelio’s Pizza|462-9700|Pizza
Uncle Menny’s Original Greek’s Pizzeria|464-7102|Pizza
Peddlers Pizza Pub|477-4992|Pizza,Pub & Bar
Waiting Room|286-6044|Pub & Bar,American
Café Farina|242-8798|Italian,Bakery & Coffee
Meditrina Market Café|707-5271|Greek & Mediterranean
Parea Restaurant|510-5428|Greek & Mediterranean,Fine Dining,Steakhouse
Pesto’s Italian Eatery|462-0993|Italian
Lincoln Flats|510-5046|American,Pub & Bar
Figs and Fables|510-9000|Fine Dining,Seafood
Le Peep|242-8968|Breakfast & Brunch
Union Hall—Journeyman|510-1300|American,Pub & Bar,Burgers
Birdie’s Diner|312-5512|Breakfast & Brunch,Burgers
Burgerhaus|286-3296|Burgers,American
Industrial Revolution Eatery & Grille|465-1801|American,Burgers
Stacks Bar & Grill|462-0553|American,Pub & Bar,Burgers
El Amigo|531-5606|Mexican
La Cabana|510-5587|Mexican
Kelsey’s Steak & Seafood|465-4022|Steakhouse,Seafood,Fine Dining`.split('\n').map(line=>{const [name,phone,categories]=line.split('|');return {name,phone:'219-'+phone,categories:categories.split(',')}}).sort((a,b)=>a.name.localeCompare(b.name));
