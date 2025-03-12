
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

export interface SkillItem  {
    name:string,
    icon:any,
    cssName:string
}


export const SkillsList  : SkillItem[]  = [
	{
		name: 'HTML 5',
		icon: AiFillHtml5,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: BiLogoCss3,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: BiLogoJavascript,
		cssName: "java-script"
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		cssName: "type-script"
	},
	{
		name: 'React',
		icon: FaReact,
		cssName: "react"
	},
	{
		name: 'Redux ToolKit',
		icon: BiLogoRedux,
		cssName: "redux"
	},
	{
		name: 'Redux Recoil',
		icon: SiRecoil,
		cssName: "recoil"
	},
	{
		name: 'React Query',
		icon: SiReactquery,
		cssName: "react-query"
	},
	{
		name: 'RTK Query',
		icon: BiLogoRedux,
		cssName: "redux"
	},
	{
		name: 'Responsive Design',
		icon: FaMobileAlt,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: BsGit,
		cssName: "git"
	},
	{
		name: 'java',
		icon: BiLogoJava,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: TbBrandCpp,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: BsPuzzle,
		cssName: "problem-solving"
	}
];
