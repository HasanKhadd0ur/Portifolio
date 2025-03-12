export  interface AppConfig {
    userName : string ,
    email : string,
    logo:string,
    fullName : string,
    about:string,
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
    about:`
        Software Engineer with two year of experience in AI, Web
        Development and Software Architecture. Passionate about
        designing and developing scalable software solutions while
        leveraging the latest advancements in AI. Skilled in both backend
        and frontend development, problem-solving, and software
        architecture.`,
    links:{
        linkedin:"https://www.linkedin.com/in/hasan-khaddour/",
        facebook:"",
        github:"https://github.com/hasanKhadd0ur/"
    }

}