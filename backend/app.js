import Express from 'express';
import fs from 'fs';
import cors from 'cors';
import { users } from './users.js';
import { offices } from './offices.js';
import { cities } from './cities.js';
import { news } from './news.js';
import { categories } from './categories.js';
import { positions } from './positions.js';
import { projects } from './projects.js';
import Guid from 'guid';
const jsonParser = Express.json();
const res = [];
import jwt from "jsonwebtoken";

const mockUser = {
  'jack1994': '12345'
}


const  mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpbiI6ImUucGFuY2hlbmtvIiwiUm9sZXMiOlsiVlBOIiwiR1NVSVRFIiwiQUQtQ09ORkxVRU5DRS1VU0VSUyIsIlRFQU1DSVRZIiwiTUgtR0FNRVBMQVRGT1JNIiwiTUhfQkFDS0VORF9BRE0iLCJMRl9CQUNLRU5EX0FETSJdLCJleHAiOjE2ODIxMTMwNDN9.Lr7Le4aFuCIl7hc9SpRXugl9jGorItySFXCp28aaKRc"
// const a = {
//   id: Guid.create(),
//   role: 1,
//   name: 'Петр',
//   city: 'Москва',
//   surname: 'Иванов',
//   fullName: 'Петр Иванов',
//   place:'14B',
//   position: 'Старший ux-дизайнер',
//   phone: '+79345882333',
//   birthday: new Date('11.02.1968'),
//   email: 'wdw1@mail.ru',
//   startDate:  new Date('11.08.2022'),
//   office: {
//     id: Guid.create(),
//     name: 'Бц "Престиж"',
//     city: 'Москва',
//     isActive: true,
//   },
//   age: 23,
//   isActive: true,
//   project: { id: Guid.create(), name: 'Мтс' },
// }

// const count = 100

// for(let i = 0; i< count; i++){
//   const age = Math.floor(Math.random() * 31)  + 15
//   res.push({
//     ...a,
//     id: Guid.create(),
//     city: i%2 === 0? cities[0] : i%3 === 0? cities[1]: cities[2],
//     role: i%2 === 0? 1 : i%3 === 0? 2: 3,
//     name: `Сотрудник_${i+1}`,
//     surname: `Сотрудников_${i+1}`,
//     fullName: `Сотрудник_${i+1} Сотрудников_${i+1}`,
//     place: `d${i+1}`,
//     position: i%2 === 0? positions[0] : i%3 === 0? positions[1]: positions[2],
//     phone: `+79315882333`,
//     email: `user_${i}@mail.ru`,
//     startDate: new Date(new Date() - Math.random()*(1e+12)),
//     birthday: new Date(new Date() - Math.random()*(1e+12)),
//     age: age,
//     office: i%2 === 0? offices[0] : i%3 === offices[1]? 2: offices[2],
//     project: i%2 === 0? projects[0] : i%3 === projects[1]? 2: projects[2]
//     });
// }

// fs.writeFileSync('users.json', JSON.stringify(res));

// const res = []

// const a = {
//   id: Guid.create(),
//   role: 1,
//   name: 'Петр',
//   city: 'Москва',
//   surname: 'Иванов',
//   fullName: 'Петр Иванов',
//   place:'14B',
//   position: 'Старший ux-дизайнер',
//   phone: '+79345882333',
//   birthday: new Date('11.02.1968'),
//   email: 'wdw1@mail.ru',
//   startDate:  new Date('11.08.2022'),
//   office: {
//     id: Guid.create(),
//     name: 'Бц "Престиж"',
//     city: 'Москва',
//     isActive: true,
//   },
//   age: 23,
//   isActive: true,
//   project: { id: Guid.create(), name: 'Мтс' },
// }

// const count = 100

// for(let i = 0; i< count; i++){
//   const age = Math.floor(Math.random() * 31)  + 15
//   res.push({
//     ...a,
//     id: Guid.create(),
//     role: i%2 === 0? 1 : i%3 === 0? 2: 3,
//     name: `Сотрудник_${i+1}`,
//     surname: `Сотрудников_${i+1}`,
//     fullName: `Сотрудник_${i+1} Сотрудников_${i+1}`,
//     place: `d${i+1}`,
//     position: i%2 === 0? positions[0].label : i%3 === 0? positions[1].label: positions[2].label,
//     phone: `+79315882333`,
//     email: `user_${i}@mail.ru`,
//     startDate: new Date(new Date() - Math.random()*(1e+12)),
//     birthday: new Date(new Date() - Math.random()*(1e+12)),
//     age: age,
//     office: i%2 === 0? offices[0] : i%3 === offices[1]? 2: offices[2],
//     project: i%2 === 0? projects[0] : i%3 === projects[1]? 2: projects[2]
//     });
// }

// fs.writeFileSync('users.json', JSON.stringify(res));

// const count = 50;
// const n =  {
//   id: Guid.create(),
//   title: 'Новость1',
//   published: true,
//   summary: 'опа опа опапа вы везем с соьой кота',
//   description: 'как надо выращивать жмых',
//   created: new Date(),
//   category: { id: Guid.create(), title: 'корпоративные новости' },
//   author: {
//     id: Guid.create(),
//     name: 'Петр',
//     surname: 'Иванов',
//     fullName: 'Петр Иванов',
//     position: 'Старший разработчик информационных систем',
//     phone: '+79345884333',
//     email: 'wdw@mail.ru',
//     office: {
//       id: Guid.create(),
//       name: 'Бц "Престиж"',
//       city: 'Москва',
//       isActive: true,
//     },
//     experience: 3,
//     age: 43,
//     isActive: true,
//     photoUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR647xb6obvvTm3aIe-WYJai_Ee_zjMammJRJ1Pw5lKh-K-hBuiU-YT5rEMpKx7leH6t8g&usqp=CAU',
//     project: { id: Guid.create(), name: 'Мтс' },
//   },
// }

