import "./globals.css";
import Menu from '../components/Navbar/Menu';
import ContactInfo from "@/components/Navbar/ContactInfo";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import SideMenu from "@/components/SideMenu/SideMenu";

export const metadata = {
  title: "BRAC e-Tender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <ContactInfo></ContactInfo>
          <AuthProvider>
            <Menu></Menu>
            <div className="flex">
              <SideMenu></SideMenu>
              {children}
            </div>
          </AuthProvider>
          <Footer></Footer>  
        </main>
      </body>
    </html>
  );
}
