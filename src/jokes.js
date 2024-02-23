export const defaultJokes = [
    {
        id: 0,
        joke: 'I used to be a banker, but then lost my interest.',
        rating: 3,
        is_valid: true,
    },
    {
        id: 1,
        joke: "I'm affraid for the calender it's days are numbered.",
        rating: 4,
        is_valid: true,
    },
    {
        id: 2,
        joke: 'I used to be a banker, but then lost my interest.',
        rating: 3,
        is_valid: true,
    },
    {
        id: 3,
        joke: "I'm affraid for the calender it's days are numbered.",
        rating: 4,
        is_valid: false,
    },
];

const getJoke = async () => {
    const resp = await fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' }
    });
    const json = await resp.json();
    return json.joke;
}

export const updateJokes = async (set) => {
    const jokes = []
    for (const j of defaultJokes) {
        const nj = { ...j }
        nj.joke = await getJoke();
        jokes.push(nj)
    }
    set(jokes);
}
