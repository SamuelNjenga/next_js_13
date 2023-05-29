import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}

export async function GET_TWO(request) {
  redirect("https://nextjs.org/");
}