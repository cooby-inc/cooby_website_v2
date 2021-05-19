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
## Video Walkthought 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/c414fd5a0ec0492a9234104df7d9c40d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
## About ###

### Template | [Landkit theme](https://landkit.goodthemes.co/)

Development documentation is available at `src/docs/index.html` (or `dist/docs/index.html` once you've compiled), or visit http://landkit.goodthemes.co/docs/index.html.

### Deployment | [Netlify](https://netlify.com/) 

We use Netlify to manage your development and accelerate the development process.

### Site Generator | [Gulp](https://gulpjs.com/) 

Gulp is js workflow automation tool that runs the build of our website. 
Checkout `./gulpfule.js` for more settings.