import { serve } from "https://deno.land/std@0.95.0/http/server.ts";

const PORT = 8080
const s = serve({port: PORT})

console.log('Runnning http://localhost:' + PORT + " ...")

for await(const req of s) {
    req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html"
        }),
        body: "<h1>Hello Coder s!!"
    })
}