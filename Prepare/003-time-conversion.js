/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function amPmMod(amPm, hour) {
    if (hour === 12) {
        switch(amPm) {
            case 'PM':
                return 0;
            case 'AM':
                return -12
        }
    }
    switch(amPm) {
        case 'PM':
            return 12
        case 'AM':
            return 0
    }
}

const padHour = hour => hour < 10 ? '0' + hour : hour.toString();

function timeConversion(s) {
    const sans = s.substr(0, 8);
    const amOrPm = s.substr(8, 10);
    const parts = sans.split(':');
    const hourPart = parseInt(parts[0]);
    const hourMod = amPmMod(amOrPm, hourPart);
    const hour = hourPart + hourMod;

    return `${padHour(hour)}:${parts[1]}:${parts[2]}`
}
