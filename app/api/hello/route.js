// app/api/hello/route.js
export async function GET(request, { params }) {
  return new Response(
    JSON.stringify({ text: "Hello from Route Handler", params: params }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
