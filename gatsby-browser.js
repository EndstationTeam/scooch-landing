
    import "./styles/global.css";
    
    // import React from 'react';
    // import { CacheProvider } from '@emotion/react';
    // import createEmotionServer from '@emotion/server/create-instance';
    // import createEmotionCache from './src/createEmotionCache'; // your custom file

    // export const onRenderBody = ({ setHeadComponents, replaceRenderer }) => {
    // // 1) Create a new emotion cache for each SSR run
    // const cache = createEmotionCache();
    // const { extractCriticalToChunks } = createEmotionServer(cache);

    // replaceRenderer(({ element }) => {
    //     return <CacheProvider value={cache}>{element}</CacheProvider>;
    // });

    // // 2) Then, in onPreRenderHTML, you collect styles and inject them into head
    // };

    // export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    // // see the MUI docs for how to inline critical styles here
    // const headComponents = getHeadComponents();
    // replaceHeadComponents(headComponents);
    // }; 