# Constructive Discussions - Gpan-Prototype

BTW. I have a script in all the headers that integrates with my editor for live previews. Let me know if it breaks anything for y'all.

TODO:
1. Explicitly identify comment functionality
2. Make margins reactive to screen size

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
