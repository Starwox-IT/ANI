import JoinNowForm from "./JoinNowForm";

export default function JoinNow() {
  return (
    <section className="container mx-auto px-4 py-26 max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Join Now
      </h2>
      <JoinNowForm />
    </section>
  );
}
