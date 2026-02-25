import adapter from 'amplify-adapter';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {

        adapter: adapter(),
        paths: {
            base: process.argv.includes('dev') ? '' : '/ds-oahu-website'
        },
        prerender: {
            default: true,
            handleHttpError: 'warn'
        }
    }
};

export default config;
