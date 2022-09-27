import { About, Divider, MainFooter, Hero } from "../components";
function Home() {
  return (
    <>
      <div className="mt-6 h-[80vh]">
        {/* <Header /> */}
        <Hero />
        <Divider />
      </div>
      <div className="h-[80vh]">
        <About />
        <MainFooter />
      </div>
    </>
  );
}

export default Home;
