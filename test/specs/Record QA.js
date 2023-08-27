const loginpage2 = require("../../features/pageobjects/login.page")

class RecordQAPage {
  async testRecordQA() {
    await browser.setWindowSize(1438, 916);
    await browser.url("https://qa.optx.com/user/login");
    await expect(browser).toHaveUrl("https://qa.optx.com/user/login");
    await browser.$("#userName").click();
    await browser.$("#userName").setValue("admin");
    await browser.$("#password").click();
    await browser.$("#password").setValue("Abcdef@@12345");
    await browser.$('.ant-btn-primary').click();
    await browser.pause(15000);
    await expect(browser).toHaveUrl('https://qa.optx.com/floor-view/floor-monitor');
  }
}

module.exports = new RecordQAPage();
