import userList from ('./userList.js');

const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe("Testing array", () => {
    test('UserList has "admin" element on it', () => {
        expect(userList).toContain('admin');
    });
    test('The first element is "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });
    test('The last element is “new_user_2”', () => {
        expect(userList.slice(-1)).toContain('new_user_2');
    });
    test('Array includes five elements', () => {
        expect(userList.lenght = 5).toBe(5);
    });
    test('Third element is a "string"', () => {
        expect(typeof userList[2]).toBe('string');
    });
    test('Array does not consist of 8 elements', () => {
        expect(userList.lenght).not.toBe(8);
    });
});
