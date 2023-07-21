export async function GET() {
  return new Response(JSON.stringify({ message: "hello world" }), {
    headers: { "Content-Type": "application/json" },
  });
}
