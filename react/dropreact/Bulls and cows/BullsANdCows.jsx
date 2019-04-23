import React from "react";
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MainDiv = styled.div`
    text-align: center;
    height: 386px;
    width: 486px;
    position: absolute;
    top: -45%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #FFE4B5;
    border: 1px solid;
    border-radius: 6px;
    border-color: #FFE4B5;
`;

const SetUpGameDiv = styled.div`
    text-align: center;
    font-family: 'Pangolin', cursive;
    height: 50px;
    width: 450px;
    position: absolute;
    top: -80%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #FFFFE0;
    border: 1px solid;
    border-radius: 6px;
    border-color: #FFFFE0; 
`;

const SetUpGameSpan = styled.span`
    position: absolute;
    top: 20%;
    right: 0;
    bottom: 20%;
    left: 0;
    margin: auto;
`;

const SetUpLabel = styled.label`
    text-align: center; 
    font-size: 25px;
    color: #8B4513;
`;

const SetUpPSpan = styled.span`
    width: 20px;
`;

const SetUpSelect = styled.select`
    text-align: center;
    font-size: 20px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
    background-color: #FFFFE0;
    border: 2px solid;
    border-radius: 6px 0 0 6px ;
    border-color: #FFE4B5; 
`;

const SetUpOption = styled.option`
    text-align: center;
    font-size: 20px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
    background-color: #FFFFE0;
    border: 1px solid;
    border-radius:  0 0 6px 6px ;
    border-color: #696969; 
`;

const SetUpButton = styled.button`
    text-align: center;
    size: 22px;
    font-size: 18px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
    padding-top: 3px;
    padding-bottom: 1px;
    background-color: #FFE4B5;
    border: 2px solid;
    border-radius: 0 6px 6px 0;
    border-color: #FFE4B5; 
`;

const MessageDiv = styled.div`
    text-align: center;
    height: 150px;
    width: 450px;
    position: absolute;
    top: -15%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #FFFFE0;
    border: 1px solid;
    border-radius: 6px;
    border-color: #FFFFE0;
`;

const AnswerSpan = styled.span`
    position: absolute;
    top: 75%;
    right: 0;
    bottom: 0;
    left: 85%;
`;

const AnswerButton = styled.button`
    text-align: center;
    size: 18px;
    font-size: 16px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
    padding-top: 4px;
    padding-bottom: 2px;
    background-color: #FFE4B5;
    border: 2px solid;
    border-radius: 6px;
    border-color: #FFE4B5; 
`;

const MessageLabel = styled.label`
    position: absolute;
    top: 30%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    font-size: 30px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
`;

const AskDiv = styled.div`
    text-align: center;
    font-size: 30px;
    height: 100px;
    width: 450px;
    position: absolute;
    top: 65%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #FFFFE0;
    border: 1px solid;
    border-radius: 6px;
    border-color: #FFFFE0;
`;

const AskSpan = styled.span`
    position: absolute;
    top: 30%;
    right: 0;
    bottom: 30%;
    left: 0;
    margin: auto;
`;

const AskInput = styled.input`
    font-size: 25px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
    padding-left: 10px;
    background-color: #FFFFE0;
    border: 2px solid;
    border-radius: 6px 0 0 6px;
    border-color: #FFE4B5; 
`;

const AskButton = styled.button`
    text-align: center;
    size: 32px;
    font-size: 21px;
    font-family: 'Pangolin', cursive;
    color: #8B4513;
    padding-top: 4px;
    padding-bottom: 2px;
    background-color: #FFE4B5;
    border: 2px solid;
    border-radius: 0 6px 6px 0;
    border-color: #FFE4B5; 
`;

