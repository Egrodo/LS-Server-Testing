const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const Pet = require('../src/pets');
const server = require('../src/server');
const app = require('../src/app');
const { expect } = chai;
const url = 'http://localhost:3000';
chai.use(chaiHTTP);

mongoose.createConnection('mongodb://localhost/sandbox', {}, err => {
    if (err) throw new Error(err);
    console.log('Error connecting to mongodb.');
});

describe('PETS API', () => {
    // beforeEach((done) => {
    //     new Pet({
    //         name: 'nameTest',
    //         species: 'speciesTest',
    //         owner: 'ownerTest',
    //         address: 'addressTest',
    //         phone: 'phoneTest',
    //         email: 'emailTest',
    //         visit: '1990-01-01'
    //     })
    //     .save((err, savedPet) => {
    //         if (err) return done(err);
    //         done();
    //     });
    // });

    // afterEach((done) => {
    //     Pet.remove({}, (err) => {
    //         if (err) return done(err);
    //         done();
    //     });
    // });
    describe('[GET] /', () => {
        it('Should return the correct string.', done => {
            chai.request(url).get('/').end((err, res) => {
                if (err) return done(err);
                expect(res.body.success).to.equal('Welcome to the pets database.');
                expect(res.status).to.equal(200);
                done();
            });
        });
    });
    
    describe('[POST] /new_pet', () => {
        it('Should succesfully add a new pet to the db.', done => {
            let pet = {
                name: 'nameTest',
                species: 'speciesTest',
                owner: 'ownerTest',
                address: 'addressTest',
                phone: 'phoneTest',
                email: 'emailTest',
                visit: '1990-01-01'
            }
    
            chai.request(url)
                .post('/new_pet')
                .send(pet)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('name', 'nameTest');
                    expect(res.body).to.have.property('species', 'speciesTest');
                    expect(res.body).to.have.property('owner', 'ownerTest');
                    expect(res.body).to.have.property('address', 'addressTest');
                    expect(res.body).to.have.property('phone', 'phoneTest');              
                    expect(res.body).to.have.property('email', 'emailTest');
                    
                    done();
                });
        });
    });
});
