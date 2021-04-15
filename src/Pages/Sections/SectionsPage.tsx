import { lazy, Suspense } from 'react';
import { SectionGubunItem } from 'CommonTypes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainWrapper } from '@Style/PostDetailStyles';
import { PageSpinner } from '@Element/Spinners';
import { RootState } from 'StoreTypes';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DtlPage = lazy(() => import('./Dtls/SectionsDetail'));

export default function SectionsPage() {
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
                <title>:: NicePage Blog :: {`${pageTitle}`}</title>
                <link rel="canonical" href={`https://blog.nicepage.pe.kr${storeRouterLocation}`} />
            </Helmet>
            <MainWrapper>
                <Suspense fallback={<PageSpinner />}>
                    <DtlPage />
                </Suspense>
            </MainWrapper>
        </HelmetProvider>
    );
}
