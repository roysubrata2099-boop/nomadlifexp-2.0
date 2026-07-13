import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(
    process.cwd(),
    "src/content/posts"
);

const VALID_CATEGORIES = [
    "fitness",
    "mindset",
    "yoga",
    "discipline"
];

const CATEGORY_ALIASES = {
    "wellness": "fitness",
    "exercise": "fitness",
    "self growth": "mindset",
    "mental clarity": "mindset",
    "focus": "mindset"
};


function normalizeCategory(category = "") {

    const clean =
        String(category)
            .toLowerCase()
            .trim();


    if (CATEGORY_ALIASES[clean]) {
        return CATEGORY_ALIASES[clean];
    }


    return clean;
}



function runAudit() {

    console.log(
        "\x1b[36m%s\x1b[0m",
        ">> RUNNING WORKSPACE INTEGRITY VERIFICATION AUDIT..."
    );


    if (!fs.existsSync(POSTS_DIR)) {

        console.error(
            "\x1b[31m%s\x1b[0m",
            `[CRITICAL] Missing content directory: ${POSTS_DIR}`
        );

        process.exit(1);
    }



    const files =
        fs.readdirSync(POSTS_DIR)
            .filter(
                file =>
                    file.endsWith(".md")
            );


    let failures = 0;



    files.forEach(file => {


        const filePath =
            path.join(
                POSTS_DIR,
                file
            );


        const raw =
            fs.readFileSync(
                filePath,
                "utf8"
            );


        let parsed;


        try {

            parsed = matter(raw);

        } catch {

            console.error(
                "\x1b[31m%s\x1b[0m",
                `[FAIL] ${file} has invalid YAML frontmatter`
            );

            failures++;

            return;
        }



        const data =
            parsed.data || {};



        const requiredFields = [
            "title",
            "description",
            "category",
            "slug"
        ];



        requiredFields.forEach(field => {

            if (
                !data[field] ||
                String(data[field]).trim() === ""
            ) {

                console.error(
                    "\x1b[31m%s\x1b[0m",
                    `[FAIL] ${file} missing required parameter: "${field}"`
                );

                failures++;

            }

        });



        if (data.category) {


            const normalized =
                normalizeCategory(
                    data.category
                );


            if (
                !VALID_CATEGORIES.includes(
                    normalized
                )
            ) {

                console.error(
                    "\x1b[31m%s\x1b[0m",
                    `[FAIL] ${file} invalid category: "${data.category}"`
                );


                failures++;

            }

        }



        const expectedSlug =
            file
                .replace(/\.md$/i, "")
                .toLowerCase()
                .trim();


        if (
            data.slug &&
            data.slug !== expectedSlug
        ) {

            console.error(
                "\x1b[33m%s\x1b[0m",
                `[WARNING] ${file} slug mismatch (${data.slug}) expected (${expectedSlug})`
            );

        }


    });



    if (failures > 0) {

        console.error(
            "\x1b[31m%s\x1b[0m",
            `\n[AUDIT FAILED] ${failures} issues detected.`
        );

        process.exit(1);

    }



    console.log(
        "\x1b[32m%s\x1b[0m",
        "\n[AUDIT SUCCESSFUL] All posts passed validation."
    );

}


runAudit();