const sitemapUrl = "https://www.nomadlifexp.com/sitemap.xml";

const response = await fetch(sitemapUrl);

if (!response.ok) {
    throw new Error(
        `Sitemap request failed: ${response.status} ${response.statusText}`
    );
}

const xml = await response.text();

const urls = [
    ...xml.matchAll(/<loc>(.*?)<\/loc>/g),
].map((match) => match[1].trim());

console.log(`Sitemap URLs: ${urls.length}`);
console.log("");

let failures = 0;

for (const url of urls) {
    try {
        const result = await fetch(url, {
            redirect: "manual",
        });

        const location =
            result.headers.get("location");

        if (
            result.status >= 300 &&
            result.status < 400
        ) {
            console.log(`REDIRECT ${result.status}: ${url}`);

            if (location) {
                console.log(`           -> ${location}`);
            }

            failures++;
            continue;
        }

        if (!result.ok) {
            console.log(`ERROR ${result.status}: ${url}`);
            failures++;
            continue;
        }

        console.log(`OK ${result.status}: ${url}`);
    } catch (error) {
        console.log(
            `FAILED: ${url}`,
            error instanceof Error
                ? error.message
                : error
        );

        failures++;
    }
}

console.log("");
console.log(`Sitemap failures: ${failures}`);

if (failures > 0) {
    process.exitCode = 1;
}
