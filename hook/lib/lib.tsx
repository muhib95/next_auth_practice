import { SessionOptions } from "iron-session";
export interface SessionData{
    userId?:string;
    username?:string;
    img?:string;
    isPro?:boolean;
    isLogin:boolean
}

export const defaultSession:SessionData={
isLogin:false
}

export const sessionOptions:SessionOptions={
    password:process.env.SECRET_KEY!,
    cookieName:"my-session",
    cookieOptions:{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production"
    }

}