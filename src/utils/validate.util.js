const PHONE_NUM_REGEX = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validatePhoneNumber = number => {
    let check = number.match(PHONE_NUM_REGEX);
    return check;
}

export const validateEmail = email => {
    let check = email.match(EMAIL_REGEX);
    return check;
}