import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto">
        <section className="container py-32 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="flex flex-col items-center text-center gap-6 max-w-[800px] mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Build beautiful applications with modern tools and frameworks. Experience the next generation of web development.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
            Get Started
          </button>
          <button className="border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <section className="container py-24">
      <div className="flex flex-col items-center text-center gap-8 max-w-[800px] mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">
          Powerful Features
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover all the tools and features that make our platform stand out from the rest.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-4 p-6 rounded-lg border">
              <div className="w-12 h-12 rounded-full bg-primary/10" />
              <h3 className="font-semibold">Feature {i}</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-24 bg-muted/50">
      <div className="flex flex-col items-center text-center gap-8 max-w-[800px] mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">
          Get Started Today
        </h2>
        <p className="text-lg text-muted-foreground">
          Join thousands of developers who are already building amazing things with our platform.
        </p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
          Start Building
        </button>
      </div>
    </section>
  </div>
    </Layout>
  );
}
