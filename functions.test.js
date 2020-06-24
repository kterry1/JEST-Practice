
const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('User should be Bob Smith object', () => {
    expect(functions.createUser()).toStrictEqual({firstName: "Bob", lastName: "Smith"}) //toBe won't work here because toBe only works on primitive data types
})

test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//Regex Testing
test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
})

//Arrays
test("Admin should be in usernames", () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
})

// Working with async data
test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })
})