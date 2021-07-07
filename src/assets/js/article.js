$(function() {
  var pathnames = window.location.pathname.split('/')
  if (!pathnames.includes('blog')) {
    return
  }

  $.getJSON(window.location.origin + '/articles.json', function(json) {
    var data = json.en
    // set title/subtitle/author
    var articleURL = window.location.pathname
    var currentArticle = data.find(function(article) {
      return article.url === articleURL
    })
    $('#article-image').attr('src', currentArticle.backgroundImage)
    $('#article-image-caption').text(currentArticle.imageCaption)
    $('#article-title').text(currentArticle.title)
    $('#article-subtitle').text(currentArticle.brief)
    $('.article-author').html('<strong>' + currentArticle.authorName + '</strong> | ' + currentArticle.authorTitle)
    $('.article-published-date').text('Published on ' + currentArticle.date)


    // set related articles
    var container = $('#related-article-container')
    var articleIndex = 0
    var otherArticles = data.filter(function(article) {
      return article.url !== articleURL
    })
    var relatedArticles = otherArticles.filter(function(article) {
      return article.tag === article.tag
    })
    var targetArray = relatedArticles.length === 0 ? otherArticles : relatedArticles
    while(articleIndex < 3 && articleIndex < targetArray.length) {
      generateAndAppendRelatedArticle(container, targetArray[articleIndex])
      articleIndex += 1
    }
  })
})

// tag: String
// backgroundImage: String
// title: String
// subtitle: String
// brief: String
// authorImage: String
// authorName: String
// authorTitle: String
// date: String 2021-07-01
function generateAndAppendRelatedArticle(parent, data) {
  var cardBox = $('<div>', {class: 'col-12 col-md-6 col-lg-4 d-flex'})
  var card = $('<div>', {class: 'card mb-6 mb-lg-0 shadow-light-lg lift lift-lg'})
  
  var imageImg = $('<img>', {class: 'card-img-top', src: data.backgroundImage})
  var imageDivShape = $('<div>', {class: 'shape shape-bottom shape-fluid-x svg-shim text-white'}).load('/assets/img/shapes/curves/curve-3.svg')
  var imageDiv = $('<div>', {class: 'position-relative'}).append(imageDivShape)
  var image = $('<a>', {class: 'card-img-top', href: data.url}).append([imageImg, imageDiv])

  var bodyHeading = $('<h3>').text(data.title)
  var bodyText = $('<p>', {class: 'mb-0 text-muted '}).text(data.brief)
  var body = $('<a>', {class: 'card-body', href: data.url}).append([bodyHeading, bodyText])

  var metaDivider = $('<hr>', {class: 'card-meta-divider'})
  var metaAvatarImg = $('<img>', {class: 'avatar-img rounded-circle', src: data.authorImage})
  var metaAvatar = $('<div>', {class: 'avatar avatar-sm mr-2'}).append(metaAvatarImg)
  var metaAuthor = $('<h6>', {class: 'text-uppercase text-muted mr-2 mb-0'}).text(data.authorName)
  var metaDate = $('<p>', {class: 'h6 text-uppercase text-muted mb-0 ml-auto'}).text(data.date)
  var meta = $('<a>', {class: 'card-meta mt-auto', href: data.url}).append([metaDivider, metaAvatar, metaAuthor, metaDate])

  card.append([image, body, meta])
  cardBox.append(card)
  parent.append(cardBox)
}