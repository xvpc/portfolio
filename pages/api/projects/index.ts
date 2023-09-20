// Cloudflare
import { D1Database } from "@cloudflare/workers-types";

export const config = {
    runtime: 'edge',
}

const headers = {
    'content-type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "*",
    "Origin": "*"
} 


export default async function handler(request: Request){
    if(request.method === 'GET'){
        // @ts-ignore
        const { DB } = (process.env as { DB: D1Database }); 
    
        try{
            const { results } = await DB.prepare('SELECT * FROM Projects').bind().all();
            return new Response(JSON.stringify({ results: results ?? null }), {
                status: 200,
                headers,
            })
        }catch(err: any){
            return new Response(JSON.stringify({ error: err.message ?? 'Something went wrong'}), {
                status: 500,
                headers,
            })
        }
    }
}