# Geography or Biology

Geography or Biology. A quiz enabling the user to test their knowledge of geography or biology.
The name of the quiz will be changed in the future as new categories are added.


![Am_I_Responsive](/assets/images/screenshots/am_i_responsive.png)

## Table of Contents

### [User_Experience_(UX)](#user-experienceux)
* [User_expectations](#user-expectations)
### [Quize Structure](#quize-structure-1)

### [Features_coming_soon](#features-coming-soon)
### [Technologies_used_in_the_project](#technologies-used-in-the-project)
### [Programs_&_Libraries_Used_in_project](#programs--libraries-used-in-project)
### [Testing](#testing-1)
* [Validation_reports](#validation-reports)
* [Manual_Testing](#manual-testing)
* [Lighthouse_Testing](#lighthouse-testing)
### [Deployment](#deployment-1)
### [Bugs](#bugs-1)
### [Credits](#credits-1)
 * [Media](#media)
 * [Other](#other)
---


## User Experience(UX)
   <ul>
   <li>A small game created to test knowledge in various fields</li>
   <li>Due to limited time, it currently only has two categories: geography and biology</li>
   <li>The user can enter his name and then select the category in which he wants to test himself.</li>
   </ul>

 ### User expectations:

 * First-time users:
    * For every user, the most important thing is a simple and easy menu, as well as ease and smoothness of moving to subsequent sections of the quiz.

 * When visiting the website again:
    * The main goal should be to improve your result.

 * Frequent user goals
    * The main goal for each user should be to obtain the maximum number of points (correct answers).
    * Competition to be the best.
  - - -


## Quize Structure:

### Start Menu:
![Start_Quize](/assets/images/screenshots/start.png) 
  * Start Quize Menu Contains:
    * An inscription encouraging you to take part in the quiz.
    * Information that the quiz contains several categories.
    * Start button allowing you to proceed to the next part of the quiz.
    * A place where the user can write down his name (optional, you can also play anonymously).

### Quize categories Choice:
![Game_Choice](/assets/images/screenshots/quize_categories.png)

   * The quiz contains several categories (two for now). In this part, the user can choose which category wants to test knowledge.

### Questions:
  ![Questions_section](/assets/images/screenshots/questions_display.png)

   * The questions are displayed in different orders.
   * Each question contains 4 answers, only one of which is correct.
   * To move on to the next question, the user must select one of the answers and click the button "Submit Answer".

### Score display :
   ![Display_results](/assets/images/screenshots/score_display.png)
   
   * The section displayed after all questions have been answered.
   * The section includes:
     * A headline whose text changes depending on the number of points scored.
     * Username, if the user does not provide a name, the default value is 'Player'.
     * Number of incorrect answers.
     * Number of correct answers.
     * Restart game button allows you to restart the quiz and return to the "Start" section.


## Features coming soon:

* Minimum 6 categories.
* 100 questions in each category, 25 randomly selected for the quiz.
* Section displaying the top 10
---

## Java script structure :

 * EventListeners :
    * After DOM is loaded each button is getting Event Listener.
     * The conditional if statement checks which button was selected by the user by checking its id.
     * If the "Start" button has been pressed :
       * Section with id 'welcome' was hidden by adding a class 'invisible'.
       * Section with id 'choice_game' is displayed by deleting the class 'invisible'.
       * The username is taken and assigned to the variable.
       * The results variable is declared and gets its value from the function 'setQuestionsInRandomPositions()'.
     * Two separate buttons for geography and biology (in the future there will be one working for different categories).
      * If the "Geography" is presset :
       * 'select_game' set to invisible.
       * 'question_area' set to invisible.
       * button to submit bio quiz question set 'visible'.

 * Functions :

    * function startQuize(quizType) 
      * A function that takes the value of the "quizeType" variable and, 
      * depending on the selected category, calls the appropriate function that displays questions.
      * By adding an appropriate class, it hides unnecessary elements and displays elements with questions.
   * function setQuestionsInRandomPositions()
      * Sets question numbers in random order and returns an array with these numbers.
---
## Technologies used in the project:

 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
 * [CSS3](https://en.wikipedia.org/wiki/CSS)
 * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
 ---
## Programs & Libraries Used in project:

 * [Gitpod](https://www.gitpod.io/)
    * To write the code.
 * [Github](https://github.com/)
    * Deployment of the website and storing the files online.
 * [Google Fonts](https://fonts.google.com/)
    * Webside fonts, download links.
* [Am I Responsive](https://ui.dev/amiresponsive)
    * Screenshots for README.md file.
---
## Testing:
 * In order to check whether the code does not contain errors, they were used
   TW3C Markup Validator and W3C CSS Validator services.
   To check the correctness of the JS code, the jshint tool was used.


 * [jshint](https://jshint.com/)
 * [W3C Markup Validtor](https://validator.w3.org/)
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

### Validation reports:
   
   * HTML warning in W3C Markup Validator:
  ![warning_html](/assets/images/screenshots/html_warning.png)
  ![emplty_h2](/assets/images/screenshots/empty_he_element.png)

  * After solving the problem:
  ![html_no_warnings](/assets/images/screenshots/html_no_warnings.png)

  * W3C CSS Validator shows one error and one warning.
  ![css_error](/assets/images/screenshots/css_error.png)

  * After solving the problem:
  ![css_ok](/assets/images/screenshots/css_ok.png)

  * jshint found 37 warning in js code.
  ![jshint_test](/assets/images/screenshots/jshint_37warnings.png)

  * After solving the problem with most of the warnings, one remained
  ![jshint_warnings](/assets/images/screenshots/jshint_warnings.png)




### Manual Testing:

<table>
  <tr>
    <th>Button</th>
    <th>Expected Action</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>Start</td>
    <td>Pass to next section</td>
    <td>After pressing 'Start' button game passing to section Choice category.</td>
  </tr>
  <tr>
    <td>Geography</td>
    <td>Start Geography quize, display questions.</td>
    <td>Geography questions displayed.</td>
  </tr>
  <tr>
    <td>Biology</td>
    <td>Start Biology quize, display questions.</td>
    <td>Biology questions displayed.</td>
  </tr>
  <tr>
    <td>Submit Answer</td>
    <td>After user set answer , passing to next question.</td>
    <td>Next question displayed.</td>
  </tr>
  <tr>
    <td>Restar Game</td>
    <td>Restart Quize , display fierst page and reset quiz.</td>
    <td>Game restart.</td>
  </tr>
</table>


* The website was tested on Google Chrome, Microsoft Edge.
* The website was tested  on a desctop 27" screen, laptop lenovo LOQ, and Samsung Galaxy S22 mobile phone.
* Dev Tools was used to test how the site looks on various screen sizes.

### Lighthouse testing:
   ![lighthouse](/assets/images/screenshots/lighthouse_desktop.png)
  
#### Mobile analysis
   ![lighthouse](/assets/images/screenshots/start_Lighthouse.png)
  

## Deployment:

### The page was deployed on GitHub.com:
   #### Simple steps:

   * Log in to [Github](https://github.com/).
   * In the upper left corner of the screen, click the menu next to your account name.
   * In the expanded menu in the repositories tab, select the appropriate repositories (Magda's cakes).
   * On the opened page, find "settings", then "pages".
   * Under "Source", click the dropdown menu "None" and select "Main".
   * Now you can clik in to "Save" button.
   * Page should automatically refresh.
   * Done, a link to the page should appear after some time.

   * Live "Gography or biology" webside you can find by clicking this link:
     https://krzysztofkadela.github.io/Geography-or-Biology/


## Bugs:
  * .
    * .
    
## Unfixed Bugs:
   *js csript  
   * 

## Credits:
    
 ### Media: 
   * Photos used in the project come from Pexels.com free photos https://www.pexels.com/.
   
### Other:
   * 
   * 

   ## Acknowledgements:

 * Many thanks to my mentor Mitko Bachvarov for his helpful feedback.
  