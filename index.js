import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';
import schema from './schema';


const app= express();

app.get('/',(req,res)=>{
    res.send('hii i am graph ql ')
})

const root = resolvers

app.use('/graphql' , graphqlHTTP({
    schema:schema,
    rootValue : root,
    graphiql : true
    
}))




app.listen(5000,()=>{console.log('app is  running ')});

