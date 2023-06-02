export default function calculateNextElemnt(
  length: number,
  str: string
): string {
  const digits = str.split("");
  return length - 1 == Number(digits[1])
    ? `${Number(digits[0]) + 1}0`
    : `${digits[0]}${Number(digits[1]) + 1}`;
}
