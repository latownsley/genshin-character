import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';
import bodyParser from 'body-parser';

// sets up router
const app = express();
const router = express.Router();
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT

/**
 * Route Hander for /get-char
 */

app.post("/get-char", asyncHandler(async (req, res, next) => {
    console.log("request received. responding to the request!");
    console.log(req)
    const {id} = req.body;
    if (id == "ayaka"){
        res.send(
            {
                image: "./images/character-icons/Kamisato_Ayaka_Icon.png",
                type: "Cryo",
                type_image: "./images/cryo.png",
                id: "ayaka",
                name: "Kamisato Ayaka",
                weapon: "Sword",
                description: "Ayaka is a kind-hearted girl with a pleasant temperament who treats others with politeness and courtesy. She holds the people of Inazuma dear to her heart and often goes out of her way to personally assist them in all kinds of matters. She is a perfectionist with an earnest personality.",
            }
        );
    } else if (id == "faruzan"){
        res.send(
            {
                image: "./images/character-icons/Faruzan_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "faruzan",
                name: "Faruzan",
                weapon: "Bow",
                "description": "Faruzan is a renowned professor of the Sumeru Akademiya and member of the Haravatat Darshan. Faruzan as a Support is her best build, which works especially well on teams that utilize Swirl to deal DMG."
            }
        );
    } else if (id == "heizou"){
        res.send(
            {
                image: "./images/character-icons/Shikanoin_Heizou_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "heizou",
                name: "Shikanoin Heizou",
                description: "A young prodigy detective from the Tenryou Commission. His senses are sharp and his thoughts are ingenious. No matter what unsolved case he's facing, he can get to the truth in unexpected ways.",
                weapon: "Catalyst"
            }
        );
    } else if (id == "jean"){
        res.send(
            {
                image: "./images/character-icons/Jean_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "jean",
                name: "Jean Gunnhildr",
                description: "Jean Gunnhildr, older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.",
                weapon: "Sword"
            }
        );
    } else if (id == "kazuha"){
        res.send(
            {
                image: "./images/character-icons/Kaedehara_Kazuha_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "kazuha",
                name: "Kaedehara Kazuha",
                description: "A wandering samurai from Inazuma with a modest and gentle personality. Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past.",
                weapon: "Sword"
            }
        );
    } else if (id == "venti"){
        res.send(
            {
                image: "./images/character-icons/Venti_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "venti",
                name: "Venti (Barbatos)",
                description: "Venti is a free-spirited, wine-loving bard in Mondstadt and the current mortal vessel of Barbatos. Also known as the God of Freedom, he is the current Anemo Archon of The Seven who presides over Mondstadt.",
                weapon: "Bow"
            }
        );
    } else if (id == "wanderer"){
        res.send(
            {
                image: "./images/character-icons/Wanderer_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "wanderer",
                name: "Wanderer (Scaramouche)",
                description: "A wayfaring figure whose identity is a mystery. He dresses like a mountain ascetic, but he certainly does not act the part. After erasing his Fatui ties from Irminsul, the Wanderer is shown to be amiable and yet living an unsatisfactory life as he lacked a human heart and name.",
                weapon: "Catalyst"
            }
        );
    } else if (id == "bennett"){
        res.send(
            {
                image: "./images/character-icons/Bennett_Icon.png",
                type: "Pyro",
                type_image: "./images/pyro.png",
                id: "bennett",
                name: "Bennett",
                weapon: "Sword",
                description: "An orphan discovered by an elderly adventurer as a baby, Bennett was raised in Mondstadt's Adventurers' Guild. He is the one and only member of Benny's Adventure Team, as everyone else left the team after experiencing the constant misfortune that follows him."
            }
        );
    } else if (id == "xiangling"){
        res.send(
            {
                image: "./images/character-icons/Xiangling_Icon.png",
                type: "Pyro",
                type_image: "./images/pyro.png",
                id: "xiangling",
                name: "Xiangling",
                description: "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes. Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran.",
                weapon: "Polearm"
            }
        );
    } else if (id == "yelan"){
        res.send(
            {
                image: "./images/character-icons/Yelan_Icon.png",
                type: "Hydro",
                type_image: "./images/hydro.png",
                id: "yelan",
                name: "Yelan",
                description: "Yelan is a mysterious person who claims to work for the Ministry of Civil Affairs, but comes out as a non-entity on their list. She also claims to work for the Yanshang Teahouse, but only uses it for her true job, an intelligence agent collaborating with Ningguang.",
                weapon: "Bow"
            }
        );
    } else if (id == "xiao"){
        res.send(
            {
                image: "./images/character-icons/Xiao_Icon.png",
                type: "Anemo",
                type_image: "./images/anemo.png",
                id: "xiao",
                name: "Xiao",
                description: "Xiao is a yaksha who has fought in the Archon War and holds a high level of seniority among adepti. He has a reserved demeanor and has little intention of getting close to mortals. He does not want sympathy for his past and believes his fellow Yakshas would also find it insulting.",
                weapon: "Polearm"
            }
        );
    } else if (id == "xingqiu"){
        res.send(
            {
                image: "./images/character-icons/Xingqiu_Icon.png",
                type: "Hydro",
                type_image: "./images/hydro.png",
                id: "xingqiu",
                name: "Xingqiu",
                description: "Xingqiu He is the second son of the Guild Manager of the Feiyun Commerce Guild, an influential group in Liyue, and is also a self-proclaimed practitioner of the Guhua Clan's arts.",
                weapon: "Sword"
            }
        );
    } else if (id == "zhongli"){
        res.send(
            {
                image: "./images/character-icons/Zhongli_Icon.png",
                type: "Geo",
                type_image: "./images/geo.png",
                id: "zhongli",
                name: "Zhongli (Morax)",
                description: "Zhongli is the mysterious consultant of Wanghsheng Funeral Parlor. Nobody really knows where he came from, but he is very intelligent and knows rituals down to their tiniest details. Despite being viewed as an intelligent and very capable man, he has his own fair share of eccentricity.",
                weapon: "Polearm"
            }
        );
    } else if (id == "raiden"){
        res.send(
            {
                image: "./images/character-icons/Raiden_Shogun_Icon.png",
                type: "Electro",
                type_image: "./images/electro.png",
                id: "raiden",
                name: "Raiden Shogun",
                description: "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate. With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.",
                weapon: "Polearm"
            }
        );
    } else if (id == "nahida"){
        res.send(
            {
                image: "./images/character-icons/Nahida_Icon.png",
                type: "Dendro",
                type_image: "./images/dendro.png",
                id: "nahida",
                name: "Nahida (Lesser Lord Kusanali)",
                description: "Nahida dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much. Her burden is heavy, but though she may experience loneliness, and though darkness is all she sees before her, she will not stop moving forward.",
                weapon: "Catalyst"
            }
        );
    } else if (id == "ganyu"){
        res.send(
            {
                image: "./images/character-icons/Ganyu_Icon.png",
                type: "Cryo",
                type_image: "./images/cryo.png",
                id: "ganyu",
                name: "Ganyu",
                description: "She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as the general secretary of the Liyue Qixing.",
                weapon: "Bow"
            }
        );
    } else if (id == "kokomi"){
        res.send(
            {
                image: "./images/character-icons/Sangonomiya_Kokomi_Icon.png",
                type: "Hydro",
                type_image: "./images/hydro.png",
                id: "kokomi",
                name: "Sangonomiya Kokomi",
                description: "Kokomi is the Divine Priestess of Watatsumi Island, and also serves as its supreme leader. She is well-versed in the art of war, is good at strategizing, and has keen insights into military affairs. She is also adept at handling domestic affairs, diplomacy, and other matters.",
                weapon: "Catalyst",
            }
        );
    } else if (id == "hutao"){
        res.send(
            {
                image: "./images/character-icons/Hu_Tao_Icon.png",
                type: "Pyro",
                type_image: "./images/pyro.png",
                id: "hutao",
                name: "Hu Tao",
                description: "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs. She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.",
                weapon: "Polearm"
            }
        );
    } else if (id == "shenhe"){
        res.send(
            {
                image: "./images/character-icons/Shenhe_Icon.png",
                type: "Cryo",
                type_image: "./images/cryo.png",
                id: "shenhe",
                name: "Shenhe",
                description: "The daughter of an unnamed exorcist couple, Shenhe was taken in and raised by Cloud Retainer as a disciple following a traumatic incident instigated by Shenhe's father during her childhood. She is a student solely of Cloud Retainer in name, but her impressive constitution and intelligence quickly won several other adepti over.",
                weapon: "Polearm"
            }
        );
    }
}));

app.use((error, req, res, next) => {
    console.log(`Unhandled Error ${error}. URL = ${req.originalUrl}, method= ${req.method}`);
    res.send(`500 - Server Error`);

});


app.use(express.static("public"));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});