import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import SoloLogo from "./SoloLogo";
import { ChevronRight } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Sobre",
    "Contato",
    "Iniciar sessão",
    "Cadastre-se",
  ];

  return (
    
    <Navbar onMenuOpenChange={setIsMenuOpen} className="dark bg-solo text-white" position="static" >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SoloLogo width="100px"/>
        </NavbarBrand>
        
      </NavbarContent>

      <NavbarContent justify="end" className="gap-10 font-Metropolis text-sm">

          <NavbarItem className="hidden lg:flex" >
            <Link color="foreground" href="#" className="text-white text-sm">
              Sobre
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex ">
            <Link href="# " className="text-white text-sm">
              Contato 
            </Link>
          </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white text-sm">
            Iniciar sessão
            </Link>
        </NavbarItem>
        <NavbarItem className="">
          <Button as={Link} color="primary" href="#" variant="solid" className="m-0 gap-1 font-Metropolis-Bold">
            Cadastre-se<ChevronRight size={16} color="#ffffff" strokeWidth={3} absoluteStrokeWidth />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "foreground" : index === menuItems.length - 1 ? "foreground" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <div className="Ellipse-33"></div>
    </Navbar>
    
  );
}
