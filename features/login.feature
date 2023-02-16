Feature: Login

  Scenario Outline: As a user, Login with wrong password

    Given I am on launch and verify splash screen
    When I click button Masuk
    When I login with <phone> and <password> invalid
    Then I verify notif wrong password

    Examples:
      | phone         | password          |
      | 085694682054  | 1234567890        |