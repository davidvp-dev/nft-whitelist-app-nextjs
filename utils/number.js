export default function fixedNumber(number) {
    const fixedNumber = (Number(number) / 1000000000000000000).toFixed(4);
    return fixedNumber.replace(/\.?0+$/, ''); //remove trailing zeros
}