# RecipePlaylist
A recipe playlist / genenral app with all this food-related

To set up the recipe playlist development locally do the following. 

From the commandline:

    meteor create tmp
    git clone git@github.com:uvcodebase/RecipePlaylist.git
    cd RecipePlaylist
    cp -r ../tmp/.meteor .
    rmdir ../tmp
    meteor add underscore
    meteor add boostrap
    meteor add iron:router

Then, to run the webapp:
 
    meteor

And open a browser to localhost:3000