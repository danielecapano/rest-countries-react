import * as deepl from "deepl-node";

const authKey = "a37b7a95-21a4-4234-b161-9ecb99f2a7a2:fx";

const translator = new deepl.Translator(authKey);

(async () => {
    const result = await translator.translateText('Hello, world!', null, 'fr');
    console.log(result.text); // Bonjour, le monde !
})();


