const app = require('../app')
const request = require('supertest');
const { mongoose } = require('../../config/db')
    
    afterAll(async () => {
      await mongoose.connection.db.collection('users').deleteMany({});
      await mongoose.disconnect();
    }); 
    describe('GET /api/home', () => {
      it('should return 200 OK', async () => {
        const response = await request(app).get('/api/home');
        expect(response.statusCode).toEqual(200);
      });
    });
    describe('GET /api/users/new', () => {
      it('should load new user form successfully', async () => {
        const response = await request(app).get('/api/users/new')
        expect(response.statusCode).toEqual(200);
      });
    })
    describe('POST /api/users/new', () => {
      it('should create a new user successfully', async () => {
        const response = await request(app).post('/api/users/new').send({
          name: 'matanew',
          email: 'matanew@example.com',
          password: '123123'
        });
        expect(response.status).toBe(201);
      });      
    });
    describe('GET /api/users', () => {
       it('should load all users 200 OK', async () => {
          const response = await request(app).get('/api/users');
          expect(response.statusCode).toEqual(200);
       }); 
    })
    describe('GET /api/users/update', () => {
      it('should load update form 200 OK', async () => {
         const response = await request(app).get('/api/users/update');
         console.log(response)
         expect(response.statusCode).toEqual(200);
      }); 
    })
    describe('GET /api/users/delete', () => {
      it('should load delete form 200 OK', async () => {
         const response = await request(app).get('/api/users/delete');
         console.log(response)
         expect(response.statusCode).toEqual(200);
      }); 
    })
    describe('DELETE /api/users/delete', () => {
      it('should delete all users 200 OK', async () => {
         const response = await request(app).delete('/api/users/delete');
         expect(response.body).toEqual([]);
         expect(response.statusCode).toEqual(201);
      }); 
    })