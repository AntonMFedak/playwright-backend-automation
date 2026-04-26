import { test, expect } from '@playwright/test';

const expectedData = [
    {
        id: 1,
        name: "Strength",
        shortname: "STR",
        description: "Measures physical power, carrying capacity, and effectiveness in brute-force actions such as lifting, pushing, and melee attacks.",
        skills: ["Athletics"]
    },
    {
        id: 2,
        name: "Dexterity",
        shortname: "DEX",
        description: "Measures agility, reflexes, balance, and coordination. It affects actions that require speed, precision, and stealth.",
        skills: ["Acrobatics", "Sleight of Hand", "Stealth"]
    },
    {
        id: 3,
        name: "Constitution",
        shortname: "CON",
        description: "Measures endurance, resilience, and physical toughness. It is commonly associated with health, stamina, and resistance to harm.",
        skills: []
    },
    {
        id: 4,
        name: "Intelligence",
        shortname: "INT",
        description: "Measures reasoning, memory, knowledge, and analytical ability. It is linked to learning, investigation, and logical thinking.",
        skills: ["Arcana", "History", "Investigation", "Nature", "Religion"]
    },
    {
        id: 5,
        name: "Wisdom",
        shortname: "WIS",
        description: "Measures perception, intuition, awareness, and good judgment. It reflects how well a character understands the world around them.",
        skills: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"]
    },
    {
        id: 6,
        name: "Charisma",
        shortname: "CHA",
        description: "Measures presence, confidence, influence, and social impact. It affects persuasion, leadership, and interpersonal interactions.",
        skills: ["Deception", "Intimidation", "Performance", "Persuasion"]
    }
];

test('Validate Attributes', async ({ request }) => {
  const response = await request.get(
    'https://adventurers-guild-api.vercel.app/api/attributes',
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

/*   expect(responseBody[0].id).toBe(1);
  expect(responseBody[0].name).toBe('Strength');
  expect(responseBody[0].shortname).toBe('STR');
  expect(responseBody[0].description).toBe(
    'Measures physical power, carrying capacity, and effectiveness in brute-force actions such as lifting, pushing, and melee attacks.',
  );
  expect(responseBody[0].skills[0]).toBe('Athletics'); */

  responseBody.forEach((item, index) => {

  test(`${item.name} - id`, async () => {
      expect(item.id).toBe(expectedData[index].id);
  });

  test(`${item.name} - name`, async () => {
      expect(item.name).toBe(expectedData[index].name);
  });

    test(`${item.name} - shortname`, async () => {
        expect(item.shortname).toBe(expectedData[index].shortname);
    });

    test(`${item.name} - description`, async () => {
        expect(item.description).toBe(expectedData[index].description);
    });

    test(`${item.name} - skills`, async () => {
        expect(item.skills).toEqual(expectedData[index].skills);
    });

});
});



