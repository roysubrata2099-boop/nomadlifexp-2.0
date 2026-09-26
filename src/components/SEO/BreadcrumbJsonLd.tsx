import "server-only";

type BreadcrumbItem = {
    name: string;
    url: string;
};

type BreadcrumbJsonLdProps = {
    items: BreadcrumbItem[];
};

const SITE_URL = "https://www.nomadlifexp.com";

function absoluteUrl(url: string): string {
    if (url.startsWith("http")) {
        return url;
    }

    return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export default function BreadcrumbJsonLd({
    items,
}: BreadcrumbJsonLdProps) {
    const itemListElement = items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.url),
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
    );
}
