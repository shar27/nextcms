// pages/sitemap.xml.js

import React from 'react';

const Sitemap = () => {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

    <url>
        <loc>https://www.webdesignhighwycombe.co.uk/</loc>
        <lastmod>2024-06-08T21:34:21+00:00</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://www.webdesignhighwycombe.co.uk/About</loc>
        <lastmod>2024-06-08T21:34:21+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <!-- Add more URLs here -->

</urlset>`;

    return (
        <React.Fragment>
            {sitemapContent}
        </React.Fragment>
    );
};

export default Sitemap;
