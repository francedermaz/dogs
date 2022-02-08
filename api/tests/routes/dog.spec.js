/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Example',
  image: 'www.none.com',
  height: '5',
  weight: '7',
  life_span: '9 years',
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs/:id', () => {
    it('should get 200', () =>
      agent.get('/dogs/4').expect(200)
    );
  });
  it('should return an array', async() => {
    const res = await agent.get('/temperament');
    expect(res.body).to.be.an('array');
    });
});