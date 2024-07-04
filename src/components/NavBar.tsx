import React from "react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav
      className={
        "sticky h-14 z-30 t-0 w-full border-b border-gray-300 bg-white/75 backdrop-blur-lg transition-all"
      }
    >
      <MaxWidthWrapper>
        <div
          className={
            "flex h-14 items-center justify-between border-b border-zinc-200"
          }
        >
          <Link
            href={"/"}
            className={
              "flex items-center justify-between font-bold font-serif gap-2"
            }
          >
            <Image src={"/logoImg.png"} alt={"logo"} width={50} height={50} />
            Arnica
          </Link>
          {/*mobile nav bar*/}

          <div className={"sm:flex items-center space-x-4 hidden"}>
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
              href={"/pricing"}
              target={"_blank"}
            >
              Pricing
            </Link>

            <SignedOut>
              <Link
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
                href={"/dashboard"}
              >
                Sign In
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>

            <Link
              className={buttonVariants({
                size: "sm",
              })}
              href={"/dashboard"}
              target={"_blank"}
            >
              Get Started <ArrowRight className={"w-5 h-5 ml-2"} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
