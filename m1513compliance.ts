// This is a TypeScript (superset of JavaScript) file, we will first COMPILE it (run 'tsc m1513compliance.ts' in your CLI) then run the resulting .js file (node m1513compliance.js).

// Change the following values and run to determine compliance.
let supports_HTTPS: boolean = true;
let enforces_HTTPS: boolean = false;
let strong_HSTS: boolean = false;
let HSTS_base_preloaded: boolean = true;

// Don't change these!
let strong_HSTS_or_HSTS_base_preloaded: boolean = false;
let compliance: boolean = false;

const HSTS_checker = (strong_HSTS: boolean, HSTS_base_preloaded: boolean) => {
    if (strong_HSTS || HSTS_base_preloaded) {
        strong_HSTS_or_HSTS_base_preloaded = true;
    }
}

const compliance_checker = (supports_HTTPS: boolean, enforces_HTTPS: boolean, strong_HSTS_or_HSTS_base_preloaded: boolean) => {
    if (supports_HTTPS && enforces_HTTPS && strong_HSTS_or_HSTS_base_preloaded) {
        compliance = true;
    }
}

HSTS_checker(strong_HSTS, HSTS_base_preloaded);

compliance_checker(supports_HTTPS, enforces_HTTPS, strong_HSTS_or_HSTS_base_preloaded);

if (compliance) {
    console.log('\x1b[31m','M-15-13 Compliant');
}
else {
    console.log('\x1b[31m','Not M-15-13 compliant');
}
