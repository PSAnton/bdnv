"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Wallet2 } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";

// Privy login function
function usePrivyLogin() {
  
  
  React.useEffect(() => {
    if (!document.getElementById("privy-script")) {
      const script = document.createElement("script");
      script.id = "privy-script";
      script.src = "https://widget.privy.io/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  
  const handleLogin = React.useCallback(() => {
    // @ts-ignore
    if (window.Privy) {
      // @ts-ignore
      window.Privy.show();
    } else {
      window.addEventListener("privy:ready", () => {
        // @ts-ignore
        window.Privy.show();
      });
    }
  }, []);

  return handleLogin;
}

export function Navbar() {
  const handleLogin = usePrivyLogin();
  const { login, logout, ready, authenticated, user } = usePrivy();
  
  if (!ready) return <p>Loading...</p>;
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border/40">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-1">
              <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                <span className="text-primary font-bold text-sm">BNS</span>
              </div>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              Bahamut Name Service
            </span>
          </Link>
        </div>
        <div className="flex-1">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#security" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Security
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            className="hidden sm:flex items-center gap-2 text-sm border border-border/80 hover:bg-accent"
          >
            <Wallet2 className="w-4 h-4" />
            Connect Wallet
          </Button>
          {authenticated ? (
          <>
                         
            <Button onClick={logout} variant="outline"
            className="hidden sm:flex items-center gap-2 text-sm border border-border/80 hover:bg-accent shadow-md"><Wallet2 className="w-4 h-4" />Logout</Button>
          </>
        ) : (
          
            <Button onClick={login} variant="outline"
            className="hidden sm:flex items-center gap-2 text-sm border border-border/80 hover:bg-accent shadow-md"><Wallet2 className="w-4 h-4" />Login</Button>
        )}
        </div>
      </div>
    </div>
  );
}