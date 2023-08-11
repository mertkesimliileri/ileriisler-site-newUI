import React from 'react'
import PageType1 from '@/layout/pageTypes/pageType1';
import PageType2 from '@/layout/pageTypes/pageType2';
import Contact from '@/layout/pageTypes/contact';
import Careers from '@/layout/pageTypes/careers';
import { useRouter } from 'next/router'

const Page = () => {

  const router = useRouter();
  const id = router.query.page;

  return (
    <div>
        <PageType1 id={id} />
        <PageType2 id={id} />
        <Careers id={id} />
        <Contact id={id} />
    </div>
  )
}

export default Page;