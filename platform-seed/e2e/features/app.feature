Feature: Viewing the weather

   The user should be able to view the weather

   Scenario: Seeing the header
   Given I navigate to the homepage on "ca.ret"
   When The page loads
   Then I should see the text "Canada / Toronto"