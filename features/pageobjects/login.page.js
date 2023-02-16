const ActionHelper = require('../helpers/actionHelpers');

class Login {
    getNative() {
        return require('../screens/login.android.js');
    }

    async launchApp() {
        await ActionHelper.waitForElement(this.getNative().btnMasuk, 50);
        console.log('Open Aplikasi');
        
    }

    async btnMasuk(){
        await ActionHelper.click(this.getNative().btnMasuk);
    }

    async loginUser(username, password) {
        await ActionHelper.waitForElement(this.getNative().inputPhone, 10);
        await ActionHelper.sendText(this.getNative().inputPhone, username);
        await ActionHelper.sendText(this.getNative().inputPassword, password);
        await ActionHelper.click(this.getNative().btnLanjut);
    }

    async verifyNotif() {
        await ActionHelper.isVisible(this.getNative().notifPwdError);
    }
}

module.exports = new Login();