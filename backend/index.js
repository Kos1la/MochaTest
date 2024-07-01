import express, {request} from 'express'

const app = express()
app.use(express.json())

const users = [
    {
        name: 'Andrey',
        age:24,
        id:1,
},
    {
        
        name: 'NeAndrey',
        age:34,
        id:2,
    }
]


app.get('/', (req,res) => {
    res.send('SuperTest')
})


async function startApp() {
    try {
        app.listen(3000, () => console.log('Server started'))
    } catch (e) {
        console.log(e)
    }
}

startApp()

export default app