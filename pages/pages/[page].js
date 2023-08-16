import React from 'react'
import PageType1 from '@/layout/pageTypes/pageType1';
import PageType2 from '@/layout/pageTypes/pageType2';
import Contact from '@/layout/pageTypes/contact';
import Careers from '@/layout/pageTypes/careers';
import { useRouter } from 'next/router'

const Page = () => {

  const router = useRouter();
  const pageName = router.query.page;

  return (
    <div>
        <PageType1 pageName={pageName} />
        <PageType2 pageName={pageName} />
        <Careers pageName={pageName} />
        <Contact pageName={pageName} />
    </div>
  )
}

export default Page;