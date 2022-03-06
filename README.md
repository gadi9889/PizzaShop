# PizzaShop
created using NextJs ,mongoDB and tailwind

    pizza shop web app that lets you order as a customer and lets you control your orders as admin
    
    pages:
      home page:
        -order box that lets you insert your phone number and move to the order page
        -display menu that lets press on an item and lets you see what is on the menu and a description of the item
      order page:
        -box that containes all the items in the menu next to each item +/- and a counter
        -button that completes the order and move tto the details page
      details page:
        -box that contains the phone number and order items
        -(-) button lets you cancel the order
      admin login:
        -login page username and password
        -username and password correct lets you move to the control page
      control page:
        -boxes of all the orders phone number and items
        -(-) button that lets you delete the order 
    conditions:
      only when a number isnt in the db meaning you haven't already ordered will let you order otherwise you will see the order details when trying to order 
