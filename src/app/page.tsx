import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

const Page = async () => {

  const users = await prisma.user.findMany();

  const something = true;

  return (
    <div className={cn("text-red-500 font-bold", something===true && "text-gray-500")}>
      Hello World
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <Button variant="outline">
          Click me
        </Button>
      </div>

      {JSON.stringify(users)}
    </div>
  )
}

export default Page;