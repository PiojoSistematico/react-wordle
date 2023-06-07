export default function calculateWinner(arr: any[][]): boolean {
  return arr.some((word) => word.every((elem) => elem == "Right"));
}
