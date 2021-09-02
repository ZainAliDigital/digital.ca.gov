const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const constants = require("./constants.json");

/**
 * 
 * @param {*} eleventyConfig 
 * @example
 * const path = require('path'); //Path Resolve needed to make plugin mode copy work
 * const { setupPreviewMode } = require( path.resolve('.','./previewMode/plugInTo11ty') );
 * setupPreviewMode(eleventyConfig);
 */
const setupPreviewMode = eleventyConfig => {
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: constants.config.serverlessFunctionName, // The serverless function name from your permalink object
        inputDir: "",
        functionsDir: "", //off the root
        redirects: "", //no redirect handling built in
        copyOptions: {
            filter:['**/*','!**']} // Filtering out all pages, this still brings in includes
      });
}

module.exports = { setupPreviewMode }