const app = require('../app')
const request = require('supertest');
const { mongoose } = require('../../config/db')
    
    describe('CREATE A USER -> DELETE A USER -> DELETE NON EXISTING ID', () => {
      let userId;   
      beforeAll(async () => { // Create a user to be deleted      
        const user = await request(app)
        .post('/api/users/new')
        .send({
          name: 'test user',
          email: 'testuser@example.com',
          password: '123456'
        });
        userId = user.body._id;
      });    
      it('should delete a user and return 200 OK', async () => {
        const response = await request(app).delete(`/api/users/delete/${userId}`);
        expect(response.statusCode).toEqual(201);
      });     
      it('should return 404 Not Found for non-existing user', async () => {
        const nonExistingId = '6024647b8afba92890de7d41';
        const response = await request(app).delete(`/api/users/${nonExistingId}`);
        expect(response.statusCode).toEqual(404);
      });
    });
    describe('CREATE 3 USERS -> SORT THEM BY NAME', () => {
      let user1, user2, user3;    
      beforeAll(async () => {
        // create 3 users
        const response1 = await request(app).post('/api/users/new').send({
          name: 'Charlie',
          email: 'charlie@example.com',
          password: '123456'
        });
        user1 = response1.body;
        
        const response2 = await request(app).post('/api/users/new').send({
          name: 'Alice',
          email: 'alice@example.com',
          password: '123456'
        });
        user2 = response2.body;
        
            const response3 = await request(app).post('/api/users/new').send({
              name: 'Bob',
              email: 'bob@example.com',
              password: '123456'
            });
            user3 = response3.body;
          }); 
          it('should create 3 users successfully', async () => {
            expect(user1.name).toEqual('Charlie');
            expect(user2.name).toEqual('Alice');
            expect(user3.name).toEqual('Bob');
          });  
          it('should sort the users by name alphabetically', async () => {
            const response = await request(app).get('/api/users');
            const users = response.body;
            
            // sort users by name
            const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
            
            expect(sortedUsers.length).toEqual(3);
            expect(sortedUsers[0].name).toEqual('Alice');
            expect(sortedUsers[1].name).toEqual('Bob');
            expect(sortedUsers[2].name).toEqual('Charlie');
          });   
          afterAll(async () => {
            // delete all users
            await request(app).delete('/api/users');
          });
    });
      
    // BASE CASES FOR USE //
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
    describe('PUT /api/users/update/:id', () => {
      it('should delete a user and return 200 OK', async () => {
        const userId = "64410171d903bf8e329bccfb";
         const response = await request(app).put(`/api/users/update/${userId}`)
         .send({
            name: '1',
            email: '1@example.com',
            password: '1'
         });
         expect(response.statusCode).toEqual(200);
      }); 
    })
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
    describe('DELETE /api/users/delete/:id', () => {
      it('should delete a user and return 200 OK', async () => {
         const userId = "6441005426291a8168d59272"; // Replace with an actual user ID
         const response = await request(app).delete(`/api/users/delete/${userId}`);
         expect(response.statusCode).toEqual(201);
      }); 
    })
    describe('DELETE /api/users/delete', () => {
      it('should delete all users 200 OK', async () => {
         const response = await request(app).delete('/api/users/delete');
         expect(response.body).toEqual([]);
         expect(response.statusCode).toEqual(201);
      }); 
    })
    