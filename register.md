---
layout: layout
---

# Register for Trivia

Register here and drop off a check with Patrick at St James.

#### Individual Tickets, $30/each

<form name="individual-tickets" netlify method="post" action="/success">
  <label for="number-tickets">Number of tickets
    <input type="number" min="1" step="1" name="number-tickets">
  </label>
  <label for="names">Names
    <input type="text" name="individual-names">
  </label>
  <label for="classes">
    What class(es) are you attached to? <span data-text="We'll try to seat you near people in the same germ pool" class="tooltip">(why?)</span>
    <input type="text" name="classes">
  </label>
  <input type="submit">
</form>

#### A Table for Eight, $240

<form name="table-captain" netlify method="post" action="/success">
  <label for="captain-names">Team Captain Name(s)
    <input type="text">
  </label>
  <input type="submit">
</form>