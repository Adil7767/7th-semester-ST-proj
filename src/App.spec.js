// import { test, expect } from '@playwright/test';

// test.describe('To-Do App', () => {
//   const appUrl = 'http://localhost:3000';

//   // Add a new task
//   test('should add a new task', async ({ page }) => {
//     // Navigate to the app URL
//     await page.goto(appUrl);

//     // Locate the input field and add button
//     const inputField = page.locator('input[placeholder="Add a new task"]');
//     const addButton = page.locator('text=Add Task');

//     // Type the task in the input field and click the add button
//     await inputField.fill('New Task');
//     await addButton.click();

//     // Verify the new task appears in the list
//     const newTask = page.locator('text=New Task');
//     await expect(newTask).toBeVisible();
//   });

//   // Toggle task completion
//   test('should toggle the completion of a task', async ({ page }) => {
//     // Navigate to the app URL
//     await page.goto(appUrl);

//     // Add a new task
//     const inputField = page.locator('input[placeholder="Add a new task"]');
//     const addButton = page.locator('text=Add Task');
//     await inputField.fill('New Task');
//     await addButton.click();

//     // Locate the toggle button
//     const toggleButton = page.locator('button', { hasText: 'Mark as Complete' });

//     // Wait for the task to be added and then click the toggle button
//     const newTask = page.locator('text=New Task');
//     await expect(newTask).toBeVisible();
//     await toggleButton.click();
//     // Verify the task is marked as completed (line-through style)
//     await expect(newTask).toHaveCSS('text-decoration', /line-through/);

//   });

//   // Delete a task
//   test('should delete a task', async ({ page }) => {
//     // Navigate to the app URL
//     await page.goto(appUrl);

//     // Add a new task
//     const inputField = page.locator('input[placeholder="Add a new task"]');
//     const addButton = page.locator('text=Add Task');
//     await inputField.fill('New Task');
//     await addButton.click();

//     // Locate the delete button
//     const deleteButton = page.locator('button', { hasText: 'Delete' });

//     // Wait for the task to be added and then click the delete button
//     const newTask = page.locator('text=New Task');
//     await expect(newTask).toBeVisible();
//     await deleteButton.click();

//     // Verify the task is removed from the list
//     await expect(newTask).toBeHidden();
//   });
// });





import { test, expect } from '@playwright/test';

test.describe('To-Do App', () => {
  const appUrl = 'http://localhost:3000';

  test.beforeEach(async ({ page }) => {
    // Navigate to the app URL
    await page.goto(appUrl);
  });

  // Add a new task
  test('should add a new task', async ({ page }) => {
    // Locate the input field and add button
    const inputField = page.locator('input[placeholder="Add a new task"]');
    const addButton = page.locator('button:has-text("Add Task")');

    // Type the task in the input field and click the add button
    await inputField.fill('New Task');
    await addButton.click();

    // Verify the new task appears in the list
    const newTask = page.locator('li:text("New Task")');
    await expect(newTask).toBeVisible();
  });

  // Toggle task completion
  test('should toggle the completion of a task', async ({ page }) => {
    // Add a new task
    const inputField = page.locator('input[placeholder="Add a new task"]');
    const addButton = page.locator('button:has-text("Add Task")');
    await inputField.fill('New Task');
    await addButton.click();

    // Locate the toggle button
    const toggleButton = page.locator('button:has-text("Mark Complete")');
    const newTask = page.locator('li:text("New Task")');

    // Verify the task was added
    await expect(newTask).toBeVisible();

    // Click the toggle button and verify task is marked as complete
    await toggleButton.click();
    await expect(newTask).toHaveCSS('text-decoration', /line-through/);
  }, { timeout: 60000 });

  // Delete a task
  test('should delete a task', async ({ page }) => {
    // Add a new task
    const inputField = page.locator('input[placeholder="Add a new task"]');
    const addButton = page.locator('button:has-text("Add Task")');
    await inputField.fill('New Task');
    await addButton.click();

    // Locate the delete button and new task
    const deleteButton = page.locator('button:has-text("Delete")');
    const newTask = page.locator('li:text("New Task")');

    // Verify the task was added
    await expect(newTask).toBeVisible();

    // Click the delete button and verify the task is removed
    await deleteButton.click();
    await expect(newTask).toBeHidden();
  });
});
