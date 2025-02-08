"use server";
import { getIronSession } from 'iron-session';
import { defaultSession, SessionData, sessionOptions } from '../lib/lib';
import { cookies } from 'next/headers';
import { error } from 'console';
import { redirect } from 'next/navigation';


let userName='muhib';
let isPro=true;
export const getSession=async()=>{
   
    const cookieStore = await cookies();
    const session=await getIronSession<SessionData>(cookieStore,sessionOptions);
    if(!session.isLogin){
        session.isLogin=defaultSession.isLogin;
        
    }
    console.log(session);
    return session;

}
export const login=async(  prevState: { error: undefined | string },
    formData: FormData)=>{
    const session=await getSession();

    const formUserName=formData.get('username') as string;
    const formPassword=formData.get('password') as string;
    if(formUserName!==userName){
return {error:"Wrong Credential"};
    }

     session.userId="1",
     session.username=formUserName,
     session.isPro=isPro,
     session.isLogin=true
await session.save();
redirect("/");
    
}
export const logout=async()=>{
    
}