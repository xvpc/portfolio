// Cloudflare
import { D1Database } from "@cloudflare/workers-types";

export const config = {
    runtime: 'edge',
}

const headers = {
    'content-type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "*",
    "Origin": "*"
} 

export default async function handler(request: Request){
    const url = new URL(request.url);

    const name = decodeURIComponent(url?.searchParams.get("name") || "") || null;
    const link = decodeURIComponent(url?.searchParams.get("link") || "") || null;
    const repo = decodeURIComponent(url?.searchParams.get("repo") || "") || null;
    const image = decodeURIComponent(url?.searchParams.get("image") || "") || null;
    const description = decodeURIComponent(url?.searchParams.get("description") || "") || null;


    if(request.method === 'POST'){
        if(!name && !link && !repo && !image && !description){
            return new Response(JSON.stringify({ error: '/api/projects/create?name=projectname&link=projectlink&repo=projectrepo&image=Projectimage&description=projectdescription'}), {
                status: 400,
                headers,
            })
        }
    
        
        const apiKey = request.headers?.get('Authorization')?.split(' ')[1] ?? '';
        if(apiKey !== process.env.NEXT_PUBLIC_API_KEY){
            return new Response(JSON.stringify({ error: 'Unauthorized User'}), {
                status: 401,
                headers,
            })
        }

        // @ts-ignore
        const { DB } = (process.env as { DB: D1Database }); 
    
        try{
            const { success } = await DB.prepare('INSERT INTO Projects (name, link, repo, image, description) VALUES (?1,?2 ,?3 ,?4 ,?5 );').bind(name, link || "", repo || "", image || "", description || "").run()
            return new Response(JSON.stringify({ success: success }), {
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