// for(let i = 0; i< count; i++){
//   const age = Math.floor(Math.random() * 31)  + 15
//   const authors = users.filter(u=> u.role === 2);

//   res.push({
//     ...n,
//     id: Guid.create(),
//     title: `Новость-${i}`,
//     summary:`Здесь краткое описание новости-${i}`,
//     description:`Здесь полное описание новости-${i}`,
//     created: new Date(new Date() - Math.random()*(1e+12)),
//     category: i%2 === 0? categories[0] : i%3 === 0? categories[1]: categories[2],
//     author: i%2 === 0? authors[0] : i%3 === 0? authors[1]: authors[2],
//     });
// }

// fs.writeFileSync('news.json', JSON.stringify(res));

export const server = () => {
  const app = Express();

  app.use(cors());

  app.get('/projects/:id', async (request, response) => {
    const id = request.params.id;
    const project = projects.find((z) => z.id === id);

    if (!project) response.status(404).send('Not found');

    response.send(project);
  });

  app.get('/positions', async (request, response) => {
    if (!positions?.length) {
      response.status(404).json({ message: 'file is not found' });
    }

    response.send(positions);
  });

  app.get('/offices', async (request, response) => {
    if (!offices?.length) {
      response.status(404).json({ message: 'file is not found' });
    }

    response.send(offices);
  });

  app.get('/cities', async (request, response) => {
    if (!cities?.length) {
      response.status(404).json({ message: 'file is not found' });
    }

    response.send(cities);
  });

  app.get('/newCategories', async (request, response) => {
    if (!categories?.length) {
      response.status(404).json({ message: 'file is not found' });
    }

    response.send(categories);
  });

  app.post('/news', jsonParser, async (request, response) => {
    const filter = request.body.filter;
    if (!filter) response.status(404).send('Not found');

    let { fullName, newCategories, skip = 0, take } = filter;

    const result = news
      .filter(
        (z) =>
          (!fullName?.trim() || z?.title?.toLowerCase().includes(fullName.trim().toLowerCase())) &&
          (!newCategories?.length || newCategories.find((x) => x == z.category.id))
      )
      .sort((a, b) => new Date(b.created) - new Date(a.created));

    response.send({ result: result.slice(skip, skip + take), total: result.length });
  });

  app.get('/news/:id', async (request, response) => {
    const id = request.params.id;
    const item = news.find((z) => z.id === id);

    if (!item) response.status(404).send('Not found');

    response.send(item);
  });

  app.post('/news/create', jsonParser, async (request, response) => {
    const data = request.body.data;
    if (!data) response.status(404).send('Not found');

    const category = categories.find((z) => z.id === data.category);

    const newData = {
      ...data,
      id: String(Guid.create().value),
      published: true,
      category,
      created: new Date(),
      author: { ...users[0] },
    };
    news.unshift(newData);

    response.send(newData);
  });

  app.post('/news/:id', jsonParser, async (request, response) => {
    const id = request.params.id;
    const newData = request.body.data;
    const category = newData.category.id ? newData.category : categories.find((z) => z.id === newData.category);
    const index = news.findIndex((z) => z.id === id);
    if (index === undefined) response.status(404).send('Not found');

    news[index] = {
      ...news[index],
     
      ...newData,
      category,
    };

    response.send(news[index]);
  });


  app.post('/auth/login', jsonParser, async (request, response) => {
    const {login, password} = request.body.data;
    if (!login || !password) response.status(400).send('All fields are required');

    if(!mockUser[login] || mockUser[login]!==password) {
      response.status(400).send('Invalid credentionals');
      return;
    }


    const token = jwt.sign(
      { user_id: users[0].id, email: users[0].email },
      mockToken,
      {
        expiresIn: "2h",
      }
    );

    response.send({token, id: users[0].id, user: users[0]});
  });

  app.post('/users', jsonParser, async (request, response) => {
    const filter = request.body.filter;
    if (!filter) response.status(404).send('Not found');

    users[0].birthday = new Date();
    users[1].birthday = new Date();
    users[2].startDate = new Date();
    users[3].startDate = new Date();
    let { fullName, city, position, skip = 0, take, startDateRange, birthday } = filter;


    const result = users.filter(
      (z) =>
        (!fullName?.trim() || z.fullName.toLowerCase().includes(fullName.trim().toLowerCase())) &&
        (!city?.length || city.find((x) => x == z.city.id)) &&
        (!position?.length || position.find((x) => x === z.position.id)) &&
        (!startDateRange || (new Date(z.startDate) >= new Date(startDateRange.start) && new Date(z.startDate) <= new Date(startDateRange.end))) &&
        (!birthday || new Date(birthday).getDate() === (new Date(z.birthday)).getDate() && new Date(birthday).getMonth() === (new Date(z.birthday)).getMonth())
    ).sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    take = take ?? result.length - skip;

    response.send({ result: result.slice(skip, skip + take), total: result.length });
  });

  app.get('/users/:id', async (request, response) => {
    const id = request.params.id;
    const item = users.find((z) => z.id === id);

    if (!item) response.status(404).send('Not found');

    response.send(item);
  });

  app.post('/users/:id', jsonParser, async (request, response) => {
    const id = request.params.id;
    const index = users.findIndex((z) => z.id === id);
    if (index === undefined) response.status(404).send('Not found');

    users[index] = {
      ...users[index],
      ...request.body.data,
    };
    response.send(users[index]);
  });

  return app;
};
