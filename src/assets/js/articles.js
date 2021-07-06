$(function() {
  console.log('ready to get json')
  $.getJSON(window.location.origin + '/articles.json', function(json) {
    var container = $('#horizontal-article-container')
    for(var i=0; i<json.length; i++) {
      generateAndAppendArticleCard(container, json[i])
    }
  })
})

// tag: String
// backgroundImage: String
// title: String
// brief: String
// authorImage: String
// authorName: String
// date: String 2021-07-01
function generateAndAppendArticleCard(parent, data) {
  var cardBox = $('<div>', {class: 'card card-row shadow-light-lg mb-6'})
  // cardBox's children
  var card = $('<div>', {class: 'row no-gutters'})
  // card's children 1
  var badgeSpanSpan = $('<span>', {class: 'h6 text-uppercase'}).text(data.tag)
  var badgeSpan = $('<span>', {class: 'badge badge-pill badge-gray-600 badge-float badge-float-outside'}).append(badgeSpanSpan)
  var badge = $('<div>', {class: 'col-12'}).append(badgeSpan)
  // card's children 2
  var imageImg = $('<img>', {class: 'img-fluid d-md-none invisible'})
  // var test = require('assets/img/shapes/curves/curve-4.svg')
  var imageShape = $('<div>', {class: 'shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block'}).load('assets/img/shapes/curves/curve-4.svg')
  var image = $('<a>', {class: 'col-12 col-md-6 bg-cover card-img-left'}).css('background-image', 'url('+ data.backgroundImage +')')
  image.append([imageImg, imageShape])
  // card's children 3
  var contentBodyTitle = $('<h3>').text(data.title)
  var contentBodyBrief = $('<p>', {class: 'mb-0 text-muted'}).text(data.brief)
  var contentBody = $('<a>', {class: 'card-body'}).append([contentBodyTitle, contentBodyBrief])
  var contentMetaDivider = $('<hr>', {class: 'card-meta-divider'})
  var contentMetaAvatarImg = $('<img>', {class: 'avatar-img rounded-circle', src: data.authorImage})
  var contentMetaAvatar = $('<div>', {class: 'avatar avatar-sm mr-2'}).append(contentMetaAvatarImg)
  var contentMetaAuthor = $('<h6>', {class: 'text-uppercase text-muted mr-2 mb-0'}).text(data.authorName)
  var contentMetaDate = $('<p>', {class: 'h6 text-uppercase text-muted mb-0 ml-auto'}).text(data.date)
  var contentMeta = $('<a>', {class: 'card-meta'}).append([contentMetaDivider, contentMetaAvatar, contentMetaAuthor, contentMetaDate])
  var content = $('<div>', {class: 'col-12 col-md-6'}).append([contentBody, contentMeta])

  card.append([badge, image, content])
  cardBox.append(card)
  
  parent.append(cardBox)
}