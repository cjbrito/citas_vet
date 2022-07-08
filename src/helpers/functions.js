export const genId = () => {
  const part1 = Math.random().toString(36).substring(2);
  const part2 = Date.now().toString(36);
  return part1 + part2
}