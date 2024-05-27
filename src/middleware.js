import { updateSession,getSession, login, logout } from "./lib";
import { redirect } from 'next/navigation';
export default async function middleware(request,res) {
  const currentUser = await getSession();
  // return await updateSession(request);
  // if (!currentUser && request.nextUrl.pathname.includes('/myDashboard')) {
  //   return Response.redirect(new URL('/', request.url))
  // }
  // if(currentUser && request.nextUrl.pathname == '/'){
  //   return Response.redirect(new URL('/myDashboard',request.url))
  // }
  
}
