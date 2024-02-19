describe('App E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have info text', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
