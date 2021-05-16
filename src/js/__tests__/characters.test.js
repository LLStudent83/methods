import Character from '../characters';


test.each([
  ['name', 'bb', 'bb'],
  ['name', 'bbb', 'bbb'],
  ['name', 'bbbbbbbbbb', 'bbbbbbbbbb'],
])(
  ('Проверка валидности имени %s arg пользователя %s name'),
  (arg, name, thisName) => {
    const characters = {
      name: thisName,
      type: 'Bowman',
      healse: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(new Character(name, 'Bowman')).toEqual(characters);
  },
);

test.each([
  ['name', 'b', 'b'],
  ['name', 'bbbbbbbbbbb', 'bbbbbbbbbbb'],
])(
  ('Проверка выбрасывания ошибки имени %s arg пользователя %s name'),
  (arg, name) => {
    // eslint-disable-next-line no-new
    expect(() => { new Character(name, 'Bowman'); }).toThrow();
  },
);

test('test valid type', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('bbb', 'king'); }).toThrow();
});

test('test valid type', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('bbb', 'Swordsman'); }).not.toThrow();
});

test('check method levelUp', () => {
  const bowman = new Character('dow', 'Bowman');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
});

test('check method levelUp healse = 0 throw', () => {
  const bowman = new Character('dow', 'Bowman');
  bowman.healse = 0;
  expect(() => { bowman.levelUp(); }).toThrow();
  expect(bowman.level).toBe(1);
});

test('check method damage', () => {
  const bowman = new Character('dow', 'Bowman');
  bowman.damage(10);
  expect(bowman.healse).toBe(92.5);
});

test('check method damage healse < 0', () => {
  const bowman = new Character('dow', 'Bowman');
  bowman.damage(1000);
  expect(bowman.healse).toBe(0);
});
