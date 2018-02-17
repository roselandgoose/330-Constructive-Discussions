# Constructive Discussions

BTW. I have a script in all the headers that integrates with my editor for live previews. Let me know if it breaks anything for y'all.

## Tasks and Features
* Passive user view article and discussion
    * Need also video to meet external content integration

## TODO:
* P5:
    * Initial Comment Implementation
        * [ ] Define buttons
        * [ ] Identify appropriate spacing between comments
        * [ ] Implement mouse-over reactivity
        * [ ] Implement on-click reactivity
    * Video Content Integration
        * [ ] Embedd a YouTube video
* P6:
    * Make page reactive to screen size
        * [x] Article page Desktop/Tablet
        * [x] Home page Desktop/Tablet
        * [ ] Article page mobile
        * [ ] Home page mobile
    * Profile page
    * Commenting and reply functionality
* P7 (?):
    * Account creation page
    * Direct Messaging

## Structure
* home.html
    * header
    * home-inner
        * home-article
            * article-title
            * article-blurb
            * article-comments
                * comments-header
                * top-comment
                    * commenter-profile-picture 
                    * commenter-name
                    * comment-summary
* articleX.html
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
