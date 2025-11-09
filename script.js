const who = ['A cat', 'A dog', 'A bird', 'A fish', 'Your neighbor', 
    'A robot', 'An alien', 'Your mom', 'Your dad', 'Your best friend'];
const howOften = ['often', 'sometimes', 'rarely', 'always', 'never', 'hardly ever'];
const what = ['drinks coffee', 'plays guitar', 'writes code', 'paints pictures',
    'dances', 'sings', 'jumps rope', 'reads books', 'cooks meals', 'travels the world'];
const when = ['in the morning', 'at night', 'on weekends', 'during holidays', 
    'before bed', 'after work', 'on special occasions'];

const randomElement = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

const generateSentence = () => {
    const subject = randomElement(who);
    const frequency = randomElement(howOften);
    const action = randomElement(what);
    const time = randomElement(when);
    return `${subject} ${frequency} ${action} ${time}.`;
};


for (let i = 0; i < 13; i++) {
console.log(generateSentence());
}
