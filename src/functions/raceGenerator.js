import * as dice from "./diceHelper.js";

export function generateRace() {
    const roll = dice.roll(100);

    if (roll === 1) {
        return {
            Name: "Dragonborn",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 2,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [
                {
                    Name: "Breath Weapon",
                    Description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest."
                },
                {
                    Name: "Damage Resistance",
                    Description: "You have resistance to the damage type associated with your draconic ancestry."
                }
            ],
            Languages : [
                "Common",
                "Draconic"
            ],
            Names : {
                Male: [
                    "Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"
                ],
                Female: [
                    "Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"
                ],
                Surname: [
                    "Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"
                ]
            }
        };
    } else if (roll >= 2 && roll <= 5) {
        return {
            Name: "Rock Gnome",
            Appearance: {
                Age: 40,
                Height: 38,
                Weight: 45,
                Eyes: [
                    "Brown",
                    "Blue",
                    "Green",
                    "Grey"
                ],
                Hair: [
                    "Black",
                    "Red",
                    "Blonde",
                    "Brown",
                    "Grey"
                ],
                Skin: [
                    "Tan",
                    "Brown",
                    "Fair"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 0,
                Constitution: 1,
                Intelligence: 2,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [
                "Tinker's tools"
            ],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 25,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Gnome Cunning",
                    Description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
                },
                {
                    Name: "Artificer's Lore",
                    Description : "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                },
                {
                    Name: "Tinker",
                    Description : "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time."
                }
            ],
            Languages : [
                "Common",
                "Gnonish"
            ],
            Names : {
                Male: [
                    "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"
                ],
                Female: [
                    "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"
                ],
                Surname: [
                    "Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen", "Aleslosh", "Ashhearth", "Badger", "Cloak", "Doublelock", "Filchbatter", "Fnipper", "Ku", "Nim", "Oneshoe", "Pock", "Sparklegem", "Stumbleduck"
                ]
            }
        };
    } else if (roll === 6) {
        return {
            Name: "Deep Gnome",
            Appearance: {
                Age: 25,
                Height: 42,
                Weight: 100,
                Eyes: [
                    "Brown",
                    "Blue",
                    "Green",
                    "Grey"
                ],
                Hair: [
                    "Black",
                    "Red",
                    "Blonde",
                    "Brown",
                    "Grey"
                ],
                Skin: [
                    "Tan",
                    "Brown",
                    "Fair"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 1,
                Constitution: 0,
                Intelligence: 2,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 25,
            Abilities: [
                {
                    Name: "Superior Darkvision",
                    Description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray. Your darkvision has a radius of 120 feet."
                },
                {
                    Name: "Gnome Cunning",
                    Description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
                },
                {
                    Name: "Stone Camouflage",
                    Description: "You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.y"
                }
            ],
            Languages : [
                "Common",
                "Gnonish",
                "Undercommon"
            ],
            Names : {
                Male: [
                    "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"
                ],
                Female: [
                    "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"
                ],
                Surname: [
                    "Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen", "Aleslosh", "Ashhearth", "Badger", "Cloak", "Doublelock", "Filchbatter", "Fnipper", "Ku", "Nim", "Oneshoe", "Pock", "Sparklegem", "Stumbleduck"
                ]
            }
        };
    } else if (roll >= 7 && roll <= 12) {
        return {
            Name: "Hill Dwarf",
            Appearance: {
                Age: 50,
                Height: 54,
                Weight: 150,
                Eyes: [
                    "Brown",
                    "Blue",
                    "Green",
                    "Grey"
                ],
                Hair: [
                    "Black",
                    "Grey",
                    "Brown",
                    "Red"
                ],
                Skin: [
                    "Deep Brown",
                    "Pale",
                    "Light Brown",
                    "Deep Tan"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 0,
                Constitution: 2,
                Intelligence: 0,
                Wisdom: 1,
                Charisma: 0
            },
            HitPoints: 1,
            Proficiencies: [
                "Smith's tools",
                "Battle Axe",
                "Handaxe",
                "Light Hammer",
                "Warhammer"

            ],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 25,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Dwarven Resilience",
                    Description: "You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section)."
                },
                {
                    Name: "Stonecunning",
                    Description : "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
                },
                {
                    Name: "Dwarven Toughness",
                    Description : "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
                }
            ],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"
                ],
                Female: [
                    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"
                ],
                Surname: [
                    "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"
                ]
            }
        };
    } else if (roll >= 13 && roll <= 17) {
        return {
            Name: "Mountain Dwarf",
            Appearance: {
                Age: 50,
                Height: 54,
                Weight: 150,
                Eyes: [
                    "Brown",
                    "Blue",
                    "Green",
                    "Grey"
                ],
                Hair: [
                    "Black",
                    "Grey",
                    "Brown",
                    "Red"
                ],
                Skin: [
                    "Deep Brown",
                    "Pale",
                    "Light Brown",
                    "Deep Tan"
                ]
            },
            Modifiers : {
                Strength: 2,
                Dexterity: 0,
                Constitution: 2,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [
                "Smith's tools",
                "Battle Axe",
                "Handaxe",
                "Light Hammer",
                "Warhammer",
                "Light Armor",
                "Medium Armor"
            ],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 25,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Dwarven Resilience",
                    Description: "You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section)."
                },
                {
                    Name: "Stonecunning",
                    Description : "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
                }
            ],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"
                ],
                Female: [
                    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"
                ],
                Surname: [
                    "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"
                ]
            }
        };
    } else if (roll >= 18 && roll <= 23) {
        return {
            Name: "Human (Calishite)",
            Appearance: {
                Age: 18,
                Height: 64,
                Weight: 185,
                Eyes: [
                    "Dusky brown"
                ],
                Hair: [
                    "Dusky brown"
                ],
                Skin: [
                    "Dusky brown"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir"
                ],
                Female: [
                    "Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida"
                ],
                Surname: [
                    "Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein"
                ]
            }
        };
    } else if (roll >= 24 && roll <= 48) {
        return {
            Name: "Human (Chondathan)",
            Appearance: {
                Age: 18,
                Height: 68,
                Weight: 190,
                Eyes: [
                    "Green",
                    "Brown",
                    "Blue",
                    "Grey"
                ],
                Hair: [
                    "Fair Brown",
                    "Dark Brown",
                    "Blonde",
                    "Black"
                ],
                Skin: [
                    "Tawny"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"
                ],
                Female: [
                    "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"
                ],
                Surname: [
                    "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"
                ]
            }
        };
    } else if (roll >= 49 && roll <= 52) {
        return {
            Name: "Human (Damaran)",
            Appearance: {
                Age: 18,
                Height: 66,
                Weight: 200,
                Eyes: [
                    "Brown",
                    "Grey",
                    "Blue",
                    "Green"
                ],
                Hair: [
                    "Brown",
                    "Black"
                ],
                Skin: [
                    "Tawny",
                    "Fair"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor"
                ],
                Female: [
                    "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora"
                ],
                Surname: [
                    "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag"
                ]
            }
        };
    } else if (roll >= 53 && roll <= 67) {
        return {
            Name: "Human (Illuskan)",
            Appearance: {
                Age: 18,
                Height: 68,
                Weight: 200,
                Eyes: [
                    "Blue",
                    "Grey"
                ],
                Hair: [
                    "Brown",
                    "Black",
                    "Red",
                    "Light Brown",
                    "Blonde"
                ],
                Skin: [
                    "Fair"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth"
                ],
                Female: [
                    "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra"
                ],
                Surname: [
                    "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver"
                ]
            }
        };
    } else if (roll >= 68 && roll <= 70) {
        return {
            Name: "Human (Mulan)",
            Appearance: {
                Age: 18,
                Height: 68,
                Weight: 185,
                Eyes: [
                    "Hazel",
                    "Brown"
                ],
                Hair: [
                    "Black",
                    "Brown"
                ],
                Skin: [
                    "Amber"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur"
                ],
                Female: [
                    "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis"
                ],
                Surname: [
                    "Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt"
                ]
            }
        };
    } else if (roll >= 71 && roll <= 72) {
        return {
            Name: "Human (Rashemi)",
            Appearance: {
                Age: 18,
                Height: 64,
                Weight: 215,
                Eyes: [
                    "Brown",
                    "Black"
                ],
                Hair: [
                    "Black",
                    "Dark Brown"
                ],
                Skin: [
                    "Dusky"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak"
                ],
                Female: [
                    "Fyevarra", "Hulmarra", "Immith", "Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra"
                ],
                Surname: [
                    "Chergoba", "Dyernina", "Iltazyara", "Murnyethara", "Stayanoga", "Ulmokina"
                ]
            }
        };
    } else if (roll === 73) {
        return {
            Name: "Human (Shou)",
            Appearance: {
                Age: 18,
                Height: 66,
                Weight: 200,
                Eyes: [
                    "Brown",
                    "Black",
                    "Green"
                ],
                Hair: [
                    "Black"
                ],
                Skin: [
                    "Yellowish-bronze"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "An", "Chen", "Chi", "Fai", "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen"
                ],
                Female: [
                    "Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui", "Tai"
                ],
                Surname: [
                    "Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tan", "Wan"
                ]
            }
        };
    } else if (roll >= 74 && roll <= 78) {
        return {
            Name: "Human (Tethyrian)",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Grey",
                    "Brown",
                    "Blue",
                    "Green"
                ],
                Hair: [
                    "Black",
                    "Brown",
                    "Blonde",
                    "Red"
                ],
                Skin: [
                    "Dusky",
                    "Fair"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"
                ],
                Female: [
                    "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"
                ],
                Surname: [
                    "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"
                ]
            }
        };
    } else if (roll >= 79 && roll <= 80) {
        return {
            Name: "Human (Turami)",
            Appearance: {
                Age: 18,
                Height: 68,
                Weight: 215,
                Eyes: [
                    "Dark"
                ],
                Hair: [
                    "Curly black"
                ],
                Skin: [
                    "Dark Mahogony"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [],
            Languages : [
                "Common",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero"
                ],
                Female: [
                    "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"
                ],
                Surname: [
                    "Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"
                ]
            }
        };
    } else if (roll === 81) {
        return {
            Name: "Eladrin Elf",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 0,
                Intelligence: 1,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [
                "Longsword",
                "Shortsword",
                "Shortbow",
                "Longbow"
            ],            
            Skills: {
                Count: 1,
                List: [
                    "Perception"
                ]
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Fey Ancestry",
                    Description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
                },
                {
                    Name: "Trance",
                    Description : "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                    Name: "Fey Step",
                    Description : "You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest."
                }
            ],
            Languages : [
                "Common",
                "Elvish"
            ],
            Names : {
                Male: [
                    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"
                ],
                Female: [
                    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"
                ],
                Surname: [
                    "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient"
                ]
            }
        };
    } else if (roll >= 82 && roll <= 83) {
        return {
            Name: "High Elf",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 0,
                Intelligence: 1,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [

                "Longsword",
                "Shortsword",
                "Shortbow",
                "Longbow"
            ],            
            Skills: {
                Count: 1,
                List: [
                    "Perception"
                ]
            },
            Spells : {
                Cantrips: {
                    Count: 1,
                    List: [
                        "Acid Splash",
                        "Chill Touch",
                        "Dancing Lights",
                        "Fire Bolt",
                        "Light",
                        "Mage Hand",
                        "Mending",
                        "Message",
                        "Minor Illusion",
                        "Poison Spray",
                        "Prestidigitation",
                        "Ray of Frost",
                        "Shocking Grasp",
                        "True Strike"
                    ]
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Fey Ancestry",
                    Description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
                },
                {
                    Name: "Trance",
                    Description : "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                    Name: "Cantrip",
                    Description : "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
                }
            ],
            Languages : [
                "Common",
                "Elvish",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"
                ],
                Female: [
                    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"
                ],
                Surname: [
                    "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient"
                ]
            }
        };
    } else if (roll >= 84 && roll <= 87) {
        return {
            Name: "Wood Elf",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 1,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [
                "Longsword",
                "Shortsword",
                "Shortbow",
                "Longbow"
            ],
            Skills: {
                Count: 1,
                List: [
                    "Perception"
                ]
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 35,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Fey Ancestry",
                    Description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
                },
                {
                    Name: "Trance",
                    Description : "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                    Name: "Mask of the Wild",
                    Description : "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                }
            ],
            Languages : [
                "Common",
                "Elvish"
            ],
            Names : {
                Male: [
                    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"
                ],
                Female: [
                    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"
                ],
                Surname: [
                    "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient"
                ]
            }
        };
    } else if (roll >= 88 && roll <= 92) {
        return {
            Name: "Half-Elf",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 2
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 2,
                List: [
                    "Acrobatics",
                    "Animal Handling",
                    "Arcana",
                    "Athletics",
                    "Deception",
                    "History",
                    "Insight",
                    "Intimidation",
                    "Investigation",
                    "Medicine",
                    "Nature",
                    "Perception",
                    "Performance",
                    "Persuasion",
                    "Religion",
                    "Sleight of Hand",
                    "Stealth",
                    "Survival"
                ]
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Fey Ancestry",
                    Description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
                }
            ],
            Languages : [
                "Common",
                "Elvish",
                "Dwarvish"
            ],
            Names : {
                Male: [
                    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"
                ],
                Female: [
                    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"
                ],
                Surname: [
                    "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"
                ]
            }
        };
    } else if (roll >= 93 && roll <= 95) {
        return {
            Name: "Lightfoot Halfling",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 1
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 25,
            Abilities: [
                {
                    Name: "Lucky",
                    Description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
                },
                {
                    Name: "Brave",
                    Description: "You have advantage on saving throws against being frightened."
                },
                {
                    Name: "Halfling Nimbleness",
                    Description: "You can move through the space of any creature that is of a size larger than yours."
                },
                {
                    Name: "Naturally Stealthy",
                    Description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
                }
            ],
            Languages : [
                "Common",
                "Halfling"
            ],
            Names : {
                Male: [
                    "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"
                ],
                Female: [
                    "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"
                ],
                Surname: [
                    "Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"
                ]
            }
        };
    } else if (roll >= 96 && roll <= 97) {
        return {
            Name: "Stout  Halfling",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 1,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 25,
            Abilities: [
                {
                    Name: "Lucky",
                    Description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
                },
                {
                    Name: "Brave",
                    Description: "You have advantage on saving throws against being frightened."
                },
                {
                    Name: "Halfling Nimbleness",
                    Description: "You can move through the space of any creature that is of a size larger than yours."
                },
                {
                    Name: "Stout Resilience",
                    Description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
                }
            ],
            Languages : [
                "Common",
                "Halfling"
            ],
            Names : {
                Male: [
                    "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"
                ],
                Female: [
                    "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"
                ],
                Surname: [
                    "Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"
                ]
            }
        };
    } else if (roll >= 98 && roll <= 99) {
        return {
            Name: "Half-Orc",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 2,
                Dexterity: 0,
                Constitution: 1,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 1,
                List: [
                    "Intimidation"
                ]
            },
            Spells : {
                Cantrips: {
                    Count: 0,
                    List: []
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [
                {
                    Name: "Relentless Endurance",
                    Description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
                },
                {
                    Name: "Savage Attacks",
                    Description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
                }
            ],
            Languages : [
                "Common",
                "Orc"
            ],
            Names : {
                Male: [
                    "Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"
                ],
                Female: [
                   "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"
                ],
                Surname: [
                    "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"
                ]
            }
        };
    } else if (roll === 100) {
        return {
            Name: "Tiefling",
            Appearance: {
                Age: 15,
                Height: 76,
                Weight: 250,
                Eyes: [
                    "Black",
                    "Grey",
                    "Red"
                ],
                Hair: [
                    "None"
                ],
                Skin: [
                    "Black",
                    "Blue",
                    "Brass",
                    "Bronze",
                    "Copper",
                    "Gold",
                    "Green",
                    "Red",
                    "Silver",
                    "White"
                ]
            },
            Modifiers : {
                Strength: 0,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 1,
                Wisdom: 0,
                Charisma: 2
            },
            HitPoints: 0,
            Proficiencies: [],
            Skills: {
                Count: 0,
                List: []
            },
            Spells : {
                Cantrips: {
                    Count: 1,
                    List: [
                        "Thaumaturgy"
                    ]
                },
                Lvl1: {
                    Count: 0,
                    List: []
                },
            },
            Speed: 30,
            Abilities: [
                {
                    Name: "Darkvision",
                    Description: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                },
                {
                    Name: "Hellish Resistance",
                    Description: "You have resistance to fire damage."
                },
                {
                    Name: "Infernal Legacy",
                    Description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
                }
            ],
            Languages : [
                "Common",
                "Infernal"
            ],
            Names : {
                Male: [
                    "Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai"
                ],
                Female: [
                    "Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta"
                ],
                Surname: [
                    "Art", "Carrion", "Chant", "Creed", "Despair", "Excellence", "Fear", "Glory", "Hope", "Ideal", "Music", "Nowhere", "Open", "Poetry", "Quest", "Random", "Reverence", "Sorrow", "Temerity", "Torment", "Weary"
                ]
            }
        };
    }
}