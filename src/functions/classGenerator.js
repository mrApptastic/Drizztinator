const classes = [
    {
        Name: "Barbarian",
        HD: 12,
        Requirements: {
            Strength: 9,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0
        },
        Saves: {
            Strength: true,
            Dexterity: false,
            Constitution: true,
            Intelligence: false,
            Wisdom: false,
            Charisma: false
        }
    },
    {
        Name: "Bard",
        HD: 8,
        Requirements: {
            Strength: 0,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0
        },
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: false,
            Intelligence: false,
            Wisdom: true,
            Charisma: true
        }
    }
];

export function generateClass() {
    return classes[Math.floor(Math.random() * classes.length)];
}