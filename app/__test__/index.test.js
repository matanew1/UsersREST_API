const app = require('../app')
const request = require('supertest');
const { mongoose } = require('../../config/db')
    
    afterAll(async () => {
        await mongoose.disconnect();
    });
  
    describe('GET /api/home', () => {
      it('should return 200 OK', async () => {
        await request(app).get('/api/home');
      });
    });
    

    describe('GET /api/users/new', () => {
      it('should load new user form successfully', async () => {
        await request(app).get('/api/users/new')
      });
    })

    describe('POST /api/users/new', () => {
      it('should create a new user successfully', async () => {
        const response = await request(app).post('/api/users/new').send({
          name: 'aba',
          email: 'aba@example.com',
          password: '123'
        });
        expect(response.status).toBe(201);
      });      
    });
