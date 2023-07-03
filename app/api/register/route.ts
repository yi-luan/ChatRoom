import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import {NextFetchEvent, NextResponse} from "next/server";

export async function POST(
    request : Request
){
    try{
        
        const body = await request.json();
        const {email,name,password} = body;

        if(!email || !password || !name) return new NextResponse('Missing info',{ status:400 });

        const hashedPassword = await bcrypt.hash(password,12)

        const user = await prisma.user.create({
            data:{
                email,
                name,
                hashedPassword
            }
        })
        return NextResponse.json(user);

    }catch(ex:any){
        console.log(66666);
        console.log(ex,'REGISTRATION_ERROR');
        return new NextResponse('Internal Error', {status : 500});
    }
}