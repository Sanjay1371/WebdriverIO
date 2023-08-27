const loginPage = require("../pages/QAlogin.page");
const RecordQAPage = require("../specs/Record QA");
const Campaigneventv2=require("../specs/Campaign V2");

describe('QA_test', () => {
    it('QA_Test', async () => {

        await RecordQAPage.testRecordQA();
        await Campaigneventv2.testcampv2();

    });
});
