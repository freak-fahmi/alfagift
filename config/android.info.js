class AndroidInfo {
    //Device 1
    static deviceName1() {
        return 'emulator-5554'; // pass the udid or devicename
    }
    static platFormVersion1() {
        return '12.0'; // pass the platform version
    }

    // Device 2
    static deviceName2() {
        return 'RR8R405830F'; // pass the udid or devicename
    }
    static platFormVersion2() {
        return '11'; // pass the platform version
    }

    static appName() {
        return 'Alfagift_base.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;
