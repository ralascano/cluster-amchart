import React, {useEffect, useRef} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";

const ChartComponent = () => {

    const chartRef = useRef()

    const transformData = (data) => {
        // const reducedData = [];
        // const seenIds = {}; // Objeto para rastrear los IDs ya vistos
        //
        // for (const item of data[0]) {
        //     if (item.userId !== null) {
        //         if (!seenIds[item.id]) {
        //             reducedData.push({
        //                 name: item.id,
        //                 linkWith: []
        //             });
        //             seenIds[item.id] = true; // Marcar el ID como visto
        //         }
        //     }
        // }
        //



        const reducedData = [];
        const seenIds = {};

        for (const item of data[0]) {
            if (item.userId !== null) {
                if (!seenIds[item.id]) {
                    const linkWith = [item.group];

                    for (const link of data[1]) {
                        if (link.from === item.id) {
                            linkWith.push(link.group);
                        }
                    }

                    reducedData.push({
                        username: item.username,
                        name: item.id,
                        linkWith: linkWith,
                        image: item.image
                    });

                    seenIds[item.id] = true;
                }
            }
        }



        const uniqueGroupsMap = {};

        for (const link of data[1]) {
            if (!uniqueGroupsMap[link.group]) {
                uniqueGroupsMap[link.group] = link.group;
            }
        }

        const uniqueGroupsArray = Object.values(uniqueGroupsMap).map(group => {
            return { name: group };
        });

        console.log("uniqueGroupsArray <------------------", reducedData.concat(uniqueGroupsArray))



        return reducedData.concat(uniqueGroupsArray);
    }


    const cropAndRoundImage = (url, size, callback) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // To handle images from different origins
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = size;
            canvas.height = size;

            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create a circular clipping path
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();

            // Draw the image within the clipping path
            ctx.drawImage(img, 0, 0, size, size);

            // Get the data URL of the resulting image
            const dataURL = canvas.toDataURL();

            // Pass the data URL to the callback function
            callback(dataURL);
        };

        img.src = url;
    };


    useEffect(() => {



        let dataOld = transformData([
            [
                {
                    "id": "tuteggito_id_289667003",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "VerdadI789_noti",
                    "userId": "289667003",
                    "label": "VerdadI789_noti",
                    "title": "User: VerdadI789_noti\nFollowers: 101",
                    "image": "https://4v4t4r5.socialsalert.com/tw/289667003",
                    "brokenImage": "https://unavatar.now.sh/twitter/VerdadI789_noti",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_94243739",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "EDMARTING",
                    "userId": "94243739",
                    "label": "EDMARTING",
                    "title": "User: EDMARTING\nFollowers: 2.6k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/94243739",
                    "brokenImage": "https://unavatar.now.sh/twitter/EDMARTING",
                    "shape": "circularImage",
                    "size": 139,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_930975961",
                    "group": "Buen video",
                    "red": 1,
                    "username": "joseandresm7",
                    "userId": "930975961",
                    "label": "joseandresm7",
                    "title": "User: joseandresm7\nFollowers: 2k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/930975961",
                    "brokenImage": "https://unavatar.now.sh/twitter/joseandresm7",
                    "shape": "circularImage",
                    "size": 136,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1081181177170575360",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Raquel68050408",
                    "userId": "1081181177170575360",
                    "label": "Raquel68050408",
                    "title": "User: Raquel68050408\nFollowers: 211",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1081181177170575360",
                    "brokenImage": "https://unavatar.now.sh/twitter/Raquel68050408",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1729276768270344192",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "morenpau223",
                    "userId": "1729276768270344192",
                    "label": "morenpau223",
                    "title": "User: morenpau223\nFollowers: 13",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1729276768270344192",
                    "brokenImage": "https://unavatar.now.sh/twitter/morenpau223",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_722115497274314752",
                    "group": "Buen video",
                    "red": 1,
                    "username": "amga1086",
                    "userId": "722115497274314752",
                    "label": "amga1086",
                    "title": "User: amga1086\nFollowers: 7",
                    "image": "https://4v4t4r5.socialsalert.com/tw/722115497274314752",
                    "brokenImage": "https://unavatar.now.sh/twitter/amga1086",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_149616671",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Jilly_JimenezJ",
                    "userId": "149616671",
                    "label": "Jilly_JimenezJ",
                    "title": "User: Jilly_JimenezJ\nFollowers: 688",
                    "image": "https://4v4t4r5.socialsalert.com/tw/149616671",
                    "brokenImage": "https://unavatar.now.sh/twitter/Jilly_JimenezJ",
                    "shape": "circularImage",
                    "size": 124,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_901630769050898432",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "VctorPr93417332",
                    "userId": "901630769050898432",
                    "label": "VctorPr93417332",
                    "title": "User: VctorPr93417332\nFollowers: 5",
                    "image": "https://4v4t4r5.socialsalert.com/tw/901630769050898432",
                    "brokenImage": "https://unavatar.now.sh/twitter/VctorPr93417332",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1215432028046397442",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "CayWashington",
                    "userId": "1215432028046397442",
                    "label": "CayWashington",
                    "title": "User: CayWashington\nFollowers: 3.2k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1215432028046397442",
                    "brokenImage": "https://unavatar.now.sh/twitter/CayWashington",
                    "shape": "circularImage",
                    "size": 142,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Ciudad norteamericana",
                    "group": "Ciudad norteamericana",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Ciudad norteamericana",
                    "title": "Concept: Ciudad norteamericana\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_239923043",
                    "group": "Buen video",
                    "red": 1,
                    "username": "nxpcx",
                    "userId": "239923043",
                    "label": "nxpcx",
                    "title": "User: nxpcx\nFollowers: 165",
                    "image": "https://4v4t4r5.socialsalert.com/tw/239923043",
                    "brokenImage": "https://unavatar.now.sh/twitter/nxpcx",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1693087347313676288",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Vlador141965",
                    "userId": "1693087347313676288",
                    "label": "Vlador141965",
                    "title": "User: Vlador141965\nFollowers: 15",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1693087347313676288",
                    "brokenImage": "https://unavatar.now.sh/twitter/Vlador141965",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_953080613464100866",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Karla51571082",
                    "userId": "953080613464100866",
                    "label": "Karla51571082",
                    "title": "User: Karla51571082\nFollowers: 288",
                    "image": "https://4v4t4r5.socialsalert.com/tw/953080613464100866",
                    "brokenImage": "https://unavatar.now.sh/twitter/Karla51571082",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_238334855",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "victorluis7",
                    "userId": "238334855",
                    "label": "victorluis7",
                    "title": "User: victorluis7\nFollowers: 273",
                    "image": "https://4v4t4r5.socialsalert.com/tw/238334855",
                    "brokenImage": "https://unavatar.now.sh/twitter/victorluis7",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1579489749554892800",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "Abi_condor0",
                    "userId": "1579489749554892800",
                    "label": "Abi_condor0",
                    "title": "User: Abi_condor0\nFollowers: 423",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579489749554892800",
                    "brokenImage": "https://unavatar.now.sh/twitter/Abi_condor0",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Comunidad migrante",
                    "group": "Comunidad migrante",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Comunidad migrante",
                    "title": "Concept: Comunidad migrante\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_1579520016881487872",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "EstradaDar6",
                    "userId": "1579520016881487872",
                    "label": "EstradaDar6",
                    "title": "User: EstradaDar6\nFollowers: 407",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579520016881487872",
                    "brokenImage": "https://unavatar.now.sh/twitter/EstradaDar6",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1579582918921445385",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "ShirleyChic10",
                    "userId": "1579582918921445385",
                    "label": "ShirleyChic10",
                    "title": "User: ShirleyChic10\nFollowers: 396",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579582918921445385",
                    "brokenImage": "https://unavatar.now.sh/twitter/ShirleyChic10",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_931526635832082434",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "JAsimbayaE",
                    "userId": "931526635832082434",
                    "label": "JAsimbayaE",
                    "title": "User: JAsimbayaE\nFollowers: 15",
                    "image": "https://4v4t4r5.socialsalert.com/tw/931526635832082434",
                    "brokenImage": "https://unavatar.now.sh/twitter/JAsimbayaE",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_373686408",
                    "group": "Buen video",
                    "red": 1,
                    "username": "livingtonpanta",
                    "userId": "373686408",
                    "label": "livingtonpanta",
                    "title": "User: livingtonpanta\nFollowers: 13k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/373686408",
                    "brokenImage": "https://unavatar.now.sh/twitter/livingtonpanta",
                    "shape": "circularImage",
                    "size": 169,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807802057925042176",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "AngelVinic9",
                    "userId": "1807802057925042176",
                    "label": "AngelVinic9",
                    "title": "User: AngelVinic9\nFollowers: 15",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807802057925042176",
                    "brokenImage": "https://unavatar.now.sh/twitter/AngelVinic9",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_273533804",
                    "group": "Buen video",
                    "red": 1,
                    "username": "CompsCordova",
                    "userId": "273533804",
                    "label": "CompsCordova",
                    "title": "User: CompsCordova\nFollowers: 2.8k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/273533804",
                    "brokenImage": "https://unavatar.now.sh/twitter/CompsCordova",
                    "shape": "circularImage",
                    "size": 142,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1644798743273717760",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "FaustoDLTS77",
                    "userId": "1644798743273717760",
                    "label": "FaustoDLTS77",
                    "title": "User: FaustoDLTS77\nFollowers: 15",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1644798743273717760",
                    "brokenImage": "https://unavatar.now.sh/twitter/FaustoDLTS77",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1421148192247271430",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "ArendRojas",
                    "userId": "1421148192247271430",
                    "label": "ArendRojas",
                    "title": "User: ArendRojas\nFollowers: 36",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1421148192247271430",
                    "brokenImage": "https://unavatar.now.sh/twitter/ArendRojas",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_888233314053763072",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "RodrigoCueva6",
                    "userId": "888233314053763072",
                    "label": "RodrigoCueva6",
                    "title": "User: RodrigoCueva6\nFollowers: 324",
                    "image": "https://4v4t4r5.socialsalert.com/tw/888233314053763072",
                    "brokenImage": "https://unavatar.now.sh/twitter/RodrigoCueva6",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_593988011683",
                    "group": "Daniel Noboa",
                    "red": 16,
                    "username": "+593 98 801 1683",
                    "userId": "593988011683",
                    "label": "+593 98 801 1683",
                    "title": "User: +593 98 801 1683\nFollowers: 1",
                    "image": "null+593 98 801 1683",
                    "brokenImage": null,
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": null
                    }
                },
                {
                    "id": "tuteggito_id_1807824431483703303",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "PCarrion94415",
                    "userId": "1807824431483703303",
                    "label": "PCarrion94415",
                    "title": "User: PCarrion94415\nFollowers: 12",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807824431483703303",
                    "brokenImage": "https://unavatar.now.sh/twitter/PCarrion94415",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1747765513281851392",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "RMinchong47447",
                    "userId": "1747765513281851392",
                    "label": "RMinchong47447",
                    "title": "User: RMinchong47447\nFollowers: 11",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1747765513281851392",
                    "brokenImage": "https://unavatar.now.sh/twitter/RMinchong47447",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_237005162",
                    "group": "Buen video",
                    "red": 1,
                    "username": "boris_saul",
                    "userId": "237005162",
                    "label": "boris_saul",
                    "title": "User: boris_saul\nFollowers: 335",
                    "image": "https://4v4t4r5.socialsalert.com/tw/237005162",
                    "brokenImage": "https://unavatar.now.sh/twitter/boris_saul",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807806799979937792",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "baus_joyce9",
                    "userId": "1807806799979937792",
                    "label": "baus_joyce9",
                    "title": "User: baus_joyce9\nFollowers: 15",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807806799979937792",
                    "brokenImage": "https://unavatar.now.sh/twitter/baus_joyce9",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_242765328",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "GustavoBedon",
                    "userId": "242765328",
                    "label": "GustavoBedon",
                    "title": "User: GustavoBedon\nFollowers: 211",
                    "image": "https://4v4t4r5.socialsalert.com/tw/242765328",
                    "brokenImage": "https://unavatar.now.sh/twitter/GustavoBedon",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_899017656510160896",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "JoleyTorres08",
                    "userId": "899017656510160896",
                    "label": "JoleyTorres08",
                    "title": "User: JoleyTorres08\nFollowers: 712",
                    "image": "https://4v4t4r5.socialsalert.com/tw/899017656510160896",
                    "brokenImage": "https://unavatar.now.sh/twitter/JoleyTorres08",
                    "shape": "circularImage",
                    "size": 124,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_387978015",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Monapaty77",
                    "userId": "387978015",
                    "label": "Monapaty77",
                    "title": "User: Monapaty77\nFollowers: 680",
                    "image": "https://4v4t4r5.socialsalert.com/tw/387978015",
                    "brokenImage": "https://unavatar.now.sh/twitter/Monapaty77",
                    "shape": "circularImage",
                    "size": 124,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1071553868",
                    "group": "Buen video",
                    "red": 1,
                    "username": "JuanCarloOrtega",
                    "userId": "1071553868",
                    "label": "JuanCarloOrtega",
                    "title": "User: JuanCarloOrtega\nFollowers: 97",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1071553868",
                    "brokenImage": "https://unavatar.now.sh/twitter/JuanCarloOrtega",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1350816325027958790",
                    "group": "Buen video",
                    "red": 1,
                    "username": "JoseSan06720678",
                    "userId": "1350816325027958790",
                    "label": "JoseSan06720678",
                    "title": "User: JoseSan06720678\nFollowers: 68",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1350816325027958790",
                    "brokenImage": "https://unavatar.now.sh/twitter/JoseSan06720678",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_346028525",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "mashiedu09",
                    "userId": "346028525",
                    "label": "mashiedu09",
                    "title": "User: mashiedu09\nFollowers: 46",
                    "image": "https://4v4t4r5.socialsalert.com/tw/346028525",
                    "brokenImage": "https://unavatar.now.sh/twitter/mashiedu09",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_461499158",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "GonzaloEPereira",
                    "userId": "461499158",
                    "label": "GonzaloEPereira",
                    "title": "User: GonzaloEPereira\nFollowers: 242",
                    "image": "https://4v4t4r5.socialsalert.com/tw/461499158",
                    "brokenImage": "https://unavatar.now.sh/twitter/GonzaloEPereira",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1648837345192431616",
                    "group": "Buen video",
                    "red": 1,
                    "username": "MarcoAl66940838",
                    "userId": "1648837345192431616",
                    "label": "MarcoAl66940838",
                    "title": "User: MarcoAl66940838\nFollowers: 1",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1648837345192431616",
                    "brokenImage": "https://unavatar.now.sh/twitter/MarcoAl66940838",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_225195801",
                    "group": "Buen video",
                    "red": 1,
                    "username": "mandradele",
                    "userId": "225195801",
                    "label": "mandradele",
                    "title": "User: mandradele\nFollowers: 830",
                    "image": "https://4v4t4r5.socialsalert.com/tw/225195801",
                    "brokenImage": "https://unavatar.now.sh/twitter/mandradele",
                    "shape": "circularImage",
                    "size": 127,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1119694438006185985",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "GellibertSara",
                    "userId": "1119694438006185985",
                    "label": "GellibertSara",
                    "title": "User: GellibertSara\nFollowers: 484",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1119694438006185985",
                    "brokenImage": "https://unavatar.now.sh/twitter/GellibertSara",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_346039928",
                    "group": "Buen video",
                    "red": 1,
                    "username": "yofelseb",
                    "userId": "346039928",
                    "label": "yofelseb",
                    "title": "User: yofelseb\nFollowers: 623",
                    "image": "https://4v4t4r5.socialsalert.com/tw/346039928",
                    "brokenImage": "https://unavatar.now.sh/twitter/yofelseb",
                    "shape": "circularImage",
                    "size": 124,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_352466090",
                    "group": "Buen video",
                    "red": 1,
                    "username": "JulioSCORPIO",
                    "userId": "352466090",
                    "label": "JulioSCORPIO",
                    "title": "User: JulioSCORPIO\nFollowers: 315",
                    "image": "https://4v4t4r5.socialsalert.com/tw/352466090",
                    "brokenImage": "https://unavatar.now.sh/twitter/JulioSCORPIO",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1005529743968604161",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "OrlandoBatalla4",
                    "userId": "1005529743968604161",
                    "label": "OrlandoBatalla4",
                    "title": "User: OrlandoBatalla4\nFollowers: 45",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1005529743968604161",
                    "brokenImage": "https://unavatar.now.sh/twitter/OrlandoBatalla4",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1105231507415801856",
                    "group": "Buen video",
                    "red": 1,
                    "username": "CityTicket",
                    "userId": "1105231507415801856",
                    "label": "CityTicket",
                    "title": "User: CityTicket\nFollowers: 414",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1105231507415801856",
                    "brokenImage": "https://unavatar.now.sh/twitter/CityTicket",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_4034308551",
                    "group": "Buen video",
                    "red": 1,
                    "username": "juanpablososac2",
                    "userId": "4034308551",
                    "label": "juanpablososac2",
                    "title": "User: juanpablososac2\nFollowers: 53",
                    "image": "https://4v4t4r5.socialsalert.com/tw/4034308551",
                    "brokenImage": "https://unavatar.now.sh/twitter/juanpablososac2",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1707129370752466945",
                    "group": "Buen video",
                    "red": 1,
                    "username": "MolinaC2605",
                    "userId": "1707129370752466945",
                    "label": "MolinaC2605",
                    "title": "User: MolinaC2605\nFollowers: 6",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1707129370752466945",
                    "brokenImage": "https://unavatar.now.sh/twitter/MolinaC2605",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_340548263",
                    "group": "Buen video",
                    "red": 1,
                    "username": "_jartieda",
                    "userId": "340548263",
                    "label": "_jartieda",
                    "title": "User: _jartieda\nFollowers: 1.7k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/340548263",
                    "brokenImage": "https://unavatar.now.sh/twitter/_jartieda",
                    "shape": "circularImage",
                    "size": 136,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Desfile ecuatoriano",
                    "group": "Desfile ecuatoriano",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Desfile ecuatoriano",
                    "title": "Concept: Desfile ecuatoriano\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_934441722028920834",
                    "group": "Buen video",
                    "red": 1,
                    "username": "A_bus00480632",
                    "userId": "934441722028920834",
                    "label": "A_bus00480632",
                    "title": "User: A_bus00480632\nFollowers: 94",
                    "image": "https://4v4t4r5.socialsalert.com/tw/934441722028920834",
                    "brokenImage": "https://unavatar.now.sh/twitter/A_bus00480632",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1540002932606787585",
                    "group": "Buen video",
                    "red": 1,
                    "username": "SAAVEDRACX",
                    "userId": "1540002932606787585",
                    "label": "SAAVEDRACX",
                    "title": "User: SAAVEDRACX\nFollowers: 27",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1540002932606787585",
                    "brokenImage": "https://unavatar.now.sh/twitter/SAAVEDRACX",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1245976813567868931",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Jorfalpu",
                    "userId": "1245976813567868931",
                    "label": "Jorfalpu",
                    "title": "User: Jorfalpu\nFollowers: 121",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1245976813567868931",
                    "brokenImage": "https://unavatar.now.sh/twitter/Jorfalpu",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Daniel Noboa",
                    "group": "Daniel Noboa",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Daniel Noboa",
                    "title": "Concept: Daniel Noboa\nCount: 114",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 11400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_1490156530326511618",
                    "group": "Buen video",
                    "red": 1,
                    "username": "VctorGalarza14",
                    "userId": "1490156530326511618",
                    "label": "VctorGalarza14",
                    "title": "User: VctorGalarza14\nFollowers: 241",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1490156530326511618",
                    "brokenImage": "https://unavatar.now.sh/twitter/VctorGalarza14",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1600516772020502532",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "Estnes40",
                    "userId": "1600516772020502532",
                    "label": "Estnes40",
                    "title": "User: Estnes40\nFollowers: 337",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1600516772020502532",
                    "brokenImage": "https://unavatar.now.sh/twitter/Estnes40",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_934940690861187072",
                    "group": "Buen video",
                    "red": 1,
                    "username": "fernandoceronv",
                    "userId": "934940690861187072",
                    "label": "fernandoceronv",
                    "title": "User: fernandoceronv\nFollowers: 6.9k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/934940690861187072",
                    "brokenImage": "https://unavatar.now.sh/twitter/fernandoceronv",
                    "shape": "circularImage",
                    "size": 157,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1448709777358532609",
                    "group": "Buen video",
                    "red": 1,
                    "username": "penaa_arias",
                    "userId": "1448709777358532609",
                    "label": "penaa_arias",
                    "title": "User: penaa_arias\nFollowers: 53",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1448709777358532609",
                    "brokenImage": "https://unavatar.now.sh/twitter/penaa_arias",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1771984921835257856",
                    "group": "Buen video",
                    "red": 1,
                    "username": "MarioBe72353715",
                    "userId": "1771984921835257856",
                    "label": "MarioBe72353715",
                    "title": "User: MarioBe72353715\nFollowers: 2",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1771984921835257856",
                    "brokenImage": "https://unavatar.now.sh/twitter/MarioBe72353715",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1530168154172833793",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Patrici21421781",
                    "userId": "1530168154172833793",
                    "label": "Patrici21421781",
                    "title": "User: Patrici21421781\nFollowers: 57",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1530168154172833793",
                    "brokenImage": "https://unavatar.now.sh/twitter/Patrici21421781",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1771026544560881664",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "NicoleLoor98",
                    "userId": "1771026544560881664",
                    "label": "NicoleLoor98",
                    "title": "User: NicoleLoor98\nFollowers: 47",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1771026544560881664",
                    "brokenImage": "https://unavatar.now.sh/twitter/NicoleLoor98",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_2881186589",
                    "group": "Buen video",
                    "red": 1,
                    "username": "maurojacho",
                    "userId": "2881186589",
                    "label": "maurojacho",
                    "title": "User: maurojacho\nFollowers: 55",
                    "image": "https://4v4t4r5.socialsalert.com/tw/2881186589",
                    "brokenImage": "https://unavatar.now.sh/twitter/maurojacho",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807796241520074752",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "AndresP04659506",
                    "userId": "1807796241520074752",
                    "label": "AndresP04659506",
                    "title": "User: AndresP04659506\nFollowers: 22",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807796241520074752",
                    "brokenImage": "https://unavatar.now.sh/twitter/AndresP04659506",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1560314775070015490",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "AlfredGonzabay",
                    "userId": "1560314775070015490",
                    "label": "AlfredGonzabay",
                    "title": "User: AlfredGonzabay\nFollowers: 41",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1560314775070015490",
                    "brokenImage": "https://unavatar.now.sh/twitter/AlfredGonzabay",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_333773770",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "fecheverria69",
                    "userId": "333773770",
                    "label": "fecheverria69",
                    "title": "User: fecheverria69\nFollowers: 481",
                    "image": "https://4v4t4r5.socialsalert.com/tw/333773770",
                    "brokenImage": "https://unavatar.now.sh/twitter/fecheverria69",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_15709862",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "drdarwinpantoja",
                    "userId": "15709862",
                    "label": "drdarwinpantoja",
                    "title": "User: drdarwinpantoja\nFollowers: 1.2k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/15709862",
                    "brokenImage": "https://unavatar.now.sh/twitter/drdarwinpantoja",
                    "shape": "circularImage",
                    "size": 130,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1453773511135272968",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "Gabrielsotomato",
                    "userId": "1453773511135272968",
                    "label": "Gabrielsotomato",
                    "title": "User: Gabrielsotomato\nFollowers: 72",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1453773511135272968",
                    "brokenImage": "https://unavatar.now.sh/twitter/Gabrielsotomato",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1729329474066391040",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "anto22lev",
                    "userId": "1729329474066391040",
                    "label": "anto22lev",
                    "title": "User: anto22lev\nFollowers: 20",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1729329474066391040",
                    "brokenImage": "https://unavatar.now.sh/twitter/anto22lev",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_294935856",
                    "group": "Buen video",
                    "red": 1,
                    "username": "ivanflores1979",
                    "userId": "294935856",
                    "label": "ivanflores1979",
                    "title": "User: ivanflores1979\nFollowers: 109",
                    "image": "https://4v4t4r5.socialsalert.com/tw/294935856",
                    "brokenImage": "https://unavatar.now.sh/twitter/ivanflores1979",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1768265285151211520",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "lobodiscreto51",
                    "userId": "1768265285151211520",
                    "label": "lobodiscreto51",
                    "title": "User: lobodiscreto51\nFollowers: 218",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1768265285151211520",
                    "brokenImage": "https://unavatar.now.sh/twitter/lobodiscreto51",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_606433777",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "DanielisDAM",
                    "userId": "606433777",
                    "label": "DanielisDAM",
                    "title": "User: DanielisDAM\nFollowers: 305",
                    "image": "https://4v4t4r5.socialsalert.com/tw/606433777",
                    "brokenImage": "https://unavatar.now.sh/twitter/DanielisDAM",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807786981100769280",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "AbrahamOrt88457",
                    "userId": "1807786981100769280",
                    "label": "AbrahamOrt88457",
                    "title": "User: AbrahamOrt88457\nFollowers: 22",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807786981100769280",
                    "brokenImage": "https://unavatar.now.sh/twitter/AbrahamOrt88457",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_900551937661259776",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Luigui09840531",
                    "userId": "900551937661259776",
                    "label": "Luigui09840531",
                    "title": "User: Luigui09840531\nFollowers: 170",
                    "image": "https://4v4t4r5.socialsalert.com/tw/900551937661259776",
                    "brokenImage": "https://unavatar.now.sh/twitter/Luigui09840531",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1721902499538587648",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "ochoa22698",
                    "userId": "1721902499538587648",
                    "label": "ochoa22698",
                    "title": "User: ochoa22698\nFollowers: 18",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1721902499538587648",
                    "brokenImage": "https://unavatar.now.sh/twitter/ochoa22698",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1445189592299229185",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Fernand00841308",
                    "userId": "1445189592299229185",
                    "label": "Fernand00841308",
                    "title": "User: Fernand00841308\nFollowers: 3.1k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1445189592299229185",
                    "brokenImage": "https://unavatar.now.sh/twitter/Fernand00841308",
                    "shape": "circularImage",
                    "size": 142,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1572683644824698880",
                    "group": "Buen video",
                    "red": 1,
                    "username": "JhonFloy7980818",
                    "userId": "1572683644824698880",
                    "label": "JhonFloy7980818",
                    "title": "User: JhonFloy7980818\nFollowers: 120",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1572683644824698880",
                    "brokenImage": "https://unavatar.now.sh/twitter/JhonFloy7980818",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1600490571608592387",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "IrisToa8",
                    "userId": "1600490571608592387",
                    "label": "IrisToa8",
                    "title": "User: IrisToa8\nFollowers: 342",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1600490571608592387",
                    "brokenImage": "https://unavatar.now.sh/twitter/IrisToa8",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_892366910314229760",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "ChricarSam",
                    "userId": "892366910314229760",
                    "label": "ChricarSam",
                    "title": "User: ChricarSam\nFollowers: 302",
                    "image": "https://4v4t4r5.socialsalert.com/tw/892366910314229760",
                    "brokenImage": "https://unavatar.now.sh/twitter/ChricarSam",
                    "shape": "circularImage",
                    "size": 118,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1668031489823371264",
                    "group": "Buen video",
                    "red": 1,
                    "username": "guaraca1984",
                    "userId": "1668031489823371264",
                    "label": "guaraca1984",
                    "title": "User: guaraca1984\nFollowers: 3",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1668031489823371264",
                    "brokenImage": "https://unavatar.now.sh/twitter/guaraca1984",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_264374988",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Amadita68",
                    "userId": "264374988",
                    "label": "Amadita68",
                    "title": "User: Amadita68\nFollowers: 1.8k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/264374988",
                    "brokenImage": "https://unavatar.now.sh/twitter/Amadita68",
                    "shape": "circularImage",
                    "size": 136,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1773193003273773057",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "OrtizRolan89505",
                    "userId": "1773193003273773057",
                    "label": "OrtizRolan89505",
                    "title": "User: OrtizRolan89505\nFollowers: 7",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1773193003273773057",
                    "brokenImage": "https://unavatar.now.sh/twitter/OrtizRolan89505",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_167694628",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "topsecreth",
                    "userId": "167694628",
                    "label": "topsecreth",
                    "title": "User: topsecreth\nFollowers: 121",
                    "image": "https://4v4t4r5.socialsalert.com/tw/167694628",
                    "brokenImage": "https://unavatar.now.sh/twitter/topsecreth",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1579492937033023488",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "Esteban_D54",
                    "userId": "1579492937033023488",
                    "label": "Esteban_D54",
                    "title": "User: Esteban_D54\nFollowers: 357",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579492937033023488",
                    "brokenImage": "https://unavatar.now.sh/twitter/Esteban_D54",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Presidente Daniel Noboa",
                    "group": "Presidente Daniel Noboa",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Presidente Daniel Noboa",
                    "title": "Concept: Presidente Daniel Noboa\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_1807815406809501696",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "Alejandr1dra",
                    "userId": "1807815406809501696",
                    "label": "Alejandr1dra",
                    "title": "User: Alejandr1dra\nFollowers: 26",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807815406809501696",
                    "brokenImage": "https://unavatar.now.sh/twitter/Alejandr1dra",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Buen video",
                    "group": "Buen video",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Buen video",
                    "title": "Concept: Buen video\nCount: 48",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 4800,
                    "color": null
                },
                {
                    "id": "tuteggito_id_45721880",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "ShutDownZen",
                    "userId": "45721880",
                    "label": "ShutDownZen",
                    "title": "User: ShutDownZen\nFollowers: 1.1k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/45721880",
                    "brokenImage": "https://unavatar.now.sh/twitter/ShutDownZen",
                    "shape": "circularImage",
                    "size": 130,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_68333497",
                    "group": "Buen video",
                    "red": 1,
                    "username": "richardpr8",
                    "userId": "68333497",
                    "label": "richardpr8",
                    "title": "User: richardpr8\nFollowers: 2.3k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/68333497",
                    "brokenImage": "https://unavatar.now.sh/twitter/richardpr8",
                    "shape": "circularImage",
                    "size": 139,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807803147928100864",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "AndyLoor57",
                    "userId": "1807803147928100864",
                    "label": "AndyLoor57",
                    "title": "User: AndyLoor57\nFollowers: 24",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807803147928100864",
                    "brokenImage": "https://unavatar.now.sh/twitter/AndyLoor57",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_303991889",
                    "group": "Buen video",
                    "red": 1,
                    "username": "rodrigo81mg",
                    "userId": "303991889",
                    "label": "rodrigo81mg",
                    "title": "User: rodrigo81mg\nFollowers: 139",
                    "image": "https://4v4t4r5.socialsalert.com/tw/303991889",
                    "brokenImage": "https://unavatar.now.sh/twitter/rodrigo81mg",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_4835060129",
                    "group": "Buen video",
                    "red": 1,
                    "username": "jrcoronado2010",
                    "userId": "4835060129",
                    "label": "jrcoronado2010",
                    "title": "User: jrcoronado2010\nFollowers: 33",
                    "image": "https://4v4t4r5.socialsalert.com/tw/4835060129",
                    "brokenImage": "https://unavatar.now.sh/twitter/jrcoronado2010",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1601346228876345344",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "JosefinaAriasE2",
                    "userId": "1601346228876345344",
                    "label": "JosefinaAriasE2",
                    "title": "User: JosefinaAriasE2\nFollowers: 21",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1601346228876345344",
                    "brokenImage": "https://unavatar.now.sh/twitter/JosefinaAriasE2",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_417538286",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "AGAC300196",
                    "userId": "417538286",
                    "label": "AGAC300196",
                    "title": "User: AGAC300196\nFollowers: 141",
                    "image": "https://4v4t4r5.socialsalert.com/tw/417538286",
                    "brokenImage": "https://unavatar.now.sh/twitter/AGAC300196",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_209104489",
                    "group": "Buen video",
                    "red": 1,
                    "username": "djeovanny",
                    "userId": "209104489",
                    "label": "djeovanny",
                    "title": "User: djeovanny\nFollowers: 212",
                    "image": "https://4v4t4r5.socialsalert.com/tw/209104489",
                    "brokenImage": "https://unavatar.now.sh/twitter/djeovanny",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_749236873999085568",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "AlfredoPlazaA",
                    "userId": "749236873999085568",
                    "label": "AlfredoPlazaA",
                    "title": "User: AlfredoPlazaA\nFollowers: 816",
                    "image": "https://4v4t4r5.socialsalert.com/tw/749236873999085568",
                    "brokenImage": "https://unavatar.now.sh/twitter/AlfredoPlazaA",
                    "shape": "circularImage",
                    "size": 127,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1427354487459663875",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Arthur64682008",
                    "userId": "1427354487459663875",
                    "label": "Arthur64682008",
                    "title": "User: Arthur64682008\nFollowers: 210",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1427354487459663875",
                    "brokenImage": "https://unavatar.now.sh/twitter/Arthur64682008",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_347495332",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "eddulema",
                    "userId": "347495332",
                    "label": "eddulema",
                    "title": "User: eddulema\nFollowers: 187",
                    "image": "https://4v4t4r5.socialsalert.com/tw/347495332",
                    "brokenImage": "https://unavatar.now.sh/twitter/eddulema",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_893614270558199809",
                    "group": "Buen video",
                    "red": 1,
                    "username": "AGenovezzi",
                    "userId": "893614270558199809",
                    "label": "AGenovezzi",
                    "title": "User: AGenovezzi\nFollowers: 25",
                    "image": "https://4v4t4r5.socialsalert.com/tw/893614270558199809",
                    "brokenImage": "https://unavatar.now.sh/twitter/AGenovezzi",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1125819939036835841",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "LucianoGmezHid1",
                    "userId": "1125819939036835841",
                    "label": "LucianoGmezHid1",
                    "title": "User: LucianoGmezHid1\nFollowers: 132",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1125819939036835841",
                    "brokenImage": "https://unavatar.now.sh/twitter/LucianoGmezHid1",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_166810563",
                    "group": "Buen video",
                    "red": 1,
                    "username": "marcsant2000",
                    "userId": "166810563",
                    "label": "marcsant2000",
                    "title": "User: marcsant2000\nFollowers: 780",
                    "image": "https://4v4t4r5.socialsalert.com/tw/166810563",
                    "brokenImage": "https://unavatar.now.sh/twitter/marcsant2000",
                    "shape": "circularImage",
                    "size": 127,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1115405006",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "jfranaguilar",
                    "userId": "1115405006",
                    "label": "jfranaguilar",
                    "title": "User: jfranaguilar\nFollowers: 55",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1115405006",
                    "brokenImage": "https://unavatar.now.sh/twitter/jfranaguilar",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1579511771815100416",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "JoelArc20",
                    "userId": "1579511771815100416",
                    "label": "JoelArc20",
                    "title": "User: JoelArc20\nFollowers: 373",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579511771815100416",
                    "brokenImage": "https://unavatar.now.sh/twitter/JoelArc20",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_237381450086351",
                    "group": "Daniel Noboa",
                    "red": 2,
                    "username": null,
                    "userId": "237381450086351",
                    "label": null,
                    "title": "User: 237381450086351\nFollowers: 286k",
                    "image": "https://cdn-60ld3n.socialsalert.com/facebook/image/237381450086351",
                    "brokenImage": "https://4v4t4r5.socialsalert.com/fb/237381450086351",
                    "shape": "circularImage",
                    "size": 295,
                    "color": {
                        "border": "rgba(66,103,178,1)"
                    }
                },
                {
                    "id": "tuteggito_id_302392975",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "taniaos76",
                    "userId": "302392975",
                    "label": "taniaos76",
                    "title": "User: taniaos76\nFollowers: 149",
                    "image": "https://4v4t4r5.socialsalert.com/tw/302392975",
                    "brokenImage": "https://unavatar.now.sh/twitter/taniaos76",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807800587272036352",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "CarlaCevallo7",
                    "userId": "1807800587272036352",
                    "label": "CarlaCevallo7",
                    "title": "User: CarlaCevallo7\nFollowers: 11",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807800587272036352",
                    "brokenImage": "https://unavatar.now.sh/twitter/CarlaCevallo7",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_388598058",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "mauricio3081",
                    "userId": "388598058",
                    "label": "mauricio3081",
                    "title": "User: mauricio3081\nFollowers: 446",
                    "image": "https://4v4t4r5.socialsalert.com/tw/388598058",
                    "brokenImage": "https://unavatar.now.sh/twitter/mauricio3081",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_773239989912100870",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Jrojasm45",
                    "userId": "773239989912100870",
                    "label": "Jrojasm45",
                    "title": "User: Jrojasm45\nFollowers: 73",
                    "image": "https://4v4t4r5.socialsalert.com/tw/773239989912100870",
                    "brokenImage": "https://unavatar.now.sh/twitter/Jrojasm45",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_593993585903",
                    "group": "Daniel Noboa",
                    "red": 16,
                    "username": "+593 99 358 5903",
                    "userId": "593993585903",
                    "label": "+593 99 358 5903",
                    "title": "User: +593 99 358 5903\nFollowers: 72",
                    "image": "null+593 99 358 5903",
                    "brokenImage": null,
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": null
                    }
                },
                {
                    "id": "tuteggito_id_1109145543639474178",
                    "group": "Buen video",
                    "red": 1,
                    "username": "VictorA01193795",
                    "userId": "1109145543639474178",
                    "label": "VictorA01193795",
                    "title": "User: VictorA01193795\nFollowers: 142",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1109145543639474178",
                    "brokenImage": "https://unavatar.now.sh/twitter/VictorA01193795",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_961427379288793088",
                    "group": "Buen video",
                    "red": 1,
                    "username": "alfaodin1",
                    "userId": "961427379288793088",
                    "label": "alfaodin1",
                    "title": "User: alfaodin1\nFollowers: 84",
                    "image": "https://4v4t4r5.socialsalert.com/tw/961427379288793088",
                    "brokenImage": "https://unavatar.now.sh/twitter/alfaodin1",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_276193835",
                    "group": "Buen video",
                    "red": 1,
                    "username": "briones81",
                    "userId": "276193835",
                    "label": "briones81",
                    "title": "User: briones81\nFollowers: 118",
                    "image": "https://4v4t4r5.socialsalert.com/tw/276193835",
                    "brokenImage": "https://unavatar.now.sh/twitter/briones81",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Tercera comunidad",
                    "group": "Tercera comunidad",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Tercera comunidad",
                    "title": "Concept: Tercera comunidad\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_1729998752096636928",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "gomevic12",
                    "userId": "1729998752096636928",
                    "label": "gomevic12",
                    "title": "User: gomevic12\nFollowers: 28",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1729998752096636928",
                    "brokenImage": "https://unavatar.now.sh/twitter/gomevic12",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_6780142574374192133",
                    "group": "Daniel Noboa",
                    "red": 6,
                    "username": "guisellazambrano",
                    "userId": "6780142574374192133",
                    "label": "guisellazambrano",
                    "title": "User: guisellazambrano\nFollowers: 0",
                    "image": "https://cdn-60ld3n.socialsalert.com/tiktok/image/guisellazambrano",
                    "brokenImage": "https://cdn-60ld3n.socialsalert.com/tiktok/image/guisellazambrano",
                    "shape": "circularImage",
                    "size": 100,
                    "color": {
                        "border": "rgba(0,0,0,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1731856697977688064",
                    "group": "Buen video",
                    "red": 1,
                    "username": "Byronbaza",
                    "userId": "1731856697977688064",
                    "label": "Byronbaza",
                    "title": "User: Byronbaza\nFollowers: 30",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1731856697977688064",
                    "brokenImage": "https://unavatar.now.sh/twitter/Byronbaza",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807804030531334144",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "Antonio2Mendoz4",
                    "userId": "1807804030531334144",
                    "label": "Antonio2Mendoz4",
                    "title": "User: Antonio2Mendoz4\nFollowers: 15",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807804030531334144",
                    "brokenImage": "https://unavatar.now.sh/twitter/Antonio2Mendoz4",
                    "shape": "circularImage",
                    "size": 106,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1530574411400609798",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "JorgeAv44663564",
                    "userId": "1530574411400609798",
                    "label": "JorgeAv44663564",
                    "title": "User: JorgeAv44663564\nFollowers: 37",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1530574411400609798",
                    "brokenImage": "https://unavatar.now.sh/twitter/JorgeAv44663564",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Según",
                    "group": "Según",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Según",
                    "title": "Concept: Según\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_1579499982415069186",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "PameVega99",
                    "userId": "1579499982415069186",
                    "label": "PameVega99",
                    "title": "User: PameVega99\nFollowers: 527",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579499982415069186",
                    "brokenImage": "https://unavatar.now.sh/twitter/PameVega99",
                    "shape": "circularImage",
                    "size": 124,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1557150792343224321",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "RosaBaquerizo5",
                    "userId": "1557150792343224321",
                    "label": "RosaBaquerizo5",
                    "title": "User: RosaBaquerizo5\nFollowers: 40",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1557150792343224321",
                    "brokenImage": "https://unavatar.now.sh/twitter/RosaBaquerizo5",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1202785941791920130",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "FarahMilton",
                    "userId": "1202785941791920130",
                    "label": "FarahMilton",
                    "title": "User: FarahMilton\nFollowers: 1.5k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1202785941791920130",
                    "brokenImage": "https://unavatar.now.sh/twitter/FarahMilton",
                    "shape": "circularImage",
                    "size": 133,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Autoridades ecuatorianas",
                    "group": "Autoridades ecuatorianas",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Autoridades ecuatorianas",
                    "title": "Concept: Autoridades ecuatorianas\nCount: 24",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 2400,
                    "color": null
                },
                {
                    "id": "tuteggito_id_481435839",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "SandraGomezC1",
                    "userId": "481435839",
                    "label": "SandraGomezC1",
                    "title": "User: SandraGomezC1\nFollowers: 4.2k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/481435839",
                    "brokenImage": "https://unavatar.now.sh/twitter/SandraGomezC1",
                    "shape": "circularImage",
                    "size": 148,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_510654809",
                    "group": "Buen video",
                    "red": 1,
                    "username": "LincolnLCD",
                    "userId": "510654809",
                    "label": "LincolnLCD",
                    "title": "User: LincolnLCD\nFollowers: 134",
                    "image": "https://4v4t4r5.socialsalert.com/tw/510654809",
                    "brokenImage": "https://unavatar.now.sh/twitter/LincolnLCD",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_key_Centro izquierda",
                    "group": "Centro izquierda",
                    "red": 0,
                    "username": null,
                    "userId": null,
                    "label": "Centro izquierda",
                    "title": "Concept: Centro izquierda\nCount: 48",
                    "image": "",
                    "brokenImage": null,
                    "shape": "box",
                    "size": 4800,
                    "color": null
                },
                {
                    "id": "tuteggito_id_732369597748285442",
                    "group": "Buen video",
                    "red": 1,
                    "username": "henrisin10",
                    "userId": "732369597748285442",
                    "label": "henrisin10",
                    "title": "User: henrisin10\nFollowers: 364",
                    "image": "https://4v4t4r5.socialsalert.com/tw/732369597748285442",
                    "brokenImage": "https://unavatar.now.sh/twitter/henrisin10",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_2242476710",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Blankbsc",
                    "userId": "2242476710",
                    "label": "Blankbsc",
                    "title": "User: Blankbsc\nFollowers: 766",
                    "image": "https://4v4t4r5.socialsalert.com/tw/2242476710",
                    "brokenImage": "https://unavatar.now.sh/twitter/Blankbsc",
                    "shape": "circularImage",
                    "size": 127,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1579585178116231169",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "LeidyCaja00",
                    "userId": "1579585178116231169",
                    "label": "LeidyCaja00",
                    "title": "User: LeidyCaja00\nFollowers: 364",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1579585178116231169",
                    "brokenImage": "https://unavatar.now.sh/twitter/LeidyCaja00",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_222236681",
                    "group": "Buen video",
                    "red": 1,
                    "username": "SUPERYEMO",
                    "userId": "222236681",
                    "label": "SUPERYEMO",
                    "title": "User: SUPERYEMO\nFollowers: 444",
                    "image": "https://4v4t4r5.socialsalert.com/tw/222236681",
                    "brokenImage": "https://unavatar.now.sh/twitter/SUPERYEMO",
                    "shape": "circularImage",
                    "size": 121,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_289662724",
                    "group": "Buen video",
                    "red": 1,
                    "username": "palomito666",
                    "userId": "289662724",
                    "label": "palomito666",
                    "title": "User: palomito666\nFollowers: 1.3k",
                    "image": "https://4v4t4r5.socialsalert.com/tw/289662724",
                    "brokenImage": "https://unavatar.now.sh/twitter/palomito666",
                    "shape": "circularImage",
                    "size": 133,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1802904821004910592",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "rednoticiasec",
                    "userId": "1802904821004910592",
                    "label": "rednoticiasec",
                    "title": "User: rednoticiasec\nFollowers: 56",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1802904821004910592",
                    "brokenImage": "https://unavatar.now.sh/twitter/rednoticiasec",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_477036810",
                    "group": "Daniel Noboa",
                    "red": 1,
                    "username": "Chino99Garcia",
                    "userId": "477036810",
                    "label": "Chino99Garcia",
                    "title": "User: Chino99Garcia\nFollowers: 123",
                    "image": "https://4v4t4r5.socialsalert.com/tw/477036810",
                    "brokenImage": "https://unavatar.now.sh/twitter/Chino99Garcia",
                    "shape": "circularImage",
                    "size": 112,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1489228944423493639",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "juan08Andres",
                    "userId": "1489228944423493639",
                    "label": "juan08Andres",
                    "title": "User: juan08Andres\nFollowers: 170",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1489228944423493639",
                    "brokenImage": "https://unavatar.now.sh/twitter/juan08Andres",
                    "shape": "circularImage",
                    "size": 115,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1798731359017697280",
                    "group": "Buen video",
                    "red": 1,
                    "username": "CarmenS23301",
                    "userId": "1798731359017697280",
                    "label": "CarmenS23301",
                    "title": "User: CarmenS23301\nFollowers: 2",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1798731359017697280",
                    "brokenImage": "https://unavatar.now.sh/twitter/CarmenS23301",
                    "shape": "circularImage",
                    "size": 103,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_1807807439279951872",
                    "group": "Autoridades ecuatorianas",
                    "red": 1,
                    "username": "MileidyUrdane",
                    "userId": "1807807439279951872",
                    "label": "MileidyUrdane",
                    "title": "User: MileidyUrdane\nFollowers: 40",
                    "image": "https://4v4t4r5.socialsalert.com/tw/1807807439279951872",
                    "brokenImage": "https://unavatar.now.sh/twitter/MileidyUrdane",
                    "shape": "circularImage",
                    "size": 109,
                    "color": {
                        "border": "rgba(29,161,242,1)"
                    }
                },
                {
                    "id": "tuteggito_id_118875663246784",
                    "group": "Daniel Noboa",
                    "red": 2,
                    "username": null,
                    "userId": "118875663246784",
                    "label": null,
                    "title": "User: 118875663246784\nFollowers: 0",
                    "image": "https://cdn-60ld3n.socialsalert.com/facebook/image/118875663246784",
                    "brokenImage": "https://4v4t4r5.socialsalert.com/fb/118875663246784",
                    "shape": "circularImage",
                    "size": 100,
                    "color": {
                        "border": "rgba(66,103,178,1)"
                    }
                }
            ],
            [
                {
                    "from": "tuteggito_id_722115497274314752",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 7,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Según",
                    "value": 15,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 342,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 20,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_961427379288793088",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 84,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_961427379288793088",
                    "to": "tuteggito_key_Buen video",
                    "value": 84,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 28,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1445189592299229185",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 3184,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_893614270558199809",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 25,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1530574411400609798",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 37,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 24,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_225195801",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 830,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_934940690861187072",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 6934,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1350816325027958790",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 68,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1693087347313676288",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 15,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 342,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_166810563",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 780,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1644798743273717760",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 15,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_302392975",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 149,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_593988011683",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 24,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 28,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1490156530326511618",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 241,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 24,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_273533804",
                    "to": "tuteggito_key_Buen video",
                    "value": 2818,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 15,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 26,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_289667003",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 101,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 15,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_346028525",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 46,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 20,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1707129370752466945",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 6,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_477036810",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 123,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_387978015",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 680,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_209104489",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 212,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 15,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Según",
                    "value": 342,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1572683644824698880",
                    "to": "tuteggito_key_Buen video",
                    "value": 120,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_931526635832082434",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 15,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_953080613464100866",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 288,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_276193835",
                    "to": "tuteggito_key_Buen video",
                    "value": 118,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1105231507415801856",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 414,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1540002932606787585",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 27,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_352466090",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 315,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 13,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_222236681",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 444,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 26,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_2881186589",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 55,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 13,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 373,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_149616671",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 688,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1105231507415801856",
                    "to": "tuteggito_key_Buen video",
                    "value": 414,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_276193835",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 118,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 396,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Según",
                    "value": 12,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_352466090",
                    "to": "tuteggito_key_Buen video",
                    "value": 315,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1530168154172833793",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 57,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1245976813567868931",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 121,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 357,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_340548263",
                    "to": "tuteggito_key_Buen video",
                    "value": 1773,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 396,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_294935856",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 109,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1798731359017697280",
                    "to": "tuteggito_key_Buen video",
                    "value": 2,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 22,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 72,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Según",
                    "value": 527,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 407,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Según",
                    "value": 24,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 20,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 15,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_417538286",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 141,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Según",
                    "value": 170,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 337,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Según",
                    "value": 22,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 12,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1771984921835257856",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 2,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_888233314053763072",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 324,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1707129370752466945",
                    "to": "tuteggito_key_Buen video",
                    "value": 6,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_340548263",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1773,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 373,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Según",
                    "value": 22,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_900551937661259776",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 170,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1125819939036835841",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 132,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 527,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 13,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Según",
                    "value": 423,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 13,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_303991889",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 139,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 40,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1731856697977688064",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 30,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_934441722028920834",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 94,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_118875663246784",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 0,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 15,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_209104489",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 212,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 22,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_237005162",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 335,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 407,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 407,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1540002932606787585",
                    "to": "tuteggito_key_Buen video",
                    "value": 27,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1707129370752466945",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 6,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 22,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 24,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 15,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1693087347313676288",
                    "to": "tuteggito_key_Buen video",
                    "value": 15,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1105231507415801856",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 414,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_2242476710",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 766,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Según",
                    "value": 11,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 357,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_333773770",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 481,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1798731359017697280",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 2,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_276193835",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 118,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 423,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_934940690861187072",
                    "to": "tuteggito_key_Buen video",
                    "value": 6934,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 364,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 11,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_4034308551",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 53,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1081181177170575360",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 211,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1771984921835257856",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 2,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1071553868",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 97,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_303991889",
                    "to": "tuteggito_key_Buen video",
                    "value": 139,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1350816325027958790",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 68,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_934441722028920834",
                    "to": "tuteggito_key_Buen video",
                    "value": 94,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 24,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 12,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 342,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 15,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 22,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 20,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Según",
                    "value": 72,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_893614270558199809",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 25,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1572683644824698880",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 120,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_239923043",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 165,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Según",
                    "value": 364,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1530168154172833793",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 57,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 15,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 396,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 373,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_773239989912100870",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 73,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1648837345192431616",
                    "to": "tuteggito_key_Buen video",
                    "value": 1,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_222236681",
                    "to": "tuteggito_key_Buen video",
                    "value": 444,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_4034308551",
                    "to": "tuteggito_key_Buen video",
                    "value": 53,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_346039928",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 623,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_347495332",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 187,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 527,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 337,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Según",
                    "value": 26,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 13,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 342,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1668031489823371264",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 3,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_510654809",
                    "to": "tuteggito_key_Buen video",
                    "value": 134,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 28,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_15709862",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1299,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_209104489",
                    "to": "tuteggito_key_Buen video",
                    "value": 212,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_238334855",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 273,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Según",
                    "value": 40,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_722115497274314752",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 7,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 15,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 373,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1115405006",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 55,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1557150792343224321",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 40,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_68333497",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 2378,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_606433777",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 305,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1802904821004910592",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 56,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_732369597748285442",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 364,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 407,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 527,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1071553868",
                    "to": "tuteggito_key_Buen video",
                    "value": 97,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_510654809",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 134,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 170,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_222236681",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 444,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_6780142574374192133",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 0,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_749236873999085568",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 816,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_953080613464100866",
                    "to": "tuteggito_key_Buen video",
                    "value": 288,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1202785941791920130",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1598,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 396,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Según",
                    "value": 15,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 12,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 396,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 364,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 337,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1448709777358532609",
                    "to": "tuteggito_key_Buen video",
                    "value": 53,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 15,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_2881186589",
                    "to": "tuteggito_key_Buen video",
                    "value": 55,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 357,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1601346228876345344",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 21,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_953080613464100866",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 288,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_68333497",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 2378,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 15,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1448709777358532609",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 53,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 357,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1119694438006185985",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 484,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1572683644824698880",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 120,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 342,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_94243739",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 2699,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_4835060129",
                    "to": "tuteggito_key_Buen video",
                    "value": 33,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1648837345192431616",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 170,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1071553868",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 97,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 15,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 396,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 364,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1109145543639474178",
                    "to": "tuteggito_key_Buen video",
                    "value": 142,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1560314775070015490",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 41,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_68333497",
                    "to": "tuteggito_key_Buen video",
                    "value": 2378,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_149616671",
                    "to": "tuteggito_key_Buen video",
                    "value": 688,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 15,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_461499158",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 242,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1005529743968604161",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 45,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 527,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_303991889",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 139,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 72,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1350816325027958790",
                    "to": "tuteggito_key_Buen video",
                    "value": 68,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_352466090",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 315,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_934441722028920834",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 94,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 12,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 40,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 22,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 337,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_893614270558199809",
                    "to": "tuteggito_key_Buen video",
                    "value": 25,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_892366910314229760",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 302,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 407,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 373,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 357,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_166810563",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 780,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 407,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 527,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1768265285151211520",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 218,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1490156530326511618",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 241,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_481435839",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 4208,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_225195801",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 830,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Según",
                    "value": 337,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_225195801",
                    "to": "tuteggito_key_Buen video",
                    "value": 830,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_732369597748285442",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 364,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 28,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 72,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_346039928",
                    "to": "tuteggito_key_Buen video",
                    "value": 623,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1600490571608592387",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 342,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1445189592299229185",
                    "to": "tuteggito_key_Buen video",
                    "value": 3184,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1668031489823371264",
                    "to": "tuteggito_key_Buen video",
                    "value": 3,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_294935856",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 109,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_373686408",
                    "to": "tuteggito_key_Buen video",
                    "value": 13005,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1771984921835257856",
                    "to": "tuteggito_key_Buen video",
                    "value": 2,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Según",
                    "value": 28,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_4835060129",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 33,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807802057925042176",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 15,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807803147928100864",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 24,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_961427379288793088",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 84,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 364,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Según",
                    "value": 20,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1109145543639474178",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 142,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 11,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_289662724",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1351,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1445189592299229185",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 3184,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 40,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_373686408",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 13005,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_2881186589",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 55,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_273533804",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 2818,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_934940690861187072",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 6934,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1215432028046397442",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 3260,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1798731359017697280",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 2,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 373,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 337,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 22,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1668031489823371264",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 3,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 40,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_264374988",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1821,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_237381450086351",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 286677,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_166810563",
                    "to": "tuteggito_key_Buen video",
                    "value": 780,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_930975961",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 2093,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1490156530326511618",
                    "to": "tuteggito_key_Buen video",
                    "value": 241,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 26,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_242765328",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 211,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_294935856",
                    "to": "tuteggito_key_Buen video",
                    "value": 109,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_289662724",
                    "to": "tuteggito_key_Buen video",
                    "value": 1351,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 170,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 11,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_732369597748285442",
                    "to": "tuteggito_key_Buen video",
                    "value": 364,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1731856697977688064",
                    "to": "tuteggito_key_Buen video",
                    "value": 30,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_346039928",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 623,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1245976813567868931",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 121,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1427354487459663875",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 210,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 26,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1773193003273773057",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 7,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 357,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 28,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Según",
                    "value": 15,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 423,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 72,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1693087347313676288",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 15,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 22,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Según",
                    "value": 13,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1081181177170575360",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 211,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1421148192247271430",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 36,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 26,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 40,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1600516772020502532",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 337,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_930975961",
                    "to": "tuteggito_key_Buen video",
                    "value": 2093,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1729276768270344192",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 13,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_239923043",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 165,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_237005162",
                    "to": "tuteggito_key_Buen video",
                    "value": 335,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 22,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_930975961",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 2093,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1771026544560881664",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 47,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_289662724",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 1351,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_510654809",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 134,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 170,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_899017656510160896",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 712,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1081181177170575360",
                    "to": "tuteggito_key_Buen video",
                    "value": 211,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_373686408",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 13005,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 11,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 22,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 15,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 364,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807804030531334144",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 15,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_722115497274314752",
                    "to": "tuteggito_key_Buen video",
                    "value": 7,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 12,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1721902499538587648",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 18,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 20,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 423,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 11,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_1530168154172833793",
                    "to": "tuteggito_key_Buen video",
                    "value": 57,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1747765513281851392",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 11,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807807439279951872",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 40,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_45721880",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 1153,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 22,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1579492937033023488",
                    "to": "tuteggito_key_Según",
                    "value": 357,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1807815406809501696",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 26,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1648837345192431616",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 1,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_593993585903",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 72,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807796241520074752",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 22,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1245976813567868931",
                    "to": "tuteggito_key_Buen video",
                    "value": 121,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_340548263",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 1773,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_388598058",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 446,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 423,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 15,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_273533804",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 2818,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_901630769050898432",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 5,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 170,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1729998752096636928",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 28,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 72,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1109145543639474178",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 142,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807824431483703303",
                    "to": "tuteggito_key_Desfile ecuatoriano",
                    "value": 12,
                    "group": "Desfile ecuatoriano"
                },
                {
                    "from": "tuteggito_id_1807786981100769280",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 22,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1453773511135272968",
                    "to": "tuteggito_key_Comunidad migrante",
                    "value": 72,
                    "group": "Comunidad migrante"
                },
                {
                    "from": "tuteggito_id_237005162",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 335,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579582918921445385",
                    "to": "tuteggito_key_Según",
                    "value": 396,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 423,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1579585178116231169",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 364,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1489228944423493639",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 170,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_4034308551",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 53,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_4835060129",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 33,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1540002932606787585",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 27,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_1448709777358532609",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 53,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1807800587272036352",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 11,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_1579489749554892800",
                    "to": "tuteggito_key_Tercera comunidad",
                    "value": 423,
                    "group": "Tercera comunidad"
                },
                {
                    "from": "tuteggito_id_149616671",
                    "to": "tuteggito_key_Centro izquierda",
                    "value": 688,
                    "group": "Centro izquierda"
                },
                {
                    "from": "tuteggito_id_167694628",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 121,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1731856697977688064",
                    "to": "tuteggito_key_Daniel Noboa",
                    "value": 30,
                    "group": "Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579511771815100416",
                    "to": "tuteggito_key_Según",
                    "value": 373,
                    "group": "Según"
                },
                {
                    "from": "tuteggito_id_239923043",
                    "to": "tuteggito_key_Buen video",
                    "value": 165,
                    "group": "Buen video"
                },
                {
                    "from": "tuteggito_id_1729329474066391040",
                    "to": "tuteggito_key_Autoridades ecuatorianas",
                    "value": 20,
                    "group": "Autoridades ecuatorianas"
                },
                {
                    "from": "tuteggito_id_1807806799979937792",
                    "to": "tuteggito_key_Ciudad norteamericana",
                    "value": 15,
                    "group": "Ciudad norteamericana"
                },
                {
                    "from": "tuteggito_id_1579499982415069186",
                    "to": "tuteggito_key_Presidente Daniel Noboa",
                    "value": 527,
                    "group": "Presidente Daniel Noboa"
                },
                {
                    "from": "tuteggito_id_1579520016881487872",
                    "to": "tuteggito_key_Según",
                    "value": 407,
                    "group": "Según"
                }
            ]
        ]);
        let root = am5.Root.new('chartdiv');

        root.setThemes([am5themes_Animated.new(root)]);

        let data = {
            name: 'Root',
            value: 0,
            children:  dataOld,
        };

        let container = root.container.children.push(
            am5.Container.new(root, {
                width: am5.percent(100),
                height: am5.percent(100),
                layout: root.verticalLayout,
            })
        );

        let series = container.children.push(
            am5hierarchy.ForceDirected.new(root, {
                singleBranchOnly: false,
                downDepth: 1,
                topDepth: 1,
                maxRadius: 25,
                minRadius: 12,
                valueField: 'value',
                categoryField: 'name',
                childDataField: 'children',
                idField: 'name',
                linkWithStrength: 0.01,
                linkWithField: 'linkWith',
                manyBodyStrength: -10,
                centerStrength: 2,
            })
        );
        series.circles.template.setAll({
            radius: 35,
            radiusX: 35,
            fillOpacity: 1,
        });

        series.circles.template.set("forceHidden", true);

        series.outerCircles.template.set("forceHidden", true);

        series.circles.template.adapters.add("forceHidden", function(forceHidden, target) {
            return target.dataItem.get("depth") === 0 ? false : forceHidden;
        });

        series.labels.template.setAll({
            fill: am5.color(0x000000),
            // y: 45,
            //y: am5.percent(10),
            oversizedBehavior: "none"
        });

        series.labels.template.adapters.add("y", function(y, target) {
            return target.dataItem.get("depth") === 0 ? 0 : y;
        });

        series.nodes.template.setup = function(target) {
            target.events.on("dataitemchanged", async function(ev) {
                // var circle = container.children.push(am5.Circle.new(root, {
                //     radius: 30,
                //     stroke: am5.color(0xB4E1FF),
                //     fill: am5.color(0xB4E1FF),
                //     strokeWidth: 4,
                //     tooltipText: "{name}"
                // }));
                await cropAndRoundImage(ev.target.dataItem.dataContext.image, 100, (dataUrl) => {
                    var icon = target.children.push(am5.Picture.new(root, {
                        width: 50,
                        height: 50,
                        src: dataUrl,
                        // mask: am5.Circle.new(root, {
                        //     radius: 35,
                        // })
                    }));
                });
                // icon.set("mask", circle);

            });
        }




        series.get('colors').set('step', 2);

        series.data.setAll([data]);
        series.set('selectedDataItem', series.dataItems[0]);

        series.appear(1000, 100);
        chartRef.current = root;
        return () => {
            root.dispose();
        };
    }, []);



    const getImage = () => {
        if (!chartRef.current) return;

        const exporting = am5plugins_exporting.Exporting.new(chartRef.current, {
            menu: am5plugins_exporting.ExportingMenu.new(chartRef.current, {}),
            pngOptions: {
                quality: 0.7,
                maintainPixelRatio: true,
                minWidth: 1000,
                maxWidth: 2000
            },
            jpgOptions: {
                quality: 0.7,
                maintainPixelRatio: true,
                minWidth: 1000,
                maxWidth: 2000
            },
        });

        setTimeout(() => {

            // Export the chart to PNG and get the base64 string
            exporting.export("png").then((data) => {
                const base64 = data;
                console.log("Base64 Image:", base64);
                // You can use the base64 string here, for example, to download or display it
            }).catch((error) => {
                console.error("Error exporting chart:", error);
            });
        }, 3000)

    };


    return (
        <div style={{width: '2150px', height: '1075px'}}>

            <div id="chartdiv" style={{width: '100%', height: '100%'}}></div>

            <a onClick={getImage}>getimage</a>


        </div>
    )
};

export default ChartComponent;

