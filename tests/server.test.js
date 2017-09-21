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
    if (err) {
        throw new Error(err);
        console.log('Error connecting to mongodb.');
    }
});

describe('PETS API', () => {
    let petId = new String;
    let pet = {
        name: 'nameTest',
        species: 'speciesTest',
        owner: 'ownerTest',
        address: 'addressTest',
        phone: 'phoneTest',
        email: 'emailTest',
        visit: '1990-01-01'
    };
    let pet1 = {
        name: 'nameTestONE',
        species: 'speciesTestONE',
        owner: 'ownerTestONE',
        address: 'addressTestONE',
        phone: 'phoneTestONE',
        email: 'emailTestONE',
        visit: '1990-01-01'
    };

    beforeEach((done) => {
        new Pet(pet)
        .save((err, savedPet) => {
            if (err) return done(err);
            petId = savedPet._id;
            done();
        });
    });

    afterEach((done) => {
        Pet.findByIdAndRemove(petId, (err) => {
            if (err) return done(err);
            done();
        });
    });

    describe('[GET] /', (done) => {
        it('Should return the correct string.', (done) => {
            chai.request(url).get('/').end((err, res) => {
                if (err) return done(err);
                expect(res.body.success).to.equal('Welcome to the pets database.');
                expect(res.status).to.equal(200);
                done();
            });
        });
    });
    
    describe('[POST] /new_pet', () => {
        it('Should succesfully add a new pet to the db.', (done) => {
            chai.request(url)
                .post('/new_pet')
                .send(pet1)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('name', 'nameTestONE');
                    expect(res.body).to.have.property('species', 'speciesTestONE');
                    expect(res.body).to.have.property('owner', 'ownerTestONE');
                    expect(res.body).to.have.property('address', 'addressTestONE');
                    expect(res.body).to.have.property('phone', 'phoneTestONE');              
                    expect(res.body).to.have.property('email', 'emailTestONE');
                    
                    done();
                });
        });
    });
});