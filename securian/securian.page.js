
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurianPage extends Page {
    /**
     * define selectors using getter methods
     */
    get currentAge () {
        return $('#current-age');
    }

    get retirementAge () {
        return $('#retirement-age');
    }

    get currentIncome () {
        return $('input#current-income');
    }

    get spouseIncome() {
        return $('input#spouse-income')
    }

    get currentTotalSavings() {
        return $('input#current-total-savings')
    }

    get currentAnnualSavings() {
        return $('input#current-annual-savings');
    }

    get savingsIncreaseRate() {
        return $('input#savings-increase-rate')
    }

    get yesSocialBenefits() {
        return $('[for="yes-social-benefits"]')
    }

    get marriedStatus() {
        return $('[for=married]');
    }

    get socialSecurityOverride() {
        return $('#social-security-override');
    }

    get submit() {
        return $('[data-tag-id="submit"]');
    }

    get succesMessage() {
        return $('#result-message ')
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new SecurianPage();
