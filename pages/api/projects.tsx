import type { NextRequest } from 'next/server';

// Cloudflare
import { D1Database } from "@cloudflare/workers-types";

export const config = {
    runtime: 'edge',
}


export default async function ProjectsHandler(){
    // @ts-ignore
    const { DB } = (process.env as { DB: D1Database }); 

    try{
        const { results } = await DB.prepare('SELECT * FROM Projects').bind().all();
        return new Response(JSON.stringify({ results: results ?? null }))
    }catch(err: any){
        // console.log("value =>", DB)
        return new Response(JSON.stringify({ error: err.message ?? 'Something went wrong'}))
    }
}