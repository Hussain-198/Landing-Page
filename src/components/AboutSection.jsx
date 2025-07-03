import Carousel from "./Carousel";

function AboutSection() {
  return (
    <section className="min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-white text-2xl">
          Powering the world’s best product teams.
        </h5>
        <h5 className="text-zinc-600 text-2xl">
          From next-gen startups to established enterprises.
        </h5>
      </div>
      <Carousel className="mt-10" />
    </section>
  );
}

export default AboutSection;
