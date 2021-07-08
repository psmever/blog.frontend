import { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SectionGubunItem } from 'CommonTypes';
import { PageSpinner } from '@Element/Spinners';
import { WriteWrapper } from '@Style/WrtePageStyle';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DtlPage = lazy(() => import('./Dtls/SectionsWrite'));

export default function SectionsWritePage() {
    const { storeRouterLocation } = useSelector((store: RootState) => ({
        storeRouterLocation: store.router.location,
    }));

    const { section_gubun } = useParams<{
        section_gubun: SectionGubunItem;
    }>();

    let pageTitle = '';

    if (section_gubun === 'scribble') {
        pageTitle = '끄적끄적';
    } else if (section_gubun === 'blog') {
        pageTitle = '블로그 소개';
    } else if (section_gubun === 'mingun') {
        pageTitle = '주인장은';
    }

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>:: NicePage Blog :: {`${pageTitle} 관리`}</title>
                <link rel="canonical" href={`https://blog.nicepage.pe.kr${storeRouterLocation}`} />
            </Helmet>
            <WriteWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </WriteWrapper>
        </HelmetProvider>
    );
}
