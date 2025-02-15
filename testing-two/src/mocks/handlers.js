import { http } from 'msw'


export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/users',(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json([
                {name:'Harry Potter'},
                {name:'Hermione'},
                {name:'Ron Weasley'},
            ])
        )
    })
]