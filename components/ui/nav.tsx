import Link from "next/link"

import { cn } from "@/lib/utils"


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  return (


    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 bg-black", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary font-sans"
      >
        Home
      </Link>
      <Link
        href="/support"
        className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary font-sans"
      >
        Support
      </Link>

      <Dialog>
        <DialogTrigger className="text-sm font-medium text-neutral-600 text-muted-foreground transition-colors hover:text-primary font-sans flex place-items-center">
        Join</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-black border-zinc-800 min-w-[43%]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            We'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

      </DialogContent>
      </Dialog>


      

    </nav>
  )
}