export default function fixedNumber(number) {
    return (Number(number) / 1000000000000000000).toFixed(5);
}