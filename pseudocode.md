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
