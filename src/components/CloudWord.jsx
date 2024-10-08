import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
const CloudWord = () => {
    useLayoutEffect(() => {
        const root = am5.Root.new("chartdiv");
        root.setThemes([am5themes_Animated.new(root)]);

        const series = root.container.children.push(
            am5wc.WordCloud.new(root, {
                categoryField: "category",
                valueField: "value",
            })
        );
        series.labels.template.setAll({
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            fontFamily: "Courier New",
            templateField: "labelSettings",
        });
        series.labels.template.set("tooltipText", "{category}: [bold]{value}[/]");
        series.data.setAll([
            {
                category: "JavaScr",
                value: 24.96,
                labelSettings: { fill: am5.color(0x85ffc4) },
            },
            {
                category: "HTML/CSS",
                value: 56.07,
                labelSettings: { fill: am5.color(0x297373) },
            },
            {
                category: "Python",
                value: 48.24,
                labelSettings: { fill: am5.color(0x946b49) },
            },
            {
                category: "SQL",
                value: 47.08,
                labelSettings: { fill: am5.color(0xff621f) },
            },
            {
                category: "SQL",
                value: 47.08,
                labelSettings: { fill: am5.color(0xff621f) },
            },
            {
                category: "🙀",
                value: 40.35,
                labelSettings: { fill: am5.color(0x39393a) },
            },
            {
                category: "🗿",
                value: 41.35,
                labelSettings: { fill: am5.color(0x39393a) },
            },
            {
                category: "🎉",
                value: 42.35,
                labelSettings: { fill: am5.color(0x39393a) },
            },
            {
                category: "🙊",
                value: 43.35,
                labelSettings: { fill: "rgb(50, 168, 158)" },
            },
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

export default CloudWord;
