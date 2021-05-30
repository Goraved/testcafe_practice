# TestCafe practice
Just a [TestCafe](https://testcafe.io) tool practice

## How to run
1. Install all dependencies:
`install_testcafe.sh`
2. Run tests `npm test`

## Notes:
So it's kinda simple to use, but some stuff wasn't clear for me. Firstly there is no expected conditions for the waits. 
You need to use only the `expected()` function which search for the element. Second one is the select method. 
You can't select some option from the regular dropdown. You need to declare select, then you need to declare options from this select, 
then you need to click on the dropdown and only after that you need to click the option.

Documentation is kinda poor for the interaction with the page. One simple example per article.

I like supporting multiple reports from the box (but didn't find working solution for the Allure report). And taking screenshots on fail.

So I would prefer to use Playwright, or even Cypress, because they look faster and have better documentation.

### [Video](https://drive.google.com/file/d/1SgnmIUl5yKxP5UyuYEyUJdXI8sJ-eywG/view?usp=sharing)

## Docker
Execute tests - `docker-compose run tests`

Rebuild container - `docker-compose build --no-cache setup`
