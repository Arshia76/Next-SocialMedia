class Validator {
    static isEmail(string) {
        return new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})$/g).test(string);
    }

    static isMobile(string) {
        return new RegExp(/^09\d{9}$/g).test(string);
        // return new RegExp(/^(\+98|0)?9\d{9}$/g).test(string);
    }

    static isNationalCode(string) {
        if (['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999'].includes(string))
            return false;

        string = string?.toString() || '';
        let L = string.length;
        if (L < 8 || L > 10 || parseInt(string, 10) === 0)
            return false;
        string = ('0000' + string).substr(L + 4 - 10);
        if (parseInt(string.substr(3, 6), 10) === 0)
            return false;
        let c = parseInt(string.substr(9, 1), 10);
        let s = 0;
        for (let i = 0; i < 9; i++)
            s += parseInt(string.substr(i, 1), 10) * (10 - i);
        s = s % 11;
        return (s < 2 && c === s) || (s >= 2 && c === (11 - s));
    }

    static isTell(string) {
        return new RegExp(/^0\d{10}$/g).test(string);
        // return new RegExp(/^(\+98|0)?\d{10}$/g).test(string);
    }
}

export default Validator;