// 撠�訜�𧑐����栞�㗇�𤤿�箇𤌍璅蹱���� 靘见�嚗峕�唾���埈�𣂼𧑐�銁�蝱�������橒�靕unction 撣嗅�亙蝱�����嚗���身��𣂼𧑐�箇�𤾸�𧢲����20190812 000000嚗丯eturn targetDate�銁�蝱����� 20190812 120000
function getTargetTime(timeZone = 8) {
    var localDate = new Date();

    // �訜�𧑐�銁�𤌍璅蹱���������� = �訜�𧑐����� - �拙𧑐�㮾撌桃������
    var minusDate = localDate - getDiffTime(localDate, timeZone);

    // ��齿鰵閮剖�𡁏���梶�隞�
    var targetDate = new Date(minusDate);

    return targetDate;
}

/**
 * ��硋�㛖訜�𧑐����(localTimeZone)��𣬚𤌍璅蹱���(timeZone)�㮾撌桃������
 * @returns diffTime �㮾撌格����
 */
function getDiffTime(localDate, timeZone = 8)
{
    // �訜�𧑐����
    var localTimeZone = localDate.getTimezoneOffset() / (-60);

    // �拙𧑐�㮾撌桃������
    var diffTime = (localTimeZone - timeZone) * 60 * 60 * 1000;

    return diffTime;
}

/**
 *
 * @param {string} target �埝彍蝯鞉�毺�����橒�諹�衤誨��'Y/m/d H:i:s'���聢撘�
 *
 * return countTime: 頝嗪𣪧�埝彍����㯄����匧�帋�嚗�鱓雿滨�箸神蝘�
 */
function getCountDown(target) {

    // �訜�𧑐���聢��堒�瘝餅���枏榆嚗䔶誑����条�箏鱓雿溻��
    var localTimeZone = new Date().getTimezoneOffset() / -1;

    // �蝱����聢��堒�瘝餅���枏榆嚗䔶誑����条�箏鱓雿溻��
    var taiwanZone = 8 * 60;

    // �拙𧑐����梶㮾撌桀�𡁜�穃����
    var minusTime = localTimeZone - taiwanZone;

    var nowTime = new Date().getTime();

    // 閮��鍟arget���訜�𧑐�𣶹�銁����梶㮾撌桀�帋�
    var countTime = (Date.parse(target) + minusTime * 60 * 1000) - nowTime;

    return countTime;
}

function isTargetCountryOrNot($country) {
    var targetDate = new Date();
    switch ($country) {
        case 'USA':
            if (getDiffTime(targetDate, -5) === 0 || getDiffTime(targetDate, -6) === 0 || getDiffTime(targetDate, -7) === 0 || getDiffTime(targetDate, -8) === 0) {
                return true;
            }
            break;
        case 'TW':
            if (getDiffTime(targetDate, +8) === 0) {
                return true;
            }
            break;
        default:
            return false;
    }
    return false;
}
