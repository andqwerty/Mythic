let buffOptions = ['Stam', 'MotW', 'AI', 'BL', 'PI', 'Atrophic', 'Chaos Brand', 'Mystic Touch', 'BS'];
let utilOptions = ['CR', 'CC', 'Dispell', 'Soothe', 'Invis', 'gdef'];

let classesJson = [
    {
        "name": "Death Knight",
        "specs": [
            { "role": "Tank", "name": "Blood" },
            { "role": "Melee", "name": "Frost" },
            { "role": "Melee", "name": "Unholy" }
        ],
        "interrupts": [15],
        "buffs": [],
        "utils": ["CR", "gdef"],
        "stops": [60]
    },
    {
        "name": "Demon Hunter",
        "specs": [
            { "role": "Tank", "name": "Vengeance", "interrupts": [60], "stops": [60] },
            { "role": "Melee", "name": "Havoc" }
        ],
        "interrupts": [15],
        "buffs": "Chaos Brand",
        "utils": ["CC", "gdef"],
        "stops": [45, 90]
    },
    {
        "name": "Druid",
        "specs": [
            { "role": "Tank", "name": "Guardian", "interrupts": [15] },
            { "role": "Healer", "name": "Restoration", "utils": ["Dispell"] },
            { "role": "Melee", "name": "Feral", "interrupts": [15] },
            { "role": "Ranged", "name": "Balance", "interrupts": [60] }
        ],
        "interrupts": [],
        "buffs": ["MotW"],
        "utils": ["CR", "CC", "Dispell", "Soothe"],
        "stops": [30, 90]
    },
    {
        "name": "Evoker",
        "specs": [
            { "role": "Healer", "name": "Preservation", "interrupts": [40], "stops": [90, 90] },
            { "role": "Ranged", "name": "Devastation", "interrupts": [20], "stops": [90, 90] },
            { "role": "Ranged", "name": "Augmentation", "interrupts": [18], "stops": [41, 81, 108, 36] }
        ],
        "interrupts": [],
        "buffs": ["BL"],
        "utils": ["Dispell", "Soothe", "CC", "gdef"],
        "stops": []
    },
    {
        "name": "Hunter",
        "specs": [
            { "role": "Melee", "name": "Survival", "interrupts": [15] },
            { "role": "Ranged", "name": "BeastMaster", "interrupts": [24] },
            { "role": "Ranged", "name": "Marksmanship", "interrupts": [24] }
        ],
        "interrupts": [],
        "buffs": ["BL"],
        "utils": ["CC", "Soothe"],
        "stops": []
    },
    {
        "name": "Mage",
        "specs": [
            { "role": "Ranged", "name": "Arcane" },
            { "role": "Ranged", "name": "Frost" },
            { "role": "Ranged", "name": "Fire" }
        ],
        "interrupts": [24],
        "buffs": ["BL", "AI"],
        "utils": ["Invis", "CC", "Dispell", "gdef"],
        "stops": [30, 45]
    },
    {
        "name": "Monk",
        "specs": [
            { "role": "Tank", "name": "Brewmaster" },
            { "role": "Healer", "name": "Mistweaver", "utils": ["gdef"] },
            { "role": "Melee", "name": "Windwalker" }
        ],
        "interrupts": [15],
        "buffs": ["Mystic Touch"],
        "utils": ["CC", "Dispell"],
        "stops": [60, 45]
    },
    {
        "name": "Paladin",
        "specs": [
            { "role": "Tank", "name": "Protection", "interrupts": [15] },
            { "role": "Healer", "name": "Holy" },
            { "role": "Melee", "name": "Retribution" }
        ],
        "interrupts": [15],
        "buffs": [],
        "utils": ["CR", "CC", "Dispell"],
        "stops": [90]
    },
    {
        "name": "Priest",
        "specs": [
            { "role": "Healer", "name": "Holy" },
            { "role": "Healer", "name": "Discipline", "utils": ["gdef"] },
            { "role": "Ranged", "name": "Shadow", "interrupts": [24] }
        ],
        "interrupts": [],
        "buffs": ["Stam", "PI"],
        "utils": ["Dispell", "CC"],
        "stops": [45]
    },
    {
        "name": "Rogue",
        "specs": [
            { "role": "Melee", "name": "Assassination" },
            { "role": "Melee", "name": "Outlaw" },
            { "role": "Melee", "name": "Subtlety" }
        ],
        "interrupts": [15],
        "buffs": ["Atrophic"],
        "utils": ["Invis", "Soothe"],
        "stops": [60]
    },
    {
        "name": "Shaman",
        "specs": [
            { "role": "Healer", "name": "Restoration" },
            { "role": "Melee", "name": "Enhancement", "stops": [40] },
            { "role": "Ranged", "name": "Elemental" }
        ],
        "interrupts": [12],
        "buffs": ["BL"],
        "utils": ["Dispell", "CC"],
        "stops": [30, 60]
    },
    {
        "name": "Warlock",
        "specs": [
            { "role": "Ranged", "name": "Affliction" },
            { "role": "Ranged", "name": "Demonology" },
            { "role": "Ranged", "name": "Destruction" }
        ],
        "interrupts": [24],
        "buffs": [],
        "utils": ["CR", "CC", "Dispell"],
        "stops": [60]
    },
    {
        "name": "Warrior",
        "specs": [
            { "role": "Tank", "name": "Protection" },
            { "role": "Melee", "name": "Arms" },
            { "role": "Melee", "name": "Fury" }
        ],
        "interrupts": [15],
        "buffs": ["BS"],
        "utils": ["gdef"],
        "stops": [40]
    }
];

