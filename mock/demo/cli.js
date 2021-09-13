
// cli.js
'use strict';
import { LowSync, JSONFileSync } from 'lowdb'


import faker from 'faker';
// const { company } = pkg;
// const faker = require('faker');
console.log('now: ',faker.name.findName());

const adapter = new JSONFileSync('file.json');
const db = new LowSync(adapter);

db.read()
db.data = { task: [],alarm: [] }
// db.data = db.data || { task: [],alarm: [] }

// db.data.posts.push({ title })


for (let index = 0; index < 8; index++) {


   let task_name ='tsk'+faker.datatype.number()
   let  protocol = faker.internet.protocol()
   let ip = faker.internet.ip()

    db.data.task.push(
        {
            'task_name':task_name ,
            'protocol':protocol,
            'hots':ip,
        }
    
    )


    db.data.alarm.push(
        {
            'task_name': task_name,
            'protocol':protocol,
            'result':faker.datatype.boolean()
        }
    
    )

    
}



db.write()
