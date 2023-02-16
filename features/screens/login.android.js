class Login {
    constructor() {
        this.btnMasuk = `id=com.alfamart.alfagift:id/btn_login`;
        this.inputPhone = 'id=com.alfamart.alfagift:id/etPhonePontaNumber';
        this.inputPassword = 'id=com.alfamart.alfagift:id/etPassword';
        this.btnLanjut = 'id=com.alfamart.alfagift:id/btnNext';
        this.notifPwdError = 'id=com.alfamart.alfagift:id/tvPasswordError';
    }
}

module.exports = new Login();