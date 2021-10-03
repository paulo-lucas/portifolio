
import {
    DiRuby,
    DiReact,
    DiAngularSimple,
    DiHtml5,
    DiWordpress,
    DiJqueryLogo
} from "react-icons/di";
import {
    SiNextdotjs,
    SiGatsby,
    SiNodedotjs,
    SiNestjs,
    SiVuedotjs,
    SiPhp
} from "react-icons/si"

export const getTechIcon = tech => {
    const icons = {
        ruby: DiRuby,
        react: DiReact,
        angular: DiAngularSimple,
        html: DiHtml5,
        wordpress: DiWordpress,
        next: SiNextdotjs,
        gatsby: SiGatsby,
        node: SiNodedotjs,
        nest: SiNestjs,
        vue: SiVuedotjs,
        php: SiPhp,
        jquery: DiJqueryLogo
    }

    return icons[tech]
}