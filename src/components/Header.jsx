"use clientF";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { SquareLibrary } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FolderHeart } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <>
      <header className="border-b-2 border-black rounded-b-xl sticky top-0 z-10 p-1 dark:bg-black/10 pr-1 sm:px-5 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="dark:text-black" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href={"/"}
                      className="cursor-pointer text-xl tracking-wider flex justify-center items-center my-10"
                    >
                      <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={100}
                        height={100}
                        priority
                        className="w-10 h-10"
                      />
                      <p className="text-xl font-bold ml-2 text-blue-600">
                        Movie
                      </p>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center mt-5">
                  <ul className="text-lg font-bold">
                    <Link href={"/movies"} className="text-center ">
                      <li className="pb-6">All Movies</li>
                    </Link>
                    <Link href={"/tv"} className="text-center">
                      <li>All T.V Shows</li>
                    </Link>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link href={"/"}>
            <p className="text-2xl font-semibold tracking-wider text-blue-600">
              Movie
            </p>
          </Link>
          <nav id="nav-bar" className="hidden sm:block">
            <ul className="text-lg text-blue-600 font-bold flex space-x-7">
              <Link href={"/movies"}>
                <li>All Movies</li>
              </Link>
              <Link href={"/tv"}>
                <li>All T.V Shows</li>
              </Link>
            </ul>
          </nav>
          <div className="flex justify-between items-center space-x-3 md:space-x-5">
            <Link href={"/watch_later"}>
              <div className="relative">
                <SquareLibrary className="text-xl font-bold text-blue-600" />
                <p className="bg-red-500 w-5 h-5 text-white rounded-full flex justify-center items-center text-xs font-bold absolute top-[-8px] right-[-12px]">
                  1
                </p>
              </div>
            </Link>
            <Link href={"/favorite"}>
              <div className="relative">
                <FolderHeart className="text-xl font-bold text-blue-600" />
                <p className="bg-red-500 w-5 h-5 text-white rounded-full flex justify-center items-center text-xs font-bold absolute top-[-8px] right-[-12px]">
                  1
                </p>
              </div>
            </Link>
            <ModeToggle />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
