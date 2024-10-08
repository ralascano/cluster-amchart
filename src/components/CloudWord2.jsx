import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
const CloudWord2 = () => {
    useLayoutEffect(() => {
        // Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


// Add series
// https://www.amcharts.com/docs/v5/charts/word-cloud/
        var series = root.container.children.push(am5wc.WordCloud.new(root, {
            categoryField: "tag",
            valueField: "weight",
            maxFontSize: am5.percent(15)
        }));

// Configure labels
        series.labels.template.setAll({
            fontFamily: "Courier New"
        });


        setInterval(function() {
            am5.array.each(series.dataItems, function(dataItem) {
                var value = Math.random() * 65;
                value = value - Math.random() * value;
                dataItem.set("value", value);
                dataItem.set("valueWorking", value);
            })
        }, 5000)


// Data from:
// https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
        series.data.setAll([
            { tag: "🙀", weight: 64.96 },
            { tag: "HTML/CSS", weight: 56.07 },
            { tag: "Python", weight: 48.24 },
            { tag: "SQL", weight: 47.08 },
            { tag: "Java", weight: 35.35 },
            { tag: "Node.js", weight: 33.91 },
            { tag: "TypeScript", weight: 30.19 },
            { tag: "C#", weight: 27.86 },
            { tag: "Bash/Shell", weight: 27.13 },
            { tag: "C++", weight: 24.31 },
            { tag: "PHP", weight: 21.98 },
            { tag: "C", weight: 21.01 },
            { tag: "PowerShell", weight: 10.75 },
            { tag: "Go", weight: 9.55 },
            { tag: "Kotlin", weight: 8.32 },
            { tag: "Rust", weight: 7.03 },
            { tag: "Ruby", weight: 6.75 },
            { tag: "Dart", weight: 6.02 },
            { tag: "Assembly", weight: 5.61 },
            { tag: "Swift", weight: 5.1 },
            { tag: "R", weight: 5.07 },
            { tag: "VBA", weight: 4.66 },
            { tag: "Matlab", weight: 4.66 },
            { tag: "Groovy", weight: 3.01 },
            { tag: "Objective-C", weight: 2.8 },
            { tag: "Scala", weight: 2.6 },
            { tag: "Perl", weight: 2.46 },
            { tag: "Haskell", weight: 2.12 },
            { tag: "Delphi", weight: 2.1 },
            { tag: "Clojure", weight: 1.88 },
            { tag: "Elixir", weight: 1.74 },
            { tag: "LISP", weight: 1.33 },
            { tag: "Julia", weight: 1.29 },
            { tag: "F#", weight: 0.97 },
            { tag: "Erlang", weight: 0.79 },
            { tag: "APL", weight: 0.65 },
            { tag: "Crystal", weight: 0.56 },
            { tag: "COBOL", weight: 0.53 },
        ]);
        /*let series = zoomableContainer.contents.children.push(am5wc.WordCloud.new(root, {
              maxCount:100,
              minWordLength:2,
              maxFontSize:am5.percent(35),
              text: "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother's death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, Hamlet,To give these mourning duties to your father: But, you must know, your father lost a father; That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; 'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, An understanding simple and unschool'd: For what we know must be and is as common As any the most vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the world take note, You are the most immediate to our throne; And with no less nobility of love Than that which dearest father bears his son, Do I impart toward you. For your intent In going back to school in Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the cheer and comfort of our eye, Our chiefest courtier, cousin, and our son.",
            }));*/

        return () => {
            root.dispose();
        };
    }, []);
    return (
        <>
            <p>hola</p>
            <div id={"chartdiv"} style={{ width: "300px", height: "300px" }}></div>
        </>
    );
};

export default CloudWord2;


/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

