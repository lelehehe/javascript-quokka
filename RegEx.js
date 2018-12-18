var pageUrl = 'https://www.abc.com/customer/1234/view/all_orderiems/2018-09-17/2018-12-17';
regex1 = /\/[\d-]+/; 
var result = pageUrl.replace(/\/[\d-]+/, '');
result;
    result2 = result.replace(regex1, '');
result2;
result3 = urlTrimOff(pageUrl);
result3;

function urlTrimOff(url) {
    const regex = /\/[\d-]+/; 
    var result = url.replace(regex, '');
    return result === url ? result : urlTrimOff(result);
}