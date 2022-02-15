// const NUMERAL_REGEX = /^[0-9]+$/;
const EMAIL_RE_GEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//sir 

export const isEmail = (email) => {
    if(typeof email !== "string"){
        return false;
    }
    return EMAIL_RE_GEX.test(email);
};

export const isValidUser = (user) => {
    return isEmail(user.email) && user.password.length > 0 && user.firstName && user.lastName;
};
// export const isEmptyObject = (obj) => {
//     if(typeof obj !== "object"){
//         return false;
//     }
//     return Object.keys(obj).length === 0;
// };

// export const isNumeric = (value) => {
//     return NUMERAL_REGEX.test(value);
// };