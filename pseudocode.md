## ADD SEARCH FUNCTIONALITY

- utilize navigation bar search form
- abstract database operation from routes
- new route & new template vs. editing existing route and template

### edit existing route and template:
- Need class method for customer search
    - Customer.search('Nathan')
    - SELECT query based on name... search first names and last names
        - first_name = $1 or last_name = $1
- Edit existing route to include search data and pass into template
    - render html with search results


## BEST CUSTOMERS

- customers class method
- top 10 customers ordered by most reservations


1. class method

2. make a route / view function

3. add that data to the template