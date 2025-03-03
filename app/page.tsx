import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from '@/utils/supabase/server';
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
    const { data: instruments } = await supabase.from("test").select("id");
  return (
    <>
    
      
      <main className="flex flex-col h-screen gap-6 px-4">
       <h1 className="text-center text-4xl">Adopt a Dog!</h1>
       <div className="flex flex-col grid grid-cols-3 gap-4 max-h-screen overflow-y-auto">
       <Image
          className="rounded-lg"
          src="/dog-pictures/dog1.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog2.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
                <Image
          className="rounded-lg"
          src="/dog-pictures/dog3.jpg"
          alt="Dog"
          width={500}
          height={500}
        />

<Image
          className="rounded-lg"
          src="/dog-pictures/dog4.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
<Image
          className="rounded-lg"
          src="/dog-pictures/dog5.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog6.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog7.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog8.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog9.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog10.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog11.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog12.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog13.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog14.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog15.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog16.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog17.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        <Image
          className="rounded-lg"
          src="/dog-pictures/dog18.jpg"
          alt="Dog"
          width={500}
          height={500}
        />
        
        </div>
        
        
      </main>
    </>
  );
}