export default class BullsAndCows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            select: '3',
            wordsthreeletters: ['аль', 'абы', 'али', 'акт', 'аут', 'акр', 'аул', 'азу', 'ату', 'ага', 'бай', 'бак', 'бал', 'бар', 'бас', 'бах', 'бац', 'бег', 'беж', 'без', 'бей', 'бес', 'бис', 'бит', 'бич', 'боа', 'боб', 'бог', 'бой', 'бок', 'бор', 'бот', 'бра', 'буй', 'бук', 'бум', 'бур', 'бут', 'бух', 'бык', 'быт', 'вал', 'вар', 'ваш', 'век', 'вес', 'вид', 'вне', 'воз', 'вой', 'вол', 'вон', 'вор', 'все', 'вуз', 'выя', 'вяз', 'гад', 'газ', 'гам', 'где', 'ген', 'гид', 'год', 'гол', 'гон', 'гоп', 'гуд', 'гуж', 'гул', 'дар', 'два', 'дед', 'для', 'дно', 'дог', 'дож', 'док', 'дол', 'дом', 'дот', 'дуб', 'дух', 'душ', 'дым', 'еда', 'его', 'еще', 'ерш', 'ель', 'еле', 'жар', 'жох', 'жор', 'жом', 'жир', 'жэк', 'жим', 'жук', 'зав', 'зад', 'зал', 'зам', 'зев', 'зло', 'зоб', 'зов', 'зря', 'зуб', 'зуд', 'зык', 'ибо', 'ива', 'иго', 'иже', 'изо', 'икс', 'или', 'иль', 'имя', 'ион', 'иск', 'кал', 'кап', 'кий', 'кит', 'код', 'кой', 'кок', 'кол', 'ком', 'кон', 'кот', 'кош', 'кто', 'куб', 'кум', 'кус', 'куш', 'лаг', 'лад', 'лаз', 'лай', 'лак', 'лев', 'лед', 'лей', 'лек', 'лен', 'лес', 'лет', 'лещ', 'лик', 'лис', 'лиф', 'лоб', 'лог', 'лом', 'лот', 'лох', 'луб', 'луг', 'лук', 'луч', 'лье', 'люб', 'люд', 'люк', 'ляп', 'маг', 'май', 'мак', 'мат', 'мах', 'мга', 'мед', 'меж', 'мел', 'мех', 'меч', 'миг', 'мим', 'мир', 'миф', 'мой', 'мол', 'мор', 'мот', 'мох', 'муж', 'мул', 'мыс', 'мэр', 'мяч', 'нож', 'ниц', 'низ', 'нюх', 'нет', 'нэп', 'наш', 'нос', 'оба', 'обо', 'ода', 'одр', 'око', 'они', 'оно', 'опт', 'орг', 'оса', 'ось', 'ото', 'паж', 'паз', 'пай', 'пак', 'пал', 'пан', 'пар', 'пас', 'пат', 'пах', 'пес', 'пик', 'пир', 'пли', 'под', 'пол', 'пом', 'поп', 'пот', 'при', 'про', 'пуд', 'пук', 'пуп', 'пуф', 'пух', 'пыж', 'пыл', 'пэр', 'раб', 'рад', 'раж', 'раз', 'рай', 'рак', 'рас', 'рев', 'рей', 'рея', 'ржа', 'рис', 'риф', 'ров', 'рог', 'род', 'рой', 'рок', 'рол', 'ром', 'рот', 'рык', 'рюш', 'ряд', 'ряж', 'сад', 'сам', 'сан', 'сап', 'сев', 'сей', 'сиг', 'сие', 'сип', 'сия', 'сок', 'сом', 'сон', 'сор', 'соя', 'сто', 'суд', 'сук', 'суп', 'сын', 'сыр', 'сыч', 'сэр', 'таз', 'так', 'там', 'тес', 'тик', 'тип', 'тир', 'тис', 'тиф', 'тля', 'ток', 'тол', 'том', 'тон', 'топ', 'тот', 'три', 'тсс', 'туз', 'тук', 'тур', 'тут', 'туф', 'туш', 'туя', 'тыл', 'тын', 'тюк', 'тяж', 'усы', 'угу', 'ура', 'узы', 'уют', 'ужо', 'ухо', 'уже', 'уха', 'уда', 'фас', 'фря', 'фал', 'фон', 'фея', 'фен', 'фат', 'фут', 'хна', 'хек', 'хап', 'хан', 'хор', 'хам', 'ход', 'цех', 'цеп', 'цап', 'цыц', 'цуг', 'чад', 'чай', 'чал', 'чан', 'час', 'чей', 'чек', 'чем', 'чиж', 'чик', 'чин', 'чих', 'чох', 'что', 'чуб', 'чум', 'чур', 'чхи', 'шаг', 'шар', 'шах', 'шеф', 'шея', 'шик', 'шип', 'шиш', 'шов', 'шок', 'шоу', 'шум', 'шут', 'щуп', 'щит', 'эра', 'эге', 'эхо', 'это', 'эрг', 'юрк', 'юла', 'явь', 'ярд', 'ямб', 'яма', 'язь', 'яга', 'ять',],
            wordsfourletters: ['авто', 'агат', 'адов', 'ажур', 'азот', 'аист', 'айва', 'айда', 'акын', 'алло', 'алоэ', 'алый', 'альт', 'амба', 'анис', 'анод', 'арап', 'арат', 'арба', 'арго', 'ария', 'арка', 'арфа', 'арык', 'атом', 'ахти', 'ашуг', 'баба', 'база', 'балл', 'банк', 'бант', 'баня', 'бард', 'барк', 'барс', 'батя', 'баул', 'баян', 'бега', 'беда', 'безе', 'безо', 'бели', 'бзик', 'било', 'бинт', 'бита', 'бить', 'блат', 'блеф', 'близ', 'блик', 'блин', 'блиц', 'блок', 'блуд', 'бобр', 'боек', 'боец', 'боже', 'боза', 'бокс', 'болт', 'боль', 'боны', 'борт', 'борщ', 'босс', 'брак', 'брат', 'брег', 'бред', 'бриг', 'бриз', 'брод', 'бром', 'брус', 'бряк', 'буде', 'буер', 'буза', 'бука', 'бунт', 'бурт', 'буря', 'буса', 'бусы', 'буфы', 'буча', 'буян', 'было', 'быль', 'быть', 'бьеф', 'бюро', 'бюст', 'бязь', 'бяка', 'вага', 'ваза', 'вата', 'ватт', 'вбок', 'ввек', 'ввод', 'ввоз', 'вдох', 'веер', 'веко', 'вена', 'вера', 'верх', 'весы', 'весь', 'вето', 'веха', 'вече', 'вещь', 'вжик', 'взад', 'взор', 'виза', 'визг', 'вика', 'вилы', 'вина', 'вино', 'винт', 'вира', 'вист', 'вить', 'вишь', 'вкус', 'влет', 'вмиг', 'вниз', 'внук', 'вода', 'воин', 'волк', 'воля', 'вона', 'вонь', 'ворс', 'воск', 'вошь', 'вояж', 'враг', 'враз', 'врач', 'вред', 'вруб', 'врун', 'вряд', 'всуе', 'всяк', 'втуз', 'втык', 'вход', 'выем', 'вымя', 'выпь', 'высь', 'выть', 'выше', 'вьюк', 'вьюн', 'вязь', 'гага', 'гаер', 'гала', 'гарь', 'гать', 'герб', 'герц', 'гиль', 'гимн', 'гипс', 'гиря', 'глаз', 'глас', 'гнев', 'гнет', 'гной', 'гном', 'гнус', 'голь', 'гонг', 'гонт', 'гора', 'горб', 'горе', 'горн', 'гост', 'готы', 'граб', 'град', 'гран', 'граф', 'грач', 'грех', 'гриб', 'грим', 'гриф', 'гроб', 'грог', 'гром', 'грот', 'грош', 'груз', 'грум', 'губа', 'гули', 'гурт', 'гусь', 'гуща', 'гяур', 'дабы', 'даль', 'дама', 'дань', 'дата', 'дать', 'дача', 'двое', 'двор', 'дева', 'дежа', 'дека', 'дело', 'день', 'депо', 'дерг', 'дерн', 'деру', 'дети', 'деть', 'джаз', 'джем', 'джин', 'джип', 'джут', 'дзот', 'диво', 'диез', 'дина', 'диод', 'диск', 'дитя', 'дичь', 'днем', 'доза', 'дока', 'долг', 'долу', 'доля', 'дома', 'донг', 'доха', 'дочь', 'драп', 'дрок', 'друг', 'дуга', 'дуда', 'дуло', 'дуля', 'дума', 'дура', 'дурь', 'дуть', 'духи', 'душа', 'дуэт', 'дыба', 'дыня', 'дыра', 'дьяк', 'дюйм', 'дюны', 'дядя', 'едок', 'ерик', 'едва', 'енот', 'елка', 'елей', 'есть', 'ежик', 'если', 'жаба', 'жабо', 'жало', 'жаль', 'жанр', 'жара', 'жать', 'жбан', 'жгут', 'жезл', 'желе', 'жена', 'жест', 'жечь', 'жижа', 'жила', 'жито', 'жить', 'жмот', 'жмых', 'жнец', 'жнея', 'жрец', 'жуир', 'жуть', 'жюри', 'загс', 'заем', 'залп', 'заря', 'зато', 'заяц', 'звон', 'звук', 'зело', 'зима', 'злак', 'злой', 'змей', 'змея', 'змий', 'знак', 'зной', 'зола', 'зона', 'зонд', 'зонт', 'зубр', 'зуда', 'зыбь', 'зябь', 'зять', 'ибис', 'игла', 'игра', 'идея', 'идол', 'идти', 'изба', 'измы', 'изюм', 'икра', 'икры', 'ильм', 'имам', 'иней', 'инки', 'иной', 'инок', 'ирис', 'ирод', 'итак', 'итог', 'иуда', 'ишак', 'июль', 'июнь', 'кабы', 'кадр', 'кадь', 'каин', 'кант', 'кара', 'карп', 'карт', 'кафе', 'каша', 'каюк', 'каюр', 'квас', 'квит', 'кедр', 'кеды', 'кейф', 'кекс', 'кепи', 'кета', 'кила', 'кило', 'киль', 'кино', 'киот', 'кипа', 'киса', 'клад', 'клан', 'клей', 'клен', 'клеш', 'клещ', 'клик', 'клин', 'клир', 'клич', 'клок', 'клоп', 'клуб', 'клык', 'клюв', 'ключ', 'кляп', 'кнут', 'ковш', 'ковы', 'кожа', 'коза', 'кокс', 'коли', 'кома', 'коми', 'конь', 'копи', 'кора', 'корж', 'корм', 'корт', 'корь', 'коса', 'кофе', 'кошт', 'краб', 'край', 'кран', 'крап', 'крат', 'крах', 'крем', 'крен', 'креп', 'криз', 'крик', 'кров', 'крой', 'крот', 'круг', 'круп', 'крюк', 'кряж', 'кули', 'куль', 'кума', 'купе', 'курс', 'куст', 'куча', 'куща', 'кьят', 'кюре', 'лава', 'лавр', 'лада', 'лады', 'лама', 'лань', 'лапа', 'ларь', 'ласа', 'ласт', 'латы', 'лафа', 'лгун', 'леди', 'лень', 'леса', 'лесс', 'лета', 'лето', 'лечь', 'лжец', 'либо', 'лига', 'линь', 'липа', 'лира', 'лиса', 'лист', 'литр', 'лить', 'лифт', 'лихо', 'лицо', 'лишь', 'ложа', 'ложе', 'ложь', 'лоза', 'лоно', 'лорд', 'лоск', 'лось', 'лото', 'лужа', 'луза', 'лука', 'луна', 'лунь', 'лупа', 'лыжи', 'лыко', 'любо', 'люди', 'люкс', 'люфа', 'лязг', 'лярд', 'мазь', 'маис', 'майя', 'мало', 'мама', 'март', 'марш', 'матч', 'мать', 'маца', 'маяк', 'мгла', 'медь', 'межа', 'мель', 'мена', 'меню', 'мера', 'метр', 'мзда', 'миля', 'мина', 'мини', 'миро', 'мирт', 'мисс', 'мода', 'мозг', 'моль', 'мопс', 'морг', 'море', 'морж', 'морс', 'мост', 'моча', 'мочь', 'мощи', 'мощь', 'мрак', 'муар', 'муза', 'мука', 'мура', 'мусс', 'муть', 'муха', 'мыза', 'мыло', 'мыть', 'мышь', 'мясо', 'мята', 'мять', 'надо', 'наем', 'нары', 'наст', 'нате', 'натр', 'небо', 'нега', 'негр', 'неон', 'нерв', 'нету', 'неуч', 'нива', 'ниже', 'нимб', 'нить', 'ниша', 'новь', 'нога', 'ноль', 'нора', 'норд', 'нота', 'ночь', 'ноша', 'нрав', 'нуга', 'нудь', 'ныне', 'ныть', 'нюня', 'няня', 'обед', 'обет', 'обод', 'обоз', 'обои', 'обок', 'обух', 'овал', 'овес', 'овин', 'овод', 'овца', 'одер', 'один', 'ожог', 'озон', 'окей', 'окно', 'окоп', 'окот', 'олух', 'омар', 'омет', 'омут', 'оный', 'опак', 'опал', 'опий', 'опус', 'опыт', 'орда', 'орел', 'орех', 'осел', 'осот', 'оспа', 'ость', 'отек', 'отел', 'отец', 'отит', 'охра', 'очаг', 'очес', 'очки', 'очко', 'пава', 'паек', 'пакт', 'папа', 'пара', 'пари', 'парк', 'паук', 'паша', 'паяц', 'пена', 'пенс', 'пень', 'пеня', 'перл', 'перо', 'песо', 'пест', 'петь', 'печь', 'пиво', 'пиит', 'пика', 'пике', 'пики', 'пила', 'пимы', 'пион', 'пирс', 'писк', 'пить', 'пища', 'план', 'плат', 'плац', 'плач', 'плащ', 'плед', 'плен', 'плес', 'плис', 'плов', 'плод', 'плот', 'плуг', 'плут', 'плюс', 'плюш', 'плющ', 'пляж', 'пляс', 'подо', 'поза', 'пока', 'пола', 'поле', 'полк', 'поло', 'пони', 'попа', 'пора', 'порт', 'пост', 'поэт', 'пояс', 'прах', 'пред', 'приз', 'прок', 'пруд', 'прут', 'прыг', 'прыщ', 'псих', 'пузо', 'пуля', 'пума', 'пунк', 'пунш', 'пупс', 'пуск', 'путч', 'путы', 'путь', 'пуща', 'пуще', 'пшик', 'пыль', 'пюре', 'пядь', 'пята', 'пять', 'рагу', 'ради', 'раек', 'рама', 'рана', 'ранг', 'рано', 'рант', 'рань', 'рапс', 'раса', 'рать', 'раут', 'рвач', 'рева', 'ревю', 'резь', 'рейд', 'рейс', 'река', 'реле', 'репа', 'репс', 'речь', 'риал', 'рига', 'риза', 'ринг', 'риск', 'ритм', 'роба', 'роды', 'рожа', 'рожь', 'роза', 'роль', 'ромб', 'роса', 'рост', 'рота', 'роща', 'руда', 'рука', 'руль', 'румб', 'руно', 'руны', 'русо', 'рыба', 'рыло', 'рысь', 'рыть', 'рюха', 'рябь', 'ряса', 'сабо', 'сага', 'саго', 'сажа', 'сало', 'сани', 'сапа', 'сари', 'сбой', 'сбор', 'сбыт', 'свал', 'сват', 'свая', 'свет', 'свищ', 'свод', 'своз', 'свой', 'сгиб', 'сгон', 'себе', 'себя', 'сейм', 'сейф', 'секс', 'село', 'сель', 'семь', 'семя', 'сени', 'сено', 'сень', 'сера', 'серп', 'сеть', 'сеча', 'сечь', 'сидр', 'сила', 'синь', 'сито', 'сказ', 'скат', 'скит', 'скиф', 'скол', 'скот', 'след', 'слет', 'слив', 'слог', 'слой', 'слом', 'слон', 'слух', 'смак', 'смех', 'смог', 'снег', 'сноб', 'сноп', 'снос', 'сова', 'сода', 'соло', 'соль', 'сонм', 'соня', 'сорт', 'соты', 'соус', 'софа', 'соха', 'союз', 'спад', 'спех', 'спец', 'спор', 'срам', 'срез', 'срок', 'сруб', 'срыв', 'стаж', 'стан', 'стая', 'стек', 'стих', 'стог', 'сток', 'стол', 'стон', 'стоп', 'стоя', 'стук', 'стул', 'стыд', 'стык', 'стяг', 'табу', 'тайм', 'таки', 'такт', 'танк', 'тара', 'твид', 'твой', 'тело', 'теля', 'темп', 'темь', 'темя', 'тент', 'тень', 'терн', 'тест', 'тетя', 'течь', 'теша', 'теща', 'тигр', 'тина', 'тире', 'титр', 'тиун', 'тишь', 'ткач', 'тлен', 'тмин', 'тога', 'того', 'тоже', 'толк', 'толь', 'тоня', 'топь', 'торг', 'тори', 'торс', 'торт', 'торф', 'тост', 'тпру', 'трак', 'трал', 'трап', 'трах', 'трек', 'треп', 'трио', 'трое', 'трон', 'троп', 'трос', 'труд', 'труп', 'трус', 'трут', 'трюк', 'трюм', 'туба', 'туда', 'туес', 'тура', 'тута', 'туча', 'туша', 'туше', 'тушь', 'тьма', 'тьфу', 'тюль', 'тюря', 'тяга', 'тятя', 'убой', 'убор', 'увод', 'увоз', 'угар', 'угле', 'угол', 'угон', 'удав', 'удар', 'удел', 'удод', 'удои', 'уезд', 'ужак', 'ужас', 'ужин', 'узда', 'узел', 'узор', 'узус', 'уйма', 'уйти', 'указ', 'укол', 'укор', 'укос', 'укус', 'улан', 'улей', 'улов', 'улус', 'умка', 'уния', 'унты', 'упор', 'уран', 'урна', 'урод', 'урок', 'урон', 'урюк', 'усач', 'уста', 'утес', 'утка', 'уток', 'утро', 'утюг', 'ухаб', 'уход', 'учет', 'ушан', 'ушат', 'ушиб', 'ушко', 'фаза', 'факт', 'фант', 'фара', 'фарс', 'фарт', 'фарш', 'фата', 'ферт', 'фетр', 'фига', 'филе', 'финт', 'фирн', 'фита', 'фифа', 'флаг', 'флер', 'флот', 'флюс', 'фойе', 'фонд', 'форс', 'форт', 'фото', 'фрак', 'фтор', 'фуга', 'фунт', 'фура', 'хаки', 'хала', 'хана', 'хаос', 'хват', 'хвощ', 'хвоя', 'хина', 'хлад', 'хлам', 'хлеб', 'хлев', 'хлоп', 'хлор', 'хлыщ', 'холл', 'холм', 'холя', 'хоры', 'хорь', 'хоть', 'хотя', 'храм', 'храп', 'хрен', 'хрип', 'хром', 'хрущ', 'хрыч', 'хряк', 'хрящ', 'худо', 'хуже', 'хула', 'царь', 'цаца', 'цвет', 'цель', 'цена', 'ценз', 'цент', 'цепь', 'цеце', 'циан', 'цикл', 'цинк', 'цирк', 'чага', 'чадо', 'чара', 'чары', 'часы', 'чаша', 'чаща', 'чего', 'чека', 'челн', 'чело', 'чепе', 'черт', 'чета', 'чехи', 'чирк', 'член', 'чрез', 'чтец', 'чтоб', 'чудо', 'чудь', 'чума', 'чуни', 'чуть', 'чушь', 'шаль', 'шанс', 'шарж', 'шарк', 'шарф', 'швах', 'швец', 'швея', 'шейк', 'шейх', 'шелк', 'шест', 'шило', 'шина', 'ширь', 'шить', 'шифр', 'шкаф', 'шкет', 'шкив', 'шлак', 'шлем', 'шлеп', 'шлея', 'шлюз', 'шлях', 'шмыг', 'шмяк', 'шнур', 'шоры', 'шпик', 'шпиц', 'шпур', 'шрам', 'штаб', 'штат', 'штоф', 'штык', 'шуба', 'шуга', 'шурф', 'щель', 'щелк', 'щека', 'щука', 'щепа', 'эвон', 'эдак', 'экий', 'эльф', 'эмир', 'эмка', 'эпос', 'эсер', 'эссе', 'этаж', 'этак', 'этап', 'этил', 'этот', 'этюд', 'эфес', 'эфир', 'юмор', 'юфть', 'юбка', 'юрта', 'юань', 'юный', 'юнец', 'юнга', 'явка', 'явор', 'ядро', 'язва', 'язык', 'яйцо', 'ялик', 'ямка', 'янки', 'ярем', 'ярка', 'ярмо', 'ярус', 'ярый', 'ясак', 'ясли', 'яхта', 'ячея', 'ячий', 'яшма', 'ящер', 'ящик', 'ящур'],
            wordsfiveletters: [],
            wordssixletters: [],
            wordssevenletters: [],
            guessword: '',
            labelmessage: 'Начнём! Жми Загадай!',
        };
        this.GuessWord = this.GuessWord.bind(this);
        this.InputChange = this.InputChange.bind(this);
        this.SelectChange = this.SelectChange.bind(this);
        this.ResultValue = this.ResultValue.bind(this);
        this.VictoryCondition = this.VictoryCondition.bind(this);
        this.CaseCows = this.CaseCows.bind(this);
        this.CaseBulls = this.CaseBulls.bind(this);
        this.CorrectAnswer = this.CorrectAnswer.bind(this);
    }

    GuessWord() {
        switch (this.state.select) {
            case '3': this.state.guessword = this.state.wordsthreeletters[Math.floor(Math.random() * (396 - 0 + 1)) + 0], console.log(this.state.guessword), this.setState({ labelmessage: "Загадал! Угадывай!" });
                break;
            case '4': this.state.guessword = this.state.wordsfourletters[Math.floor(Math.random() * (1225 - 0 + 1)) + 0], console.log(this.state.guessword), this.setState({ labelmessage: "Загадал! Угадывай!" });
                break;
            case '5': this.setState({ labelmessage: this.state.labelmessage = "5 букв, в разработке!" })
                //this.state.guessword = this.state.wordsfiveletters[Math.floor(Math.random() * (1225 - 0 + 1)) + 0], console.log(this.state.guessword);
                break;
            case '6': this.setState({ labelmessage: this.state.labelmessage = "6 букв, в разработке!" })
                //this.state.guessword = this.state.wordssixletters[Math.floor(Math.random() * (1225 - 0 + 1)) + 0], console.log(this.state.guessword);
                break;
            case '7': this.setState({ labelmessage: this.state.labelmessage = "7 букв, в разработке!" })
                //this.state.guessword = this.state.wordssevenletters[Math.floor(Math.random() * (1225 - 0 + 1)) + 0], console.log(this.state.guessword);
                break;
            default: console.log("Selection doesn't select :D");
                break;
        }
    }

    InputChange(event) {
        this.setState({ input: event.target.value });
    }

    SelectChange(event) {
        this.setState({ select: event.target.value });
    }

    ResultValue() {
        var countcows = 0, countbulls = 0;
        if (this.state.input.length > this.state.guessword.length) return this.setState({ labelmessage: "Не обманывай! Букв должно быть меньше!" });
        else if (this.state.input.length < this.state.guessword.length) return this.setState({ labelmessage: "Не обманывай! Букв должно быть больше!" });
        for (let i = 0; i <= this.state.guessword.length - 1; i++) {
            if (this.state.input[i] === this.state.guessword[i]) {
                countbulls++;
            }
            for (let j = 0; j <= this.state.guessword.length - 1; j++) {
                if (this.state.input[i] === this.state.guessword[j]) {
                    countcows++;
                }
            }
        }
        countcows -= countbulls;
        return this.VictoryCondition(countcows, countbulls);
    }

    VictoryCondition(countcows, countbulls) {
        if (countbulls === this.state.guessword.length) return this.setState({ labelmessage: "Поздравляю! Ты угадал!" });
        else if (countbulls == 0 && countcows == 0) return this.setState({ labelmessage: "В этом слове нет ни коров, ни быков!" });
        else if (countbulls == 0) return this.setState({ labelmessage: "В этом слове нет ни одного быка, но есть " + countcows + this.CaseCows(countcows) });
        else if (countcows == 0) return this.setState({ labelmessage: "В этом слове нет ни одной коровы, но есть " + countbulls + this.CaseBulls(countbulls) });
        else return this.setState({ labelmessage: "В этом слове " + countcows + this.CaseCows(countcows) + " и " + countbulls + this.CaseBulls(countbulls) });
    }

    CaseCows(countcows) {
        switch (countcows) {
            case 1: return ' корова';
            case 2: return ' коровы';
            case 3: return ' коровы';
            case 4: return ' коровы';
            default: console.log("In CaseCows countcows == 0 || > 4");
                break;
        }
    }

    CaseBulls(countbulls) {
        switch (countbulls) {
            case 1: return ' бык';
            case 2: return ' быка';
            case 3: return ' быка';
            default: console.log("In CaseBulls countbulls == 0 || > 3");
                break;
        }
    }

    CorrectAnswer() {
        if (this.state.guessword !== "")
            this.setState({
                labelmessage: "Эх ты, я загадал слово " + '"' + this.state.guessword + '"'
            });
        else this.setState({
            labelmessage: "Сначала нажми Загадай!"
        });
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="anima" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
                <MainDiv>
                    <SetUpGameDiv>
                        <SetUpGameSpan>
                            <SetUpLabel>
                                Сколько букв?{"\t"}
                            </SetUpLabel>
                            <SetUpPSpan> </SetUpPSpan>
                            <SetUpSelect value={this.state.select} onChange={this.SelectChange}>
                                <SetUpOption value='3'>3</SetUpOption>
                                <SetUpOption value='4'>4</SetUpOption>
                                <SetUpOption value='5'>5</SetUpOption>
                                <SetUpOption value='6'>6</SetUpOption>
                                <SetUpOption value='7'>7</SetUpOption>
                            </SetUpSelect>
                            <SetUpButton onClick={this.GuessWord}>
                                Загадай!
                    </SetUpButton>
                        </SetUpGameSpan>
                    </SetUpGameDiv>
                    <MessageDiv>
                        <MessageLabel>
                            <b>{this.state.labelmessage}</b>
                        </MessageLabel>
                        <AnswerSpan>
                            <AnswerButton onClick={this.CorrectAnswer}>
                                Ответ
                        </AnswerButton>
                        </AnswerSpan>
                    </MessageDiv>
                    <AskDiv>
                        <AskSpan>
                            <AskInput
                                placeholder="Введи слово"
                                onChange={this.InputChange}>
                            </AskInput>
                            <AskButton onClick={this.ResultValue}>
                                Угадать!
                        </AskButton>
                        </AskSpan>
                    </AskDiv>
                </MainDiv>
            </ReactCSSTransitionGroup>
        )
    }
}