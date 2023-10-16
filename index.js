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
    
    initDomConts (prm) {
        try {
	    let tag = 'video';
	    if (undefined !== prm) {
	        tag = prm;
	    }
            super.initDomConts(tag);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    src (prm) {
        try {
            return this.childDom().attrs('src', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    controls (prm) {
        try {
            return this.childDom().attrs('controls', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    autoplay (prm) {
        try {
            return this.childDom().attrs('autoplay', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    attrs (prm) {
        try {
            if (true === Array.isArray(prm)) {
                for (let pidx in prm) {
                    this.attrs(prm[pidx]);
                }
		return;
            }
            let set_attr = {};
            set_attr[prm] = true;
            this.childDom().attrs(set_attr);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    play () {
        try {
            this.childDom().getRawDom().play();
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    volume (prm) {
        try {
	    return this.childDom().props('volume', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
