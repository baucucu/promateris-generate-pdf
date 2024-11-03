// app/api/hello/route.js
export async function GET(request) {
  return new Response(JSON.stringify({ text: "Hello from Route Handler" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
