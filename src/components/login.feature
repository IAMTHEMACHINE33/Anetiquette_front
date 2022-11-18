Feature: Login

  I want to login on Anetiquette

  Background:
    Given I go to '/login'
    And the field 'email' is empty
    And the field 'password' is empty

  Scenario: Error on empty fields
    When I click on 'enter'
    Then field 'email' should be with error
    And field 'password' should be with error

  Scenario: Wrong email
    When I type 'john.test@keepfy.com' in 'email'
    And I type '123456' in 'password'
    And I click on 'enter'
    Then I should see 'E-mail or password is incorrect'

  Scenario: Login successfully
    Given I have users:
      | name           | email             | password |
      | Vitor Batista  | vitor@keepfy.com  | abcdef   |
    When I type 'vitor@keepfy.com' in 'email'
    And I type 'abcdef' in 'password'
    And I click on 'enter'
    Then I shouldn't see 'Access your account'