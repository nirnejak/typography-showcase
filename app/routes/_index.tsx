import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Typography Showcase" },
    { name: "description", content: "A gallery of beautiful fonts" },
  ];
};

export default function Index() {
  return (
    <main className="grid place-content-center min-h-screen">
      <h1 className="md:text-5xl text-3xl tracking-tighter font-bold">
        Typography Showcase
      </h1>
    </main>
  );
}
