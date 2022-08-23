const SecurePage = require('../../securian.page');
const data = require('../../dataConfig/data');

describe('Submit Preretirment calculator form', () => {
    it('should be able to submit with all required fields', async () => {
        
       await SecurePage.open();
       await SecurePage.currentAge.setValue(data.currentAge);
       await SecurePage.retirementAge.setValue(data.RetirementAge);
       await SecurePage.currentIncome.click();
       await SecurePage.currentIncome.setValue(data.currentAnnualIncome);
       await SecurePage.spouseIncome.click();
       await SecurePage.spouseIncome.setValue(data.spouceAnnualIncome);
       await SecurePage.currentTotalSavings.click();
       await SecurePage.currentTotalSavings.setValue(data.currentRetirementSavings);
       await SecurePage.currentAnnualSavings.setValue(data.currentRetirementContribution);
       await SecurePage.submit.click();
       await SecurePage.succesMessage.waitForDisplayed({ timeout: 10000 });
       await expect(SecurePage.succesMessage).toHaveTextContaining('Congratulations! You are exceeding your retirement goals. You are saving an extra');    
    });

    it('should be able to submit with social security benfits fields', async () => {
        
        await SecurePage.open();
        await SecurePage.currentAge.setValue(data.currentAge);
        await SecurePage.retirementAge.setValue(data.RetirementAge);
        await SecurePage.currentIncome.click();
        await SecurePage.currentIncome.setValue(data.currentAnnualIncome);
        await SecurePage.spouseIncome.click();
        await SecurePage.spouseIncome.setValue(data.spouceAnnualIncome);
        await SecurePage.currentTotalSavings.click();
        await SecurePage.currentTotalSavings.setValue(data.currentRetirementSavings);
        await SecurePage.currentAnnualSavings.setValue(data.currentRetirementContribution);
        await SecurePage.savingsIncreaseRate.setValue(data.annualRetirementContributionIncrease);
        await SecurePage.yesSocialBenefits.click()
        await SecurePage.marriedStatus.waitForDisplayed();
        await browser.pause(10000);
        await SecurePage.marriedStatus.click();
        await SecurePage.socialSecurityOverride.setValue(data.socialSecurityOverride);
        await SecurePage.submit.click();
        await SecurePage.succesMessage.waitForDisplayed({ timeout: 10000 });
        await expect(SecurePage.succesMessage).toHaveTextContaining('Congratulations! You are exceeding your retirement goals. You are saving an extra');    
     });
});


