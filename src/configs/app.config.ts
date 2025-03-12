export  interface AppConfig {
    userName : string ,
    email : string,
    logo:string,
    fullName : string,
    links : {
        linkedin :string ,
        facebook:string,
        github:string
    }
}

export const  DefaultConfig : AppConfig={
    userName :"Hasan Khaddour",
    email:"Hasan.b.khaddour@gmail.com",
    fullName:"Hasan Khaddour",
    logo:'favicon.png',
    links:{
        linkedin:"",
        facebook:"",
        github:""
    }

}