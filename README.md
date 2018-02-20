# Constructive Discussions
BTW. I have a script in all the headers that integrates with my editor for live previews. Let me know if it breaks anything for y'all.

## TODO:
* P5:
    * Video Content Integration
        * [x] Embedd a YouTube video
* P6 - Thursday:
    * [ ] Two scrollable columns
    * [ ] Corrected header and styles
    * [ ] Comment functionality
        * [x] Comment submission box
            * [ ] Comment box that clears with cancel
        * [ ] Comments that stick
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
* home.html body > div class="mdl-layout"
    * header
    * main
        * div class="mdl-title"
        * div class="home-article"
            * a class="article-title"
            * div class="article-blurb"
            * div class="article-comments"
                * div class="top-comment"
                    * div class="commenter-profile-picture"
                    * div class="commenter-name"
                    * div class="comment-summary"
* articleX.html (not up to date)
    * header
    * article-inner
        * article
            * article-title
            * article-metadata
            * article-body
        * comments
            * comments-header
            * article-comment
                * commenter
                    * commenter-profile-picture 
                    * commenter-name
                * comment-content

## Comments Modes
* Home-page top-comment
* Article-page full-comment
    * Article-page moused-comment
* Article-page expanded-comment
