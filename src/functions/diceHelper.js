export function roll(sides = 6, number = 1) {
  let result = 0;

  while (number > 0) {
    result += Math.ceil(Math.random() * sides);
    number--;
  }

  return result;
}

export function rollStat() {
  let throws = new Array();

  for (let i = 1; i <= 4; i++) {
    throws.push(roll());
  }

  throws.sort().shift();

  return throws.reduce((p, a) => p + a, 0);
}
