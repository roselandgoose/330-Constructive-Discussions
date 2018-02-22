# Constructive Discussions
BTW. I have a script in all the headers that integrates with my editor for live previews. Let me know if it breaks anything for y'all.

## TODO:
* P5:
    * Video Content Integration
        * [x] Embedd a YouTube video
* P6 - Thursday:
    * [x] Two scrollable columns
    * [ ] Corrected header and styles
    * [ ] Comment functionality
        * [x] Comment submission box
        * [x] Comment box that clears with cancel
        * [x] Comments that stick
        * [ ] Replies to comments
* P6 - Sunday:
    * [x] Define buttons
    * [ ] Full feedback counts buttons
    * [ ] Identify appropriate spacing between comments
    * [ ] Implement mouse-over reactivity
    * [ ] Implement on-click reactivity
* P7:
    * [ ] Make page reactive to screen size
        * [x] Article page Desktop/Tablet
        * [x] Home page Desktop/Tablet
        * [ ] Article page mobile
        * [ ] Home page mobile
    * [ ] Profile page
    * [ ] Account creation page
    * [ ] Direct Messaging

## Structure
* index.html body > div class="mdl-layout"
    * header
    * main
        * div class="mdl-title"
        * div class="home-article"
            * a class="article-title"
            * div class="article-blurb"
            * div class="home-comments"
                * div class="top-comment"
                    * div class="commenter-profile-picture"
                    * div class="commenter-name"
                    * div class="comment-summary"
* article.html
    * header
    * main
        * div class="article"
            * a class="article-title"
            * ul class="article-metadata"
            * div class="article-image"
            * div class="article-body"
        * div class="comments"
            * div class="comments-header"
            * div class="comment"
                * div class="commenter-profile-picture"
                * div class="commenter-name"
                * div class="comment-content"

## Comments Modes (not up-to-date)
* Home-page top-comment
* Article-page full-comment
    * Article-page moused-comment
* Article-page expanded-comment
