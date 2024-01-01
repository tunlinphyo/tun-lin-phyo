import "./assets/css/style.css"
import Welcome from "./assets/js/welcome"
import ScrollTimeline from "./assets/js/scroll-timeline"
import ToggleCard from "./assets/js/card"
import StickyCard from "./assets/js/sticky-card"
import Gallery from "./assets/js/gallery"

window.onload = () => {
    new Welcome('.welcome')
    new ScrollTimeline('main', '.js-scroll-reveal')
    new Gallery('.gallery')
    new ToggleCard('.technical--container')
    new StickyCard('.project--list')
}
