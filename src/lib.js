'use server'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1000 sec from now")
    .sign(key);
}

export async function decrypt(input){
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData) {
  // Verify credentials && get the user
  const user = { username: formData.get("name"), password: formData.get("password") };
  if(user.username != 'mohi' && user.password != 'abc123$'){
    return;
  }
  // Create the session
  const expires = new Date(Date.now() + 1000 * 1000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookies().set("currentUser", session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("currentUser", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("currentUser")?.value;
  if (!session) return null;
  return await decrypt(session);
}

//Not used at this momemt
export async function updateSession(request) {
  const session = request.cookies.get("currentUser")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expires
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 1000 * 1000);
  const res = NextResponse.next();
  if (session && request.nextUrl.pathname.includes('/myDashboard')) {
     res.redirect(new URL('/dashboard', request.url))
  }
  res.cookies.set({
    name: "currentUser",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}