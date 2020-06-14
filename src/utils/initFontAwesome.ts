import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faFacebook, faLinkedin, faGithub);
}
export default initFontAwesome;