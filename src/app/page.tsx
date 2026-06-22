import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>Enter Blog System</h2>

        <p>
          The NomadLifeXP system is designed to help you build discipline,
          consistency, and mental clarity through structured daily habits.
        </p>
      </section>
    </main>
  );
}