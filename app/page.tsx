import { ModeToggle } from "@/components/Dark";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex">
      <Button>Click me</Button>
      <ModeToggle />
      <UserButton />
    </div>
  );
}
