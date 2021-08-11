---
layout: layout
---

# Register for Trivia

Register here and drop off a check with Patrick at St James.

## Individual Tickets, $30 each

<form name="individual-tickets" netlify method="post" action="/success">
  <label for="email">Email
    <input type="email" name="email" multiple>
  </label>
  <label for="number-tickets">Number of tickets
    <input type="number" min="1" step="1" name="number-tickets">
  </label>
  <label for="individual-names">Names
    <input type="text" name="individual-names">
  </label>
  <label for="classes">
    What class(es) are you attached to? <em>(We'll try to seat you near people in the same germ pool)</em>
    <input type="text" name="classes">
  </label>
  <input type="submit">
</form>

## A Table for Eight, $240

<form name="table-captain" netlify method="post" action="/success">
  <label for="email">Email
    <input type="email" name="email" multiple>
  </label>
  <label for="captain-names">Team Captain Name(s)
    <input type="text" name="captain-names">
  </label>
  <input type="submit">
</form>
