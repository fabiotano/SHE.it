import { redirect } from 'next/navigation';

import { createClient } from '@/app/lib/supabase/server';

export default async function Home() {
  // const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect('/admin/login');
  // }

  return <p>Logged</p>;
}
