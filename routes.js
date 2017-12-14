
const express = require('express');
const router = express.Router();

let heroes = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

router.get('/heroes', (req, res) => {
  if( typeof req.query.name !== 'undefined') {
    res.json(heroes.filter(hero => hero.name.toLowerCase().includes(req.query.name.toLowerCase())));
  } else if( typeof req.query.id !== 'undefined') {
    res.json(heroes.find(hero => hero.id == req.query.id));
  } else {
    res.json(heroes);
  }
})

router.post('/heroes', (req, res) => {
  const newHero = Object.assign(req.body, { id: heroes.length + 1 });
  heroes.push(newHero)
  res.json(newHero);
})

router.get('/heroes/:id', (req, res) => {
  console.log(heroes.find(hero => hero.id == req.params.id))
  res.json(heroes.find(hero => hero.id == req.params.id));
})

router.put('/heroes/:id', (req, res) => {
  let heroToChange = heroes.find(hero => hero.id == req.params.id)
  heroToChange.name = req.body.name
  res.json(heroToChange);
})

router.delete('/heroes/:id', (req, res) => {
  heroes = heroes.filter(hero => hero.id != req.params.id);
  res.json(heroes);
})

module.exports = router;
