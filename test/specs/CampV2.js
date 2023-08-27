const { browser } = require("wdio-electron-service");
const RecordQAPage = require("../specs/Record QA");


describe("CampV2", () => {
  it("tests CampV2", async () => {
    await RecordQAPage.testRecordQA();

    await browser.setWindowSize(1369, 916)
    await browser.url("https://qa.optx.com/pd-portal/campaigns")
    await expect(browser).toHaveUrl("https://qa.optx.com/pd-portal/campaigns")
    await browser.$("button[type='button']").click()

    await browser.newWindow("https://qa.optx.com/pd-portal/campaigns/new/event/0/0")
    await expect(browser).toHaveUrlContaining("https://qa.optx.com/pd-portal/campaigns")

    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[1]/div[1]/div[2]/div[2]/div/span/input").click()
    await browser.$(".//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[1]/div[1]/div[2]/div[2]/div/span/input").setValue("A")
    await browser.$(".//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[1]/div[1]/div[2]/div[2]/div/span/input").setValue("Auto Test 1")

    await browser.$("//*[@id=\"typeList\"]/div/div/div[1]/div/div/div/div").click()
    await browser.$("aria/Free Slot Play").click()
    await browser.$("aria/Enter Capacity").click()
    await browser.$("aria/Enter Capacity").setValue("1")
    //RSVP date

    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[3]/div[1]/div/div/div/span/span[2]/span/input[1]").click()
    await browser.$("/html/body/div[3]/div/div/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[1]/td[3]/div").click()
    await browser.$("/html/body/div[3]/div/div/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[5]/td[5]/div").click()

    //Date
    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[3]/div[3]/div/div[2]/div/span/span/span/input[1]").click()
    await browser.$("/html/body/div[4]/div/div/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[1]/td[3]/div").click()
    await browser.$("/html/body/div[4]/div/div/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[5]/td[5]/div").click()

    //Date
    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[3]/div[2]/div/div/div/span/span[2]/span/input[1]").click()
    await browser.$("/html/body/div[5]/div/div/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[1]/td[3]/div").click()
    await browser.$("/html/body/div[5]/div/div/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[5]/td[5]/div").click()

    await browser.pause(2000);
// type
    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[3]/form/div[1]/div[2]/div[1]/div[2]/div/span/div/div/span/i/svg").click()
    await browser.$("aria/Slot Tournament").click()
    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[2]/form/div[1]/div[2]/div[2]/div[2]/div/span/textarea").click()

    await browser.$("//*[@id=\"root\"]/div/div/div/section/section/main/div[2]/div/div/div[2]/form/div[1]/div[2]/div[2]/div[2]/div/span/textarea").setValue("Description test")
    await browser.$("aria/Number").setValue("1")
    await browser.pause(1000);
    await browser.$("button[type='button']").click()

    await browser.pause(2000);




  });
});
