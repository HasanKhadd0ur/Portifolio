
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoRedux,BiLogOutCircle, BiLogoJava } from "react-icons/bi";
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
		name: 'Jenkins',
		icon: BiLogoRedux,
		cssName: "jenkins"
	},
	{
		name: 'ASP.Net',
		icon: BiLogoRedux,
		cssName: "asp .net"
	},
	{
		name: 'Angular',
		icon: BiLogoRedux,
		cssName: "asp .net"
	},
	{
		name: 'Java',
		icon: BiLogoRedux,
		cssName: "asp .net"
	},
	{
		name: 'C#',
		icon: BiLogoRedux,
		cssName: "csharp"
	},
	{
		name: 'Git',
		icon: BsGit,
		cssName: "git"
	},
	{
		name: 'CI / CD',
		icon: BiLogOutCircle,
		cssName: "ci cd"
	},
	{
		name: 'C++',
		icon: TbBrandCpp,
		cssName: "cpp"
	},
	
];
