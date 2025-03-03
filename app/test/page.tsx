import { createClient } from '@/utils/supabase/server';
export default async function Home() {
  const supabase = await createClient();
    const  {data: instruments}  = await supabase
    .from("test")
    .select("id")

    console.log(instruments[0].id);

    return (
        <div></div>

    );}