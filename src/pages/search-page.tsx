import { renderToString } from 'react-dom/server';
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    InstantSearchServerState,
    InstantSearchSSRProvider,
    getServerState, SearchBox, Hits,
} from 'react-instantsearch';

const searchClient = algoliasearch(process.env["NEXT_PUBLIC_ALGOLIA_ID"] as string, process.env["NEXT_PUBLIC_ALGOLIA_KEY"] as string);

type SearchPageProps = {
    serverState?: InstantSearchServerState;
};

interface HitProps {
    hit: {
        title: string;
        excerpt: string;
    };
}

export function Hit({ hit }: HitProps) {
    return (
        <article>
            <h1>{hit.title}</h1>
            <p>${hit.excerpt}</p>
        </article>
    );
}

export default function SearchPage({ serverState }: SearchPageProps) {
    return (
        <InstantSearchSSRProvider {...serverState}>
            <InstantSearch searchClient={searchClient} indexName="starick">
                <SearchBox/>
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </InstantSearchSSRProvider>
    );
}

export async function getStaticProps() {
    const serverState = await getServerState(<SearchPage />, {
        renderToString
    });
    return {
        props: {
            serverState,
        },
    };
}