/**
 * @file mofron-comp-video/index.js
 * @brief video component for mofron
 * @license MIT
 */
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) string: video src
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Video");
            this.shortForm('src');
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            super.initDomConts('video');
	    this.controls(true);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    src (prm) {
        try {
            this.childDom().attrs({ 'src': prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    controls (prm) {
        try {
            this.childDom().attrs({ 'controls':prm });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
