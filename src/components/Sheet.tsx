"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { NavigationMenuDemo } from './NavigationDropdown';
import { NavigationMenuDemo2 } from './NavigationDropdown';
import { NavigationMenuDemo3 } from './NavigationDropdown';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TiThMenu } from "react-icons/ti";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="md:hidden grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
                <TiThMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Nike Shoes</SheetTitle>
             
             
            </SheetHeader>
            {/* navbar */}
            <ul >
                <li className='grid  font-medium  '>
                    <Link href={""}><NavigationMenuDemo/></Link>
                    <Link href={""}><NavigationMenuDemo2/> </Link>
                    <Link href={""}><NavigationMenuDemo3/> </Link>
                    <Link className="ml-5 mt-2" href={""}>Kids </Link>
                    <Link className="ml-5 mt-3 " href={""}>Sale</Link>
                    <Link className="ml-5 mt-3 " href={""}>SNKRs </Link>

                </li>
            </ul>
            
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
