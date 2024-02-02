export default class Unit02 {
  static title = 'Array.reduce()';
  static topics = [
    'Array.reduce()',
    'Para fixar',
    'Exercício 1',
    'Exercício 2',
  ];
}

const cartoons = [
  {
    title: 'Tom and Jerry',
    episodes: 114,
    popularity: 9,
  },
  {
    title: 'Looney Tunes',
    episodes: 175,
    popularity: 8,
  },
  {
    title: 'Scooby-Doo',
    episodes: 390,
    popularity: 10,
  },
  {
    title: 'The Simpsons',
    episodes: 700,
    popularity: 9,
  },
  {
    title: 'Avatar: The Last Airbender',
    episodes: 61,
    popularity: 10,
  },
  {
    title: 'Pokémon',
    episodes: 1100,
    popularity: 9,
  },
  {
    title: 'Adventure Time',
    episodes: 283,
    popularity: 8,
  },
  {
    title: 'Dragon Ball Z',
    episodes: 291,
    popularity: 9,
  },
];

const model = {
  report: { titles: 0, totalEpisodes: 0, averagePopularity: 0 },
  sumPopularity: 0,
};

const { report } = cartoons.reduce(
  (acc, curr) => {
    acc.report.titles += 1;
    acc.report.totalEpisodes += curr.episodes;
  
    acc.sumPopularity += curr.popularity;
    acc.report.averagePopularity = acc.sumPopularity / acc.report.titles;

    return acc;
  },
  model
);

console.log(report);
