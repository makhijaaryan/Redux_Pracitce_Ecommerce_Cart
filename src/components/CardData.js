const Carddata = [
    {
        id: 1,
        rname: "PlayStation 5",
        imgdata: "https://www.authentkicks.com/wp-content/uploads/2020/09/619BkvKW35L._SL1500_.jpg",
        description: "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
        price: 499,
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 2,
        rname: "iPhone 14",
        imgdata: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896",
        description: "The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.40 centimetres (6.06 inches) diagonally (actual viewable area is less).",
        price: 999,
        rating: "4.5",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 3,
        rname: "Cannon EOS-1D",
        imgdata: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
        price: 1300,
        rating: "4.1",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 4,
        rname: "10000 mAh Powerbank",
        imgdata: "https://m.media-amazon.com/images/I/61hZ-Gu2hEL._AC_SL1500_.jpg",
        description: "Two 10000mAh battery packs not only for portable charging but also around the home. Allowing you charge mobile devices without having to be tethered to a plug socket. Each of them fully charges 2.4 times for iPhone X, 3.6 times for iPhone 8 and 2.2 times for Samsung Galaxy S9.",
        price: 95,
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 5,
        rname: "Lenovo Ideapad",
        imgdata: "https://m.media-amazon.com/images/I/71IVTMa5JQL._AC_SL1500_.jpg",
        description: "This everyday laptop is powered by an Intel Celeron N4020 processor, 4GB DDR4 RAM, and 64 GB M.2 PCIe SSD storage Enjoy videos or browse online on a 14\" HD display panel, framed by narrow bezels.",
        price: 399,
        rating: "4",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 6,
        rname: "Amazon Alexa",
        imgdata: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 50,
        rating: "4.5",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 7,
        rname: "Apple Watch Series 3",
        imgdata: "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg",
        description: "A watch which functions as a Fitness Tracker, Sleep Monitor, GPS, Pedometer, Heart Rate Monitor. Dual-core S3 processor, Optical heart sensor, Size: 38mm x 42mm.",
        price: 79,
        rating: "3.9",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 8,
        rname: "Audio Technica Headphones",
        imgdata: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
        price: 233,
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 9,
        rname: "JBL FLIP 4",
        imgdata: "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        description: "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
        price: 140,
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    }

];

export default Carddata;