

export default {
  parser: function(html,startTag,endTag,startTagIndexBuffer,endTagIndexBuffer) {
    var htmlString = JSON.stringify(html);
    var startTagIndex = htmlString.indexOf(startTag)-startTagIndexBuffer;
    var endTagIndex = htmlString.indexOf(endTag)-endTagIndexBuffer;
    htmlString = htmlString.substring(startTagIndex,endTagIndex);

    var escapedJSONString = htmlString.replace(/\\n/g, "")
                                      .replace(/\\'/g, "")
                                      .replace(/\\"/g, '')
                                      .replace(/\\&/g, "")
                                      .replace(/\\r/g, "")
                                      .replace(/\\t/g, "")
                                      .replace(/\\b/g, "")
                                      .replace(/\\f/g, "");

    //custom replacement for seslisozluk
    escapedJSONString = escapedJSONString.replace(new RegExp('href=', 'g'), 'href=/searchresult')
                                         .replace(/-nedir-ne-demek/g, "");

    return escapedJSONString;
  }
}




