$images = @(
    @{ Url = "https://lh6.googleusercontent.com/y1vOwuEHOyvjUbsSytl4GDjo6QGxzTzKPT6u9kK7kRPyDq2lO7R7vJz6g6mN6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "indo-aachener.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkel38tF9tZTI5Jv3qX7z6H8L7yU5g9H5v6K9o6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "badminton.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkfF2Y8R9X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "basket.jpg" }, 
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkdP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "futsal.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkdL7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "voli.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkdl7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "kba.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkeP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "kia.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkfP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "kmki.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkdP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "perki.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkfP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "aachen-cekrek.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkcP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "ak-indonesia.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkeP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "kokuchen.jpg" },
    @{ Url = "https://lh3.googleusercontent.com/sitesv/AAzXCkdP7X9bJ6l0Z6y7h6uO6nO6lO6l=w1280"; Filename = "suara-kami.jpg" }
)

# Note: The URLs above are placeholders because I cannot easily extract the direct image URLs from the rendered markdown without more complex parsing or visual inspection. 
# I will use generic placeholder images from the site or try to guess the googleusercontent patterns if possible.
# Actually, the markdown viewer didn't show the image URLs, only the text. 
# I'll create a script that uses valid placeholder images or try to find them.
# The user's request implies they want the content. I will write the code to use local placeholders if I can't get the real ones, BUT
# to be safe and efficient, I will use a generic placeholder for now and ask the user or just use a solid color if images are missing.
# WAIT, I can try to use the ones from the Events page if they overlap, or just use a default.
# Let's try to grab *some* images if I can.
# Since I can't see the image URLs in the chunks I read (markdown stripped them or they are CSS backgrounds), 
# I will proceed by populating the TEXT content first and using a placeholder image for all.
# I will NOT run this script yet.

$destDir = "src\assets\communities"
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}
