import { latToCyr } from "../../../../main/js/converters/latToCyr.js";

// for tests:
// set optional: true if you want a test to fail with a WARNING instead of an ERROR

// for suites:
// set optional: true if you want suite to be SUCCEED even if there were WARNINGS in tests or sub-suites, otherwise it will propagate a WARNING state
const latToCyrTestSuite = {
    name: `EXPERIMENTAL Versija 1.1 Latynka => Kyrylycja`,
    fn: latToCyr,
    optional: false,
    testPayload: [
        {
            name: `kontrol'nyj testovyj tekst`,
            optional: true,
            testPayload: {

                input: `    Slova inšomovnogo pohodžennja: ad'je, konferans'je, monpans'je, pas'jans, atel'je, barel'jef, batal'jon, mil'jard, buton'jerka, vin'jetka, kan'jon, Got'je, N'ju-Jork, N'juton, N'jasa, Ren'je toščo. Ale V’jent'jan.
    Himični spoluky: "a-ftorsul'fo-nyloksyalkanperftorkarbonova kyslota".
    V latynci pravyl'no pysaty apostrof pered "jo" pislja prygolosnyh: ser’jozno, kur’joz, ale rajon, mil'jon.
    Osoblyvi vypadky na dygrafy: sjogodni, ljoh (ale major), svjaščennyk, pracjuju.
    Osoblyvi vypadky zi zmišanym registrom: "NE SPOVIŠČATY" (ale "Šče"), "JUNESKO", SER'JOZNO, KUR’JOZ, RAJON, MIL'JON, OBSJE.
    Osoblyvi vypadky na 'jo' (m'jakyj znak + "o"): p'jatjoh, trjoh, jogo, "jogurt", (Jorkšyr), /joga/, [Jogannesburg], _Jovovyč_.
    V inšomovnyh slovah apostrof pered ja, ju, je, ji stavyt'sja ne til'ky pislja gubnyh (b, p, v, m, f) ta r, a j pislja šypljačyh ta zadnjorotovyh (g, k, h, ž, č, š), jakščo pislja nyh čujet'sja zvuk [j]: komp'juter [-pju-], Dansm'jur [-mjur], bar'jer [-rjer], myš'jak [-šja-], Ruž'je [-žje], H'juston (@@Huston@@) [hju-], Rejk'javik (@@Reykjavik@@) [-kja-], G'jata [gja-].
    @@Grand Beatbox Battle@@ (zazvyčaj skoročeno @@GBB@@) — ščorične mižnarodne zmagannja z @@beatboxing@@u, jake provodyt' @@Swissbeatbox@@ (2022). Konkurs provodyt' kil'ka turniriv dlja riznyh form i kategorij @@beatboxing@@u, zokrema: @@solo@@ (abo @@showcase@@), @@Loopstation@@, @@Tag Team@@, @@Tag Team Loopstation@@ i @@Crew@@.
    Možna šče al'ternatyvno rozgljanuty rišennja z @@iframe + third party scraper API@@.`,

                expected: `    Слова іншомовного походження: адьє, конферансьє, монпансьє, пасьянс, ательє, барельєф, батальйон, мільярд, бутоньєрка, віньєтка, каньйон, Готьє, Нью-Йорк, Ньютон, Ньяса, Реньє тощо. Але В’єнтьян.
    Хімічні сполуки: «а-фторсульфо-нилоксиалканперфторкарбонова кислота».
    В латинці правильно писати апостроф перед «йо» після приголосних: серйозно, курйоз, але район, мільйон.
    Особливі випадки на диграфи: сьогодні, льох (але майор), священник, працюю.
    Особливі випадки зі змішаним регістром: «НЕ СПОВІЩАТИ» (але «Ще»), «ЮНЕСКО», СЕРЙОЗНО, КУРЙОЗ, РАЙОН, МІЛЬЙОН, ОБСЄ.
    Особливі випадки на «йо» (м’який знак + «о»): п’ятьох, трьох, його, «йогурт», (Йоркшир), /йога/, [Йоганнесбург], _Йовович_.
    В іншомовних словах апостроф перед я, ю, є, ї ставиться не тільки після губних (б, п, в, м, ф) та р, а й після шиплячих та задньоротових (г, к, х, ж, ч, ш), якщо після них чується звук [й]: комп’ютер [-пю-], Дансм’юр [-мюр], бар’єр [-рєр], миш’як [-шя-], Руж’є [-жє], Х’юстон (Huston) [хю-], Рейк’явік (Reykjavik) [-кя-], Г’ята [гя-].
    Grand Beatbox Battle (зазвичай скорочено GBB) — щорічне міжнародне змагання з beatboxingу, яке проводить Swissbeatbox (2022). Конкурс проводить кілька турнірів для різних форм і категорій beatboxingу, зокрема: solo (або showcase), Loopstation, Tag Team, Tag Team Loopstation і Crew.
    Можна ще альтернативно розглянути рішення з iframe + third party scraper API.`}
        },
        {
            name: `slova ta frazy v podvijnomu ravlyku "@@word@@" majut' zalyšatysja nezminnymy nezaležno vid vmistu e.g. Βoύλγαρoί`,
            optional: true,
            testPayload: {
                input: `    Bulgáry (lat. @@Bulgares@@, grec. @@Βoύλγαρoί@@, starobolg. @@Блъгарє@@, dav.-rus. @@българы@@, tat. @@болгарлар@@, čuv. @@Пӑлха́рсем@@, bolg. @@прабългари@@) — grupa tjurks'kyh (ogurs'kyh) kočovyh plemen.`,
                expected: `    Булга́ри (лат. Bulgares, грец. Βoύλγαρoί, староболг. Блъгарє, дав.-рус. българы, тат. болгарлар, чув. Пӑлха́рсем, болг. прабългари) — група тюркських (огурських) кочових племен.`
            }
        },
        {
            name: `apostrof ' ne maje zaminjuvatysja na trykutni lapky`,
            optional: true,
            testPayload: {
                input: `    Vam Danylo izminjaje, hodyt' do artystky,
    Halvu nosyt', i prjanyky; moločni sosysky.
    Vin iz neju v restoranah + kafe buvaje.
    Sam kon'jak p'je, a artystku vynamy vgoščaje.
    I artystka syl'no ljubyt' vašogo Danyla.
    Šče nikogo tak u žyzni, kaže, ne ljubyla.
    Ta artystka — baleryna, čolovika maje.
    Vin v jakomus' ministerstvi važnyj post zajmaje.`,
                expected: `    Вам Данило ізміняє, ходить до артистки,
    Халву носить, і пряники; молочні сосиски.
    Він із нею в ресторанах + кафе буває.
    Сам коньяк п’є, а артистку винами вгощає.
    І артистка сильно любить вашого Данила.
    Ще нікого так у жизні, каже, не любила.
    Та артистка — балерина, чоловіка має.
    Він в якомусь міністерстві важний пост займає.`
            }
        },
        {
            name: `podvijni lapky "" majut' zaminjuvatysja na ukrajins'ki trykutni «» do 1go vkladennja`,
            optional: true,
            testPayload: {
                input: `    Vam Danylo izminjaje, hodyt' do artystky,
    Halvu nosyt', i prjanyky; moločni sosysky.
    Vin iz neju v restoranah + kafe buvaje.
    Sam kon'jak p'je, a artystku vynamy vgoščaje.
    I artystka syl'no ljubyt' vašogo Danyla.
    "Šče nikogo tak u žyzni, kaže, ne ljubyla".
    Ta artystka — baleryna, čolovika maje.
    Vin v jakomus' ministerstvi važnyj post zajmaje.`,
                expected: `    Вам Данило ізміняє, ходить до артистки,
    Халву носить, і пряники; молочні сосиски.
    Він із нею в ресторанах + кафе буває.
    Сам коньяк п’є, а артистку винами вгощає.
    І артистка сильно любить вашого Данила.
    «Ще нікого так у жизні, каже, не любила».
    Та артистка — балерина, чоловіка має.
    Він в якомусь міністерстві важний пост займає.`
            }
        },
        {
            name: `podvijni figurni lapky “” majut' zaminjuvatysja na ukrajins'ki trykutni «» do 5ty vkladen'`,
            optional: true,
            testPayload: {
                input: `    “Vam Danylo izminjaje, hodyt' do artystky,
    “Halvu nosyt', i prjanyky; moločni sosysky.
    Vin iz neju v restoranah + kafe buvaje.
    Sam kon'jak p'je, a artystku vynamy vgoščaje.
    “I artystka syl'no ljubyt' vašogo Danyla.
    “Šče nikogo tak u “žyzni”, kaže”, ne ljubyla”.
    Ta artystka — baleryna, čolovika maje”.
    Vin v jakomus' ministerstvi važnyj post zajmaje”.`,
                expected: `    «Вам Данило ізміняє, ходить до артистки,
    «Халву носить, і пряники; молочні сосиски.
    Він із нею в ресторанах + кафе буває.
    Сам коньяк п’є, а артистку винами вгощає.
    «І артистка сильно любить вашого Данила.
    «Ще нікого так у «жизні», каже», не любила».
    Та артистка — балерина, чоловіка має».
    Він в якомусь міністерстві важний пост займає».`
            }
        }
    ]
}

export { latToCyrTestSuite }