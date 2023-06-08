import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section  className="w-full flex-center flex-col">
      <h1 className="text-center head_text" >Discover & Share
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center" > AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center" >Promtopia is an open source AI prompting tool for modern world to discover, create and share prompts</p>
    
    
    <Feed />
    </section>
  )
}
