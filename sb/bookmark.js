javascript:(function(){
  var project='hirocueki-bookmarks';
  var title=window.prompt(`Register to ${project}`,document.title);
  if(!title) return;
  var lines=['','['+window.location.href+' '+document.title+']'];
  var quote=window.getSelection().toString();
  if (quote.trim()) lines=lines.concat(quote.split(/\n/g).map(function(line){return ' > '+line;}));
  lines.push('');
  var body=encodeURIComponent(lines.join('\n'));
  window.open(`https://scrapbox.io/${project}/`+encodeURIComponent(title.trim())+'?body='+body);
})();
