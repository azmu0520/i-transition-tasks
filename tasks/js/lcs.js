const ar = process.argv.slice(2);

let res = [];

ar.forEach((value) => {
  const min = value.length;
  for (let t = 0; t < min; t++) {
    for (let i = 0; i < min - t; i++) {
      const check = value.substring(i, i + t + 1);
      if (ar.every((el) => el.includes(check))) {
        res.push(check);
        break;
      }
    }
  }
});

res = Array.from(new Set(res)).sort((a, b) => b.length - a.length);

console.log(res[0] || '');
