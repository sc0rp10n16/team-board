import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return(
    <div>
      <div>
        this is screen for authenticated users only
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  );
}
