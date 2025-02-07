import { getIronSession } from 'iron-session';
import { defaultSession, SessionData, sessionOptions } from '../lib/lib';
import { cookies } from 'next/headers';

export const getSession=async()=>{
    const cookieStore = await cookies();
    const session=await getIronSession<SessionData>(cookieStore,sessionOptions);
    if(!session.isLogin){
        session.isLogin=defaultSession.isLogin;
        
    }
    console.log(session);
    return session;

}
export const login=()=>{
    
}
export const logout=()=>{
    
}