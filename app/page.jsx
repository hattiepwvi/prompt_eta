import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* head_text 有下划线，表示这是 globals.css 里面的 */}
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompteta is an open-source AI prompting tool for modern world to
        discover, create and share AI-powered prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
