// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connecto to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('593f1e11d5d0cc50c9616fbd')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('593dcbd06be42e0b38cec3ee')
    }, {
        $set: {
            name: 'Marius'},
        $inc: {
        age: 1
        }
    }, {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});