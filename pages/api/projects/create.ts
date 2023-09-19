import type { NextRequest } from 'next/server';

// Cloudflare
import { D1Database } from "@cloudflare/workers-types";

export const config = {
    runtime: 'edge',
}


export default async function handler(request: Request){
    const url = new URL(request.url);

    const name = decodeURIComponent(url?.searchParams.get("name") || "");
    const link = decodeURIComponent(url?.searchParams.get("link") || "");
    const repo = decodeURIComponent(url?.searchParams.get("repo") || "");
    const image = decodeURIComponent(url?.searchParams.get("image") || "");
    const description = decodeURIComponent(url?.searchParams.get("description") || "");

    // // const apiAuth = request.headers?.authorization
    // // if(apiAuth !== process.env.NEXT_PUBLIC_LOCAL_API_KEY){
    // //     return Response.json({error: 'Unauthorized User.. Banned Will Be A Respones'})
    // // }

    if(request.method === 'POST'){
        // if(!name && !link && !repo && !image && !description) return Response.json({error: '/api/projects/create?name=projectname&link=projectlink&repo=projectrepo&description=projectdescription'});
    
        // @ts-ignore
        const { DB } = (process.env as { DB: D1Database }); 
    
        try{
            const { results } = await DB.prepare('INSERT INTO Projects (name, link, image, repo, description) VALUES (?1,?2 ,?3 ,?4 ,?5 );').bind(name, link || "", image || "", image || "", description || "").run()
            return new Response(JSON.stringify({ results: results ?? null }))
        }catch(err: any){
            return new Response(JSON.stringify({ error: err.message ?? 'Something went wrong'}))
        }
    }
}