function syc(p) {
  setTimeout(() => console.log(`${p}()`), 1500);
}

function proms(p) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${p}()`);
    }, 1500);
  });
}

function f(p) {
  console.log(`${p}()`);
}

f('f');
f('g');
syc('sync');
proms('proms').then((resp) => {
  f('h');
  console.log(resp);
});
