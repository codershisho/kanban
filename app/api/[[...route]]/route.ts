import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { drizzle } from "drizzle-orm/d1"
import { users } from '@/db/schema'

type Bindings = {
    DB: D1Database
}

export const runtime = 'edge'

const app = new Hono<{ Bindings: Bindings }>().basePath('/api')

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello Next.js!',
    })
})


app.get("/users", async (c) => {
    try {
        const db = drizzle(process.env.DB)
        const results = await db.select().from(users).all()
        return c.json(results)
    } catch (e) {
        console.error(e)
        return c.json({ err: e }, 500)
    }
})

export const GET = handle(app)
export const POST = handle(app)