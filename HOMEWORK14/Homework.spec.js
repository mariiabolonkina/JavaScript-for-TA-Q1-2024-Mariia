//task1
const { test, expect } = require('@playwright/test');
//Доступитися до випадаючого списку
test('get started link', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/dropdown');

    await expect(page).toHaveTitle(/The Internet/);

    const dropdown = await page.$('#dropdown');
//Перевірити, що 2-ий елемент списку активний.

await dropdown.selectOption({label:'Option 1'});

//Перевірити, що 1-ий елемент списку неактивний.
    const firstelement = await dropdown.$('#Please select an option');
    await expect(firstelement).toBeNull;
});

//task2
test('hover', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/hovers');
   // Знайти елемент, який містить картинку аватарку юзера.
  await page.mouse.move(160, 160);
  await page.getByText('user1')
  
});

//task4
test('scroll', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/tables');
   // Знайти елемент, який містить картинку аватарку юзера.
   await mouse.wheel();
});
