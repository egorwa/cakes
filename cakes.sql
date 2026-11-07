DROP TABLE IF EXISTS order_items, orders, cart, customers, cakes CASCADE;

CREATE TABLE cakes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    category VARCHAR(50),
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) ON DELETE CASCADE,
    cake_id INT REFERENCES cakes(id) ON DELETE CASCADE,
    quantity INT DEFAULT 1 CHECK (quantity > 0),
    UNIQUE (customer_id, cake_id) -- prevents duplicate cake in cart
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) ON DELETE SET NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    cake_id INT REFERENCES cakes(id),
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10,2) NOT NULL
);


-- Insert all cakes
INSERT INTO cakes (id, name, price, category, image_url, description) VALUES
(1,  'Chocolate Cake❤', 900, 'Birthday', 'images/at30.jpeg', 'nice chocolate cake with black cream💕👌'),
(2,  'Black Forest Cake❤', 950, 'Birthday', 'images/beemer.jpeg', 'for the love of cars💕👌'),
(3,  'Marble Cake❤', 800, 'Birthday', 'images/blacklovers.jpeg', 'with a touch of black and gold💕👌'),
(4,  'Orange Cake❤', 850, 'Birthday', 'images/bluey.jpeg', 'kids favourate bluey💕👌'),
(5,  'Coffe Cake❤', 1000, 'Present', 'images/boss.jpeg', 'Boss present💕👌'),
(6,  'FunFetti Cake❤', 800, 'Birthday', 'images/cocomelon.jpeg', 'baby cocomelon 💕👌'),
(7,  'Blueberry Cake❤', 900, 'Birthday', 'images/cream-heart.jpeg', 'heart of love💕👌'),
(8,  'Peach Cupcakes❤', 300, 'Birthday', 'images/creamy-muffins.jpeg', 'cupcakes for birthday breakfast💕👌'),
(9,  'Vanilla Sponge Cake❤', 800, 'Birthday', 'images/fortnite-benny.jpeg', 'fortnite benny lover💕👌'),
(10, 'Oreo Cake', 950, 'Birthday', 'images/fortnite.jpeg', 'real ninjas💕👌'),
(11, 'Rainball Cake❤', 900, 'Birthday', 'images/goldLove.jpeg', 'cream and gold touch💕👌'),
(12, 'Chocolate & vanilla cupcakes❤', 300, 'Graduation', 'images/graduate.jpeg', 'present for a graduate cupcakes 👌💕'),
(13, 'Red velvet & mint❤', 800, 'Birthday', 'images/kids-football.jpeg', 'football lovers💕👌'),
(14, 'Chocolate Fuge Cake❤ ', 860, 'Kids', 'images/minion.jpeg', 'boys bdae with favourite cartoon💕👌'),
(15, 'Lemon Cake❤', 800, 'Present', 'images/mother''s-day.jpeg', 'giving  grandma cake of her love💕👌'),
(16, 'Peanut Butter Cake❤', 580, 'Birthday', 'images/pinkypee.jpeg', 'nice pink cake💕👌'),
(17, 'Strawberry Cake❤', 580, 'Birthday', 'images/queen.jpeg', ' for queens💕👌'),
(18, 'Creamy Muffins❤', 400, 'Birthday', 'images/sweety.jpeg', 'muffins with cream for birthdays💕👌'),
(19, 'Vanilla Cake❤', 300, 'Present', 'images/valentine.jpeg', 'for lovers day 💕👌'),
(20, 'Chocolate Cake❤', 1000, 'Birthday', 'images/white&black.jpeg', 'vanilla, chocolate 💕👌'),
(21, 'Yummy Cupcakes❤', 300, 'Birthday', 'images/yummy.jpeg', 'nice creamy cupcakes for 23 Birthday💕👌'),
(22, '2 Tier cake❤', 1000, 'Kids', 'images/2tiercoco.jpeg', 'kids birthday💕👌'),
(23, 'Attire', 4000, 'Wedding', 'images/attirewed.jpeg', 'attire style cake💕👌'),
(24, 'With Beeds', 3000, 'Wedding', 'images/beedswed.jpeg', 'decoration with beeds like💕👌'),
(25, 'Culcture', 6000, 'Wedding', 'images/culturalWed2.jpeg', '3 tier cake 💕👌'),
(26, 'Culcture', 2000, 'Wedding', 'images/culturewed.jpeg', 'wed simple cake 💕👌'),
(27, 'Toys', 700, 'Kids', 'images/dumbtrucks.jpeg', 'toy cake 💕👌'),
(28, 'Pinky', 2000, 'Graduation', 'images/grad4.jpeg', 'learing is power 💕👌'),
(29, 'Boss Lady', 1000, 'Graduation', 'images/gradu1.jpeg', 'power 💕👌'),
(30, 'Working Hard', 3000, 'Graduation', 'images/gradu2.jpeg', '2 tier cake 💕👌'),
(31, 'Queens', 1500, 'Graduation', 'images/gradue.jpeg', 'cake for queen 💕👌'),
(32, 'Accountant', 1000, 'Graduation', 'images/gradue3.jpeg', 'happy endings💕👌'),
(33, 'Purple', 1500, 'Graduation', 'images/gradue4.jpeg', 'purple love 💕👌'),
(34, 'Class end', 2000, 'Graduation', 'images/gradue6.jpeg', 'creamy 💕👌'),
(35, 'Grey & Pink', 2000, 'Graduation', 'images/gradue7.jpeg', 'pink grey and white 💕👌'),
(36, 'Raise', 1500, 'Graduation', 'images/graduea.jpeg', 'cake 💕👌'),
(37, 'Baby', 600, 'Kids', 'images/halfyear.jpeg', '6 mnth cake 💕👌'),
(38, 'Heart', 580, 'Present', 'images/heartpink.jpeg', 'heart cake 💕👌'),
(39, 'Cartoons', 750, 'Kids', 'images/meloon.jpeg', 'cocomelon 💕👌'),
(40, 'Micky', 500, 'Kids', 'images/mickymouse.jpeg', 'mouse  💕👌'),
(41, 'Mom', 700, 'Present', 'images/mumpres.jpeg', 'mom cake 💕👌'),
(42, 'Nude', 3000, 'Wedding', 'images/nudewed.jpeg', '2 tier cake 💕👌'),
(43, 'Ptrol', 750, 'Kids', 'images/pawpatrol.jpeg', 'kids cake 💕👌'),
(44, 'Beautiful', 950, 'Present', 'images/peachpre.jpeg', 'peach nice 💕👌'),
(45, 'Unity', 6000, 'Wedding', 'images/peachwed.jpeg', '2 tier cake 💕👌'),
(46, 'Pig', 600, 'Kids', 'images/peppa.jpeg', 'peppa pig  💕👌'),
(47, 'Blue Pickok', 6000, 'Wedding', 'images/picok2wed.jpeg', 'pickok design 💕👌'),
(48, 'Brown Pi', 6000, 'Wedding', 'images/picokwed.jpeg', 'cake for love 💕👌'),
(49, 'Pinky', 850, 'Kids', 'images/pinkybluey.jpeg', 'bluey 💕👌'),
(50, 'Pres', 900, 'Present', 'images/pinkypee.jpeg', 'pinky  💕👌'),
(51, 'Red', 600, 'Present', 'images/redribbon.jpeg', 'nice cake 💕👌'),
(52, 'Roses', 6000, 'Wedding', 'images/redrosswed.jpeg', 'redross cake 💕👌'),
(53, 'Spider', 850, 'Kids', 'images/spiderman.jpeg', 'kids loves spider cake 💕👌'),
(54, 'Toys', 650, 'Kids', 'images/toys.jpeg', ' cake 💕👌'),
(55, 'Traditional', 5500, 'Wedding', 'images/traditionalwed.jpeg', 'wed cake 💕👌'),
(56, 'Train', 700, 'Kids', 'images/train.jpeg', 'kids cake 💕👌'),
(57, 'War', 800, 'Kids', 'images/warstars.jpeg', 'kids cake 💕👌'),
(58, 'White Love', 5500, 'Wedding', 'images/whiteflowerWed.jpeg', 'beautiful cake 💕👌'),
(59, 'Vanilla Cake❤', 4000, 'Wedding', 'images/whitewed.jpeg', 'wed cake 💕👌');

-- Reset the serial sequence so future inserts don't clash
SELECT setval('cakes_id_seq', (SELECT MAX(id) FROM cakes));