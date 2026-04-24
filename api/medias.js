const medias = [
    {
        id: 1,
        type: "movie",
        title: "Donnie Darko"
    },
    {
        id: 2,
        type: "serie",
        title: "Breaking Bad"
    },
    {
        id: 3,
        type: "movie",
        title: "Black Swan"
    },
    {
        id:4,
        type: "serie",
        title: "Game of Thrones"
    }
]

module.exports = (req, res) => {
    if (req.method === "GET"){
        return res.status(200).json({medias});

    }
}