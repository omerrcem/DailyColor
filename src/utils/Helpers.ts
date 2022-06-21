import { Colors, MONTH_NAMES } from "./Constants";

export const formatDate = dateString => {
    let date = new Date(dateString),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();
    return `${day} ${MONTH_NAMES[month]} ${year}` ;
};

export const getStringDate = () => formatDate(new Date());

export const calculateDayColor = (date = new Date()) => {
    const sum = getSumOfDigits(date.toLocaleDateString());
    return Object.values(Colors)[(sum+ 8) % 9];
};

export const getSumOfDigits = (num) => {
    return String(num)
        .replace(/\D/g,'')
        .split('')
        .reduce((acc, curr) => {
       return acc + Number(curr);
    }, 0);
};

export const getIndexOfColor = color => {
    const number = Object.values(Colors).indexOf(color);
    return number;
};

export const getDateArray = () => {
    const dates = [];
    const date = new Date();
    for (let i = 0; i < 7; i++) {
        const tempDate = new Date();
        tempDate.setDate(date.getDate() + i);
        dates.push(tempDate);
    }
    return dates;
};

export const getTextColorByBackgroundColor = color => {
    return [Colors.DARK_BLUE, Colors.PINK, Colors.PURPLE, Colors.GREEN, Colors.RED].includes(color) ? '#fff' : '#333';
};
