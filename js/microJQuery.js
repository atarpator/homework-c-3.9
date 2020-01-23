function microJQuery (selector, context = document){
  this.elements = Array.from(context.querySelectorAll(selector));
  return this;
}

microJQuery.prototype.each = function (fn){
  this.elements.forEach((element, index) => fn.call(element, element, index));
  return this;
}

microJQuery.prototype.click = function(fn){
  this.each(element => element.addEventListener('click', fn));
  return this;
}

microJQuery.prototype.html = function(html_text){
  if (html_text === undefined)
  {
    this.each(element => html_text = element.innerHTML);
    return html_text;
  }
  else
  {
    this.each(element => element.innerHTML = html_text);
    return this;
  }
}

microJQuery.prototype.text = function(text){
  if (text === undefined)
  {
    this.each(element => text = element.textContent);
    return text;
  }
  else
  {
    this.each(element => element.textContent = text);
    return this;
  }
}

microJQuery.prototype.placeholder = function(text){
  if (text === undefined)
  {
    this.each(element => text = element.placeholder);
    return text;
  }
  else
  {
    this.each(element => element.placeholder = text);
    return this;
  }
}

microJQuery.prototype.val = function(text){
  if (text === undefined)
  {
    this.each(element => text = element.value);
    return text;
  }
  else
  {
    this.each(element => element.value = text);
    return this;
  }
}

microJQuery.prototype.check = function(status){
  if (status === undefined)
  {
    this.each(element => status = element.checked);
    return status;
  }
  else
  {
    this.each(element => element.checked = status);
    return this;
  }
}

microJQuery.prototype.disable = function(status){
  if (status === undefined)
  {
    this.each(element => status = element.disabled);
    return status;
  }
  else
  {
    this.each(element => element.disabled = status);
    return this;
  }
}

microJQuery.prototype.show = function(){
  this.each(element => element.style.display = '');
  return this;
}

microJQuery.prototype.hide = function(){
  this.each(element => element.style.display = 'none');
  return this;
}

const $ = (e) => new microJQuery(e);