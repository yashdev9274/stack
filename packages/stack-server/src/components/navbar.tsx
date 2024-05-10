'use client';

import { Text, UserButton } from "@stackframe/stack";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useColorScheme } from "@mui/joy";

export function Navbar({ ...props }) {
  const { mode, setMode } = useColorScheme();
  return (
    <div>
      <header
        className={`sticky top-0 z-30 flex items-center justify-between border-b-0 border-x-0 px-4 ${props.className || ""}`}
        style={{ height: `50px` }}
      >
        <div className="flex items-center justify-center">
          <Logo full height={24} href="/projects" className="h-6" />
        </div>
        <div className="flex items-center">
          <div className="flex gap-4 mr-8 items-center">
            <Link href="mailto:team@stack-auth.com">
              <Text size='sm' variant='secondary'>Feedback</Text>
            </Link>
            <Link href="https://docs.stack-auth.com/">
              <Text size='sm' variant='secondary'>Docs</Text>
            </Link>
          </div>
          <UserButton colorModeToggle={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
        </div>
      </header>
      <Separator/>
    </div>
  );
}