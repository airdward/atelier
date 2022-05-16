import Container from "@components/Container";
import NextLink from "next/link";
import { config } from "@/config";
import { ConvertBytes } from "@lib/convertBytes";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function main({ public_repos_data, private_repos_data }) {
 return (
  <Container>
   <div className="will-change-contents absolute left-0 -top-1/2 bottom-0 right-0 pointer-events-none z-[-1] blur-[160px] dark:bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#0086F526_0deg,#040d21_67.5deg,#040d21_198.75deg,#040d21_251.25deg,#0086F517_301.88deg,#040d21_1turn)] bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#336FEF40_0deg,#fff_67.5deg,#fff_198.75deg,#fff_251.25deg,#336FEF2B_301.88deg,#fff_1turn)]"></div>
   <div className="mx-auto -mt-24 flex min-h-screen flex-1 flex-col justify-center duration-300 md:w-[90%] xl:w-4/5">
    <div className="md:grid-cols-0 grid lg:grid-cols-5">
     <div className="md:col-span-3">
      <h1 className="dark:color-black mx-0 mt-0 mb-0 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[49px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-left md:text-[55px] lg:text-[67px] xl:text-[75px]">{config.header.title}</h1>
      <h3 className="text-center font-poppins text-[1.5rem]  font-semibold md:text-left">{config.header.subtitle}</h3>
      <p className="mt-2 text-center font-poppins text-slate-600 dark:text-slate-400  md:w-3/4 md:text-left">{config.header.description}</p>
      <div className="mt-4 flex justify-center md:block">
       <NextLink href="/#about"> 
        <a className="arrow animatedLink group relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold" href="#about">
         More about me
         <svg xmlns="http://www.w3.org/2000/svg" className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
          <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
         </svg>
        </a>
       </NextLink>
      </div>
     </div>
     <div className="hidden items-center md:col-span-3 md:mt-8 md:flex lg:col-span-2 smallDesktop:col-span-2">
      <div className="block w-full rounded-md border-[1px] border-[#3391fc]/[40%] p-4 font-poppins text-sm shadow-codeLight transition-colors dark:border-white/[15%] dark:bg-[#08152b] dark:shadow-codeDark	">
       <div>
        <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{config.header.code.default.user}</span>{" "}
        <span className="italic">
         <span className="font-semibold text-slate-700 duration-200 dark:text-slate-300">$</span>{" "}
         <span>
          list github --user=
          <NextLink href={`https://github.com/${config.social.github.username}`}>
           <a target="_blank">"{config.social.github.username}"</a>
          </NextLink>
         </span>
        </span>
        <br />
        <span className="leading-6">
         + <span className="font-semibold">{public_repos_data.totalCount} Open Source</span> {public_repos_data.totalCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(public_repos_data.totalDiskUsage * 1000)})
         <br />- <span className="font-semibold">{private_repos_data.totalCount} Closed Source</span> {private_repos_data.totalCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(private_repos_data.totalDiskUsage * 1000)})
        </span>
       </div>
       {config.header.code.lines.map((line, index) => (
        <div key={index}>
         <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{line.user}</span>{" "}
         <span className="italic">
          <span className="font-semibold text-slate-700 duration-200 dark:text-slate-300">$</span> <span>{line.command}</span>
         </span>
         <br />
         <span className="leading-6">{line.response}</span>
        </div>
       ))}
       <div>
        <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{config.header.code.default.user}</span>{" "}
        <span className="italic">
         <span className="relative font-semibold text-slate-700 duration-200 after:absolute after:top-0 after:right-[-1.5em] after:bottom-0 after:my-auto after:animate-cursor after:text-[1em] after:not-italic after:content-['▌'] dark:text-slate-300">$</span>
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="text-center mx-auto" id={'about'}><h1 className="dark:color-black mx-0 mt-0 mb-0 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[20px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-[20px] lg:text-[40px] xl:text-[55px]">Soon!</h1></div>
  </Container>
 );
}

export async function getStaticProps() {
 const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
 });

 const authLink = setContext((_, { headers }) => {
  return {
   headers: {
    ...headers,
    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
   },
  };
 });

 const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 });

 const public_repos = await client.query({
  query: gql`
   {
     user(login: \"${config.social.github.username}\") {
      repositories(
        isFork: false
        isLocked: false
        privacy: PUBLIC
        orderBy: {field: STARGAZERS, direction: DESC}
        ownerAffiliations: OWNER
      ) {
        totalCount
        totalDiskUsage
      }
     }
   }
   `,
 });

 const private_repos = await client.query({
  query: gql`
    {
      user(login: \"${config.social.github.username}\") {
       repositories(
         isFork: false
         isLocked: false
         privacy: PRIVATE
         orderBy: {field: STARGAZERS, direction: DESC}
         ownerAffiliations: OWNER
       ) {
         totalCount
         totalDiskUsage
       }
      }
    }
    `,
 });

 const public_repos_data = public_repos.data.user.repositories;
 const private_repos_data = private_repos.data.user.repositories;
 return {
  props: {
   public_repos_data,
   private_repos_data,
  },
 };
}
