const classes = [
    {
        Name: "Barbarian",
        HD: 12,
        Saves: {
            Strength: true,
            Dexterity: false,
            Constitution: true,
            Intelligence: false,
            Wisdom: false,
            Charisma: false
        },
        Proficiencies: [
            "Light Armor",
            "Medium Armor",
            "Shields",
            "Simple Weapons",
            "Martial Weapons"
        ],
        Skills: {
            Count: 2,
            List: [
                "Animal Handling",
                "Athletics",
                "Intimidation",
                "Nature",
                "Perception",
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
        Abilities: [
            {
                Name: "Rage",
                Description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
            },
            {
                Name: "Unarmored Defense",
                Description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
            }
        ],
        Equipment: [
            "Greataxe",
            "2 Handaxes",
            "Explorer's pack",
            "4 Javelins"
        ],
        Money: {
            Dice: 2,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Bard",
        HD: 8,
        Saves: {
            Strength: false,
            Dexterity: true,
            Constitution: false,
            Intelligence: false,
            Wisdom: false,
            Charisma: true
        },
        Proficiencies: [
            "Light Armor",
            "Simple Weapons",
            "Hand Crossbows",
            "Longswords",
            "Rapiers",
            "Shortswords",
            "Lute",
            "Flute",
            "Drum"
        ],
        Skills: {
            Count: 3,
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
                Count: 2,
                List: [
                    "Blade Ward",
                    "Dancing Lights",
                    "Friends",
                    "Light",
                    "Mage Hand",
                    "Mending",
                    "Message",
                    "Minor Illusion",
                    "Prestidigitation",
                    "Thunderclap",
                    "True Strike",
                    "Vicious Mockery"
                ]
            },
            Lvl1: {
                Count: 4,
                List: [
                    "Animal Friendship",
                    "Bane",
                    "Charm Person",
                    "Color Spray",
                    "Command",
                    "Comprehend Languages",
                    "Cure Wounds",
                    "Detect Magic",
                    "Disguise Self",
                    "Dissonant Whispers",
                    "Distort Value",
                    "Earth Tremor",
                    "Faerie Fire",
                    "Feather Fall",
                    "Healing Word",
                    "Heroism",
                    "Identify",
                    "Illusory Script",
                    "Longstrider",
                    "Silent Image",
                    "Silvery Barbs",
                    "Sleep",
                    "Speak with Animals",
                    "Tasha's Hideous Laughter",
                    "Thunderwave",
                    "Unseen Servant"
                ]
            },
        },
        Abilities: [
            {
                Name: "Bardic Inspiration",
                Description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
            }
        ],
        Equipment: [
            "Rapier",
            "Leather Armor",
            "Dagger",
            "Entertainer's pack",
            "Lute"
        ],
        Money: {
            Dice: 5,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Cleric",
        HD: 8,
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: false,
            Intelligence: false,
            Wisdom: true,
            Charisma: true
        },
        Proficiencies: [
            "Light Armor",
            "Medium Armor",
            "Shields",
            "Simple Weapons",
            "Heavy Armor"
        ],
        Skills: {
            Count: 2,
            List: [
                "History",
                "Insight",
                "Medicine",
                "Persuasion",
                "Religion"
            ]
        },
        Spells : {
            Cantrips: {
                Count: 3,
                List: [
                    "Guidance",
                    "Light",
                    "Mending",
                    "Resistance",
                    "Sacred Flame",
                    "Spare the Dying",
                    "Thaumaturgy",
                    "Toll the Dead",
                    "Word of Radiance"
                ]
            },
            Lvl1: {
                Count: 10,
                List: [
                    "Bane",
                    "Bless",
                    "Ceremony",
                    "Command",
                    "Create or Destroy Water",
                    "Cure Wounds",
                    "Detect Evil and Good",
                    "Detect Magic",
                    "Detect Poison and Disease",
                    "Guiding Bolt",
                    "Healing Word",
                    "Inflict Wounds",
                    "Protection from Evil and Good",
                    "Purify Food and Drink",
                    "Sanctuary",
                    "Shield of Faith"
                ]
            },
        },
        Abilities: [
            {
                Name: "Disciple of Life",
                Description: "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
            }
        ],
        Equipment: [
            "Mace",
            "Scale Mail",
            "Light Crossbow",
            "20 Bolts",
            "Priest's pack",
            "Shield",
            "Holy Symbol"
        ],
        Money: {
            Dice: 5,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Druid",
        HD: 8,
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: false,
            Intelligence: true,
            Wisdom: true,
            Charisma: false
        },
        Proficiencies: [
            "Light Armor",
            "Medium Armor",
            "Shields",
            "Clubs",
            "Daggers",
            "Darts",
            "Javelins",
            "Maces",
            "Quarterstaffs",
            "Scimitars",
            "Sickles",
            "Slings",
            "Spears",
            "Herbalism Kit"
        ],
        Skills: {
            Count: 2,
            List: [
                "Animal Handling",
                "Arcana",
                "Insight",
                "Medicine",
                "Nature",
                "Perception",
                "Religion",
                "Survival"
            ]
        },
        Spells : {
            Cantrips: {
                Count: 2,
                List: [
                    "Control Flames",
                    "Create Bonfire",
                    "Druidcraft",
                    "Frostbite",
                    "Guidance",
                    "Gust",
                    "Infestation",
                    "Magic Stone",
                    "Mending",
                    "Mold Earth",
                    "Poison Spray",
                    "Primal Savagery",
                    "Produce Flame",
                    "Resistance",
                    "Shape Water",
                    "Shillelagh",
                    "Thorn Whip",
                    "Thunderclap"
                ]
            },
            Lvl1: {
                Count: 10,
                List: [
                    "Absorb Elements",
                    "Animal Friendship",
                    "Beast Bond",
                    "Charm Person",
                    "Create or Destroy Water",
                    "Cure Wounds",
                    "Detect Magic",
                    "Detect Poison and Disease",
                    "Earth Tremor",
                    "Entangle",
                    "Faerie Fire",
                    "Fog Cloud",
                    "Goodberry",
                    "Healing Word",
                    "Ice Knife",
                    "Jump",
                    "Longstrider",
                    "Protection from Evil and Good",
                    "Purify Food and Drink",
                    "Snare",
                    "Speak with Animals",
                    "Thunderwave"
                ]
            },
        },
        Abilities: [
            {
                Name: "Druidic",
                Description: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
            }
        ],
        Equipment: [
            "Scimitar",
            "Shield",
            "Leather Armor",
            "Explorer's pack",
            "Druidic Focus"
        ],
        Money: {
            Dice: 2,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Fighter",
        HD: 10,
        Saves: {
            Strength: true,
            Dexterity: false,
            Constitution: true,
            Intelligence: false,
            Wisdom: false,
            Charisma: false
        },
        Proficiencies: [
            "Light Armor",
            "Medium Armor",
            "Heavy Armor",
            "Shields",
            "Simple Weapons",
            "Martial Weapons"
        ],
        Skills: {
            Count: 2,
            List: [
                "Acrobatics",
                "Animal Handling",
                "Athletics",
                "History",
                "Insight",
                "Intimidation",
                "Perception",
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
        Abilities: [
            {
                Name: "Protection",
                Description: "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
            }
        ],
        Equipment: [
            "Longsword",
            "Shield",
            "Chain Mail",
            "Light Crossbow",
            "20 Bolts",
            "Explorer's pack"
        ],
        Money: {
            Dice: 5,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Monk",
        HD: 8,
        Saves: {
            Strength: true,
            Dexterity: true,
            Constitution: false,
            Intelligence: false,
            Wisdom: false,
            Charisma: false
        },
        Proficiencies: [
            "Simple Weapons",
            "Shortswords",
            "Flute"
        ],
        Skills: {
            Count: 2,
            List: [
                "Acrobatics",
                "Athletics",
                "History",
                "Insight",
                "Religion",
                "Stealth"
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
        Abilities: [
            {
                Name: "Unarmored Defense",
                Description: "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
            },
            {
                Name: "Martial Arts",
                Description: "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn."
            }
        ],
        Equipment: [
            "Shortsword",
            "10 Darts",
            "Explorer's pack"
        ],
        Money: {
            Dice: 5,
            Type: 4,
            Factor: 1
        }
    },
    {
        Name: "Paladin",
        HD: 10,
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: false,
            Intelligence: false,
            Wisdom: true,
            Charisma: true
        },
        Proficiencies: [
            "Light Armor",
            "Medium Armor",
            "Heavy Armor",
            "Shields",
            "Simple Weapons",
            "Martial Weapons"
        ],
        Skills: {
            Count: 2,
            List: [
                "Athletics",
                "Insight",
                "Intimidation",
                "Medicine",
                "Persuasion",
                "Religion"
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
        Abilities: [
            {
                Name: "Divine Sense",
                Description: "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
            },
            {
                Name: "Lay on Hands",
                Description: "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs."
            }
        ],
        Equipment: [
            "Longsword",
            "Shield",
            "Chain Mail",
            "Dagger",
            "Explorer's pack",
            "Holy Symbol"
        ],
        Money: {
            Dice: 5,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Ranger",
        HD: 10,
        Saves: {
            Strength: true,
            Dexterity: true,
            Constitution: false,
            Intelligence: false,
            Wisdom: false,
            Charisma: false
        },
        Proficiencies: [
            "Light Armor",
            "Medium Armor",
            "Shields",
            "Simple Weapons",
            "Martial Weapons"
        ],
        Skills: {
            Count: 3,
            List: [
                "Animal Handling",
                "Athletics",
                "Insight",
                "Investigation",
                "Nature",
                "Perception",
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
        Abilities: [
            {
                Name: "Favored Enemy",
                Description: "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
            },
            {
                Name: "Natural Explorer",
                Description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. Even when you are engaged in another activity while traveling (such as foraging, navigating, or  tracking), you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you forage, you find twice as much food as you normally would. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. You choose additional favored terrain types at 6th and 10th level."
            }
        ],
        Equipment: [
            "2 Shortswords",
            "Scale Mail",
            "Longbow",
            "20 Arrows",
            "Explorer's pack",
        ],
        Money: {
            Dice: 5,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Rogue",
        HD: 8,
        Saves: {
            Strength: false,
            Dexterity: true,
            Constitution: false,
            Intelligence: true,
            Wisdom: false,
            Charisma: false
        },
        Proficiencies: [
            "Light Armor",
            "Simple Weapons",
            "Hand Crossbows",
            "Longswords",
            "Rapiers",
            "Shortswords",
            "Thieves' Tools"
        ],
        Skills: {
            Count: 4,
            List: [
                "Acrobatics",
                "Athletics",
                "Deception",
                "Insight",
                "Intimidation",
                "Investigation",
                "Perception",
                "Performance",
                "Persuasion",
                "Sleight of Hand",
                "Stealth"
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
        Abilities: [
            {
                Name: "Expertise",
                Description: "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit."
            },
            {
                Name: "Sneak Attack",
                Description: "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
            },
            {
                Name: "Thieves' Cant",
                Description: "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
            }
        ],
        Equipment: [
            "Rapier",
            "Leather Armor",
            "2 Daggers",
            "Shortbow",
            "20 Arrows",
            "Burglar's pack",
            "Thieves' Tools"
        ],
        Money: {
            Dice: 4,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Sorcerer",
        HD: 6,
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: true,
            Intelligence: false,
            Wisdom: false,
            Charisma: true
        },
        Proficiencies: [
            "Daggers",
            "Darts",
            "Slings",
            "Quarterstaffs",
            "Light Crossbows"
        ],
        Skills: {
            Count: 2,
            List: [
                "Arcana",
                "Deception",
                "Insight",
                "Intimidation",
                "Persuasion",
                "Religion"
            ]
        },
        Spells : {
            Cantrips: {
                Count: 2,
                List: [
                    "Acid Splash",
                    "Blade Ward",
                    "Booming Blade",
                    "Chill Touch",
                    "Control Flames",
                    "Create Bonfire",
                    "Dancing Lights",
                    "Fire Bolt",
                    "Friends",
                    "Frostbite",
                    "Green-Flame Blade",
                    "Gust",
                    "Infestation",
                    "Light",
                    "Lightning Lure",
                    "Mage Hand",
                    "Mending",
                    "Message",
                    "Mind Sliver",
                    "Minor Illusion",
                    "Mold Earth",
                    "Poison Spray",
                    "Prestidigitation",
                    "Ray of Frost",
                    "Shape Water",
                    "Shocking Grasp",
                    "Sword Burst",
                    "Thunderclap",
                    "True Strike"
                ]
            },
            Lvl1: {
                Count: 4,
                List: [
                    "Absorb Elements",
                    "Burning Hands",
                    "Catapult",
                    "Chaos Bolt",
                    "Charm Person",
                    "Chromatic Orb",
                    "Color Spray",
                    "Comprehend Languages",
                    "Detect Magic",
                    "Disguise Self",
                    "Distort Value",
                    "Earth Tremor",
                    "Expeditious Retreat",
                    "False Life",
                    "Feather Fall",
                    "Fog Cloud",
                    "Grease",
                    "Ice Knife",
                    "Jump",
                    "Mage Armor",
                    "Magic Missile",
                    "Ray of Sickness",
                    "Shield",
                    "Silent Image",
                    "Silvery Barbs",
                    "Sleep",
                    "Tasha's Caustic Brew",
                    "Thunderwave",
                    "Witch Bolt"
                ]
            },
        },
        Abilities: [
            {
                Name: "Dragon Ancestor",
                Description: "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later. You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
            },
            {
                Name: "Draconic Resilience",
                Description: "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
            }
        ],
        Equipment: [
            "2 Daggers",
            "Light Crossbow",
            "20 Bolts",
            "Explorer's pack",
            "Arcane Focus"
        ],
        Money: {
            Dice: 3,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Warlock",
        HD: 8,
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: false,
            Intelligence: false,
            Wisdom: true,
            Charisma: true
        },
        Proficiencies: [
            "Light Armor",
            "Simple Weapons"
        ],
        Skills: {
            Count: 2,
            List: [
                "Arcana",
                "Deception",
                "History",
                "Intimidation",
                "Investigation",
                "Nature",
                "Religion"
            ]
        },
        Spells : {
            Cantrips: {
                Count: 2,
                List: [
                    "Blade Ward",
                    "Booming Blade",
                    "Chill Touch",
                    "Create Bonfire",
                    "Eldritch Blast",
                    "Friends",
                    "Frostbite",
                    "Green-Flame Blade",
                    "Infestation",
                    "Lightning Lure",
                    "Mage Hand",
                    "Magic Stone",
                    "Mind Sliver",
                    "Minor Illusion",
                    "Poison Spray",
                    "Prestidigitation",
                    "Sword Burst",
                    "Thunderclap",
                    "Toll the Dead",
                    "True Strike"
                ]
            },
            Lvl1: {
                Count: 2,
                List: [
                    "Armor of Agathys",
                    "Arms of Hadar",
                    "Cause Fear",
                    "Charm Person",
                    "Comprehend Languages",
                    "Distort Value",
                    "Expeditious Retreat",
                    "Hellish Rebuke",
                    "Hex",
                    "Illusory Script",
                    "Protection from Evil and Good",
                    "Unseen Servant",
                    "Witch Bolt"
                ]
            },
        },
        Abilities: [
            {
                Name: "Otherworldly Patron",
                Description: "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
            }
        ],
        Equipment: [
            "Mace",
            "2 Daggers",
            "Light Crossbow",
            "20 Bolts",
            "Leather Armor",
            "Dagger",
            "Dungeoneer's pack",
            "Arcane Focus"
        ],
        Money: {
            Dice: 4,
            Type: 4,
            Factor: 10
        }
    },
    {
        Name: "Wizard",
        HD: 6,
        Saves: {
            Strength: false,
            Dexterity: false,
            Constitution: false,
            Intelligence: false,
            Wisdom: true,
            Charisma: true
        },
        Proficiencies: [
            "Light Armor",
            "Simple Weapons",
            "Hand Crossbows",
            "Longswords",
            "Rapiers",
            "Shortswords",
            "Lute",
            "Flute",
            "Drum"
        ],
        Skills: {
            Count: 2,
            List: [
                "Arcana",
                "History",
                "Insight",
                "Intimidation",
                "Investigation",
                "Medicine",
                "Religion"
            ]
        },
        Spells : {
            Cantrips: {
                Count: 3,
                List: [
                    "Acid Splash",
                    "Blade Ward",
                    "Booming Blade",
                    "Chill Touch",
                    "Control Flames",
                    "Create Bonfire",
                    "Dancing Lights",
                    "Encode Thoughts",
                    "Fire Bolt",
                    "Friends",
                    "Frostbite",
                    "Green-Flame Blade",
                    "Gust",
                    "Infestation",
                    "Light",
                    "Lightning Lure",
                    "Mage Hand",
                    "Mending",
                    "Message",
                    "Mind Sliver",
                    "Minor Illusion",
                    "Mold Earth",
                    "Poison Spray",
                    "Prestidigitation",
                    "Ray of Frost",
                    "Sapping Sting",
                    "Shape Water",
                    "Shocking Grasp",
                    "Sword Burst",
                    "Thunderclap",
                    "Toll the Dead",
                    "True Strike"
                ]
            },
            Lvl1: {
                Count: 6,
                List: [
                    "Absorb Elements",
                    "Alarm",
                    "Burning Hands",
                    "Catapult",
                    "Cause Fear",
                    "Charm Person",
                    "Chromatic Orb",
                    "Color Spray",
                    "Comprehend Languages",
                    "Detect Magic",
                    "Disguise Self",
                    "Distort Value",
                    "Earth Tremor",
                    "Expeditious Retreat",
                    "False Life",
                    "Feather Fall",
                    "Find Familiar",
                    "Fog Cloud",
                    "Frost Fingers",
                    "Gift of Alacrity",
                    "Grease",
                    "Ice Knife",
                    "Identify",
                    "Illusory Script",
                    "Jim's Magic Missile",
                    "Jump",
                    "Longstrider",
                    "Mage Armor",
                    "Magic Missile",
                    "Magnify Gravity",
                    "Protection from Evil and Good",
                    "Ray of Sickness",
                    "Shield",
                    "Silent Image",
                    "Silvery Barbs",
                    "Sleep",
                    "Snare",
                    "Tasha's Caustic Brew",
                    "Tasha's Hideous Laughter",
                    "Tenser's Floating Disk",
                    "Thunderwave",
                    "Unseen Servant",
                    "Witch Bolt"
                ]
            },
        },
        Abilities: [
            {
                Name: "Arcane Recovery",
                Description: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
            }
        ],
        Equipment: [
            "Quarterstaff",
            "Explorer's pack",
            "Arcane Focus",
            "Spellbook"
        ],
        Money: {
            Dice: 4,
            Type: 4,
            Factor: 10
        }
    }
];

export function generateClass(highest) {
    let chosenOne = null;

    while (!chosenOne) {
        const random = classes[Math.floor(Math.random() * classes.length)];

        if (random.Saves[highest]) {
            chosenOne = random;
        }
    }
    
    return chosenOne;
}