# Cooby Marketing Site 📣

[![Netlify Status](https://api.netlify.com/api/v1/badges/b96fc415-05e1-4a19-bb8f-17435f0dc533/deploy-status)](https://app.netlify.com/sites/cooby/deploys)

### Install 
```
git clone [the-repo-url] // clone this repo 
npm install -g gulp-cli
npm install // install to get node packages 
```

### Development 

First, sync remote update and open your new branch 

```
git checkout master // go to master branch 
git pull origin master  
git checkout -b your-new-branch // create a branch 
```
Then, use Gulp to run locally 

```
gulp
```


### Ship 

Commit and push your change 

```
git add . 
git commit -m "your-message"
git push --set-upstream origin your-branch-name // or just git push if you have done this step 
```

*Open a Pull Request on GitHub*.  _Once PR's opened, Netlify will get you a Netlify preview link, so you can test it before merge to the master branch_

After the preview is verified, merge to PR to `master` branch. Netlify will deploy the site.  
## Dev Process Vit  

[Loom Link](https://www.loom.com/share/e0b7f9ad0e524817be107eafe52c3fa3)
## About ###

### Template | [Landkit theme](https://landkit.goodthemes.co/)

Development documentation is available at `src/docs/index.html` (or `dist/docs/index.html` once you've compiled), or visit http://landkit.goodthemes.co/docs/index.html.

### Deployment | [Netlify](https://netlify.com/) 

We use Netlify to manage your development and accelerate the development process.

### Site Generator | [Gulp](https://gulpjs.com/) 

Gulp is js workflow automation tool that runs the build of our website. 
Checkout `./gulpfule.js` for more settings.

### Review Crawler

We use `./review-crawler.py` to grab cooby extension reviews from Chrome web store. <br>
If you want to get latest reviews, please install [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) and add excutable file into project root path. <br>
Also, you need to install python3 and related modules used in review-crawler file. <br>
Finally, execute `python3 review-crawler.py` in your terminal at project root path, and json file will be outputed in src folder. <br>