function getIcon(key) {
    switch (key.toLowerCase()) {
        case 'stam': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_wordfortitude.jpg';
        case 'ai': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg';
        case 'bl': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_bloodlust.jpg';
        case 'motw': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_regeneration.jpg';
        case 'pi': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_powerinfusion.jpg';
        case 'atrophic': return 'https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_nervesofsteel.jpg';
        case 'mystic touch': return 'https://wow.zamimg.com/images/wow/icons/medium/ability_monk_sparring.jpg';
        case 'chaos brand': return 'https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_empowerwards.jpg';
        case 'bs': return 'https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_battleshout.jpg';
        case 'cr': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_reincarnation.jpg';
        case 'cc': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_polymorph.jpg';
        case 'dispell': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_massdispel.jpg';
        case 'soothe': return 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_beastsoothe.jpg';
        case 'invis': return 'https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_shroudofconcealment.jpg';
        case 'gdef': return 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_powerwordbarrier.jpg';
        default: return 'https://wow.zamimg.com/images/wow/icons/medium/inv_misc_questionmark.jpg';
    }
}

function getSpec(key) {
    let wowclassKey = key.substring(key.indexOf('_') + 1, key.lastIndexOf('_')); // rogue, druid, mage
    let specKey = key.substring(key.lastIndexOf('_') + 1); // outlaw, feral, fire
    let wowclass = classesJson.filter(x => x.name.toLowerCase() == wowclassKey.replace('_', ' '))[0]
    let spec = classesJson.filter(x => x.name.toLowerCase() == wowclassKey.replace('_', ' '))[0].specs.filter(x => x.name.toLowerCase() == specKey)[0]

    let result = { ...spec }
    result.key = key;
    result.role = key.substring(0, key.indexOf('_'));;
    result.class = wowclass.name;
    result.icon = 'https://assets.rpglogs.com/img/warcraft/icons/large/' + wowclass.name.replace(' ', '') + '-' + spec.name + '.jpg';
    result.interrupts = (spec.interrupts ?? []).concat(wowclass.interrupts ?? []);
    result.buffs = (spec.buffs ?? []).concat(wowclass.buffs ?? []);
    result.utils = (spec.utils ?? []).concat(wowclass.utils ?? []);
    result.stops = (spec.stops ?? []).concat(wowclass.stops ?? []);

    return result;
}

function combinationUtility(players) {
    let interrupts = [];
    let buffs = [];
    let utils = [];
    let stops = [];

    for (let i = 0; i < players.length; i++) {
        interrupts = interrupts.concat(players[i].interrupts);
        buffs = buffs.concat(players[i].buffs);
        utils = utils.concat(players[i].utils);
        stops = stops.concat(players[i].stops);
    }

    return {
        interrupts: interrupts,
        buffs: buffs,
        utils: utils,
        interruptsPrMinute: interrupts.reduce((v, a) => 60 / a + v, 0),
        stopsPrMinute: stops.reduce((v, a) => 60 / a + v, 0)
    }
}

function generateCombinations(playerSpecs, multiSameClass, multiSameSpec) {
    let allCombinations = generateCombinationsRecursive(playerSpecs);
    let validCombinations = [];

    allCombinations.forEach(c => {

        // Validate 1tank & 1healer
        let tankCount = c.filter(x => x.startsWith("tank_")).length;
        let healerCount = c.filter(x => x.startsWith("healer_")).length;
        if (tankCount != 1 || healerCount != 1)
            return;

        if (!multiSameClass) {
            // Remove dublicate classes
            let comboClasses = c.map(x => x.substring(x.indexOf('_') + 1, x.lastIndexOf('_')));
            let dublicates = comboClasses.filter((item, index) => comboClasses.indexOf(item) !== index);
            if (dublicates.length > 0)
                return;
        }

        if (!multiSameSpec) {
            // Remove dublicate specs
            let comboSpecs = c.map(x => x.substring(x.lastIndexOf('_') + 1));
            let dublicates = comboSpecs.filter((item, index) => comboSpecs.indexOf(item) !== index);
            if (dublicates.length > 0)
                return;
        }


        // Sorting tank > healer > melee > ranged
        c = [c.filter(x => x.startsWith('tank_')), c.filter(x => x.startsWith('healer_')), c.filter(x => x.startsWith('melee_')), c.filter(x => x.startsWith('ranged_'))].flat();
        validCombinations.push(c.map(x => getSpec(x)));
    });

    return validCombinations;
}

function generateCombinationsRecursive(list, n = 0, result = [], current = []) {
    if (n === list.length)
        result.push(current);
    else
        list[n].forEach(item => generateCombinationsRecursive(list, n + 1, result, [...current, item]));

    return result;
}