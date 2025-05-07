const championData = {
    id: "aatrox",
    name: "Aatrox",
    title: "the Darkin Blade",
    image: "/champions/aatrox.png",
    roles: ["Fighter", "Tank"],
    difficulty: 3,
    stats: {
        winRate: 49.8,
        pickRate: 4.2,
        banRate: 2.1,
        matches: 125789,
    },
    abilities: {
        passive: {
            name: "Deathbringer Stance",
            description:
                "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
            image: "/abilities/aatrox/passive.png",
        },
        q: {
            name: "The Darkin Blade",
            description:
                "Aatrox slams his greatsword, dealing physical damage. He can reactivate this ability twice, each with different areas of effect.",
            image: "/abilities/aatrox/q.png",
            video: "/videos/aatrox-q.mp4",
        },
        w: {
            name: "Infernal Chains",
            description:
                "Aatrox smashes the ground, dealing damage to the first enemy hit and slowing them. If they don't leave the impact area, they are dragged back and damaged again.",
            image: "/abilities/aatrox/w.png",
            video: "/videos/aatrox-w.mp4",
        },
        e: {
            name: "Umbral Dash",
            description:
                "Passively, Aatrox heals when damaging enemy champions. When activated, he dashes in a direction.",
            image: "/abilities/aatrox/e.png",
            video: "/videos/aatrox-e.mp4",
        },
        r: {
            name: "World Ender",
            description:
                "Aatrox reveals his true demonic form, fearing nearby minions and gaining attack damage, increased healing, and movement speed. This effect extends on champion takedowns.",
            image: "/abilities/aatrox/r.png",
            video: "/videos/aatrox-r.mp4",
        },
    },
    builds: {
        standard: {
            winRate: 51.2,
            pickRate: 68.5,
            items: [
                {
                    id: "goredrinker",
                    name: "Goredrinker",
                    image: "/items/goredrinker.png",
                },
                {
                    id: "black_cleaver",
                    name: "Black Cleaver",
                    image: "/items/black_cleaver.png",
                },
                {
                    id: "deaths_dance",
                    name: "Death's Dance",
                    image: "/items/deaths_dance.png",
                },
                {
                    id: "steraks_gage",
                    name: "Sterak's Gage",
                    image: "/items/steraks_gage.png",
                },
                {
                    id: "guardian_angel",
                    name: "Guardian Angel",
                    image: "/items/guardian_angel.png",
                },
                {
                    id: "spirit_visage",
                    name: "Spirit Visage",
                    image: "/items/spirit_visage.png",
                },
            ],
            runes: {
                primary: {
                    tree: "Precision",
                    keystone: "Conqueror",
                    slot1: "Triumph",
                    slot2: "Legend: Tenacity",
                    slot3: "Last Stand",
                },
                secondary: {
                    tree: "Resolve",
                    slot1: "Second Wind",
                    slot2: "Revitalize",
                },
                statMods: ["Adaptive Force", "Adaptive Force", "Armor"],
            },
            summonerSpells: ["Flash", "Teleport"],
            skillOrder: [
                "Q",
                "E",
                "W",
                "Q",
                "Q",
                "R",
                "Q",
                "E",
                "Q",
                "E",
                "R",
                "E",
                "E",
                "W",
                "W",
                "R",
                "W",
                "W",
            ],
        },
        aram: {
            winRate: 53.7,
            pickRate: 5.2,
            items: [
                { id: "eclipse", name: "Eclipse", image: "/items/eclipse.png" },
                {
                    id: "black_cleaver",
                    name: "Black Cleaver",
                    image: "/items/black_cleaver.png",
                },
                {
                    id: "serylda_grudge",
                    name: "Serylda's Grudge",
                    image: "/items/serylda_grudge.png",
                },
                {
                    id: "deaths_dance",
                    name: "Death's Dance",
                    image: "/items/deaths_dance.png",
                },
                {
                    id: "maw_of_malmortius",
                    name: "Maw of Malmortius",
                    image: "/items/maw_of_malmortius.png",
                },
                {
                    id: "guardian_angel",
                    name: "Guardian Angel",
                    image: "/items/guardian_angel.png",
                },
            ],
            runes: {
                primary: {
                    tree: "Precision",
                    keystone: "Conqueror",
                    slot1: "Triumph",
                    slot2: "Legend: Tenacity",
                    slot3: "Last Stand",
                },
                secondary: {
                    tree: "Domination",
                    slot1: "Taste of Blood",
                    slot2: "Ravenous Hunter",
                },
                statMods: ["Adaptive Force", "Adaptive Force", "Armor"],
            },
            summonerSpells: ["Flash", "Snowball"],
            skillOrder: [
                "Q",
                "E",
                "W",
                "Q",
                "Q",
                "R",
                "Q",
                "E",
                "Q",
                "E",
                "R",
                "E",
                "E",
                "W",
                "W",
                "R",
                "W",
                "W",
            ],
        },
    },
    synergies: {
        strongWith: [
            {
                id: "diana",
                name: "Diana",
                image: "/champions/diana.png",
                winRate: 54.2,
            },
            {
                id: "yasuo",
                name: "Yasuo",
                image: "/champions/yasuo.png",
                winRate: 53.8,
            },
            {
                id: "amumu",
                name: "Amumu",
                image: "/champions/amumu.png",
                winRate: 53.5,
            },
        ],
        weakAgainst: [
            {
                id: "fiora",
                name: "Fiora",
                image: "/champions/fiora.png",
                winRate: 45.2,
            },
            {
                id: "jax",
                name: "Jax",
                image: "/champions/jax.png",
                winRate: 46.1,
            },
            {
                id: "irelia",
                name: "Irelia",
                image: "/champions/irelia.png",
                winRate: 46.8,
            },
        ],
    },
};

export default championData;
