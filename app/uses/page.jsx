import { useMDXComponent } from "next-contentlayer/hooks";
import { allOtherPages } from "contentlayer/generated";
import MDXComponents from "components/MDX/Components";

export const metadata = {
 title: "What I use",
};

export default function Uses() {
 const uses = allOtherPages.find((page) => page.slug === "uses");
 const Component = useMDXComponent(uses.body.code);

 return (
  <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center font-inter">
   <header>
    <h1 className="mt-6 mb-3 flex flex-wrap items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
     {uses.title}
     <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </h1>
   </header>
   <p className="pb-2 font-inter text-slate-600 dark:text-slate-400">{uses.description}</p>
   <section className="prose w-full max-w-none dark:prose-dark">
    <Component components={{ ...MDXComponents }} />
   </section>
  </article>
 );
}
