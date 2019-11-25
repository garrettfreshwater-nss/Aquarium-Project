import { useTip } from "./TipDataProvider.js";
import tipComponent from "./TipHTML.js";
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const tipListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tipList")
    const theTips = useTip()

    // let allTipsHTMl = ""

    // for (const tip of theTips) {
    //     const tipHTML = tipComponent(tip)
    //     allTipsHTMl += tipHTML
    // }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="tipList">
        <h3>Tips</h3>   
            ${
                theTips.map(
                    (currentTip) => {
                        return tipComponent(currentTip)
                    }
                ).join("")
            }
        </section>
    `
}


export default tipListComponent

